"use client";

import { useState } from "react";
import Image from "next/image";
import HeroToggle, { type Side } from "./HeroToggle";
import { heroImages } from "@/lib/data";

// Owns the Personal/Business state so the background photography can
// crossfade in sync with the segmented control and copy in HeroToggle.
export default function Hero() {
  const [side, setSide] = useState<Side>("personal");

  return (
    <section className="relative overflow-hidden py-24 md:py-[140px]">
      <div className="absolute inset-0">
        <Image
          src={heroImages.homeExterior.url}
          alt={heroImages.homeExterior.alt}
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none ${
            side === "personal" ? "opacity-100" : "opacity-0"
          }`}
        />
        <Image
          src={heroImages.businessOwnerBoutique.url}
          alt={heroImages.businessOwnerBoutique.alt}
          fill
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none ${
            side === "business" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,12,11,0.95)_0%,rgba(58,10,24,0.90)_32%,rgba(14,12,11,0.62)_68%,rgba(14,12,11,0.42)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-black/10" />
      <span className="absolute bottom-3 right-4 z-10 text-[10px] text-stone/30">
        Photo: {side === "personal" ? heroImages.homeExterior.credit : heroImages.businessOwnerBoutique.credit}
      </span>
      <div className="relative z-10 mx-auto max-w-[1200px] px-8">
        <HeroToggle side={side} onSideChange={setSide} />
        <div className="mt-11 flex flex-wrap gap-9">
          <div className="text-[12.5px] text-stone/65">
            <strong className="block font-serif text-2xl font-semibold text-gold">Independent</strong>
            Access to multiple carriers
          </div>
          <div className="text-[12.5px] text-stone/65">
            <strong className="block font-serif text-2xl font-semibold text-gold">Texas</strong>
            Serving clients statewide, remotely
          </div>
          <div className="text-[12.5px] text-stone/65">
            <strong className="block font-serif text-2xl font-semibold text-gold">1 Business Day</strong>
            Our response-time standard
          </div>
        </div>
      </div>
    </section>
  );
}
