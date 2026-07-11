import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ResourceSearch from "@/components/ResourceSearch";
import ExplorerTiles from "@/components/ExplorerTiles";
import ImageSplit from "@/components/ImageSplit";
import { DocumentIcon } from "@/components/Icons";
import { OakRingAccent } from "@/components/SectionDivider";
import { resourceArticles, downloads, glossary, lifeEvents, explorerTiles, heroImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The Maroon Oak Brokerage Insurance Learning Center: plain-language guides, downloadable checklists, an insurance glossary, and answers to common questions for Texas individuals and businesses.",
  alternates: { canonical: "/resources" },
};

const resourceFaqs = [
  {
    q: "How often should I review my coverage?",
    a: "At least once a year, ideally at renewal — and any time your life changes significantly (a new home, a new vehicle, a growing business, or a major purchase).",
  },
  {
    q: "Why did my premium go up even though I didn't file a claim?",
    a: "Rates can shift due to broader market trends, rebuild/replacement cost inflation, or changes in your coverage — not just your own claims history. We'll walk through your specific renewal with you.",
  },
  {
    q: "What's the difference between an independent agent and a captive agent?",
    a: "A captive agent sells one company's products exclusively. An independent agent, like Maroon Oak, shops multiple carriers to find the best fit — our loyalty is to you, not to one carrier.",
  },
  {
    q: "Can I bundle my home and auto policies?",
    a: "Often, yes — and it can lower your overall premium. We'll show you the real numbers rather than assuming a bundle is automatically the better deal.",
  },
];

const featured = resourceArticles[0];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        image="cityDusk"
        breadcrumb="Resources"
        title="The Insurance Learning Center."
        subtitle="Guides, checklists, and plain-language explanations, published before we ever talk price. Understanding First starts here."
      />

      {/* Featured guide */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Featured Guide</p>
          <Link
            href={`/resources/${featured.slug}`}
            className="group mx-auto flex max-w-[900px] flex-col overflow-hidden rounded-lg border border-charcoal/10 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg md:flex-row"
          >
            <div className="relative flex h-[180px] items-center justify-center overflow-hidden bg-gradient-to-br from-maroon-deep to-maroon md:h-auto md:w-[280px] md:flex-shrink-0">
              <OakRingAccent className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 text-gold/10" />
              <DocumentIcon className="relative h-12 w-12 stroke-gold/80 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="p-8">
              <div className="mb-2.5 flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-wide text-gold-dim">
                <span>{featured.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{featured.readingTime}</span>
              </div>
              <h2 className="mb-2.5 font-serif text-2xl font-semibold text-maroon">{featured.title}</h2>
              <p className="mb-4 font-sans text-[14.5px] text-[#55504a]">{featured.description}</p>
              <span className="text-xs font-bold uppercase tracking-wide text-gold-dim group-hover:text-maroon">
                Read the Guide &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Search + browse all guides */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">All Guides</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Find the Right Guide
          </h2>
          <p className="mx-auto mb-12 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Search by keyword, or browse by Personal Lines, Business Lines, or Life &amp; Umbrella.
          </p>
          <ResourceSearch articles={resourceArticles} />
        </div>
      </section>

      {/* Browse by life event */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Browse by Life Event</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            What&rsquo;s Happening in Your Life Right Now?
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Jump straight to the guide or coverage that matches where you are.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {lifeEvents.map((event) => {
              const matchingArticle = resourceArticles.find((a) => a.lifeEvent === event.label);
              const href = matchingArticle ? `/resources/${matchingArticle.slug}` : event.href;
              return (
                <Link
                  key={event.label}
                  href={href}
                  className="rounded-full border border-maroon/30 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-maroon transition-colors duration-200 hover:border-maroon hover:bg-maroon/5"
                >
                  {event.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Education Comes First */}
      <ImageSplit
        image={heroImages.laptopNotes}
        eyebrow="Why We Publish"
        title="Education Before a Single Quote"
        reverse
      >
        <p className="mb-4">
          Most insurance conversations start with a price. Ours start here &mdash; with plain-language answers to
          the questions people usually only ask after something goes wrong.
        </p>
        <p>
          If you read every guide on this page and never call us, that&rsquo;s a fine outcome too. Understanding
          First means the education comes first, whether or not it leads to a conversation with us.
        </p>
      </ImageSplit>

      {/* Coverage finder */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Coverage Finder</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            What Are You Looking to Protect?
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Jump directly to the coverage that matches what you&rsquo;re protecting.
          </p>
          <ExplorerTiles tiles={explorerTiles} />
        </div>
      </section>

      {/* Downloadable resources */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Downloadable Resources</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Guides &amp; Checklists to Keep
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Save these for your next renewal, or share them with someone shopping for coverage for the first time.
          </p>
          <div className="mx-auto max-w-[720px] space-y-3">
            {downloads.map((d) => (
              <div key={d.name} className="flex items-center justify-between gap-4 rounded-lg border border-charcoal/10 bg-white p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-maroon/[0.06] text-[11px] font-bold text-maroon">
                    PDF
                  </div>
                  <div>
                    <strong className="block font-sans text-[14.5px] text-charcoal">{d.name}</strong>
                    <span className="font-sans text-xs text-[#8a8178]">{d.meta}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="rounded border border-maroon/30 px-4 py-2 text-xs font-bold uppercase tracking-wide text-maroon hover:border-maroon hover:bg-maroon/5"
                >
                  Request
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Insurance Glossary</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Plain-Language Definitions
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            The terms that show up on nearly every policy, explained without the jargon.
          </p>
          <div className="mx-auto max-w-[820px] columns-1 gap-10 md:columns-2">
            {glossary.map((g) => (
              <div key={g.term} className="mb-1 break-inside-avoid border-b border-charcoal/10 py-4">
                <h4 className="mb-1.5 font-serif text-[15px] font-semibold text-maroon">{g.term}</h4>
                <p className="font-sans text-[13.5px] text-[#55504a]">{g.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Common Questions</p>
          <h2 className="mx-auto mb-14 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={resourceFaqs} />
        </div>
      </section>

      <CTASection
        title="Have a Question We Haven't Answered Yet?"
        description="Ask us directly — if it's a question you have, it's probably one worth adding to this library."
        primaryLabel="Ask a Question"
        primaryHref="/contact"
      />
    </>
  );
}
