import type { ReactNode } from "react";

export function Card({
  icon,
  title,
  children,
  className = "",
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-charcoal/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-md ${className}`}
    >
      <span className="absolute left-0 top-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-300 group-hover:scale-x-100" />
      {icon && (
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-maroon/[0.06] transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      )}
      <h3 className="mb-3 font-serif text-xl font-semibold text-maroon">{title}</h3>
      <div className="font-sans text-[14.5px] text-[#55504a]">{children}</div>
    </div>
  );
}

export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <strong className="block font-serif text-[36px] font-semibold text-gold">{value}</strong>
      <span className="font-sans text-[12.5px] text-stone/70">{label}</span>
    </div>
  );
}
