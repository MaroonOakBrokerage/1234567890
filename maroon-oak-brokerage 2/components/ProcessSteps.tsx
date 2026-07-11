"use client";

import { useEffect, useRef, useState } from "react";

type Step = { title: string; description: string };

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  const [visible, setVisible] = useState<boolean[]>(() => steps.map(() => false));
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Respect prefers-reduced-motion: reveal everything immediately, no observer needed.
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(steps.map(() => true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      {steps.map((step, i) => (
        <div
          key={step.title}
          ref={(el) => {
            refs.current[i] = el;
          }}
          data-idx={i}
          style={{ transitionDelay: `${i * 110}ms` }}
          className={`rounded-lg border border-charcoal/10 bg-white p-7 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
            visible[i] ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="mb-4 font-serif text-3xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</div>
          <h3 className="mb-2.5 font-serif text-lg font-semibold text-maroon">{step.title}</h3>
          <p className="font-sans text-[13.5px] text-[#55504a]">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
