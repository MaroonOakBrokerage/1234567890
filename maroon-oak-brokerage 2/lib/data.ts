// Central content data for Maroon Oak Brokerage.
// Keeping copy here (rather than scattered in JSX) makes it easy to update
// site content without touching component/page markup.

export const siteConfig = {
  name: "Maroon Oak Brokerage",
  tagline: "Understanding First. Insurance Second.",
  motto: "Above the Line. All the Time.",
  phoneDisplay: "737-477-8228",
  phoneTel: "+17374778228",
  email: "info@maroonoakbrokerage.com",
  city: "Austin, Texas",
  url: "https://maroonoakbrokerage.com",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday", time: "By Appointment" },
    { day: "Sunday", time: "Closed" },
  ],
  serviceAreaShort: "Based in Central Texas and serving clients remotely throughout Texas.",
  serviceAreaLong:
    "We work with clients by phone, email, video call, and secure digital tools, making it easy to get help wherever you are in Texas.",
  carrierStatement:
    "We work across a growing network of insurance markets to find coverage that fits your needs. Available carriers vary by product, location, underwriting, and eligibility.",
};

// All photography lives in one dedicated manifest — lib/imageManifest.ts — so every
// image used anywhere on the site (page heroes, ImageSplit sections, PhotoCard grids,
// CoverageBlock detail sections) is guaranteed unique and traceable to exactly one
// place it renders. `heroImages` is re-exported here unchanged so no component import
// needs to change; the manifest itself is the new single source of truth.
import { imageManifest } from "./imageManifest";
import type { ImageManifestKey, ManifestEntry } from "./imageManifest";

export const heroImages = imageManifest;
export type { ImageManifestKey, ManifestEntry };
export type { ImageManifestKey, ManifestEntry } from "./imageManifest";


export type HeroImage = (typeof heroImages)[keyof typeof heroImages];

// Shared coverage-line option lists used by both the hero toggle and the
// expanded quote form, so the two stay in sync.
export const personalCoverageOptions = [
  "Auto",
  "Home",
  "Renters",
  "Condo",
  "Umbrella",
  "Life",
  "Motorcycle",
  "Boat",
  "RV",
  "Valuable Items",
];

