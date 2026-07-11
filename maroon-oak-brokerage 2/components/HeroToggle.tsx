"use client";

import { useRef, type KeyboardEvent } from "react";
import Button from "./Button";
import {
  HomeIcon,
  BuildingIcon,
  CarIcon,
  FamilyIcon,
  UmbrellaIcon,
  ShieldIcon,
  WorkersIcon,
  CyberIcon,
} from "./Icons";

export type Side = "personal" | "business";

const content: Record<
  Side,
  {
    headline: string;
    sub: string;
    primaryHref: string;
    primaryLabel: string;
    services: string[];
  }
> = {
  personal: {
    headline: "Protect What Matters Most.",
    sub: "Personal insurance built around your family, your home, your vehicles, and your future.",
    primaryHref: "/personal-insurance",
    primaryLabel: "Explore Personal Insurance",
    services: [
      "Auto",
      "Home",
      "Renters",
      "Condo",
      "Umbrella",
      "Life",
      "Motorcycle",
      "Boat",
      "RV",
      "Valuable Items",
    ],
  },
  business: {
    headline: "Coverage Built for the Way You Do Business.",
    sub: "From contractors and trades to professional offices and growing companies, we help Texas businesses understand risk and build the right insurance program.",
    primaryHref: "/business-insurance",
    primaryLabel: "Explore Business Insurance",
    services: [
      "General Liability",
      "Workers' Comp",
      "Commercial Auto",
      "BOP",
      "Commercial Property",
      "Inland Marine",
      "Professional Liability",
      "Cyber Liability",
      "Commercial Umbrella",
      "Builders Risk",
      "Bonds",
    ],
  },
};

const serviceIcon: Record<string, typeof HomeIcon> = {
  Auto: CarIcon,
  Home: HomeIcon,
  Renters: HomeIcon,
  Condo: HomeIcon,
  Umbrella: UmbrellaIcon,
  Life: FamilyIcon,
  Motorcycle: CarIcon,
  Boat: CarIcon,
  RV: CarIcon,
  "Valuable Items": ShieldIcon,
  "General Liability": ShieldIcon,
  "Workers' Comp": WorkersIcon,
  "Commercial Auto": CarIcon,
  BOP: BuildingIcon,
  "Commercial Property": BuildingIcon,
  "Inland Marine": ShieldIcon,
  "Professional Liability": ShieldIcon,
  "Cyber Liability": CyberIcon,
  "Commercial Umbrella": UmbrellaIcon,
  "Builders Risk": BuildingIcon,
  Bonds: ShieldIcon,
};

export default function HeroToggle({
  side,
  onSideChange,
}: {
  side: Side;
  onSideChange: (side: Side) => void;
}) {
  const data = content[side];
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const next: Side = side === "personal" ? "business" : "personal";
      onSideChange(next);
      const idx = next === "personal" ? 0 : 1;
      tabRefs.current[idx]?.focus();
    }
  }

  return (
    <div className="max-w-[820px]">
      {/* Segmented control */}
      <div
        className="relative mb-9 inline-flex rounded-full border border-stone/20 bg-stone/10 p-[5px]"
        role="tablist"
        aria-label="Personal or Business insurance"
        onKeyDown={handleKeyDown}
      >
        <span
          aria-hidden="true"
          className={`absolute top-[5px] left-[5px] h-[calc(100%-10px)] w-[calc(50%-5px)] rounded-full bg-gradient-to-br from-gold-light to-gold shadow-[0_6px_18px_rgba(200,160,74,0.3)] transition-transform duration-300 ease-[cubic-bezier(.65,0,.35,1)] motion-reduce:transition-none ${
            side === "business" ? "translate-x-full" : "translate-x-0"
          }`}
        />
        <button
          ref={(el) => {
            tabRefs.current[0] = el;
          }}
          type="button"
          role="tab"
          id="hero-tab-personal"
          aria-controls="hero-panel"
          onClick={() => onSideChange("personal")}
          aria-selected={side === "personal"}
          tabIndex={side === "personal" ? 0 : -1}
          className={`relative z-10 flex items-center gap-2 rounded-full px-7 py-3 text-[13px] font-bold uppercase tracking-wide transition-colors duration-300 ${
            side === "personal" ? "text-maroon-deep" : "text-stone/65"
          }`}
        >
          <HomeIcon className="h-[15px] w-[15px]" />
          Personal
        </button>
        <button
          ref={(el) => {
            tabRefs.current[1] = el;
          }}
          type="button"
          role="tab"
          id="hero-tab-business"
          aria-controls="hero-panel"
          onClick={() => onSideChange("business")}
          aria-selected={side === "business"}
          tabIndex={side === "business" ? 0 : -1}
          className={`relative z-10 flex items-center gap-2 rounded-full px-7 py-3 text-[13px] font-bold uppercase tracking-wide transition-colors duration-300 ${
            side === "business" ? "text-maroon-deep" : "text-stone/65"
          }`}
        >
          <BuildingIcon className="h-[15px] w-[15px]" />
          Business
        </button>
      </div>

      {/* Swapping content panel — fixed min-height prevents layout shift */}
      <div
        id="hero-panel"
        role="tabpanel"
        aria-labelledby={side === "personal" ? "hero-tab-personal" : "hero-tab-business"}
        key={side}
        className="motion-safe:animate-fadeUp min-h-[420px]"
      >
        <h1 className="mb-5 font-serif text-4xl font-semibold leading-tight text-stone md:text-[58px] md:leading-[1.14]">
          {data.headline}
        </h1>
        <div className="mb-6 h-0.5 w-16 bg-gold" />
        <p className="mb-10 max-w-[560px] font-sans text-lg text-stone/80">{data.sub}</p>

        <div className="mb-11 flex flex-wrap gap-4">
          <Button href="/contact#quote">Get a Quote</Button>
          <Button href={data.primaryHref} variant="outline-dark">
            {data.primaryLabel}
          </Button>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {data.services.map((label, i) => {
            const Icon = serviceIcon[label] ?? ShieldIcon;
            return (
              <div
                key={label}
                style={{ animationDelay: `${i * 45}ms` }}
                className="motion-safe:animate-fadeUp flex items-center gap-2 text-[13px] font-medium text-stone/85"
              >
                <Icon className="h-[18px] w-[18px] stroke-gold" />
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
