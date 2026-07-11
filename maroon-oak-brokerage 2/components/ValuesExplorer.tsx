"use client";

import { useState } from "react";

type Value = { title: string; description: string };

export default function ValuesExplorer({ values }: { values: Value[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col gap-2" role="tablist" aria-orientation="vertical">
        {values.map((v, i) => (
          <button
            key={v.title}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`flex items-center gap-4 rounded-lg border px-5 py-4 text-left transition-colors duration-200 ${
              active === i
                ? "border-gold/40 bg-maroon text-stone"
                : "border-charcoal/10 bg-white text-charcoal hover:border-maroon/30 hover:bg-maroon/[0.03]"
            }`}
          >
            <span
              className={`font-serif text-lg font-semibold ${active === i ? "text-gold" : "text-gold-dim"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`font-serif text-[16px] font-semibold ${active === i ? "text-stone" : "text-maroon"}`}>
              {v.title}
            </span>
          </button>
        ))}
      </div>

      <div
        key={active}
        role="tabpanel"
        className="motion-safe:animate-fadeUp flex min-h-[220px] flex-col justify-center rounded-lg border border-gold/20 bg-gradient-to-br from-maroon-deep to-maroon p-10 text-stone"
      >
        <span className="mb-4 font-serif text-4xl font-semibold text-gold">
          {String(active + 1).padStart(2, "0")}
        </span>
        <h3 className="mb-3 font-serif text-2xl font-semibold">{values[active].title}</h3>
        <p className="font-sans text-[15px] leading-relaxed text-stone/85">{values[active].description}</p>
      </div>
    </div>
  );
}