export const businessCoverageOptions = [
  "General Liability",
  "Workers' Comp",
  "Commercial Auto",
  "BOP",
  "Commercial Property",
  "Inland Marine",
  "Professional Liability",
  "Cyber Liability",
  "Commercial Umbrella",
  "Builders Risk",
  "Bonds",
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/personal-insurance", label: "Personal" },
  { href: "/business-insurance", label: "Commercial" },
  { href: "/about", label: "About" },
  { href: "/claims", label: "Claims" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export type Product = {
  id: string;
  name: string;
  overview: string;
  why: string; // "why it matters" (personal) or "who needs it" (business)
  whyLabel: string;
  options: string[];
  optionsLabel: string;
  faqs?: { q: string; a: string }[];
  industries?: string[];
  pairsWith?: string[]; // ids of other products commonly bundled with this one
  imageKey?: keyof typeof heroImages; // unique editorial photo for the coverage card/detail block
};

export const personalProducts: Product[] = [
  {
    id: "auto",
    name: "Auto Insurance",
    overview:
      "Your car is how you get to work, school, and everything in between. We build auto coverage around how you actually drive and what you actually own — not a generic state-minimum policy.",
    whyLabel: "Why It Matters",
    why: "Texas requires liability coverage to legally drive, but state minimums rarely cover the real cost of a serious accident. The gap between what's required and what actually protects you is where most drivers get hurt financially.",
    optionsLabel: "Coverage Options",
    options: [
      "Liability (bodily injury & property damage)",
      "Collision coverage",
      "Comprehensive coverage",
      "Uninsured / underinsured motorist",
      "Medical payments (MedPay)",
      "Roadside assistance & rental reimbursement",
    ],
    faqs: [
      {
        q: "How much auto coverage do I actually need?",
        a: "It depends on your assets, your vehicle's value, and your risk tolerance. We walk through your specific situation rather than defaulting you to state minimums.",
      },
      {
        q: "Will my rate go up if I switch to Maroon Oak?",
        a: "Not because of us — premiums are set by the carrier based on your risk profile. We shop multiple carriers to find the best rate for the coverage you actually need.",
      },
    ],
    pairsWith: ["home", "umbrella", "life"],
    imageKey: "autoSuvRoad",
  },
  {
    id: "motorcycle",
    name: "Motorcycle Insurance",
    overview:
      "Riders face different risks — and different coverage gaps — than standard drivers. We make sure your policy actually reflects how and where you ride.",
    whyLabel: "Why It Matters",
    why: "Motorcycle accidents carry a higher risk of serious injury than car accidents, and standard auto policies don't extend to bikes. Custom parts and gear also often need to be scheduled separately.",
    optionsLabel: "Coverage Options",
    options: [
      "Liability coverage",
      "Collision & comprehensive",
      "Custom parts & equipment coverage",
      "Roadside assistance",
      "Gear & apparel coverage",
      "Uninsured motorist coverage",
    ],
    faqs: [
      {
        q: "Does my auto policy cover my motorcycle?",
        a: "No — motorcycles require a separate policy with coverage built around the specific risks of riding.",
      },
    ],
    imageKey: "motorcycleMountainRoad",
  },
  {
    id: "home",
    name: "Homeowners Insurance",
    overview:
      "Your home is likely your largest asset. We make sure your policy reflects its real rebuild cost and your actual belongings — not an outdated number from years ago.",
    whyLabel: "Why It Matters",
    why: "Underinsurance is one of the most common and costly mistakes homeowners make. Rebuild costs rise every year with construction costs — a policy that isn't reviewed annually can quietly fall behind.",
    optionsLabel: "Coverage Options",
    options: [
      "Dwelling coverage",
      "Other structures (fences, sheds, garages)",
      "Personal property",
      "Loss of use / additional living expenses",
      "Personal liability",
      "Scheduled items (jewelry, art, collectibles)",
    ],
    faqs: [
      {
        q: "What's the difference between replacement cost and actual cash value?",
        a: "Replacement cost pays to rebuild or repair at today's prices. Actual cash value factors in depreciation — meaning a lower payout. We explain which your policy uses before you ever need to file a claim.",
      },
      {
        q: "Does homeowners insurance cover flooding?",
        a: "No — flood coverage is a separate policy, typically through the National Flood Insurance Program or a private carrier. We'll tell you honestly whether your property's flood risk warrants it.",
      },
    ],
    pairsWith: ["auto", "umbrella", "valuable-items"],
    imageKey: "homeLuxuryExterior",
  },
  {
    id: "condo",
    name: "Condo Insurance",
    overview:
      "Condo ownership sits in a gray area between renting and owning a standalone home — your HOA covers the building shell, but everything inside your unit is on you.",
    whyLabel: "Why It Matters",
    why: "Many condo owners assume their HOA's master policy covers everything. It typically stops at the studs — leaving interior finishes, personal property, and liability uncovered without an individual policy.",
    optionsLabel: "Coverage Options",
    options: [
      "Interior structure & finishes",
      "Personal property",
      "Loss assessment coverage",
      "Personal liability",
      "Loss of use",
    ],
    pairsWith: ["auto", "umbrella"],
    imageKey: "condoBalconies",
  },
  {
    id: "renters",
    name: "Renters Insurance",
    overview:
      "Your landlord's policy covers the building — not your furniture, electronics, or liability if someone's hurt in your unit. Renters insurance is inexpensive protection most tenants skip.",
    whyLabel: "Why It Matters",
    why: "A single water damage incident or theft can wipe out thousands of dollars in personal belongings that your landlord's policy never covered in the first place.",
    optionsLabel: "Coverage Options",
    options: [
      "Personal property coverage",
      "Liability protection",
      "Loss of use (temporary housing)",
      "Medical payments to others",
      "Identity theft protection (optional)",
    ],
    pairsWith: ["auto", "valuable-items"],
    imageKey: "rentersLivingRoom",
  },
  {
    id: "rv",
    name: "RV Insurance",
    overview:
      "Whether it's a weekend camper or a full-time home on wheels, your RV needs coverage that reflects both how you use it and, if applicable, that it's your primary residence.",
    whyLabel: "Why It Matters",
    why: "RVs blend auto and homeowners risk — and a standard auto policy alone often won't cover the full value of a Class A motorhome or the personal belongings inside it.",
    optionsLabel: "Coverage Options",
    options: [
      "Liability & collision coverage",
      "Comprehensive coverage",
      "Full-timer coverage",
      "Personal belongings coverage",
      "Roadside assistance",
      "Vacation liability",
    ],
    imageKey: "rvCamperSunset",
  },
  {
    id: "boat",
    name: "Boat Insurance",
    overview:
      "From a weekend fishing boat to a lake-house pontoon, watercraft carry unique liability and physical damage risks that a homeowners policy typically excludes or limits.",
    whyLabel: "Why It Matters",
    why: "Many homeowners policies offer only minimal watercraft coverage, if any. A separate boat policy protects against liability, towing costs, and damage that a homeowners rider simply won't cover.",
    optionsLabel: "Coverage Options",
    options: [
      "Physical damage (hull, motor, trailer)",
      "Liability coverage",
      "Uninsured boater coverage",
      "Towing & assistance",
      "Personal effects on board",
      "Fuel spill liability",
    ],
    imageKey: "boatLakeSunset",
  },
  {
    id: "umbrella",
    name: "Umbrella Insurance",
    overview:
      "Umbrella coverage sits above your auto and home policies, adding extra liability protection once those underlying limits are exhausted — often for a surprisingly modest premium.",
    whyLabel: "Why It Matters",
    why: "A serious at-fault accident or lawsuit can exceed standard policy limits fast. Without umbrella coverage, your personal savings, home equity, and future income can be at risk.",
    optionsLabel: "Coverage Options",
    options: [
      "Extra liability above auto & home limits",
      "Personal injury protection",
      "Worldwide coverage",
      "Legal defense costs",
      "Coverage for rental properties you own",
    ],
    pairsWith: ["auto", "home"],
    imageKey: "umbrellaRain",
  },
  {
    id: "life",
    name: "Life Insurance",
    overview:
      "Life insurance isn't about you — it's about making sure the people who depend on you are financially protected if something happens to you.",
    whyLabel: "Why It Matters",
    why: "Whether it's replacing income, covering a mortgage, or funding a child's education, life insurance is one of the most direct ways to protect your family's financial future.",
    optionsLabel: "Coverage Options",
    options: [
      "Term life insurance",
      "Whole life insurance",
      "Universal life insurance",
      "Mortgage protection",
      "Final expense coverage",
    ],
    faqs: [
      {
        q: "Term or whole life — which is right for me?",
        a: "It depends on your goals, timeline, and budget. We walk through the honest trade-offs of each rather than defaulting you to the option with the highest commission.",
      },
    ],
    pairsWith: ["umbrella", "home"],
    imageKey: "familyOnCouch",
  },
  {
    id: "valuable-items",
    name: "Valuable Items Coverage",
    overview:
      "Jewelry, fine art, watches, collectibles, and other high-value items often exceed the limits built into a standard homeowners or renters policy.",
    whyLabel: "Why It Matters",
    why: "Most homeowners policies cap categories like jewelry at a few thousand dollars, regardless of actual value. A scheduled valuable items policy insures each piece at its appraised worth.",
    optionsLabel: "Coverage Options",
    options: [
      "Jewelry & watches",
      "Fine art & collectibles",
      "Musical instruments",
      "Firearms",
      "Worldwide coverage",
      "Coverage without a deductible (in many cases)",
    ],
    imageKey: "luxuryWatch",
  },
];

export const businessProducts: Product[] = [
  {
    id: "general-liability",
    name: "General Liability",
    overview:
      "Protects your business against claims of bodily injury, property damage, and advertising injury caused by your operations.",
    whyLabel: "Who Needs It",
    why: "Nearly every business, from a home-based consultancy to a retail storefront — often required by landlords, contracts, and clients before you can even do business with them.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Bodily injury & property damage",
      "Products & completed operations",
      "Personal & advertising injury",
      "Legal defense costs",
    ],
    industries: ["Retail", "Contractors", "Professional Services", "Restaurants"],
    pairsWith: ["workers-comp", "commercial-auto", "bop"],
    imageKey: "generalLiabilityConstruction",
  },
  {
    id: "workers-comp",
    name: "Workers' Compensation",
    overview:
      "Covers medical costs and lost wages for employees injured on the job — and protects your business from related lawsuits.",
    whyLabel: "Who Needs It",
    why: "Any business with employees. Texas doesn't universally mandate workers' comp, but most clients and general contractors require proof of coverage before hiring a subcontractor.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Medical expense coverage",
      "Lost wage replacement",
      "Employer's liability protection",
      "Return-to-work support",
    ],
    industries: ["Construction", "Manufacturing", "Healthcare", "Hospitality"],
    pairsWith: ["general-liability", "commercial-umbrella"],
    imageKey: "workersCompSafety",
  },
  {
    id: "commercial-auto",
    name: "Commercial Auto",
    overview:
      "Covers vehicles owned, leased, or used for business purposes — from a single work truck to a full delivery fleet.",
    whyLabel: "Who Needs It",
    why: "Any business that owns vehicles, or whose employees drive personal vehicles for work purposes — personal auto policies typically exclude business use entirely.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Liability & physical damage",
      "Hired & non-owned auto coverage",
      "Cargo coverage",
      "Roadside assistance for fleets",
    ],
    industries: ["Delivery & Logistics", "Contractors", "Field Services", "Real Estate"],
    pairsWith: ["general-liability", "commercial-umbrella"],
    imageKey: "commercialAutoFleet",
  },
  {
    id: "bop",
    name: "Business Owners Policy (BOP)",
    overview:
      "Bundles general liability and commercial property coverage into a single, cost-effective policy built for small and mid-sized businesses.",
    whyLabel: "Who Needs It",
    why: "Small to mid-sized businesses looking for foundational coverage without piecing together separate policies for liability and property.",
    optionsLabel: "Coverage Highlights",
    options: [
      "General liability included",
      "Commercial property coverage",
      "Business income & interruption",
      "Optional add-ons (cyber, equipment breakdown)",
    ],
    industries: ["Retail", "Offices", "Restaurants", "Small Contractors"],
    pairsWith: ["cyber", "commercial-umbrella"],
    imageKey: "bopBakery",
  },
  {
    id: "commercial-property",
    name: "Commercial Property",
    overview:
      "Protects the physical assets of your business — the building, equipment, inventory, and furnishings — against fire, storm, theft, and more.",
    whyLabel: "Who Needs It",
    why: "Any business that owns or leases a physical space with equipment, inventory, or furnishings worth protecting.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Building coverage (if owned)",
      "Business personal property",
      "Equipment & inventory",
      "Loss of income after a covered event",
    ],
    industries: ["Retail", "Warehousing", "Restaurants", "Professional Offices"],
    imageKey: "commercialPropertyOffice",
  },
  {
    id: "professional-liability",
    name: "Professional Liability (E&O)",
    overview:
      "Covers claims of negligence, errors, or omissions in the professional services or advice your business provides.",
    whyLabel: "Who Needs It",
    why: "Consultants, agents, advisors, and any service business where a client could claim your advice or work caused them financial harm.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Defense costs for covered claims",
      "Negligence & error coverage",
      "Coverage for prior work (with proper retro date)",
      "Settlement & judgment coverage",
    ],
    industries: ["Consultants", "Insurance & Financial Services", "Real Estate Agents", "Technology"],
    imageKey: "professionalLiabilityArchitect",
  },
  {
    id: "cyber",
    name: "Cyber Liability",
    overview:
      "Protects your business against data breaches, ransomware, and other cyber incidents — including the cost of notifying affected clients.",
    whyLabel: "Who Needs It",
    why: "Any business that stores client data, processes payments, or relies on email and cloud systems — which today is nearly every business, regardless of size.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Data breach response & notification costs",
      "Business interruption from a cyber event",
      "Ransomware & extortion coverage",
      "Third-party liability",
    ],
    industries: ["Professional Services", "Healthcare", "Retail & E-Commerce", "Financial Services"],
    imageKey: "cyberWorkspace",
  },
  {
    id: "commercial-umbrella",
    name: "Commercial Umbrella",
    overview:
      "Adds extra liability protection above your general liability, auto, and employer's liability limits once those are exhausted.",
    whyLabel: "Who Needs It",
    why: "Businesses with meaningful liability exposure — higher-risk operations, larger client contracts, or simply a desire for a wider safety margin.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Extra liability above underlying policies",
      "Broader coverage in some cases",
      "Legal defense for large claims",
      "Cost-effective added protection",
    ],
    industries: ["Construction", "Manufacturing", "Transportation", "Real Estate"],
    imageKey: "commercialUmbrellaSkyscrapers",
  },
  {
    id: "builders-risk",
    name: "Builders Risk",
    overview:
      "Covers a building under construction or renovation against fire, storm, theft, and vandalism until the project is complete.",
    whyLabel: "Who Needs It",
    why: "Contractors, developers, and property owners with an active construction or major renovation project.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Coverage during construction or renovation",
      "Materials & supplies on-site",
      "Theft & vandalism protection",
      "Soft costs coverage (optional)",
    ],
    industries: ["General Contractors", "Developers", "Property Owners", "Renovation Specialists"],
    imageKey: "buildersRiskCrane",
  },
  {
    id: "inland-marine",
    name: "Inland Marine",
    overview:
      "Covers business property, tools, and equipment that moves between job sites — property a standard commercial property policy typically excludes while in transit.",
    whyLabel: "Who Needs It",
    why: "Contractors, tradespeople, and any business that regularly transports tools, equipment, or goods between locations.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Contractor's tools & equipment",
      "Property in transit",
      "Goods held by others (bailee coverage)",
      "Installation floater coverage",
    ],
    industries: ["Contractors", "Tradespeople", "Equipment Rental", "Wholesale & Distribution"],
    imageKey: "inlandMarineMachinery",
  },
  {
    id: "commercial-crime",
    name: "Commercial Crime",
    overview:
      "Protects your business against losses from employee theft, forgery, embezzlement, and other criminal acts.",
    whyLabel: "Who Needs It",
    why: "Any business handling cash, inventory, or client funds — crime coverage fills a gap that general liability and property policies don't address.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Employee theft & dishonesty",
      "Forgery & alteration",
      "Computer & funds transfer fraud",
      "Third-party crime coverage",
    ],
    industries: ["Retail", "Financial Services", "Nonprofits", "Property Management"],
    imageKey: "commercialCrimeLock",
  },
  {
    id: "directors-officers",
    name: "Directors & Officers (D&O)",
    overview:
      "Protects the personal assets of company leadership against claims related to management decisions, and protects the company itself.",
    whyLabel: "Who Needs It",
    why: "Any business with a board, investors, or formal leadership structure — decisions made in good faith can still lead to costly litigation.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Personal asset protection for leadership",
      "Defense costs for management decisions",
      "Coverage for regulatory investigations",
      "Employment-related claim support",
    ],
    industries: ["Startups", "Nonprofits", "Private Companies", "Financial Services"],
    imageKey: "directorsOfficersSkyline",
  },
  {
    id: "epli",
    name: "Employment Practices Liability (EPLI)",
    overview:
      "Covers claims from employees alleging wrongful termination, discrimination, harassment, or other employment-related issues.",
    whyLabel: "Who Needs It",
    why: "Any business with employees — employment claims are among the fastest-growing sources of litigation for small and mid-sized businesses.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Wrongful termination claims",
      "Discrimination & harassment claims",
      "Retaliation claims",
      "Defense cost coverage",
    ],
    industries: ["Any business with employees", "Retail", "Healthcare", "Hospitality"],
    imageKey: "epliInterview",
  },
  {
    id: "surety-bonds",
    name: "Surety Bonds",
    overview:
      "Guarantees your business will meet contractual, licensing, or legal obligations — often required to bid on or win certain contracts.",
    whyLabel: "Who Needs It",
    why: "Contractors bidding on public projects, licensed professionals required to carry a bond, and businesses needing to guarantee performance to a client or agency.",
    optionsLabel: "Coverage Highlights",
    options: [
      "Bid bonds",
      "Performance & payment bonds",
      "License & permit bonds",
      "Fast turnaround for standard bond types",
    ],
    industries: ["Contractors", "Licensed Trades", "Public Sector Vendors", "Real Estate Developers"],
    imageKey: "suretyBondsSigning",
  },
  {
    id: "risk-management",
    name: "Risk Management Consulting",
    overview:
      "Beyond placing policies, we help identify and reduce the risks your business faces before they ever become a claim.",
    whyLabel: "Who Needs It",
    why: "Growing businesses that want a proactive partner, not just a policy renewal once a year — especially those in higher-risk industries.",
    optionsLabel: "What's Included",
    options: [
      "Risk assessment & gap analysis",
      "Safety program development",
      "Contract & certificate review",
      "Claims trend analysis",
    ],
    industries: ["Construction", "Manufacturing", "Healthcare", "Transportation"],
    imageKey: "riskManagementChart",
  },
];

