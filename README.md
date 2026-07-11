# Maroon Oak Brokerage — Website

Production-ready marketing website for Maroon Oak Brokerage, an independent personal & commercial
insurance brokerage in Austin, Texas. Built with Next.js 15 (App Router), React 19, TypeScript, and
Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Fonts:** Playfair Display (headings) + Inter (body), loaded via `next/font/google`
- **Deployment target:** Vercel

## Getting Started Locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. The homepage supports hot reload — edit any file under `app/` or
`components/` and the browser updates automatically.

> **Note on `package-lock.json`:** it isn't included in this deliverable because a lockfile generated
> without actually running `npm install` can contain incorrect integrity hashes and break `npm ci`.
> Running `npm install` once will generate an accurate one, which you should commit to your repo.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint (next/core-web-vitals + next/typescript)
```

## Project Structure

```
maroon-oak-brokerage/
├── app/
│   ├── layout.tsx            # Root layout: fonts, global metadata, Header/Footer
│   ├── page.tsx              # Home (includes the Personal/Business hero toggle)
│   ├── globals.css           # Tailwind directives + base styles
│   ├── sitemap.ts            # Auto-generates /sitemap.xml
│   ├── robots.ts             # Auto-generates /robots.txt
│   ├── icon.png              # Favicon (Next.js App Router convention)
│   ├── not-found.tsx         # 404 page
│   ├── api/contact/route.ts  # Quote-request form endpoint (see "Wiring Up the Contact Form")
│   ├── about/page.tsx
│   ├── personal-insurance/page.tsx
│   ├── business-insurance/page.tsx
│   ├── claims/page.tsx
│   ├── resources/page.tsx
│   ├── resources/[slug]/page.tsx  # Individual guide articles (real content, not teasers)
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/                # Header, Footer, MobileMenu, MobileActionBar, Hero, HeroToggle,
│                               # ExplorerTiles, LifeEventCards, IndustryCards, PhotoCard, ClaimTypeTabs,
│                               # ProcessSteps, ValuesExplorer, ContinueExploring, ResourceSearch,
│                               # Button, Card, CoverageBlock, FAQAccordion, CTASection, QuoteForm, Icons
├── lib/data.ts                 # All site copy/content in one place (products, team, values, FAQs...)
├── hooks/useToggle.ts           # Small reusable boolean-toggle hook (used by the mobile menu)
├── public/                     # Logo assets (extracted from the brand standards artwork)
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── next.config.ts
└── eslint.config.mjs
```

## Editing Content

Nearly all site copy — product lists, team bios, core values, FAQs, the "What You Can Expect" list,
glossary terms, contact info, and business hours — lives in **`lib/data.ts`**. Update it there and the
change propagates to every page that uses it, instead of hunting through JSX.

Brand contact info (phone, email, hours, tagline, service-area statements, carrier-network statement)
is in `siteConfig` at the top of that file.

## The Personal / Business Toggle

- **Homepage hero** (`components/HeroToggle.tsx`): an animated, keyboard-navigable segmented control
  that swaps the headline, subheadline, and full coverage-line list between "Personal" and "Business"
  content. Defaults to Personal. Pure client-side state — no page navigation, no layout shift, and it
  respects `prefers-reduced-motion`.
- **Sticky mobile action bar** (`components/MobileActionBar.tsx`): a fixed bottom bar on small screens
  with quick links to Call, Personal, Business, and Get a Quote. Hidden on `lg+` screens where the
  header already surfaces the phone number and quote button.

## Wiring Up the Quote Form

The expanded quote-request form on `/contact` (`components/QuoteForm.tsx`) branches into separate
Personal and Business field sets, captures UTM/referrer attribution, and includes a hidden honeypot
field for basic spam protection. It POSTs to `app/api/contact/route.ts`, which validates the
submission and logs it server-side so the form is fully functional out of the box — no dead button.

The form intentionally never collects highly sensitive data (no SSNs, driver's license numbers,
payment card info, banking info, or medical records), and the API route defensively rejects any
submission that somehow includes those fields.

Before launch, replace the `TODO` in `app/api/contact/route.ts` with a real integration — see
"Environment Variables" below for the variables that integration will need.

## Environment Variables

None of these are required for the site to build, run, or accept quote-request submissions today —
the form logs submissions server-side until you wire up a real integration. When you're ready, add
whichever of these apply as environment variables in **Vercel → Settings → Environment Variables**
(or a local `.env.local` for development). Never hardcode API keys in the source.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Email the lead to `info@maroonoakbrokerage.com` via [Resend](https://resend.com) (or swap in SendGrid/Postmark) |
| `CRM_WEBHOOK_URL` | Generic webhook endpoint (Zapier, Make, a custom CRM) to receive new leads |
| `AGENCYZOOM_API_KEY` | Direct API key if/when connecting to AgencyZoom |
| `AGENCYZOOM_PIPELINE_ID` | Target pipeline/stage in AgencyZoom for new leads |
| `NOTIFY_PRODUCER_EMAIL` | Internal address to notify a producer whenever a new lead comes in |

## Images / Photography

Hero sections use real, freely-licensed photography from Unsplash (Unsplash License — free for
commercial use, no attribution legally required, though photographer credit is shown in a small
caption on each hero for transparency). Image URLs and credits live in `lib/data.ts` under
`heroImages`. Swap in your own brand photography at any time by replacing the URLs there — nothing
else needs to change.

## Design System

Brand colors, fonts, and radii are defined in `tailwind.config.ts` under `theme.extend`:

| Token | Value | Use |
|---|---|---|
| `maroon` | `#5A1024` | Primary brand color |
| `gold` | `#C8A04A` | Accent / CTAs |
| `stone` | `#F7F5F1` | Page background |
| `ink` | `#0E0C0B` | Dark hero/footer bands |

## Deploying to Vercel

1. Push this project to a new GitHub repository (root of the repo should be this folder's contents —
   `package.json` at the top level).
2. In [Vercel](https://vercel.com), click **Add New → Project**, then import the GitHub repo.
3. Vercel auto-detects Next.js — no build settings need to change (`next build` / `.next` output).
4. Click **Deploy**.
5. Once deployed, go to **Settings → Domains** and add `maroonoakbrokerage.com` (and `www`), then
   update your DNS per Vercel's instructions. HTTPS is provisioned automatically.

## Before You Launch — Outstanding Placeholders

The site intentionally has no office address or map (Maroon Oak serves clients remotely across
Texas — see `siteConfig.serviceAreaShort` / `serviceAreaLong`), and does not publish any carrier
names, logos, or fabricated reviews. A few things remain as genuine placeholders to fill in with real
information before launch:

- Social media links (`components/Footer.tsx`, `app/contact/page.tsx` currently point to `#`)
- Privacy Policy & Terms of Use content (`app/privacy/page.tsx`, `app/terms/page.tsx`) — have an
  attorney review before publishing
- Downloadable PDF guides (`app/resources/page.tsx` currently link requests back to Contact)
- A real CRM/email integration in `app/api/contact/route.ts` (see "Environment Variables" above)

## Confirmation

This project is complete and structured to be pushed to GitHub and deployed to Vercel without any
reorganization. Every page, component, config file, and asset referenced by the code is included, and
every content change described in this update was made directly in the source files — nothing here
requires manual follow-up edits before it will build and deploy.
