import Image from "next/image";
import Link from "next/link";
import type { HeroImage } from "@/lib/data";
import type { ComponentType } from "react";

type IconProps = { className?: string };

export default function PhotoCard({
  label,
  description,
  href,
  image,
  Icon,
}: {
  label: string;
  description: string;
  href: string;
  image?: HeroImage;
  Icon?: ComponentType<IconProps>;
}) {
  return (
    <Link
      href={href}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-lg border border-charcoal/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {image ? (
        <>
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-deep to-maroon transition-transform duration-700 ease-out group-hover:scale-105">
          {Icon && (
            <Icon className="absolute right-5 top-5 h-9 w-9 stroke-gold/40" />
          )}
        </div>
      )}
      <div className="relative z-10 p-5">
        <h3 className="mb-1.5 font-serif text-[16px] font-semibold text-stone">{label}</h3>
        <p className="mb-2 font-sans text-[12px] leading-snug text-stone/80">{description}</p>
        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Explore Coverage &rarr;
        </span>
      </div>
    </Link>
  );
}
