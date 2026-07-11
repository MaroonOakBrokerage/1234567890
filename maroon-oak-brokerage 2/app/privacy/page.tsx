import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Maroon Oak Brokerage's privacy policy.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Privacy"
        title="Privacy Policy"
        subtitle="How Maroon Oak Brokerage collects, uses, and protects your information."
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[820px] px-8 font-sans text-[15px] leading-relaxed text-[#55504a]">
          <div className="mb-8 rounded-lg border border-gold/30 bg-gold/5 p-5 text-sm">
            <strong className="text-maroon">Placeholder content.</strong> This page is a starting template only.
            Have a licensed attorney review and finalize this policy — including state-specific insurance privacy
            disclosures — before publishing it live.
          </div>

          <h2 className="mb-3 font-serif text-xl font-semibold text-maroon">Information We Collect</h2>
          <p className="mb-6">
            We may collect personal information you provide directly, such as your name, contact details, and
            information relevant to an insurance quote or policy, as well as information collected automatically
            when you use this website.
          </p>

          <h2 className="mb-3 font-serif text-xl font-semibold text-maroon">How We Use Your Information</h2>
          <p className="mb-6">
            Information is used to provide quotes, service policies, communicate with you, and improve our services.
            We do not sell your personal information to third parties.
          </p>

          <h2 className="mb-3 font-serif text-xl font-semibold text-maroon">Sharing With Carriers</h2>
          <p className="mb-6">
            As an independent brokerage, we may share relevant information with insurance carriers to obtain quotes
            and bind or service coverage on your behalf.
          </p>

          <h2 className="mb-3 font-serif text-xl font-semibold text-maroon">Your Choices</h2>
          <p className="mb-6">
            You may contact us at {siteConfig.email} to ask questions about your data, request corrections, or opt
            out of non-essential communications.
          </p>

          <h2 className="mb-3 font-serif text-xl font-semibold text-maroon">Contact</h2>
          <p>
            Questions about this policy can be directed to {siteConfig.email} or {siteConfig.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
