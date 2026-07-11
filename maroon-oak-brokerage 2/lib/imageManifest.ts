// ---------------------------------------------------------------------------
// Maroon Oak Brokerage — Image Manifest
// ---------------------------------------------------------------------------
// This is the single source of truth for every photograph used anywhere on
// the site. Every entry is unique: no two entries point to the same
// underlying photo, and every entry is consumed in exactly one place
// (one PageHero, one ImageSplit, one PhotoCard, or one CoverageBlock).
//
// `usedIn` is not read by any component — it exists purely so a human (or
// `scripts/verify-image-manifest.mjs`) can see at a glance where an image
// renders, which makes accidental reuse obvious during code review.
//
// CURRENT SOURCE: Unsplash, License-verified per entry (unsplash.com/license
// — free to use, not Unsplash+/premium). This sandbox has no outbound network
// access, so these are hosted on Unsplash's CDN via next/image rather than
// downloaded to public/images/. Swapping to local files later is a one-line
// change per entry (replace `url` with a local `/images/...` path) — nothing
// else in the codebase needs to change, since every component reads through
// this manifest.
//
// If you supply your own licensed photo library, drop files into
// public/images/<section>/<name>.jpg and update the corresponding `url`
// fields below to `/images/<section>/<name>.jpg`.
// ---------------------------------------------------------------------------

export type ManifestImage = {
  url: string;
  alt: string;
  credit: string;
  usedIn: string;
};