export const coreValues = [
  { title: "Understanding First", description: "We never recommend before we've listened. Every relationship starts with your goals, not our product list." },
  { title: "Integrity Always", description: "We'll tell you the truth about your coverage, even when a lower premium would sound better in the moment." },
  { title: "Clients First", description: "Every decision is measured against one question: is this actually best for the client?" },
  { title: "Ownership & Excellence", description: "We take full ownership of outcomes, good and bad, and hold our own work to an excellent standard." },
  { title: "Relentless Communication", description: "We over-communicate rather than under-communicate — silence is never the answer." },
  { title: "Continuous Improvement", description: "We're never finished learning — the agency, the coverage landscape, and we ourselves keep improving." },
];

export const team = [
  { initials: "CH", name: "Cole Hindes", role: "Founder & CEO", description: "Sets the agency's strategy and standard, and works directly with clients as an advisor." },
  { initials: "CE", name: "Cade Edgar", role: "Chief Sales Officer", description: "Leads the sales team and works directly with clients to match coverage to their needs." },
  { initials: "LB", name: "Luke Berry", role: "Chief Financial Officer", description: "Oversees the agency's financial operations, from budgeting to day-to-day accounting." },
  { initials: "NN", name: "Nathan Norcross", role: "Chief Marketing Officer", description: "Leads marketing and brand strategy for Maroon Oak Brokerage." },
  { initials: "NK", name: "Niko Kundivich", role: "Chief Operating Officer", description: "Oversees compliance, audits, and day-to-day operations." },
];

