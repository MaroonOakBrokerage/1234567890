"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/data";
import { PhoneIcon } from "./Icons";
import Button from "./Button";
import { useToggle } from "@/hooks/useToggle";

export default function MobileMenu() {
  const [open, toggleOpen, setOpen] = useToggle(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={toggleOpen}
        className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-maroon/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <span className="relative block h-[14px] w-5" aria-hidden="true">
          <span
            className={`absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-maroon transition-all duration-300 ease-out motion-reduce:transition-none ${
              open ? "top-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[6px] h-[1.5px] w-5 rounded-full bg-maroon transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-[1.5px] w-5 rounded-full bg-maroon transition-all duration-300 ease-out motion-reduce:transition-none ${
              open ? "top-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 top-24 z-50 overflow-y-auto bg-stone motion-safe:animate-fadeUp">
          <nav className="flex flex-col px-8 py-6">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 40}ms` }}
                className={`motion-safe:animate-fadeUp border-b border-maroon/10 py-4 text-base font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  pathname === item.href ? "text-maroon" : "text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="mt-6 flex items-center gap-2 font-bold text-maroon"
            >
              <PhoneIcon className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </a>
            <Button href="/contact#quote" onClick={() => setOpen(false)} className="mt-6 w-full">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
