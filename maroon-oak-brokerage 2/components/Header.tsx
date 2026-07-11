"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/data";
import { PhoneIcon } from "./Icons";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[200] border-b transition-all duration-300 ${
        scrolled
          ? "border-charcoal/10 bg-stone/90 shadow-[0_8px_30px_rgba(14,12,11,0.08)] backdrop-blur-lg"
          : "border-transparent bg-stone/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-[1280px] items-center justify-between gap-8 px-8 lg:px-12">
        {/* Logo — enlarged, generous breathing room */}
        <Link href="/" className="flex flex-shrink-0 items-center">
          <Image
            src="/logo-horizontal.png"
            alt="Maroon Oak Brokerage"
            width={360}
            height={81}
            className="h-[76px] w-auto md:h-20"
            priority
          />
        </Link>

        {/* Primary nav — generous spacing */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-11">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 ${
                      active
                        ? "text-maroon after:w-full"
                        : "text-charcoal after:w-0 hover:text-maroon hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Phone + CTA */}
        <div className="hidden lg:flex flex-shrink-0 items-center gap-8">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="group flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-charcoal transition-colors duration-200 hover:text-maroon"
          >
            <PhoneIcon className="h-[18px] w-[18px] flex-shrink-0 stroke-maroon transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
            <span className="tracking-wide">(737) 477-8228</span>
          </a>
          <Link
            href="/contact#quote"
            className="rounded-full bg-gradient-to-br from-gold-light to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-maroon-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(200,160,74,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Get a Quote
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
