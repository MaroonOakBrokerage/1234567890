// Custom, on-brand illustrated skyline + Pennybacker (360) Bridge silhouette.
// Used as a subtle watermark behind dark hero sections instead of stock photography,
// so the mark stays consistent, license-free, and reliably renders offline.

export default function SkylineMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1400 400"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="#C8A04A">
        <rect x="40" y="220" width="50" height="180" />
        <rect x="100" y="180" width="40" height="220" />
        <rect x="150" y="240" width="55" height="160" />
        <rect x="900" y="200" width="45" height="200" />
        <rect x="955" y="150" width="38" height="250" />
        <rect x="1000" y="230" width="50" height="170" />
        <rect x="1060" y="190" width="42" height="210" />
        <rect x="1250" y="210" width="48" height="190" />
        <rect x="1310" y="170" width="36" height="230" />
      </g>
      <path
        d="M340 400 C 340 260, 420 150, 560 150 C 700 150, 780 260, 780 400"
        fill="none"
        stroke="#C8A04A"
        strokeWidth={6}
      />
      <path
        d="M400 400 L 400 320 M480 400 L480 240 M560 400 L560 210 M640 400 L640 240 M720 400 L720 320"
        stroke="#C8A04A"
        strokeWidth={4}
      />
      <line x1="300" y1="400" x2="820" y2="400" stroke="#C8A04A" strokeWidth={6} />
    </svg>
  );
}
