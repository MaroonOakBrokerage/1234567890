import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import ContinueExploring from "@/components/ContinueExploring";
import { resourceArticles } from "@/lib/data";

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = resourceArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/resources/${article.slug}` },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = resourceArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-stone py-20">
        <div className="mx-auto max-w-[760px] px-8">
          <p className="mb-4 text-xs text-[#8a8178]">
            <Link href="/" className="hover:text-maroon">Home</Link> /{" "}
            <Link href="/resources" className="hover:text-maroon">Resources</Link> / {article.title}
          </p>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-gold-dim">
            <span>{article.category}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="mb-4 font-serif text-3xl font-semibold text-maroon md:text-[42px]">{article.title}</h1>
          <div className="h-0.5 w-16 bg-gold" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[760px] px-8">
          {article.body.map((paragraph, i) => (
            <p key={i} className="mb-5 font-sans text-[16.5px] leading-relaxed text-[#3a3532]">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <ContinueExploring
        title="Continue Exploring"
        items={[
          { label: "Personal Insurance", description: "See coverage for your auto, home, family, and more.", href: "/personal-insurance" },
          { label: "Business Insurance", description: "Explore commercial coverage built around how you operate.", href: "/business-insurance" },
          { label: "Resource Library", description: "Browse more plain-language guides.", href: "/resources" },
        ]}
      />

      <CTASection
        title="Have a Question This Guide Didn't Answer?"
        description="Ask us directly — a licensed advisor responds within one business day."
        primaryLabel="Ask a Question"
        primaryHref="/contact"
      />
    </>
  );
}
