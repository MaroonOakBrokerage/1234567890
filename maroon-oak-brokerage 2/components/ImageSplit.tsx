import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { HeroImage } from "@/lib/data";
import Reveal from "./Reveal";

// Alternating left-image/right-content (or reversed) editorial band, used
// throughout Personal, Business, About, Claims, and Contact to break up long
// text sections with real photography and give every page the same visual
// rhythm as the homepage.
export default function ImageSplit({
  image,
  eyebrow,
  title,
  reverse = false,
  ctaLabel,
  ctaHref,
  dark = false,
  children,
}: {
  image: HeroImage;
  eyebrow: string;
  title: string;
  reverse?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={dark ? "bg-ink py-24" : "bg-white py-24"}>
      <div className="mx-auto max-w-[1200px] px-8">
        <div
          className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 ${
            reverse ? "" : ""
          }`}
        >
          <Reveal direction={reverse ? "right" : "left"} className={reverse ? "md:order-2" : ""}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              <span className="absolute bottom-2.5 right-3 text-[9px] text-white/50">Photo: {image.credit}</span>
            </div>
          </Reveal>
          <Reveal direction={reverse ? "left" : "right"} delay={100} className={reverse ? "md:order-1" : ""}>
            <p className={`mb-4 text-xs font-bold uppercase tracking-[3px] ${dark ? "text-gold" : "text-gold-dim"}`}>
              {eyebrow}
            </p>
            <h2 className={`mb-5 font-serif text-3xl font-semibold md:text-[36px] ${dark ? "text-stone" : "text-maroon"}`}>
              {title}
            </h2>
            <div className={`font-sans text-[15.5px] leading-relaxed ${dark ? "text-stone/80" : "text-[#55504a]"}`}>
              {children}
            </div>
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className={`mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
                  dark ? "text-gold hover:text-gold-light" : "text-gold-dim hover:text-maroon"
                }`}
              >
                {ctaLabel}
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
