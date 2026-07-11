import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Maroon Oak Brokerage's website terms of use.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Terms"
        title="Terms of Use"
        subtitle="The terms governing your use of this website."
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[820px] px-8 font-sans text-[15px] leading-relaxed text-[#55504a]">
          <div className="mb-8 rounded-lg border border-gold/30 bg-gold/5 p-5 text-sm">
            <strong className="text-maroon">Placeholder content.</strong> This page is a starting template only.
            Have a licensed attorney review and finalize these terms — including required state insurance licensing
            disclosures — before publishing it live.
          </div>

          <h2 className="mb-3 font-serif text-xl font-semibold text-maroon">Website Use</h2>
          <p className="mb-6">
            This website is provided for informational purposes about Maroon Oak Brokerage&rsquo;s insurance
            products and services. Information on this site does not constitute a binder, quote, or offer of
            coverage.
          </p>

          <h2 className="mb-3 font-serif text-xl font-semibold text-maroon">No Guarantee of Coverage</h2>
          <p className="mb-6">
            Submitting a quote request does not bind coverage. Coverage is only effective once confirmed in writing
            by Maroon Oak Brokerage and the applicable insurance carrier.
          </p>

          <h2 className="mb-3 font-serif text-xl font-semibold text-maroon">Licensing</h2>
          <p className="mb-6">
            Maroon Oak Brokerage is a licensed independent insurance agency operating in the state of Texas.
            Licensing details are available upon request.
          </p>

          <h2 className="mb-3 font-serif text-xl font-semibold text-maroon">Contact</h2>
          <p>
            Questions about these terms can be directed to {siteConfig.email} or {siteConfig.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
