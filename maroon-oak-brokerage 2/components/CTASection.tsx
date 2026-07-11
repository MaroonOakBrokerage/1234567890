import { siteConfig } from "@/lib/data";
import { OakRingAccent, GoldDivider } from "./SectionDivider";
import Button from "./Button";

export default function CTASection({
  title = "Protect What Matters Most.",
  description = "Let's start the conversation. Tell us what you need covered, and a licensed advisor will follow up within one business day.",
  primaryLabel = "Get a Quote",
  primaryHref = "/contact#quote",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="bg-stone py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_20%_20%,rgba(200,160,74,0.14),transparent_55%),linear-gradient(160deg,#3A0A18,#0E0C0B)] px-8 py-16 text-center text-stone md:px-24">
          <OakRingAccent className="pointer-events-none absolute -bottom-20 -left-20 z-0 h-[280px] w-[280px] text-gold/10" />
          <div className="relative z-10">
            <GoldDivider className="mb-6" />
            <h2 className="mb-4 font-serif text-3xl font-semibold md:text-[32px]">{title}</h2>
            <p className="mx-auto mb-8 max-w-[520px] font-sans text-stone/82">{description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={primaryHref}>{primaryLabel}</Button>
              <Button href={`tel:${siteConfig.phoneTel}`} variant="outline-dark">
                Call {siteConfig.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
