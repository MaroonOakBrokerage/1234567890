"use client";

import { useState, type ReactNode } from "react";

export type FAQ = { q: string; a: ReactNode };

// A JS-driven accordion (rather than native <details>/<summary>) so the
// open/close motion can actually be animated — native details snaps open
// instantly with no way to transition, which read as abrupt. Each item
// still opens/closes independently, matching the previous behavior.
export default function FAQAccordion({ items, firstOpen = true }: { items: FAQ[]; firstOpen?: boolean }) {
  const [open, setOpen] = useState<Record<number, boolean>>(firstOpen ? { 0: true } : {});

  return (
    <div className="mx-auto max-w-[780px]">
      {items.map((item, i) => {
        const isOpen = !!open[i];
        return (
          <div key={item.q} className="border-b border-charcoal/10">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen((prev) => ({ ...prev, [i]: !prev[i] }))}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left font-serif text-[15.5px] font-semibold text-maroon"
            >
              {item.q}
              <span
                aria-hidden="true"
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center text-lg font-normal text-gold transition-transform duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-[680px] pb-6 font-sans text-[14.5px] text-[#55504a]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
