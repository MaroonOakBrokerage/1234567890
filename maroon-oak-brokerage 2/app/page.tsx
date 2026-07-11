import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import { Card, StatBlock } from "@/components/Card";
import ExplorerTiles from "@/components/ExplorerTiles";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ContinueExploring from "@/components/ContinueExploring";
import ImageSplit from "@/components/ImageSplit";
import Reveal from "@/components/Reveal";
import { CheckCircleIcon, HandshakeIcon, ShieldIcon, ClockIcon, PinIcon, FamilyIcon, BuildingIcon, DocumentIcon } from "@/components/Icons";
import { OakRingAccent } from "@/components/SectionDivider";
import {
  homeFaqs,
  resourceArticles,
  heroImages,
  whatYouCanExpect,
  explorerTiles,
  processSteps,
  lifeEvents,
  industries,
  team,
  siteConfig,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero with animated, image-crossfading Personal / Business toggle */}
      <Hero />

      {/* Why Clients Choose Maroon Oak */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Why Maroon Oak</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Why Clients Choose Maroon Oak
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Every recommendation begins with listening. As an independent brokerage, our loyalty is to you — not to
            any single carrier.
          </p>
          <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card icon={<HandshakeIcon className="w-6 h-6 stroke-maroon" />} title="Independent Guidance">
              We work with multiple carriers to build customized solutions — not a one-size-fits-all policy pushed
              by a single company&rsquo;s sales quota.
            </Card>
            <Card icon={<CheckCircleIcon className="w-6 h-6 stroke-maroon" />} title="Clear Explanations">
              Plain-language answers about your coverage, before we ever discuss premiums or push a policy.
            </Card>
            <Card icon={<ShieldIcon className="w-6 h-6 stroke-maroon" />} title="Personal &amp; Business Expertise">
              One advisor relationship for both your household and your company&rsquo;s coverage needs.
            </Card>
            <Card icon={<ClockIcon className="w-6 h-6 stroke-maroon" />} title="Fast, Direct Communication">
              A one business day response standard — a real advisor, not a queue.
            </Card>
            <Card icon={<HandshakeIcon className="w-6 h-6 stroke-maroon" />} title="Long-Term Relationship Focus">
              Our goal isn&rsquo;t to become one of the largest brokerages. It&rsquo;s to become one of the most
              trusted.
            </Card>
            <Card icon={<PinIcon className="w-6 h-6 stroke-maroon" />} title="Remote Service Throughout Texas">
              {siteConfig.serviceAreaShort}
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Guided explorer */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Find Your Coverage</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            What Are You Looking to Protect?
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Choose what matters most to you, and we&rsquo;ll point you to the coverage that fits.
          </p>
          <ExplorerTiles tiles={explorerTiles} />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">How It Works</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            A Simple, Honest Process
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            No pressure, no jargon — just a clear path from a conversation to coverage you understand.
          </p>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* What we cover */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">What We Cover</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Personal &amp; Business Insurance, In One Place
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            From a first car to a growing company, we build coverage around your actual life &mdash; not a generic
            bundle.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group rounded-lg border border-charcoal/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-maroon/[0.06] transition-transform duration-300 group-hover:scale-110">
                <FamilyIcon className="h-6 w-6 stroke-maroon" />
              </div>
              <h3 className="mb-2.5 font-serif text-xl font-semibold text-maroon">Personal Insurance</h3>
              <p className="mb-4 font-sans text-sm text-[#55504a]">
                Auto, home, renters, condo, motorcycle, boat, RV, umbrella, life, and valuable items coverage &mdash;
                matched to your household.
              </p>
              <Link href="/personal-insurance" className="text-[12.5px] font-bold uppercase tracking-wide text-gold-dim transition-colors duration-200 hover:text-maroon">
                Explore Personal Insurance &rarr;
              </Link>
            </div>
            <div className="group rounded-lg border border-charcoal/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-maroon/[0.06] transition-transform duration-300 group-hover:scale-110">
                <BuildingIcon className="h-6 w-6 stroke-maroon" />
              </div>
              <h3 className="mb-2.5 font-serif text-xl font-semibold text-maroon">Business Insurance</h3>
              <p className="mb-4 font-sans text-sm text-[#55504a]">
                General liability, workers&rsquo; comp, commercial property, cyber, bonds, and more &mdash; coverage
                built around how your business operates.
              </p>
              <Link href="/business-insurance" className="text-[12.5px] font-bold uppercase tracking-wide text-gold-dim transition-colors duration-200 hover:text-maroon">
                Explore Business Insurance &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Life Events We Help Protect */}
      <ImageSplit
        image={heroImages.livingRoomAlt}
        eyebrow="Life Events We Help Protect"
        title="Coverage That Moves With Your Life"
        ctaLabel="Explore Personal Insurance"
        ctaHref="/personal-insurance"
      >
        <p className="mb-5">
          Buying a home, getting married, growing a family, sending a kid to college &mdash; every milestone changes
          what you need to protect.
        </p>
        <div className="flex flex-wrap gap-2">
          {lifeEvents.slice(0, 6).map((event) => (
            <Link
              key={event.label}
              href={event.href}
              className="rounded-full border border-maroon/20 px-3.5 py-1.5 text-[12px] font-semibold text-maroon transition-colors duration-200 hover:border-maroon hover:bg-maroon/5"
            >
              {event.label}
            </Link>
          ))}
        </div>
      </ImageSplit>

      {/* Industries We Help */}
      <ImageSplit
        image={heroImages.industrialDrone}
        eyebrow="Industries We Help"
        title="Built Around How Your Business Actually Runs"
        reverse
        ctaLabel="Explore Business Insurance"
        ctaHref="/business-insurance"
      >
        <p className="mb-5">
          From contractors and trades to restaurants, retail, and professional offices, we build coverage around the
          real risks of your industry &mdash; not a generic package.
        </p>
        <div className="flex flex-wrap gap-2">
          {industries.slice(0, 6).map((industry) => (
            <Link
              key={industry.label}
              href={industry.href}
              className="rounded-full border border-maroon/20 px-3.5 py-1.5 text-[12px] font-semibold text-maroon transition-colors duration-200 hover:border-maroon hover:bg-maroon/5"
            >
              {industry.label}
            </Link>
          ))}
        </div>
      </ImageSplit>

      {/* Meet Maroon Oak */}
      <ImageSplit
        image={heroImages.teamOffice}
        eyebrow="Meet Maroon Oak"
        title="Real Advisors, Not a Call Center"
        ctaLabel="Meet the Team"
        ctaHref="/about"
      >
        <p className="mb-5">
          Maroon Oak is built and run by a small team of licensed advisors who answer the phone themselves &mdash;
          not a rotating queue of unfamiliar voices.
        </p>
        <div className="flex flex-wrap gap-4">
          {team.slice(0, 4).map((member) => (
            <div key={member.name} className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold to-maroon font-serif text-xs font-semibold text-stone">
                {member.initials}
              </div>
              <span className="text-[12.5px] font-medium text-charcoal">{member.name}</span>
            </div>
          ))}
        </div>
      </ImageSplit>

      {/* Our Story band */}
      <section className="relative overflow-hidden py-24 text-stone">
        <Image
          src={heroImages.office.url}
          alt={heroImages.office.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(58,10,24,0.94)_0%,rgba(14,12,11,0.90)_55%,rgba(14,12,11,0.75)_100%)]" />
        <span className="absolute bottom-3 right-4 z-10 text-[10px] text-stone/30">
          Photo: {heroImages.office.credit}
        </span>
        <div className="relative z-10 mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold">Our Story</p>
              <h2 className="mb-5 font-serif text-3xl font-semibold md:text-[38px]">Rooted in Texas. Built on Trust.</h2>
              <p className="mb-6 font-sans text-stone/82">
                Maroon Oak Brokerage was founded on the belief that insurance should be built on relationships, not
                transactions. Our mission is to protect what matters most by first understanding the people we serve.
              </p>
              <Button href="/about" variant="outline-dark">Read Our Story</Button>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <StatBlock value="2026" label="Founded in Austin, Texas" />
              <StatBlock value="Texas" label="Serving clients statewide, remotely" />
              <StatBlock value="1 Day" label="Response-time standard" />
              <StatBlock value="25+" label="Personal &amp; commercial coverage lines" />
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Our Standard</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            What You Can Expect
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Maroon Oak is a newly founded independent brokerage. Rather than publish reviews we haven&rsquo;t
            earned yet, here&rsquo;s the standard we hold ourselves to with every client.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whatYouCanExpect.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg border border-charcoal/10 bg-white p-6">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 stroke-gold-dim" />
                <div>
                  <h3 className="mb-1.5 font-serif text-[15px] font-semibold text-maroon">{item.title}</h3>
                  <p className="font-sans text-[13.5px] text-[#55504a]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrier network */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[820px] px-8 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Carrier Access</p>
          <h2 className="mb-5 font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Independent Access, Not One Company&rsquo;s Product
          </h2>
          <p className="font-sans text-[17px] text-[#55504a]">{siteConfig.carrierStatement}</p>
        </div>
      </section>

      {/* Educational resources teaser */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Learn Before You Buy</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Educational Resources
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Understanding First isn&rsquo;t a tagline &mdash; it&rsquo;s why we publish plain-language guides before
            we ever talk price.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {resourceArticles.slice(0, 3).map((a) => (
              <div key={a.title} className="group overflow-hidden rounded-lg border border-charcoal/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-md">
                <div className="relative flex h-[154px] items-center justify-center overflow-hidden bg-gradient-to-br from-maroon-deep to-maroon">
                  <OakRingAccent className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 text-gold/10" />
                  <DocumentIcon className="relative h-10 w-10 stroke-gold/80 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="mb-2.5 text-[10.5px] font-bold uppercase tracking-wide text-gold-dim">{a.category}</div>
                  <h3 className="mb-2.5 font-serif text-[17px] font-semibold text-maroon">{a.title}</h3>
                  <p className="mb-4 font-sans text-[13.5px] text-[#55504a]">{a.description}</p>
                  <Link href={`/resources/${a.slug}`} className="text-xs font-bold uppercase tracking-wide text-gold-dim transition-colors duration-200 hover:text-maroon">
                    Read the Guide &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/resources" variant="outline">Visit the Resource Library</Button>
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
          <FAQAccordion
            items={homeFaqs.map((f) => ({ q: f.q, a: f.a }))}
          />
        </div>
      </section>

      <ContinueExploring
        items={[
          { label: "Personal Insurance", description: "Auto, home, life, and more — matched to your household.", href: "/personal-insurance" },
          { label: "Business Insurance", description: "Coverage built around how your business actually operates.", href: "/business-insurance" },
          { label: "Claims", description: "See how claims work and what to do first.", href: "/claims" },
        ]}
      />

      <CTASection />
    </>
  );
}