// No fabricated reviews, ratings, or customer names/photos — replaced with an honest
// statement of service standards, per the site's editorial policy.
export const whatYouCanExpect = [
  { title: "Clear Explanations", description: "Plain-language answers about your coverage — no jargon, no pressure." },
  { title: "Honest Recommendations", description: "We tell you what's actually best for your situation, even when it isn't the biggest premium." },
  { title: "One Point of Contact", description: "A real advisor who knows your account — not a call center or a rotating queue." },
  { title: "Prompt Communication", description: "A one business day response standard, every time you reach out." },
  { title: "Proactive Renewal Reviews", description: "We review your coverage at renewal instead of letting it run on autopilot." },
  { title: "Help Navigating Claims", description: "Support understanding your policy and the claims process whenever you need it." },
];

export const homeFaqs = [
  {
    q: "Is Maroon Oak an insurance company or an agency?",
    a: "We're an independent brokerage, not a carrier. That means we shop your coverage across multiple carriers and represent your interests — not any single company's product line.",
  },
  {
    q: "Does it cost more to work with an independent brokerage?",
    a: "No. Premiums are set by the carrier, not the broker. Working with us costs the same as going direct — except you get a real advisor shopping the market on your behalf.",
  },
  {
    q: "How fast will I hear back after requesting a quote?",
    a: "Within one business day, every time. That's a standard we hold ourselves to, not just a goal.",
  },
  {
    q: "What happens if I need to file a claim?",
    a: "Claims are reported directly to the carrier your policy is written through, using the claims number on your ID card or declarations page — the fastest path to getting help. See our Claims page for step-by-step guidance.",
  },
  {
    q: "Do you write insurance for small businesses?",
    a: "Yes — general liability, BOP, workers' comp, commercial auto, cyber, D&O, and more. See our Business Insurance page for the full list.",
  },
];

