import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CoverageBlock from "@/components/CoverageBlock";
import CTASection from "@/components/CTASection";
import ContinueExploring from "@/components/ContinueExploring";
import IndustryCards from "@/components/IndustryCards";
import ImageSplit from "@/components/ImageSplit";
import { businessProducts, heroImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Business Insurance",
  description:
    "Commercial insurance for Texas businesses from Maroon Oak Brokerage: general liability, workers' comp, commercial auto, BOP, cyber liability, D&O, EPLI, bonds, and contractor insurance in Texas.",
  alternates: { canonical: "/business-insurance" },
};

export default function BusinessInsurancePage() {
  return (
    <>
      <PageHero
        image="dataCenterAerial"
        breadcrumb="Business Insurance"
        title="Business Insurance Built Around How You Actually Operate."
        subtitle="From a first-year LLC to an established commercial operation, we match coverage to your real risk — not a one-size-fits-all package."
      />

      <ImageSplit
        image={heroImages.retailShopkeeper}
        eyebrow="Meet Businesses Like Yours"
        title="We Understand How You Actually Operate"
      >
        <p>
          From a solo contractor running a truck and a crew to a multi-location retail operation, we start every
          conversation by understanding your real risk &mdash; the jobs you take, the people you employ, and the
          property you depend on &mdash; before we ever talk policy.
        </p>
      </ImageSplit>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Find Your Industry</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Built Around How Your Trade Actually Works
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Choose your industry to jump to the coverage lines that matter most for it.
          </p>
          <IndustryCards />
        </div>
      </section>

      <section className="bg-stone py-14">
        <div className="mx-auto max-w-[1200px] px-8 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Jump to a Coverage Line</p>
          <div className="flex flex-wrap justify-center gap-2">
            {businessProducts.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded border border-maroon/30 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-maroon transition-colors duration-200 hover:border-maroon hover:bg-maroon/5"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {businessProducts.map((product, i) => (
        <CoverageBlock key={product.id} product={product} reverse={i % 2 === 1} />
      ))}

      <ImageSplit
        image={heroImages.warehouseBoxes}
        eyebrow="How We Help"
        title="From First Policy to Full Program"
        reverse
      >
        <p>
          As your business grows &mdash; more employees, more vehicles, more property &mdash; your coverage needs to
          grow with it. We revisit your program at every renewal so it always matches how you actually operate
          today, not how you operated when you first signed on.
        </p>
      </ImageSplit>

      <CTASection
        title="Not Sure What Your Business Needs?"
        description="We'll walk through your actual operations with you before recommending a single policy — that's Understanding First, applied to business coverage."
      />

      <ContinueExploring
        items={[
          { label: "Personal Insurance", description: "See coverage for your auto, home, family, and more.", href: "/personal-insurance" },
          { label: "About Us", description: "Learn the philosophy behind how we serve clients.", href: "/about" },
          { label: "Claims", description: "Understand how claims work and what to do first.", href: "/claims" },
        ]}
      />
    </>
  );
}
