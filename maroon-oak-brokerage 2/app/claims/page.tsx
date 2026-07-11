import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ContinueExploring from "@/components/ContinueExploring";
import ClaimTypeTabs from "@/components/ClaimTypeTabs";
import ImageSplit from "@/components/ImageSplit";
import { AlertIcon, PhoneIcon, ClockIcon, CheckCircleIcon } from "@/components/Icons";
import { claimsSteps, claimTips, whatYouNeed, siteConfig, heroImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Claims",
  description:
    "Learn how to report an insurance claim directly to your carrier, plus claim tips and after-hours guidance from Maroon Oak Brokerage.",
  alternates: { canonical: "/claims" },
};

export default function ClaimsPage() {
  return (
    <>
      <PageHero
        image="claimsHeroRoof"
        breadcrumb="Claims"
        title="Filing a Claim Starts With Your Carrier."
        subtitle="Your policy is written and backed by the carrier we bound it with — that's who handles your claim directly, fastest. Here's exactly how to report it, and how we can still help."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-lg border border-maroon/20 bg-maroon/5 px-7 py-6">
            <div className="flex items-center gap-4">
              <AlertIcon className="h-8 w-8 flex-shrink-0 stroke-maroon" />
              <div>
                <strong className="block font-serif text-[15.5px] text-maroon">Need to report a claim right now?</strong>
                <span className="font-sans text-[13.5px] text-[#55504a]">
                  To report a claim, use the claims number shown on your insurance ID card or declarations page. Need
                  help identifying your carrier or understanding the process? Call us at {siteConfig.phoneDisplay}.
                </span>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="rounded bg-maroon px-5 py-3 text-xs font-bold uppercase tracking-wide text-stone hover:bg-maroon-light"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Choose a Claim Type</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            What Kind of Claim Are You Filing?
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Every claim type starts the same way — reported directly to your carrier — but here&rsquo;s what to
            expect for each.
          </p>
          <ClaimTypeTabs />
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Filing a Claim</p>
              <h2 className="mb-8 font-serif text-3xl font-semibold text-maroon">Step-by-Step: What To Do First</h2>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute bottom-2 left-4 top-2 w-px bg-gradient-to-b from-gold via-gold/50 to-gold/10"
                />
                <ol className="space-y-8">
                  {claimsSteps.map((s, i) => (
                    <li key={s.title} className="relative pl-12">
                      <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gold bg-white font-serif text-sm font-semibold text-maroon shadow-sm">
                        {i + 1}
                      </span>
                      <strong className="mb-1 block font-serif text-[15.5px] text-maroon">{s.title}</strong>
                      <p className="font-sans text-[14.5px] text-[#55504a]">{s.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold-dim">Before You Call</p>
              <h2 className="mb-6 font-serif text-3xl font-semibold text-maroon">What You&rsquo;ll Need</h2>
              <ul className="space-y-2.5">
                {whatYouNeed.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-[#55504a]">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 stroke-gold-dim" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ImageSplit
        image={heroImages.roofRestoration}
        eyebrow="Stay Calm"
        title="You're Not Navigating This Alone"
      >
        <p>
          A claim can feel overwhelming, especially in the moment it happens. Your carrier owns the process from
          first notice through payout &mdash; but if you&rsquo;re ever unsure what to do next, we&rsquo;re a phone
          call away to help you understand where things stand.
        </p>
      </ImageSplit>

      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">How Maroon Oak Helps</p>
          <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            Your Carrier Handles the Claim. We Help You Understand It.
          </h2>
          <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] text-[#55504a]">
            Maroon Oak doesn&rsquo;t adjust or pay claims — your carrier does. Here&rsquo;s where we come in.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-charcoal/10 bg-white p-8">
              <PhoneIcon className="mb-4 h-6 w-6 stroke-maroon" />
              <h3 className="mb-2.5 font-serif text-xl font-semibold text-maroon">Identifying Your Carrier</h3>
              <p className="font-sans text-sm text-[#55504a]">
                Can&rsquo;t find your declarations page? We can look up which carrier holds your policy and get you
                the right claims number.
              </p>
            </div>
            <div className="rounded-lg border border-charcoal/10 bg-white p-8">
              <ClockIcon className="mb-4 h-6 w-6 stroke-maroon" />
              <h3 className="mb-2.5 font-serif text-xl font-semibold text-maroon">Understanding Your Coverage</h3>
              <p className="font-sans text-sm text-[#55504a]">
                Not sure what your policy covers or how a deductible applies? We&rsquo;ll walk through it in plain
                language.
              </p>
            </div>
            <div className="rounded-lg border border-charcoal/10 bg-white p-8">
              <AlertIcon className="mb-4 h-6 w-6 stroke-maroon" />
              <h3 className="mb-2.5 font-serif text-xl font-semibold text-maroon">Navigating the Process</h3>
              <p className="font-sans text-sm text-[#55504a]">
                Questions come up mid-claim. We&rsquo;re glad to help you understand next steps at any point along
                the way.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-[720px]">
            <h3 className="mb-5 text-center font-serif text-xl font-semibold text-maroon">A Few Things That Help</h3>
            <ul className="space-y-2.5">
              {claimTips.map((tip) => (
                <li key={tip} className="relative pl-5 font-sans text-sm text-[#55504a]">
                  <span className="absolute left-0 font-bold text-gold">—</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-maroon-deep to-maroon py-24 text-stone">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold">Need Help Now?</p>
              <h2 className="mb-4 font-serif text-3xl font-semibold">Support Outside Business Hours</h2>
              <p className="font-sans text-stone/85">
                Accidents and emergencies don&rsquo;t wait for business hours. Your carrier&rsquo;s 24/7 claims line
                is always your fastest option any time, day or night. If you have questions about your coverage
                itself, call us during business hours and we&rsquo;ll help you understand where things stand.
              </p>
            </div>
            <div className="rounded-lg border border-stone/20 bg-stone/5 p-8">
              <h3 className="mb-3 font-serif text-xl font-semibold text-gold">Business Hours</h3>
              {siteConfig.hours.map((h) => (
                <div key={h.day} className="flex justify-between font-sans text-sm text-stone/85">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
              <p className="mt-3 font-sans text-xs text-stone/60">Your carrier&rsquo;s 24/7 claims line remains available at all times.</p>
            </div>
          </div>
        </div>
      </section>

      <ContinueExploring
        items={[
          { label: "Personal Insurance", description: "Review your auto, home, and family coverage.", href: "/personal-insurance" },
          { label: "Business Insurance", description: "Review your commercial coverage lines.", href: "/business-insurance" },
          { label: "Contact Us", description: "Reach a licensed advisor with coverage questions.", href: "/contact" },
        ]}
      />

      <CTASection
        title="Have a Coverage Question Before You File?"
        description="Understanding your policy before you ever need to use it is exactly what we're here for."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