export const glossary = [
  { term: "Premium", definition: "The amount you pay, usually monthly or annually, to keep an insurance policy active." },
  { term: "Deductible", definition: "The amount you pay out of pocket before your insurance coverage kicks in on a claim." },
  { term: "Liability Coverage", definition: "Coverage that pays for injury or damage you're legally responsible for causing to someone else." },
  { term: "Declarations Page", definition: "The summary page of your policy listing coverage types, limits, deductibles, and the carrier." },
  { term: "Underwriting", definition: "The carrier's process of evaluating risk to decide whether to offer coverage and at what price." },
  { term: "Endorsement", definition: "An add-on that changes or extends your base policy's coverage." },
  { term: "Replacement Cost", definition: "Coverage that pays to rebuild or replace property at today's prices, without depreciation." },
  { term: "Actual Cash Value", definition: "Replacement cost minus depreciation — typically a lower payout than replacement cost coverage." },
  { term: "Umbrella Policy", definition: "Extra liability coverage that sits above your auto and home policy limits." },
  { term: "Named Insured", definition: "The person or business specifically listed as covered on a policy." },
];

export type ResourceArticle = {
  category: string;
  title: string;
  description: string;
  slug: string;
  readingTime: string;
  lifeEvent?: string; // links this guide to a life-event card on Personal Insurance
  body: string[];
};

