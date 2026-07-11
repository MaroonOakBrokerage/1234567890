import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { FacebookIcon, InstagramIcon, LinkedinIcon, GoogleIcon } from "./Icons";

const socialLinks = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "LinkedIn", Icon: LinkedinIcon },
  { label: "Google Business Profile", Icon: GoogleIcon },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-stone/70 pt-[70px] pb-6">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                src="/logo-icon-white.png"
                alt="Maroon Oak Brokerage"
                width={140}
                height={112}
                className="h-9 w-auto"
              />
            </div>
            <p className="mb-4 font-serif italic text-[14.5px] text-gold">{siteConfig.tagline}</p>
            <p className="mb-3 max-w-[280px] text-[13px] leading-relaxed">
              Maroon Oak Brokerage is an independent insurance brokerage built on relationships,
              not transactions. We protect what matters most by understanding our clients first.
            </p>
            <p className="max-w-[280px] text-[13px] leading-relaxed text-stone/55">{siteConfig.serviceAreaShort}</p>
            <div className="mt-4 flex gap-2.5">
              {socialLinks.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-stone/20 transition-colors duration-200 hover:border-gold [&_svg]:hover:stroke-gold"
                >
                  <Icon className="w-3.5 h-3.5 stroke-stone/80" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-stone">Explore</h4>
            <ul className="space-y-3 text-[13.5px]">
              <li><Link href="/personal-insurance" className="transition-colors duration-200 hover:text-gold">Personal Insurance</Link></li>
              <li><Link href="/business-insurance" className="transition-colors duration-200 hover:text-gold">Business Insurance</Link></li>
              <li><Link href="/about" className="transition-colors duration-200 hover:text-gold">About Us</Link></li>
              <li><Link href="/contact" className="transition-colors duration-200 hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-stone">Company</h4>
            <ul className="space-y-3 text-[13.5px]">
              <li><Link href="/claims" className="transition-colors duration-200 hover:text-gold">Claims</Link></li>
              <li><Link href="/resources" className="transition-colors duration-200 hover:text-gold">Resources</Link></li>
              <li><Link href="/privacy" className="transition-colors duration-200 hover:text-gold">Privacy Policy</Link></li>
              <li><Link href="/terms" className="transition-colors duration-200 hover:text-gold">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-stone">Business Hours</h4>
            {siteConfig.hours.map((h) => (
              <div key={h.day} className="mb-2 flex justify-between text-[13px]">
                <span className="text-stone/55">{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-stone/10 pt-6 text-xs text-stone/45">
          <span>&copy; {new Date().getFullYear()} Maroon Oak Brokerage. Independent Insurance Brokerage. All rights reserved.</span>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition-colors duration-200 hover:text-gold">Privacy</Link>
            <Link href="/terms" className="transition-colors duration-200 hover:text-gold">Terms</Link>
            <a href="#" className="transition-colors duration-200 hover:text-gold">Licensing Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
