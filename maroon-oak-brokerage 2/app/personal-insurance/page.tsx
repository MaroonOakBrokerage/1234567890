import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CoverageBlock from "@/components/CoverageBlock";
import CTASection from "@/components/CTASection";
import ContinueExploring from "@/components/ContinueExploring";
import LifeEventCards from "@/components/LifeEventCards";
import ImageSplit from "@/components/ImageSplit";
import { personalProducts, heroImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Personal Insurance",
  description:
    "Personal insurance in Texas from Maroon Oak Brokerage: auto, home, renters, condo, motorcycle, boat, RV, umbrella, life, and valuable items coverage from an independent Texas insurance advisor.",
  alternates: { canonical: "/personal-insurance" },
};

export default function PersonalInsurancePage() {
  return (
    <>
      <PageHero
        image="skylineDay"
        breadcrumb="Personal Insurance"
        title="Personal Insurance That Protects What Matters Most."
        subtitle="From your first car to your family home, we match coverage to what you actually own and how you actually live — not a generic bundle."
      />

      <ImageSplit
        image={heroImages.modernKitchen}
        eyebrow="The Protection Journey"
        title="Family. Home. Vehicles. Future."
      >
        <p>
          Real protection follows a natural order: the people you love, the place you live, the vehicles that get
          you there, and the long-term security that outlasts all three. We build your coverage in that same order
          &mdash; starting with what matters most to you, not a generic checklist.
        </p>
      </ImageSplit>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Where Are You in Life?</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Coverage Built Around Your Moment
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Choose what&rsquo;s happening in your life right now, and we&rsquo;ll point you to the coverage that
            matters most.
          </p>
          <LifeEventCards />
        </div>
      </section>

      <section className="bg-stone py-14">
        <div className="mx-auto max-w-[1200px] px-8 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Jump to a Coverage Line</p>
          <div className="flex flex-wrap justify-center gap-2">
            {personalProducts.map((p) => (
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

      {personalProducts.map((product, i) => (
        <CoverageBlock key={product.id} product={product} reverse={i % 2 === 1} />
      ))}

      <ImageSplit
        image={heroImages.familyBeachSunset}
        eyebrow="Built to Last"
        title="Coverage That Grows With Your Family"
        reverse
      >
        <p>
          Your life doesn&rsquo;t stay the same year to year, and your coverage shouldn&rsquo;t either. We review
          your policies at every renewal &mdash; not just when something changes &mdash; so your protection keeps
          pace with your family, your home, and your future.
        </p>
      </ImageSplit>

      <CTASection
        title="Not Sure Which Coverage You Need?"
        description="That's exactly what “Understanding First” means — tell us about your situation and we'll help you figure it out together."
      />

      <ContinueExploring
        items={[
          { label: "Business Insurance", description: "See coverage built for how your business operates.", href: "/business-insurance" },
          { label: "About Us", description: "Learn the philosophy behind how we serve clients.", href: "/about" },
          { label: "Claims", description: "Understand how claims work and what to do first.", href: "/claims" },
        ]}
      />
    </>
  );
}