export const resourceArticles: ResourceArticle[] = [
  {
    category: "Personal Lines",
    title: "Auto Coverage: What Each Line Actually Means",
    description: "A plain-language breakdown of liability, collision, comprehensive, and uninsured motorist coverage.",
    slug: "auto-coverage-explained",
    readingTime: "4 min read",
    lifeEvent: "New Vehicle",
    body: [
      "Most auto policies bundle several distinct coverages into one document, and it's easy to assume they all work the same way. They don't.",
      "Liability coverage pays for injury or property damage you cause to someone else — it's the coverage Texas requires to legally drive, but state minimums are often far below what a serious accident actually costs.",
      "Collision coverage pays to repair or replace your own vehicle after an accident, regardless of fault. Comprehensive coverage handles everything else — theft, hail, fire, hitting an animal — the non-collision risks your car faces.",
      "Uninsured/underinsured motorist coverage protects you when the other driver doesn't carry enough insurance to cover your damages, which is more common than most drivers realize.",
      "The right mix depends on your vehicle's value, your other assets, and how much risk you're comfortable carrying yourself. We walk through that math with every client rather than defaulting to a generic package.",
    ],
  },
  {
    category: "Home & Renters",
    title: "The Homeowners Coverage Checklist",
    description: "Questions to ask before your next renewal — not just at claim time.",
    slug: "homeowners-coverage-checklist",
    readingTime: "5 min read",
    lifeEvent: "Buying a Home",
    body: [
      "Homeowners insurance is one of those policies people buy once at closing and rarely revisit — until something goes wrong.",
      "Start with your dwelling coverage limit: does it reflect what it would actually cost to rebuild your home today, at current construction and material costs, not what you paid for the home originally?",
      "Next, check your personal property coverage. Standard policies often cap categories like jewelry, art, and electronics well below their real value — a schedule or rider can close that gap.",
      "Ask how your policy defines replacement cost versus actual cash value, since the difference can mean thousands of dollars at claim time. And confirm what your policy excludes — flooding is the most common surprise, since it typically requires a separate policy entirely.",
      "A short annual review, ideally before renewal rather than after a loss, is the cheapest insurance policy you'll ever buy.",
    ],
  },
  {
    category: "Business Lines",
    title: "Does Your Business Actually Need Cyber Coverage?",
    description: "A straightforward look at who's exposed — and who genuinely isn't yet.",
    slug: "does-your-business-need-cyber-coverage",
    readingTime: "4 min read",
    body: [
      "Cyber liability used to feel like a coverage line for tech companies only. That's no longer true.",
      "Any business that stores customer data, processes payments, sends invoices by email, or uses cloud-based software has some exposure to a data breach, ransomware attack, or business email compromise.",
      "Cyber coverage typically helps with the costs of notifying affected customers, forensic investigation, business interruption from a cyber event, and legal exposure if customer data was compromised.",
      "The businesses most at risk are often the ones that assume they're too small to be a target — smaller companies are frequently targeted precisely because their defenses tend to be lighter.",
      "The honest answer to whether you need it depends on what data you hold and how you handle it. We'll walk through your actual exposure before recommending a policy.",
    ],
  },
  {
    category: "Personal Lines",
    title: "Renters Insurance: Why Your Landlord's Policy Isn't Enough",
    description: "What's actually covered (and not) when you rent, explained simply.",
    slug: "renters-insurance-explained",
    readingTime: "3 min read",
    lifeEvent: "First Apartment",
    body: [
      "Your landlord carries insurance on the building itself — the structure, the roof, the shared systems. That policy has nothing to do with your belongings or your personal liability.",
      "If a pipe bursts and ruins your furniture, or someone is injured in your apartment, your landlord's policy typically won't cover it. That's what renters insurance is for.",
      "A renters policy covers your personal property, provides liability protection, and can cover temporary housing costs if your unit becomes unlivable after a covered loss.",
      "It's also one of the least expensive policies available relative to the protection it provides, which is why it's worth having even for a first apartment with modest belongings.",
    ],
  },
  {
    category: "Business Lines",
    title: "General Liability vs. a BOP: Which Do You Need?",
    description: "Understanding the difference before a client or landlord asks you for proof of coverage.",
    slug: "general-liability-vs-bop",
    readingTime: "4 min read",
    body: [
      "General liability and a Business Owners Policy (BOP) are related, but they aren't interchangeable.",
      "General liability covers claims of bodily injury, property damage, and advertising injury caused by your business operations — it's often the minimum a landlord or client contract will require.",
      "A BOP bundles that same general liability coverage together with commercial property coverage in a single, typically more cost-effective policy, built for small and mid-sized businesses that need both.",
      "If you lease office space, own equipment, or carry inventory, a BOP is usually the more complete and efficient option. If you have no physical property to insure — a purely mobile or remote service business, for example — standalone general liability may be all you need.",
      "We'll look at what you actually own and operate before recommending one over the other.",
    ],
  },
  {
    category: "Life & Umbrella",
    title: "Term vs. Whole Life Insurance, Honestly Explained",
    description: "The real trade-offs of each — without the sales pitch.",
    slug: "term-vs-whole-life-insurance",
    readingTime: "5 min read",
    lifeEvent: "Getting Married",
    body: [
      "Term and whole life insurance solve different problems, and neither is universally \"better.\"",
      "Term life covers you for a set period — 10, 20, or 30 years — and pays a death benefit if you pass away during that term. It's generally the most affordable way to replace income, cover a mortgage, or protect a family during the years that protection matters most.",
      "Whole life insurance lasts your entire life and builds cash value over time, but comes at a significantly higher premium for the same death benefit.",
      "For most people early in life — buying a first home, starting a family — term life provides the most coverage for the most reasonable cost. Whole life can make sense as part of a longer-term financial or estate plan, but it isn't the right first step for everyone.",
      "We'll walk through the honest trade-offs of each against your actual goals and budget, rather than defaulting to the option with the highest commission.",
    ],
  },
];

