import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ValuesExplorer from "@/components/ValuesExplorer";
import ContinueExploring from "@/components/ContinueExploring";
import ImageSplit from "@/components/ImageSplit";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { GoldDivider } from "@/components/SectionDivider";
import { coreValues, team, heroImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Maroon Oak Brokerage: our mission, our core values, and the independent brokerage philosophy behind how we serve clients across Texas.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="smallTownDusk"
        breadcrumb="About"
        title="Insurance Starts With People, Not Policies."
        subtitle="Maroon Oak Brokerage was founded on the belief that the best protection starts with understanding. Here's our story, our mission, and the people behind it."
      />

      {/* About Us */}
      <ImageSplit image={heroImages.advisorConversation} eyebrow="About Us" title="Insurance Starts With People">
        <p className="mb-4">
          At Maroon Oak Brokerage, we believe insurance starts with people. Before discussing policies, coverage,
          or premiums, we take the time to understand your goals, your family, your business, and what matters
          most to you.
        </p>
        <p className="mb-4">
          Every recommendation begins with listening, because the best protection starts with understanding. As an
          independent brokerage, we work with multiple insurance carriers to provide customized insurance
          solutions instead of one-size-fits-all policies.
        </p>
        <p>
          Our mission is to build lifelong relationships through trust, integrity, and exceptional service.
          Whether someone is protecting their family, home, business, or future, our goal is to help them make
          confident insurance decisions.
        </p>
      </ImageSplit>

      {/* Editorial pull-quote */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-[820px] px-8 text-center">
          <Reveal>
            <GoldDivider className="mb-8" />
            <p className="font-serif text-[28px] font-medium italic leading-snug text-maroon md:text-[36px]">
              &ldquo;We don&rsquo;t start with policies. We start with people.&rdquo;
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[3px] text-gold-dim">The Maroon Oak Philosophy</p>
          </Reveal>
        </div>
      </section>

      {/* Founder's Mission */}
      <section className="bg-gradient-to-br from-maroon-deep to-maroon py-24 text-stone">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold">Founder&rsquo;s Mission</p>
              <h2 className="mb-2 font-serif text-3xl font-semibold md:text-[38px]">Built on Relationships, Not Transactions</h2>
              <div className="mb-6 h-0.5 w-16 bg-gold" />
              <p className="mb-4 font-sans text-stone/85">
                Maroon Oak Brokerage was founded on the belief that insurance should be built on relationships &mdash;
                not transactions. Our mission is to protect what matters most by first understanding the people we
                serve.
              </p>
              <p className="font-sans text-stone/85">
                Our goal is not simply to become one of the largest brokerages. Our goal is to become one of the
                most trusted.
              </p>
            </div>
            <div className="rounded-lg border border-stone/20 bg-stone/5 p-8">
              <h3 className="mb-4 font-serif text-xl font-semibold text-gold">We Are Committed To</h3>
              <ul className="space-y-2.5">
                {["Integrity", "Excellence", "Understanding before recommending", "Long-term relationships", "Continuous improvement", "Being genuinely easy to reach"].map((v) => (
                  <li key={v} className="relative pl-5 font-sans text-sm text-stone/90">
                    <span className="absolute left-0 font-bold text-gold">✓</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values — interactive explorer */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">What We Stand For</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Core Values
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Six values that guide how we serve every client &mdash; not a poster on a wall. Select one to read more.
          </p>
          <Reveal><ValuesExplorer values={coreValues} /></Reveal>
        </div>
      </section>

      {/* Independent Brokerage Explainer */}
      <ImageSplit
        image={heroImages.planningSession}
        eyebrow="How We Work"
        title="What Makes Us an Independent Brokerage"
        reverse
      >
        <p className="mb-5">
          An independent brokerage isn&rsquo;t tied to any single insurance company &mdash; our loyalty is to you.
        </p>
        <div className="space-y-5">
          <div>
            <h3 className="mb-1.5 font-serif text-lg font-semibold text-maroon">Customer-First, By Design</h3>
            <p className="text-[14.5px]">
              Because we&rsquo;re not employed by any one carrier, we&rsquo;re free to recommend the coverage that
              actually fits your situation &mdash; not the option a single company&rsquo;s quota requires.
            </p>
          </div>
          <div>
            <h3 className="mb-1.5 font-serif text-lg font-semibold text-maroon">Relationship-First Service</h3>
            <p className="text-[14.5px]">
              We measure success in relationships that last, not one-time transactions &mdash; the same standard
              we hold for how we treat every client, every time.
            </p>
          </div>
        </div>
      </ImageSplit>

      {/* Team */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Our Team</p>
          <h2 className="mx-auto mb-14 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Meet the People Behind Maroon Oak
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80} className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-gold to-maroon font-serif text-[28px] font-semibold text-stone shadow-sm transition-transform duration-300 hover:scale-105">
                  {member.initials}
                </div>
                <h3 className="mb-1 font-serif text-[16.5px] font-semibold text-maroon">{member.name}</h3>
                <div className="mb-2 text-[11.5px] font-bold uppercase tracking-wide text-gold-dim">{member.role}</div>
                <p className="font-sans text-[12.5px] text-[#55504a]">{member.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rooted in Aggie Values — recruiting & culture, not identity. Kept to a single,
          modest section rather than repeated across customer-facing pages, so the emphasis
          stays on professionalism and mentorship rather than school affiliation. */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Our Culture</p>
              <h2 className="mb-5 font-serif text-3xl font-semibold text-maroon md:text-[38px]">
                Rooted in Aggie Values. Built for Texas.
              </h2>
              <p className="mb-4 font-sans text-[15.5px] text-[#55504a]">
                Maroon Oak Brokerage proudly embraces the Aggie values of integrity, excellence, leadership,
                loyalty, respect, and selfless service. As our team grows, we&rsquo;re committed to recruiting
                and developing talented college graduates who are passionate about serving Texas families and
                businesses.
              </p>
              <p className="font-sans text-[15.5px] text-[#55504a]">
                Every advisor at Maroon Oak &mdash; regardless of background &mdash; is professionally trained,
                licensed, mentored, and held to the same exacting standard of client service. Our connection to
                the Texas A&amp;M community shapes our culture and our recruiting philosophy; it doesn&rsquo;t
                define who handles your coverage.
              </p>
            </div>
            <div className="rounded-lg border border-charcoal/10 bg-white p-8">
              <h3 className="mb-4 font-serif text-xl font-semibold text-maroon">Building Careers, Not Just Filling Roles</h3>
              <ul className="space-y-2.5">
                {[
                  "Structured mentorship for every new advisor, from licensing through their first renewals",
                  "Ongoing professional education and carrier certifications",
                  "A recruiting pipeline that looks for character first, then trains the technical skill",
                  "The same standards and oversight applied to every advisor, at every experience level",
                ].map((v) => (
                  <li key={v} className="relative pl-5 font-sans text-sm text-[#55504a]">
                    <span className="absolute left-0 font-bold text-gold">✓</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContinueExploring
        items={[
          { label: "Personal Insurance", description: "See coverage for your auto, home, family, and more.", href: "/personal-insurance" },
          { label: "Business Insurance", description: "Explore commercial coverage built around how you operate.", href: "/business-insurance" },
          { label: "Claims", description: "Understand how claims work and what to do first.", href: "/claims" },
        ]}
      />

      <CTASection
        title="Let's Start the Conversation."
        description="Whether you're protecting your family, your home, or your business, we're here to help you find the right coverage with confidence."
      />
    </>
  );
}