export const imageManifest = {
  // ---- Page hero backgrounds (PageHero component, one per page) ----------
  cityDusk: {
    url: "https://images.unsplash.com/photo-1666969565832-b55bf42a900d?auto=format&fit=crop&w=2400&q=80",
    alt: "City skyline at dusk",
    credit: "Justin Wallace / Unsplash",
    usedIn: "Resources page — PageHero background",
  },
  bridge: {
    url: "https://images.unsplash.com/photo-1641576369369-870158b0d11b?auto=format&fit=crop&w=2400&q=80",
    alt: "Long bridge spanning a river into the city",
    credit: "Steven Pahel / Unsplash",
    usedIn: "Contact page — PageHero background",
  },
  skylineDay: {
    url: "https://images.unsplash.com/photo-1611005813863-6c1bc3d3908b?auto=format&fit=crop&w=2400&q=80",
    alt: "City skyline under a blue sky",
    credit: "Max Miner / Unsplash",
    usedIn: "Personal Insurance page — PageHero background",
  },
  smallTownDusk: {
    url: "https://images.unsplash.com/photo-1761839259488-2bdeeae794f5?auto=format&fit=crop&w=2400&q=80",
    alt: "Small town main street lined with local businesses at dusk",
    credit: "Land O'Lakes, Inc. / Unsplash",
    usedIn: "About page — PageHero background",
  },
  dataCenterAerial: {
    url: "https://images.unsplash.com/photo-1715026323215-a2dbb71272f6?auto=format&fit=crop&w=2400&q=80",
    alt: "Aerial view of a large commercial industrial building",
    credit: "Geoffrey Moffett / Unsplash",
    usedIn: "Business Insurance page — PageHero background",
  },
  claimsHeroRoof: {
    url: "https://images.unsplash.com/photo-1675522192517-712901192338?auto=format&fit=crop&w=2400&q=80",
    alt: "Close-up of a home's roofline against a blue sky",
    credit: "Lucas de Moura / Unsplash",
    usedIn: "Claims page — PageHero background",
  },

  // ---- Home page toggle + sections ----------------------------------------
  homeExterior: {
    url: "https://images.unsplash.com/photo-1668911494509-14baf3b42fda?auto=format&fit=crop&w=2000&q=80",
    alt: "Modern home exterior with a driveway",
    credit: "Point3D Commercial Imaging Ltd. / Unsplash",
    usedIn: "Home page — Personal/Business hero toggle (Personal side)",
  },
  businessOwnerBoutique: {
    url: "https://images.unsplash.com/photo-1753161618091-b4cf35b9aa99?auto=format&fit=crop&w=2000&q=80",
    alt: "Business owner standing in her boutique storefront",
    credit: "Vitaly Gariev / Unsplash",
    usedIn: "Home page — Personal/Business hero toggle (Business side)",
  },
  office: {
    url: "https://images.unsplash.com/photo-1741682740026-4147b4197806?auto=format&fit=crop&w=2400&q=80",
    alt: "Modern office overlooking a city skyline",
    credit: "David Kristianto / Unsplash",
    usedIn: "Home page — full-bleed section image",
  },
  livingRoomAlt: {
    url: "https://images.unsplash.com/photo-1551806235-a05dd14a54c7?auto=format&fit=crop&w=2000&q=80",
    alt: "Bright living room interior in a family home",
    credit: "Louis Hansel / Unsplash",
    usedIn: "Home page — ImageSplit section",
  },
  industrialDrone: {
    url: "https://images.unsplash.com/photo-1479356558243-f9d175b1abea?auto=format&fit=crop&w=2400&q=80",
    alt: "Drone shot of white industrial buildings",
    credit: "Jason Schuller / Unsplash",
    usedIn: "Home page — ImageSplit section",
  },
  teamOffice: {
    url: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?auto=format&fit=crop&w=2000&q=80",
    alt: "Four colleagues standing together in a modern office",
    credit: "Vitaly Gariev / Unsplash",
    usedIn: "Home page — Meet Maroon Oak section",
  },

  // ---- About page ----------------------------------------------------------
  advisorConversation: {
    url: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=2000&q=80",
    alt: "Two colleagues in conversation at a table",
    credit: "Christina @ wocintechchat.com / Unsplash",
    usedIn: "About page — 'Insurance Starts With People' ImageSplit",
  },
  planningSession: {
    url: "https://images.unsplash.com/photo-1758519288948-e3c87d2d78d8?auto=format&fit=crop&w=2000&q=80",
    alt: "Two colleagues reviewing documents together at a table",
    credit: "Vitaly Gariev / Unsplash",
    usedIn: "About page — 'Independent Brokerage' ImageSplit",
  },

  // ---- Claims page -----------------------------------------------------------
  roofRestoration: {
    url: "https://images.unsplash.com/photo-1635424709961-f3a150459ad4?auto=format&fit=crop&w=2000&q=80",
    alt: "Two workers inspecting and repairing a roof",
    credit: "Raze Solar / Unsplash",
    usedIn: "Claims page — ImageSplit section",
  },

  // ---- Personal Insurance page -----------------------------------------------
  modernKitchen: {
    url: "https://images.unsplash.com/photo-1761656630581-69a58e4e1c09?auto=format&fit=crop&w=2000&q=80",
    alt: "Bright modern kitchen with wooden cabinets",
    credit: "Clay Banks / Unsplash",
    usedIn: "Personal Insurance page — 'Protection Journey' ImageSplit",
  },
  familyBeachSunset: {
    url: "https://images.unsplash.com/photo-1709216461598-018ae6307dc0?auto=format&fit=crop&w=2000&q=80",
    alt: "Family walking together on the beach at sunset",
    credit: "Chris Hardy / Unsplash",
    usedIn: "Personal Insurance page — 'Built to Last' ImageSplit",
  },

  // ---- Business Insurance page ------------------------------------------------
  retailShopkeeper: {
    url: "https://images.unsplash.com/photo-1759334928681-dc7ad674138e?auto=format&fit=crop&w=2000&q=80",
    alt: "Shopkeeper standing in a retail storefront",
    credit: "Alex Boyd / Unsplash",
    usedIn: "Business Insurance page — 'Meet Businesses Like Yours' ImageSplit",
  },
  warehouseBoxes: {
    url: "https://images.unsplash.com/photo-1775880306542-57d598d773a0?auto=format&fit=crop&w=2000&q=80",
    alt: "Shelves filled with packaged boxes in natural light",
    credit: "Adhitya Sibikumar / Unsplash",
    usedIn: "Business Insurance page — 'First Policy to Full Program' ImageSplit",
  },

  // ---- Contact page -----------------------------------------------------------
  officeWindowRoom: {
    url: "https://images.unsplash.com/photo-1728581665834-82b3b0320d28?auto=format&fit=crop&w=2000&q=80",
    alt: "Welcoming office room with a long table and large window",
    credit: "Annie Spratt / Unsplash",
    usedIn: "Contact page — ImageSplit section",
  },

  // ---- Resources page ---------------------------------------------------------
  laptopNotes: {
    url: "https://images.unsplash.com/photo-1713947506179-baa795d9c893?auto=format&fit=crop&w=2000&q=80",
    alt: "Woman taking notes at a laptop",
    credit: "Vitaly Gariev / Unsplash",
    usedIn: "Resources page — 'Education Before a Quote' ImageSplit",
  },

  // ---- Life-event cards (Personal Insurance page, LifeEventCards) -------------
  neighborhoodAerial: {
    url: "https://images.unsplash.com/photo-1765106893273-980e5bf89a7c?auto=format&fit=crop&w=2000&q=80",
    alt: "Aerial view of a suburban neighborhood with winding streets",
    credit: "Ahnaf Tahsin / Unsplash",
    usedIn: "LifeEventCards — 'Buying a Home' card",
  },
  livingRoom: {
    url: "https://images.unsplash.com/photo-1761319914911-71b059a655d8?auto=format&fit=crop&w=2000&q=80",
    alt: "Cozy living room with fireplace and large windows",
    credit: "Clay Banks / Unsplash",
    usedIn: "LifeEventCards — 'Growing Family' card",
  },

  // ---- Industry cards (Business Insurance page, IndustryCards) ----------------
  contractorSite: {
    url: "https://images.unsplash.com/photo-1653280668407-50b18ec4ef42?auto=format&fit=crop&w=2000&q=80",
    alt: "Construction crew working on a building under construction",
    credit: "shraga kopstein / Unsplash",
    usedIn: "IndustryCards — 'General Contractors' card",
  },
  contractorPortrait: {
    url: "https://images.unsplash.com/photo-1751054571128-30d45eccbe42?auto=format&fit=crop&w=1600&q=80",
    alt: "Contractor on a jobsite in morning light",
    credit: "John Kakuk / Unsplash",
    usedIn: "IndustryCards — 'Electricians' card",
  },
  officeMeeting: {
    url: "https://images.unsplash.com/photo-1758518727707-b023e285b709?auto=format&fit=crop&w=2000&q=80",
    alt: "Business professionals in a meeting in a modern office",
    credit: "Vitaly Gariev / Unsplash",
    usedIn: "IndustryCards — 'Commercial Real Estate' card",
  },
  warehouse: {
    url: "https://images.unsplash.com/photo-1645736315000-6f788915923b?auto=format&fit=crop&w=2000&q=80",
    alt: "Forklift moving pallets in a warehouse",
    credit: "Bernd Dittrich / Unsplash",
    usedIn: "IndustryCards — 'Manufacturing' card",
  },
  plumbersTools: {
    url: "https://images.unsplash.com/photo-1645449781249-27c94448f6f7?auto=format&fit=crop&w=2000&q=80",
    alt: "Hands in work gloves using pliers on the job",
    credit: "Jimmy Nilsson Masth / Unsplash",
    usedIn: "IndustryCards — 'Plumbers' card",
  },
  hvacUnit: {
    url: "https://images.unsplash.com/photo-1718203862467-c33159fdc504?auto=format&fit=crop&w=2000&q=80",
    alt: "White air conditioning unit mounted on a brick wall",
    credit: "Everett Pachmann / Unsplash",
    usedIn: "IndustryCards — 'HVAC' card",
  },
  roofersConstruction: {
    url: "https://images.unsplash.com/photo-1765808376624-aba74b96859f?auto=format&fit=crop&w=2000&q=80",
    alt: "Two workers on a roof at a construction site",
    credit: "Mugabi Owen / Unsplash",
    usedIn: "IndustryCards — 'Roofers' card",
  },
  landscapersMower: {
    url: "https://images.unsplash.com/photo-1734303023491-db8037a21f09?auto=format&fit=crop&w=2000&q=80",
    alt: "Landscaper mowing a lawn with a lawn mower",
    credit: "Michael Smith / Unsplash",
    usedIn: "IndustryCards — 'Landscapers' card",
  },
  paintersRoller: {
    url: "https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?auto=format&fit=crop&w=2000&q=80",
    alt: "Painter applying paint to a wall with a roller",
    credit: "Ernys / Unsplash",
    usedIn: "IndustryCards — 'Painters' card",
  },
  restaurantsKitchen: {
    url: "https://images.unsplash.com/photo-1676128923106-1f4bf988f347?auto=format&fit=crop&w=2000&q=80",
    alt: "Chefs working together in a restaurant kitchen",
    credit: "hybridnighthawk / Unsplash",
    usedIn: "IndustryCards — 'Restaurants' card",
  },
  retailBoutique: {
    url: "https://images.unsplash.com/photo-1761090617068-f1b3257d27ad?auto=format&fit=crop&w=2000&q=80",
    alt: "Racks of clothing displayed in a boutique storefront",
    credit: "Tyler Davis / Unsplash",
    usedIn: "IndustryCards — 'Retail' card",
  },
  professionalServicesDesk: {
    url: "https://images.unsplash.com/photo-1642522029686-5485ea7e6042?auto=format&fit=crop&w=2000&q=80",
    alt: "Professional working at a desk in an office",
    credit: "Carrie Allen / Unsplash",
    usedIn: "IndustryCards — 'Professional Services' card",
  },
  truckingHighway: {
    url: "https://images.unsplash.com/photo-1721148774264-357cf2c6739a?auto=format&fit=crop&w=2000&q=80",
    alt: "Pickup truck driving down a highway at sunset",
    credit: "aiden / Unsplash",
    usedIn: "IndustryCards — 'Trucking / Fleet' card",
  },

  // ---- Personal Insurance coverage cards / detail blocks ----------------------
  autoSuvRoad: {
    url: "https://images.unsplash.com/photo-1581368242547-06eef3599510?auto=format&fit=crop&w=2000&q=80",
    alt: "White SUV on a country road at sunset",
    credit: "Jonathan Kemper / Unsplash",
    usedIn: "CoverageBlock — Auto Insurance",
  },
  motorcycleMountainRoad: {
    url: "https://images.unsplash.com/photo-1682773083909-75b493f34ffe?auto=format&fit=crop&w=2000&q=80",
    alt: "Motorcycle rider on a curvy mountain highway",
    credit: "Tobias Doering / Unsplash",
    usedIn: "CoverageBlock — Motorcycle Insurance",
  },
  homeLuxuryExterior: {
    url: "https://images.unsplash.com/photo-1713789327173-fe5450ec66d3?auto=format&fit=crop&w=2000&q=80",
    alt: "Modern country home with a large lawn",
    credit: "Roger Starnes Sr / Unsplash",
    usedIn: "CoverageBlock — Homeowners Insurance",
  },
  condoBalconies: {
    url: "https://images.unsplash.com/photo-1768638687896-35bde623d532?auto=format&fit=crop&w=2000&q=80",
    alt: "Exterior of a modern condo building with balconies",
    credit: "Maximilian Bungart / Unsplash",
    usedIn: "CoverageBlock — Condo Insurance",
  },
  rentersLivingRoom: {
    url: "https://images.unsplash.com/photo-1768609239321-1cfe14893e80?auto=format&fit=crop&w=2000&q=80",
    alt: "Modern minimalist apartment living room with white furniture",
    credit: "rawkkim / Unsplash",
    usedIn: "CoverageBlock — Renters Insurance",
  },
  rvCamperSunset: {
    url: "https://images.unsplash.com/photo-1711475312495-705611a9d52d?auto=format&fit=crop&w=2000&q=80",
    alt: "Camper van with the sun setting in the background",
    credit: "Alexander Andrews / Unsplash",
    usedIn: "CoverageBlock — RV Insurance",
  },
  boatLakeSunset: {
    url: "https://images.unsplash.com/photo-1724742433321-d65f4e425065?auto=format&fit=crop&w=2000&q=80",
    alt: "Boat floating on a lake under a sunset",
    credit: "Ish Consul / Unsplash",
    usedIn: "CoverageBlock — Boat Insurance",
  },
  umbrellaRain: {
    url: "https://images.unsplash.com/photo-1694538347217-f49f5d73b20b?auto=format&fit=crop&w=2000&q=80",
    alt: "Person holding an umbrella in the rain",
    credit: "Musa Ortaç / Unsplash",
    usedIn: "CoverageBlock — Umbrella Insurance",
  },
  familyOnCouch: {
    url: "https://images.unsplash.com/photo-1758687126864-96b61e1b3af0?auto=format&fit=crop&w=2000&q=80",
    alt: "Happy family of three spending time together on a couch",
    credit: "Vitaly Gariev / Unsplash",
    usedIn: "CoverageBlock — Life Insurance",
  },
  luxuryWatch: {
    url: "https://images.unsplash.com/photo-1758071348980-d1eed770f34f?auto=format&fit=crop&w=2000&q=80",
    alt: "Close-up of a luxury watch face",
    credit: "Igor bispo / Unsplash",
    usedIn: "CoverageBlock — Valuable Items Coverage",
  },

  // ---- Business Insurance coverage cards / detail blocks -----------------------
  generalLiabilityConstruction: {
    url: "https://images.unsplash.com/photo-1667207591118-73d5eeaeed96?auto=format&fit=crop&w=2000&q=80",
    alt: "Men wearing hard hats working on an active construction project",
    credit: "Sim Kimhort / Unsplash",
    usedIn: "CoverageBlock — General Liability",
  },
  workersCompSafety: {
    url: "https://images.unsplash.com/photo-1628147529780-36964fbb8d54?auto=format&fit=crop&w=2000&q=80",
    alt: "Construction worker in a safety vest and hard hat",
    credit: "Mufid Majnun / Unsplash",
    usedIn: "CoverageBlock — Workers' Compensation",
  },
  commercialAutoFleet: {
    url: "https://images.unsplash.com/photo-1756888218421-04abcc40ffe6?auto=format&fit=crop&w=2000&q=80",
    alt: "Several heavy-duty fleet trucks parked outside a building",
    credit: "Forest Plum / Unsplash",
    usedIn: "CoverageBlock — Commercial Auto",
  },
  bopBakery: {
    url: "https://images.unsplash.com/photo-1641233793781-80c17e84a4ae?auto=format&fit=crop&w=2000&q=80",
    alt: "Small business owner standing behind the counter in a bakery",
    credit: "Alina Belogolova / Unsplash",
    usedIn: "CoverageBlock — Business Owners Policy (BOP)",
  },
  commercialPropertyOffice: {
    url: "https://images.unsplash.com/photo-1778961419928-2968ddd57c05?auto=format&fit=crop&w=2000&q=80",
    alt: "Modern commercial office building with glass and brick facade",
    credit: "Linus Belanger / Unsplash",
    usedIn: "CoverageBlock — Commercial Property",
  },
  professionalLiabilityArchitect: {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
    alt: "Architect working on a draft with a pencil and ruler",
    credit: "Daniel McCullough / Unsplash",
    usedIn: "CoverageBlock — Professional Liability (E&O)",
  },
  cyberWorkspace: {
    url: "https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=2000&q=80",
    alt: "Modern technology workspace with illuminated keyboard and code on screen",
    credit: "Jakub Żerdzicki / Unsplash",
    usedIn: "CoverageBlock — Cyber Liability",
  },
  commercialUmbrellaSkyscrapers: {
    url: "https://images.unsplash.com/photo-1742071121791-c414570cd970?auto=format&fit=crop&w=2000&q=80",
    alt: "Low-angle view of modern glass skyscrapers",
    credit: "Bernd Dittrich / Unsplash",
    usedIn: "CoverageBlock — Commercial Umbrella",
  },
  buildersRiskCrane: {
    url: "https://images.unsplash.com/photo-1644221150186-5d785a471f44?auto=format&fit=crop&w=2000&q=80",
    alt: "Large building under construction next to a crane",
    credit: "Tomas / Unsplash",
    usedIn: "CoverageBlock — Builders Risk",
  },
  inlandMarineMachinery: {
    url: "https://images.unsplash.com/photo-1780389098001-e641e50aeebd?auto=format&fit=crop&w=2000&q=80",
    alt: "Heavy machinery working on an urban construction site",
    credit: "Andrii Solok / Unsplash",
    usedIn: "CoverageBlock — Inland Marine",
  },
  commercialCrimeLock: {
    url: "https://images.unsplash.com/photo-1614064745091-88275f86c5ef?auto=format&fit=crop&w=2000&q=80",
    alt: "Padlocks symbolizing protection against theft and fraud",
    credit: "FlyD / Unsplash",
    usedIn: "CoverageBlock — Commercial Crime",
  },
  directorsOfficersSkyline: {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
    alt: "Low angle photo of city high-rise buildings during daytime",
    credit: "Sean Pollock / Unsplash",
    usedIn: "CoverageBlock — Directors & Officers (D&O)",
  },
  epliInterview: {
    url: "https://images.unsplash.com/photo-1758518731694-41ea7fa6a2d9?auto=format&fit=crop&w=2000&q=80",
    alt: "Manager interviewing a candidate in a modern office",
    credit: "Vitaly Gariev / Unsplash",
    usedIn: "CoverageBlock — Employment Practices Liability (EPLI)",
  },
  suretyBondsSigning: {
    url: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?auto=format&fit=crop&w=2000&q=80",
    alt: "Close-up of hands signing a document with a pen",
    credit: "Jakub Żerdzicki / Unsplash",
    usedIn: "CoverageBlock — Surety Bonds",
  },
  riskManagementChart: {
    url: "https://images.unsplash.com/photo-1737442528819-5526652236e8?auto=format&fit=crop&w=2000&q=80",
    alt: "Person reviewing a financial chart on a laptop",
    credit: "Jakub Żerdzicki / Unsplash",
    usedIn: "CoverageBlock — Risk Management Consulting",
  },
} as const;

export type ImageManifestKey = keyof typeof imageManifest;
export type ManifestEntry = (typeof imageManifest)[ImageManifestKey];