export const downloads = [
  { name: "Homeowners Coverage Checklist", meta: "PDF · 2 pages" },
  { name: "Auto Insurance Buyer's Guide", meta: "PDF · 4 pages" },
  { name: "Small Business Insurance Starter Kit", meta: "PDF · 6 pages" },
  { name: "Annual Policy Review Worksheet", meta: "PDF · 1 page" },
];

export const claimsSteps = [
  { title: "Make Sure Everyone Is Safe", description: "Address any immediate safety concerns first — call 911 if needed." },
  { title: "Prevent Additional Damage When Possible", description: "Reasonable steps like shutting off water or covering a broken window can help, when it's safe to do so." },
  { title: "Document the Loss", description: "Photos, a written account, and any police or incident report numbers help your claim move faster." },
  { title: "Contact the Carrier", description: "Use the claims number shown on your insurance ID card or declarations page to report the loss directly." },
  { title: "Contact Maroon Oak If Assistance Is Needed", description: "We're glad to help you understand your coverage or track down carrier information at any point." },
];

export const whatYouNeed = [
  "Your policy number and carrier name (found on your ID card or declarations page)",
  "The date, time, and a brief written description of what happened",
  "Photos of any damage, taken before repairs or cleanup begin",
  "A police or incident report number, if one was filed",
  "Contact information for anyone else involved, if applicable",
];

export const claimTips = [
  "Keep a written log of every conversation, including dates, names, and reference numbers.",
  "Don't sign anything from a carrier or adjuster before reading it carefully — ask us if anything is unclear.",
  "Get repair estimates from more than one shop or contractor when possible.",
  "Save receipts for any temporary living or repair expenses — they may be reimbursable.",
  "Call us before assuming something isn't covered — policy language is rarely as simple as it looks.",
];

