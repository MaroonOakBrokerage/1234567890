"use client";

import { useState } from "react";
import Link from "next/link";
import { CarIcon, HomeIcon, BuildingIcon } from "./Icons";

type ClaimType = "auto" | "home" | "business";

const tabs: { id: ClaimType; label: string; Icon: typeof CarIcon; description: string; reviewHref: string }[] = [
  {
    id: "auto",
    label: "Auto Claim",
    Icon: CarIcon,
    description:
      "Move to a safe location if possible, document the scene, and contact your auto carrier's claims line using the number on your ID card. Exchange information with any other drivers involved.",
    reviewHref: "/personal-insurance#auto",
  },
  {
    id: "home",
    label: "Home Claim",
    Icon: HomeIcon,
    description:
      "Prevent further damage where it's safe to do so (like a temporary tarp or shutting off water), photograph the damage before cleanup, and contact your homeowners or renters carrier directly.",
    reviewHref: "/personal-insurance#home",
  },
  {
    id: "business",
    label: "Business Claim",
    Icon: BuildingIcon,
    description:
      "Secure the property, document the loss with photos and a written account, and contact the carrier for the specific policy involved — property, liability, auto, or workers' comp.",
    reviewHref: "/business-insurance",
  },
];

export default function ClaimTypeTabs() {
  const [active, setActive] = useState<ClaimType>("auto");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Choose a claim type">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 rounded-full border px-6 py-3 text-[13px] font-bold uppercase tracking-wide transition-colors duration-200 ${
              active === tab.id ? "border-maroon bg-maroon text-stone" : "border-maroon/20 text-maroon hover:bg-maroon/5"
            }`}
          >
            <tab.Icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>
      <div
        key={active}
        role="tabpanel"
        className="motion-safe:animate-fadeUp mx-auto max-w-[720px] rounded-lg border border-charcoal/10 bg-white p-8 text-center"
      >
        <current.Icon className="mx-auto mb-4 h-8 w-8 stroke-maroon" />
        <p className="mb-5 font-sans text-[15px] text-[#55504a]">{current.description}</p>
        <Link
          href={current.reviewHref}
          className="text-xs font-bold uppercase tracking-wide text-gold-dim hover:text-maroon"
        >
          Review This Coverage &rarr;
        </Link>
      </div>
    </div>
  );
}
