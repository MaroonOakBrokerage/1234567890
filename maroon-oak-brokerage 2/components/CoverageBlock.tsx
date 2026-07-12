import Image from "next/image";
import type { Product } from "@/lib/data";
import { personalProducts, businessProducts, heroImages } from "@/lib/data";
import { OakRingAccent } from "./SectionDivider";
import Button from "./Button";
import FAQAccordion from "./FAQAccordion";
import {
  CarIcon,
  HomeIcon,
  BuildingIcon,
  UmbrellaIcon,
  FamilyIcon,
  ShieldIcon,
  WorkersIcon,
  CyberIcon,
  HandshakeIcon,
  AlertIcon,
  CheckCircleIcon,
  BriefcaseIcon,
  DocumentIcon,
  BoatIcon,
} from "./Icons";

const allProducts = [...personalProducts, ...businessProducts];
function productName(id: string): string {
  return allProducts.find((p) => p.id === id)?.name ?? id;
}

// A distinct icon per coverage line — replaces a repeated company-logo image
// that looked identical across all 25 coverage sections. Each icon reflects
// the actual line of coverage rather than being purely decorative.
const productIcon: Record<string, typeof CarIcon> = {
  auto: CarIcon,
  motorcycle: CarIcon,
  home: HomeIcon,
  condo: HomeIcon,
  renters: HomeIcon,
  rv: CarIcon,
  boat: BoatIcon,
  umbrella: UmbrellaIcon,
  life: FamilyIcon,
  "valuable-items": ShieldIcon,
  "general-liability": ShieldIcon,
  "workers-comp": WorkersIcon,
  "commercial-auto": CarIcon,
  bop: BuildingIcon,
  "commercial-property": BuildingIcon,
  "professional-liability": BriefcaseIcon,
  cyber: CyberIcon,
  "commercial-umbrella": UmbrellaIcon,
  "builders-risk": BuildingIcon,
  "inland-marine": ShieldIcon,
  "commercial-crime": AlertIcon,
  "directors-officers": HandshakeIcon,
  epli: WorkersIcon,
  "surety-bonds": DocumentIcon,
  "risk-management": CheckCircleIcon,
};

export default function CoverageBlock({ product, reverse }: { product: Product; reverse?: boolean }) {
  const Icon = productIcon[product.id] ?? ShieldIcon;
const image =
  product.imageKey && product.imageKey in heroImages
    ? heroImages[product.imageKey as keyof typeof heroImages]
    : undefined;
    <div id={product.id} className="border-b border-charcoal/10 py-16 last:border-b-0">
      <div className="mx-auto max-w-[1200px] px-8">
        <div
          className={`grid grid-cols-1 gap-12 md:gap-14 items-start ${
            reverse ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-[0.9fr_1.1fr]"
          }`}
        >
          <div
            className={`relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-lg border border-gold/20 ${
              image ? "" : "bg-gradient-to-br from-maroon-deep to-ink p-12"
            } ${reverse ? "md:order-2" : ""}`}
          >
            {image ? (
              <>
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </>
            ) : (
              <>
                <OakRingAccent className="pointer-events-none absolute -bottom-12 -right-12 h-[220px] w-[220px] text-gold/10" />
                <Icon className="relative h-[72px] w-[72px] stroke-gold/80" />
              </>
            )}
          </div>
          <div>
            <span className="mb-4 inline-block rounded-full bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-dim">
              {product.industries ? "Business Lines" : "Personal Lines"}
            </span>
            <h3 className="mb-4 font-serif text-[27px] font-semibold text-maroon">{product.name}</h3>
            <p className="mb-3 font-sans text-[15px] text-[#55504a]">{product.overview}</p>

            <h4 className="mt-6 mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
              {product.whyLabel}
            </h4>
            <p className="mb-3 font-sans text-[15px] text-[#55504a]">{product.why}</p>

            <h4 className="mt-6 mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
              {product.optionsLabel}
            </h4>
            <ul className="mb-2 grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
              {product.options.map((opt) => (
                <li key={opt} className="relative pl-5 font-sans text-sm text-[#55504a]">
                  <span className="absolute left-0 text-gold">—</span>
                  {opt}
                </li>
              ))}
            </ul>

            {product.industries && (
              <>
                <h4 className="mt-6 mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
                  Industries We Serve
                </h4>
                <div className="mb-5 flex flex-wrap gap-2">
                  {product.industries.map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-dim"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </>
            )}

            {product.pairsWith && product.pairsWith.length > 0 && (
              <>
                <h4 className="mt-6 mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
                  Often Paired With
                </h4>
                <div className="mb-5 flex flex-wrap gap-2">
                  {product.pairsWith.map((id) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="rounded-full border border-maroon/20 px-3.5 py-1.5 text-[12px] font-semibold text-maroon transition-colors duration-200 hover:border-maroon hover:bg-maroon/5"
                    >
                      {productName(id)}
                    </a>
                  ))}
                </div>
              </>
            )}

            <div className="my-6">
              <Button href="/contact#quote" variant="maroon" size="sm">
                Request a {product.name} Quote
              </Button>
            </div>

            {product.faqs && product.faqs.length > 0 && (
              <>
                <h4 className="mt-6 mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
                  Frequently Asked Questions
                </h4>
                <FAQAccordion items={product.faqs.map((f) => ({ q: f.q, a: f.a }))} firstOpen={false} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