// Life-event cards on the Personal Insurance page ("Where Are You in Life?").
// `imageKey` (optional) points into `heroImages` for cards backed by real photography;
// cards without one fall back to an icon treatment in the component.
export const lifeEvents: { label: string; description: string; href: string; imageKey?: keyof typeof heroImages }[] = [
  { label: "Buying a Home", description: "Protecting a new home and everything that comes with owning it.", href: "/personal-insurance#home", imageKey: "neighborhoodAerial" },
  { label: "New Vehicle", description: "Making sure a new car, truck, or SUV is covered the right way from day one.", href: "/personal-insurance#auto" },
  { label: "Getting Married", description: "Combining households, policies, and long-term plans under one roof.", href: "/personal-insurance#umbrella" },
  { label: "Growing Family", description: "Life insurance and coverage that scales as your household grows.", href: "/personal-insurance#life", imageKey: "livingRoom" },
  { label: "First Apartment", description: "Affordable protection for your belongings and liability as a renter.", href: "/personal-insurance#renters" },
  { label: "College Student", description: "Coverage for valuables and vehicles away from home.", href: "/personal-insurance#valuable-items" },
  { label: "Boat or RV", description: "Protection built for time on the water or the road.", href: "/personal-insurance#boat" },
  { label: "Building Long-Term Protection", description: "Umbrella and life coverage that protects what you've built.", href: "/personal-insurance#umbrella" },
];

// Industry cards on the Business Insurance page ("Find Your Industry").
export const industries: { label: string; description: string; href: string; imageKey?: keyof typeof heroImages }[] = [
  { label: "General Contractors", description: "Coverage for every phase of a job, from groundbreak to final walkthrough.", href: "/business-insurance#general-liability", imageKey: "contractorSite" },
  { label: "Plumbers", description: "Liability and tool coverage built for work inside someone else's property.", href: "/business-insurance#general-liability", imageKey: "plumbersTools" },
  { label: "Electricians", description: "Protection against the higher-stakes risks of electrical work.", href: "/business-insurance#general-liability", imageKey: "contractorPortrait" },
  { label: "HVAC", description: "Coverage for installation, service calls, and the equipment you rely on.", href: "/business-insurance#inland-marine", imageKey: "hvacUnit" },
  { label: "Roofers", description: "Protection during construction and the risks that come with height.", href: "/business-insurance#builders-risk", imageKey: "roofersConstruction" },
  { label: "Landscapers", description: "Equipment and liability coverage for crews and gear on the move.", href: "/business-insurance#inland-marine", imageKey: "landscapersMower" },
  { label: "Painters", description: "Liability coverage built around interior and exterior project work.", href: "/business-insurance#general-liability", imageKey: "paintersRoller" },
  { label: "Commercial Real Estate", description: "Property and liability coverage for owned or managed buildings.", href: "/business-insurance#commercial-property", imageKey: "officeMeeting" },
  { label: "Restaurants", description: "A bundled policy built for kitchens, dining rooms, and foot traffic.", href: "/business-insurance#bop", imageKey: "restaurantsKitchen" },
  { label: "Retail", description: "Coverage for inventory, storefronts, and customer-facing risk.", href: "/business-insurance#bop", imageKey: "retailBoutique" },
  { label: "Professional Services", description: "Errors & omissions coverage for the advice and services you provide.", href: "/business-insurance#professional-liability", imageKey: "professionalServicesDesk" },
  { label: "Manufacturing", description: "Property and equipment coverage for production and warehousing.", href: "/business-insurance#commercial-property", imageKey: "warehouse" },
  { label: "Trucking / Fleet", description: "Commercial auto coverage built for businesses on the road.", href: "/business-insurance#commercial-auto", imageKey: "truckingHighway" },
];

// Guided explorer tiles for the homepage "What Are You Looking to Protect?" section.
export const explorerTiles = [
  { label: "Home", description: "Homeowners, condo, and renters coverage for where you live.", href: "/personal-insurance#home" },
  { label: "Vehicles", description: "Auto, motorcycle, RV, and boat coverage for how you get around.", href: "/personal-insurance#auto" },
  { label: "Family", description: "Life and umbrella coverage that protects the people who depend on you.", href: "/personal-insurance#life" },
  { label: "Business", description: "Foundational coverage for how your business actually operates.", href: "/business-insurance" },
  { label: "Employees", description: "Workers' comp and liability coverage for your team.", href: "/business-insurance#workers-comp" },
  { label: "Equipment", description: "Tools, inventory, and property coverage that travels with your work.", href: "/business-insurance#inland-marine" },
  { label: "Professional Services", description: "Errors & omissions coverage for the advice and services you provide.", href: "/business-insurance#professional-liability" },
];

// 4-step "how it works" process shown on the homepage.
export const processSteps = [
  { title: "Tell Us What You Need", description: "Start with a quick conversation or a short form — no pressure, no obligation." },
  { title: "We Learn About Your Situation", description: "We ask questions before we recommend anything, so coverage actually fits your life or business." },
  { title: "We Compare Available Options", description: "We shop across our carrier network to find coverage that matches your needs and budget." },
  { title: "You Choose With Confidence", description: "We explain the trade-offs in plain language so you can make the decision that's right for you." },
];
