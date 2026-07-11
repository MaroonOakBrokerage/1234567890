import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import FAQAccordion from "@/components/FAQAccordion";
import ImageSplit from "@/components/ImageSplit";
import ContinueExploring from "@/components/ContinueExploring";
import { PhoneIcon, MailIcon, ClockIcon, FacebookIcon, InstagramIcon, LinkedinIcon, GoogleIcon, CheckCircleIcon } from "@/components/Icons";
import { siteConfig, heroImages } from "@/lib/data";

const whatHappensNext = [
  { title: "We Review Your Request", description: "A licensed advisor reads through what you've shared — no automated quote spit back at you." },
  { title: "We Reach Out", description: "By your preferred contact method, within one business day, every time." },
  { title: "You Get Clear Options", description: "Real coverage options explained in plain language, so you can decide with confidence." },
];

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Maroon Oak Brokerage for a personal or business insurance quote. Call, email, or fill out our form — a licensed advisor responds within one business day.",
  alternates: { canonical: "/contact" },
};

const contactFaqs = [
  { q: "How quickly will someone respond?", a: "Within one business day, every time — that's our standard, not just a goal." },
  { q: "Do I need to have my current policy info ready?", a: "It helps, but it's not required. If you have a current declarations page handy, bring it — otherwise we can work from what you know." },
  { q: "Is requesting a quote free?", a: "Yes, always — there's no cost or obligation to get a quote or ask questions." },
  { q: "Need to file a claim instead?", a: "Head to our Claims page — claims are filed directly with the carrier your policy is written through." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="bridge"
        breadcrumb="Contact"
        title="Let's Start the Conversation."
        subtitle="Whether you're protecting your family, your home, or your business, we're here to help you find the right coverage with confidence."
      />

      <section id="quote" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="rounded-lg border border-charcoal/10 bg-white p-8">
                <h3 className="mb-5 font-serif text-xl font-semibold text-maroon">Get In Touch</h3>

                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-maroon/[0.06]">
                    <PhoneIcon className="h-[18px] w-[18px] stroke-maroon" />
                  </div>
                  <div>
                    <strong className="mb-0.5 block font-serif text-[14.5px] text-maroon">Phone</strong>
                    <a href={`tel:${siteConfig.phoneTel}`} className="font-sans text-sm text-[#55504a] hover:text-maroon">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-maroon/[0.06]">
                    <MailIcon className="h-[18px] w-[18px] stroke-maroon" />
                  </div>
                  <div>
                    <strong className="mb-0.5 block font-serif text-[14.5px] text-maroon">Email</strong>
                    <a href={`mailto:${siteConfig.email}`} className="font-sans text-sm text-[#55504a] hover:text-maroon">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="mb-2 flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-maroon/[0.06]">
                    <ClockIcon className="h-[18px] w-[18px] stroke-maroon" />
                  </div>
                  <div>
                    <strong className="mb-0.5 block font-serif text-[14.5px] text-maroon">Business Hours</strong>
                    <div className="font-sans text-sm text-[#55504a]">
                      {siteConfig.hours.map((h) => (
                        <div key={h.day}>
                          {h.day}: {h.time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-lg border border-maroon/15 bg-maroon/[0.04] p-5">
                  <strong className="mb-1 block font-serif text-[13.5px] text-maroon">Serving All of Texas</strong>
                  <p className="mb-2 font-sans text-[13px] text-[#55504a]">{siteConfig.serviceAreaShort}</p>
                  <p className="font-sans text-[13px] text-[#55504a]">{siteConfig.serviceAreaLong}</p>
                </div>

                <div className="mt-5 flex gap-2.5">
                  {[FacebookIcon, InstagramIcon, LinkedinIcon, GoogleIcon].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/10 transition-colors duration-200 hover:border-maroon hover:bg-maroon [&_svg]:hover:stroke-stone"
                    >
                      <Icon className="h-4 w-4 stroke-maroon" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">What Happens Next</p>
          <h2 className="mx-auto mb-14 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            From Request to Real Answers
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {whatHappensNext.map((step, i) => (
              <div key={step.title} className="rounded-lg border border-charcoal/10 bg-white p-8">
                <div className="mb-4 font-serif text-3xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mb-2.5 font-serif text-lg font-semibold text-maroon">{step.title}</h3>
                <p className="font-sans text-[13.5px] text-[#55504a]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Maroon Oak */}
      <ImageSplit
        image={heroImages.officeWindowRoom}
        eyebrow="Why Contact Maroon Oak"
        title="A Real Advisor, Every Time"
        reverse
      >
        <p className="mb-4">
          You&rsquo;ll talk to a licensed advisor who actually looks at your situation &mdash; not a script, and not
          a call center. That&rsquo;s true whether you&rsquo;re protecting a family, a first apartment, or a growing
          business.
        </p>
        <div className="flex items-start gap-2.5 rounded-lg border border-maroon/15 bg-maroon/[0.04] p-4">
          <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 stroke-gold-dim" />
          <p className="text-[13px] text-[#55504a]">
            A quick privacy note: this form never asks for your Social Security number, driver&rsquo;s license,
            or payment information. If a follow-up ever does, that&rsquo;s your cue to call us directly.
          </p>
        </div>
      </ImageSplit>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Before You Reach Out</p>
          <h2 className="mx-auto mb-14 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
            A Few Quick Answers
          </h2>
          <FAQAccordion items={contactFaqs} />
        </div>
      </section>

      <ContinueExploring
        items={[
          { label: "Personal Insurance", description: "See coverage for your auto, home, family, and more.", href: "/personal-insurance" },
          { label: "Business Insurance", description: "Explore commercial coverage built around how you operate.", href: "/business-insurance" },
          { label: "Claims", description: "Understand how claims work and what to do first.", href: "/claims" },
        ]}
      />
    </>
  );
}
