import Image from "next/image";
import Link from "next/link";
import { heroImages } from "@/lib/data";
import { OakRingAccent } from "./SectionDivider";

type HeroImageKey = keyof typeof heroImages;

export default function PageHero({
  breadcrumb,
  title,
  subtitle,
  image = "bridge",
}: {
  breadcrumb: string;
  title: string;
  subtitle: string;
  image?: HeroImageKey;
}) {
  const photo = heroImages[image];

  return (
    <section className="relative overflow-hidden py-[100px] text-stone lg:py-[132px]">
      <Image
        src={photo.url}
        alt={photo.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark editorial overlay for legibility + brand mood */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(14,12,11,0.94)_0%,rgba(58,10,24,0.88)_38%,rgba(14,12,11,0.55)_75%,rgba(14,12,11,0.35)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

      {/* Subtle Maroon Oak visual language: an abstract oak-ring motif, faint
          enough to read as texture rather than decoration. */}
      <OakRingAccent className="pointer-events-none absolute -right-16 -top-16 z-[1] h-[320px] w-[320px] text-gold/25 md:-right-10 md:-top-10 md:h-[420px] md:w-[420px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-8 lg:px-12">
        <p className="mb-4 text-xs text-stone/55">
          <Link href="/" className="hover:text-gold">Home</Link> / {breadcrumb}
        </p>
        <h1 className="mb-4 max-w-[740px] font-serif text-[32px] font-semibold leading-tight md:text-[46px]">
          {title}
        </h1>
        <div className="mb-6 h-0.5 w-16 bg-gold" />
        <p className="max-w-[600px] font-sans text-[16.5px] text-stone/85">{subtitle}</p>
      </div>

      <span className="absolute bottom-3 right-4 z-10 text-[10px] text-stone/30">
        Photo: {photo.credit}
      </span>
    </section>
  );
}
