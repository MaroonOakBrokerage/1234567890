import Link from "next/link";
import type { ReactNode } from "react";

// The single source of truth for every button/link-styled-as-button on the
// site. Previously each page hand-copied these class strings, which let
// small inconsistencies (a missing transition duration, a slightly
// different hover shadow) creep in one file at a time. Routing everything
// through this component guarantees every "Get a Quote" and "Call us" style
// action feels identical, at the same speed, everywhere.

type Variant = "primary" | "maroon" | "outline" | "outline-dark";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded font-bold uppercase tracking-wide transition-all duration-300 ease-out whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-gold-light to-gold text-maroon-deep hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(200,160,74,0.35)]",
  maroon: "bg-maroon text-stone hover:bg-maroon-light hover:-translate-y-0.5",
  outline:
    "border border-maroon/30 text-maroon hover:border-maroon hover:bg-maroon/5 bg-transparent",
  "outline-dark":
    "border border-stone/35 text-stone hover:border-gold hover:bg-gold/10 bg-transparent",
};

const sizes: Record<Size, string> = {
  md: "px-8 py-4 text-[13.5px]",
  sm: "px-5 py-3 text-xs",
};

// Schemes/anchors that must render as a plain <a> rather than next/link's
// client-side router (tel:, mailto:, in-page #hash-only anchors on the same
// page, or any absolute external URL).
function isNonRouterHref(href: string) {
  return /^(tel:|mailto:|https?:\/\/)/.test(href);
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type,
  disabled,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (isNonRouterHref(href)) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
