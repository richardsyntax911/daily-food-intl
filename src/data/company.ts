/*
 * Company data
 * Source: Daily Food Management Presentation, 22 November 2022 (Sahel Capital).
 * Facts stated as of that date unless marked otherwise.
 * Items marked TODO still need client confirmation — deck was silent.
 */

export const timeline = [
  {
    year: 2017,
    title: "Company founded",
    description:
      "Daily Food is established in Ghana. Shatta Wale campaign launches the first consumer push; early learnings on mother-led purchase decisions shape the brand voice.",
  },
  {
    year: 2018,
    title: "The pivot begins",
    description:
      "Beef rolls fail to land in-market and the Fan Milk project is discontinued. The team explores pivot alternatives rather than force-fit the original plan.",
  },
  {
    year: 2019,
    title: "Pivot to cakes and $5M line investment",
    description:
      "Machines and market positioning pivot to cakes. A new production line is ordered in December (≈$5M investment). Geographic expansion into Côte d'Ivoire, Mali and Togo absorbs volume. Burger bun development and KFC registration begin.",
  },
  {
    year: 2020,
    title: "Covid response",
    description:
      "Schools close, wiping out a key channel. The team opens new export markets — Niger and Burkina Faso — to absorb the volumes left behind.",
  },
  {
    year: 2021,
    title: "4X capacity and Burger King certification",
    description:
      "New production line installed in May — a 4X capacity increase. Product range diversified to drive consumption; Liberia and Sierra Leone added. Q4 hits 80% utilisation of the new line. Burger King certification secured.",
  },
  {
    year: 2022,
    title: "Breakeven, 4 new markets, Burger King Africa",
    description:
      "Despite wheat/sugar price shocks and the Cedi collapse, Daily Food achieves breakeven in October. Enters Nigeria, Benin, Guinea-Bissau and Gabon. Signs on as Burger King Africa supplier.",
  },
];

/*
 * Leadership
 * The Nov 2022 deck names Geoffrey Fadoul and Jean-Paul Nassar as the presenters.
 * Titles here are best-inference; confirm with client.
 */
export const leadership = [
  {
    name: "Geoffrey Fadoul",
    title: "Co-Founder",
    imageUrl: "/images/team/geoffrey-fadoul.jpg",
    bio: "Co-founded Daily Food in Ghana in 2017 with a thesis that West Africa's baked goods market — 70% import-dominated — was wide open for a world-class local producer. Led the pivot to cakes in 2019 and the geographic expansion that followed.",
  },
  {
    name: "Jean-Paul Nassar",
    title: "Co-Founder",
    imageUrl: "/images/team/jean-paul-nassar.jpg",
    bio: "Co-founded Daily Food in 2017. Architect of the operations and capital discipline that took the company from startup to breakeven in October 2022 — financed entirely by founder equity, with zero debt.",
  },
  // TODO: expanded leadership team (Sales, Operations, Marketing, HR, Finance)
  // to be added once we have names, titles and bios from the client.
];

export const missionVisionValues = {
  mission:
    "Offering the smartest snack, for the smartest moment, made in the smartest way — taste and nutrition, affordability and quality in one snack.",
  vision:
    "To be a supplier of highest quality and affordable foods that bring joy to our consumers in Africa.",
  values: [
    {
      title: "We love our consumers and our brands",
      description:
        "Deep understanding of our customers and their desires — every product starts with what the African consumer actually wants.",
      icon: "heart-handshake",
    },
    {
      title: "We grow every day",
      description:
        "Growth drives all our thinking. Our people power it — 30 in 2018, 200 today, 350 by 2023.",
      icon: "users",
    },
    {
      title: "We do what's smart",
      description:
        "Treat everyone with care and integrity, deliver on commitments, and do what's right for our brands and the environment.",
      icon: "lightbulb",
    },
  ],
};

/*
 * Offices
 * Deck is Ghana-based only. Lagos/Nairobi/London references were fabricated
 * placeholder content and have been removed.
 */
export const offices = [
  {
    city: "Accra",
    country: "Ghana",
    type: "Headquarters & Production" as const,
    // TODO: confirm exact address with client.
    address: "Accra, Ghana",
    phone: "+233 30 222 7890",
  },
];

/*
 * Markets
 * 15 current + 3 future per the Nov 2022 deck ("Daily Food today" slide).
 */
export const markets = {
  /* 15 current markets per the Nov 2022 deck ("Daily Food today" slide).
     Grouped here by linguistic region to make the footprint auditable. */
  current: [
    /* Anglophone (5) */
    "Ghana",
    "Nigeria",
    "Liberia",
    "Sierra Leone",
    "Gambia",
    /* Francophone (10) */
    "Côte d'Ivoire",
    "Senegal",
    "Mali",
    "Burkina Faso",
    "Niger",
    "Togo",
    "Benin",
    "Cameroon",
    "Gabon",
    "Congo-Brazzaville",
  ],
  future: ["DRC", "Tanzania"],
};

/*
 * Partners and certifications (Nov 2022 deck, "Daily Food today" slide).
 */
/*
 * `scale` is an optional per-logo upscale applied after object-contain fits
 * the image to its box. Use values > 1 to bump compact wordmarks (e.g. RONDO)
 * to match the visual weight of wider marks in the marquee.
 */
export const partners: { name: string; logo: string; scale?: number }[] = [
  { name: "Burger King", logo: "/logos/partners/burger-king.png" },
  { name: "KFC", logo: "/logos/partners/kfc.png" },
  { name: "RONDO", logo: "/logos/partners/rondo.png", scale: 1.4 },
  { name: "DIOSNA", logo: "/logos/partners/diosna.png" },
  { name: "MANE", logo: "/logos/partners/mane.png" },
  { name: "Barry Callebaut", logo: "/logos/partners/barry-callebaut.png" },
  { name: "TT Italy", logo: "/logos/partners/tt-italy.png" },
  { name: "Puratos", logo: "/logos/partners/puratos.png" },
  { name: "Rocomamas", logo: "/logos/partners/rocomamas.svg" },
];

export const certifications = ["ISO 22000", "FSSC 22000"];

/*
 * Sustainability framework — Nov 2022 deck "With sustainability baked in" slide.
 * Four ESG pillars: Planet, People, Prosperity, Governance.
 */
export const sustainabilityInitiatives = [
  {
    title: "Planet — pursuing Net Zero",
    description:
      "We are pursuing a net zero and net positive contribution to the planet. Our string packaging design saves 20 million plastic bags per year, and we've optimised logistics by carton size to cut unit emissions.",
    icon: "leaf",
    stat: "20M",
    statLabel: "plastic bags saved per year",
  },
  {
    title: "People — our key asset",
    description:
      "Our employment grew from 30 to 200 people, with 350 targeted by 2023. We have delivered high-skill training to 60+ people since founding.",
    icon: "users",
    stat: "30→200",
    statLabel: "employees grown since 2018",
  },
  {
    title: "Prosperity — Food For All Africa",
    description:
      "We chair the Advisory Board of Food For All Africa, an NGO that feeds 10,000+ people per month. We also localise inputs to source more from the communities that host us.",
    icon: "heart",
    stat: "10k+",
    statLabel: "people fed per month via our NGO partnership",
  },
  {
    title: "Governance — sustainability from the top down",
    description:
      "Our Board observes best practices, and sustainability is a recurring agenda item — not an afterthought. ISO 22000 and FSSC 22000 certified.",
    icon: "shield-check",
    stat: "ISO + FSSC",
    statLabel: "22000 certified",
  },
];
