// Subtle, reusable "Maroon Oak visual language" accents — an abstract oak-ring
// motif and a thin gold organic divider. Purely decorative (aria-hidden), kept
// deliberately quiet in opacity/scale so they read as premium texture rather
// than as ornamentation. Used inside PageHero and CTASection so the accent
// cascades across nearly every page without bespoke per-page work.

export function OakRingAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      {/* Concentric, slightly irregular rings evoking an oak's cut cross-section / tree rings. */}
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.75" opacity="0.9" />
      <circle cx="100" cy="100" r="52" stroke="currentColor" strokeWidth="0.6" opacity="0.75" />
      <circle cx="102" cy="99" r="74" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />
      <circle cx="99" cy="101" r="96" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
    </svg>
  );
}

// A thin horizontal gold divider with a small centered node — a quieter
// alternative to a plain <hr>, used as a "premium section separator."
export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-gold/40" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
      <span className="h-px w-10 bg-gold/40" />
    </div>
  );
}

// A gentle contour-line motif (nodding to Texas Hill Country topography)
// for use as low-opacity background texture behind photography.
export function ContourAccent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" aria-hidden="true" className={className} fill="none">
      <path d="M-10 150 C 60 120, 90 170, 160 140 S 260 90, 330 120 S 420 150, 460 120" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M-10 120 C 60 90, 90 140, 160 110 S 260 60, 330 90 S 420 120, 460 90" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path d="M-10 90 C 60 60, 90 110, 160 80 S 260 30, 330 60 S 420 90, 460 60" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}
