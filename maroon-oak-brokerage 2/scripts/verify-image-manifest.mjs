#!/usr/bin/env node
// -----------------------------------------------------------------------------
// Verifies that lib/imageManifest.ts is the single source of truth for every
// image on the site, and that no photo is ever reused:
//
//   1. Every manifest entry's underlying photo (Unsplash photo id, or local
//      file path once swapped in) is unique — no two keys point to the same
//      image.
//   2. Every manifest entry is referenced from app/ or components/ exactly
//      once (via `heroImages.<key>`, `imageKey: "<key>"`, or `image="<key>"`).
//   3. Every reference in app/ or components/ resolves to a key that actually
//      exists in the manifest (no typos / orphaned references).
//
// Run with: npm run verify:images
// Exits non-zero (and prints the offending keys) if anything fails.
// -----------------------------------------------------------------------------

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(import.meta.url), "..", "..");

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (entry === "node_modules" || entry === ".next" || entry === ".git") continue;
      walk(full, out);
    } else if ([".ts", ".tsx"].includes(extname(full))) {
      out.push(full);
    }
  }
  return out;
}

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exitCode = 1;
}

// ---- Load the manifest -------------------------------------------------------
const manifestPath = join(ROOT, "lib", "imageManifest.ts");
const manifestSrc = readFileSync(manifestPath, "utf8");

const manifestBlockMatch = manifestSrc.match(/export const imageManifest = \{([\s\S]*?)\n\} as const;/);
if (!manifestBlockMatch) {
  fail("Could not locate `export const imageManifest = { ... } as const;` in lib/imageManifest.ts");
  process.exit(1);
}
const manifestBlock = manifestBlockMatch[1];

const entryRe = /\n {2}([a-zA-Z0-9_]+): \{\s*\n {4}url: "([^"]+)"/g;
const manifestEntries = [];
let m;
while ((m = entryRe.exec(manifestBlock))) {
  manifestEntries.push({ key: m[1], url: m[2] });
}

console.log(`Loaded ${manifestEntries.length} entries from lib/imageManifest.ts`);

// ---- Check 1: no two entries share an underlying photo -----------------------
const byPhoto = new Map();
for (const { key, url } of manifestEntries) {
  const idMatch = url.match(/photo-([0-9]+-[a-z0-9]+)/);
  const photoId = idMatch ? idMatch[1] : url; // falls back to full path for local files
  if (!byPhoto.has(photoId)) byPhoto.set(photoId, []);
  byPhoto.get(photoId).push(key);
}
for (const [photoId, keys] of byPhoto) {
  if (keys.length > 1) {
    fail(`Same underlying photo (${photoId}) used by multiple manifest keys: ${keys.join(", ")}`);
  }
}

// ---- Scan app/, components/, and lib/ for every reference ---------------------
// (lib/data.ts is where the literal `imageKey: "..."` / card-array string values
// live; app/ + components/ is where `heroImages.<key>` direct-access and JSX
// `image="<key>"` PageHero props live.)
const files = [
  ...walk(join(ROOT, "app")),
  ...walk(join(ROOT, "components")),
  ...walk(join(ROOT, "lib")).filter((f) => !f.endsWith("imageManifest.ts")),
];

const refPattern = /heroImages\.([a-zA-Z0-9_]+)|imageKey:\s*"([a-zA-Z0-9_]+)"|imageKey\?\s*:|image="([a-zA-Z0-9_]+)"/g;
// refCounts maps key -> Set of files it appears in. A single JSX block that
// destructures `.url`/`.alt`/`.credit` off the same `heroImages.X` reference
// counts as ONE usage location (the file), not three — what matters is that
// the same photo isn't rendered in two different places, not how many times
// its properties are dereferenced in one place.
const refCounts = new Map();

for (const file of files) {
  const src = readFileSync(file, "utf8");
  let match;
  const seenInThisFile = new Set();
  while ((match = refPattern.exec(src))) {
    const key = match[1] || match[2] || match[3];
    if (!key) continue;
    if (!refCounts.has(key)) refCounts.set(key, new Set());
    // Only count each (file, key) pair once, no matter how many times the
    // key's properties are accessed within that same file.
    if (!seenInThisFile.has(key)) {
      refCounts.get(key).add(file.replace(ROOT + "/", ""));
      seenInThisFile.add(key);
    }
  }
}

const manifestKeys = new Set(manifestEntries.map((e) => e.key));

// ---- Check 2: every reference resolves to a real manifest key ----------------
for (const [key, locationSet] of refCounts) {
  if (!manifestKeys.has(key)) {
    fail(`Reference to "${key}" in ${[...locationSet].join(", ")} does not exist in imageManifest.ts (typo?)`);
  }
}

// ---- Check 3: every manifest entry is used exactly once ----------------------
for (const key of manifestKeys) {
  const locations = [...(refCounts.get(key) || [])];
  if (locations.length === 0) {
    fail(`Manifest entry "${key}" is defined but never used anywhere in app/, components/, or lib/`);
  } else if (locations.length > 1) {
    fail(`Manifest entry "${key}" is used in ${locations.length} places (must be exactly 1): ${locations.join(", ")}`);
  }
}

if (process.exitCode === 1) {
  console.error("\nImage manifest verification FAILED — see errors above.");
  process.exit(1);
}

console.log(`✓ All ${manifestEntries.length} images are unique (no shared photos).`);
console.log(`✓ All ${manifestEntries.length} images are referenced exactly once across ${files.length} scanned files.`);
console.log("✓ No orphaned or undefined image references found.");
console.log("\nImage manifest verification PASSED.");
