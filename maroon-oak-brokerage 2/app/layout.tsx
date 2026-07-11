import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { siteConfig } from "@/lib/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Independent Insurance Brokerage in Austin, Texas`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Maroon Oak Brokerage is an independent personal and commercial insurance brokerage in Austin, Texas. Understanding First. Insurance Second.",
  keywords: [
    "Austin insurance broker",
    "Texas independent insurance agency",
    "personal insurance Austin",
    "business insurance Texas",
    "Maroon Oak Brokerage",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | Independent Insurance Brokerage`,
    description: "Understanding First. Insurance Second.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/logo-primary.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Understanding First. Insurance Second.",
    images: ["/logo-primary.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

// Organization/service structured data. Deliberately omits any street address —
// Maroon Oak is a remote brokerage serving clients throughout Texas, so we
// describe the service area rather than a physical location.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: siteConfig.name,
  description: siteConfig.tagline,
  url: siteConfig.url,
  telephone: siteConfig.phoneTel,
  email: siteConfig.email,
  areaServed: {
    "@type": "State",
    name: "Texas",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col pb-16 font-sans lg:pb-0">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
