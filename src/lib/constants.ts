export const SITE_NAME = "Daily Food Limited International";
export const SITE_SHORT_NAME = "Daily Food";
export const SITE_TAGLINE = "Be Smart, Eat Smart";
export const SITE_DESCRIPTION =
  "West African food manufacturer. Home to Boss Baker and Big Boss — baking an African champion from Ghana to 15 markets across the continent.";
export const SITE_URL = "https://www.dailyfoodintl.com";

export const COMPANY = {
  name: "Daily Food Limited International",
  shortName: "Daily Food",
  tagline: "Be Smart, Eat Smart",
  founded: 2017,
  headquarters: {
    city: "Accra",
    country: "Ghana",
    // TODO: confirm exact street address; deck only specifies Ghana base near Tema port.
    address: "Accra, Ghana",
    postalCode: "",
  },
  stats: {
    employees: "200+",
    countries: "15",
    brands: "2",
    consumerReach: "400M+",
  },
  financials: {
    // Per Nov 2022 management presentation to Sahel Capital.
    breakeven: "October 2022",
    debt: "0 — founder shareholder financed",
    revenuePotential: "$450M",
    marketSize: "$3.2B (cakes & biscuits, West Africa)",
  },
  socialLinks: {
    // TODO: confirm actual handles; placeholders retained.
    linkedin: "https://linkedin.com/company/daily-food-intl",
    facebook: "https://facebook.com/bossbakerghana",
    instagram: "https://instagram.com/bigboss.nigeria",
  },
  contact: {
    // TODO: confirm actual numbers/emails with client.
    phone: "+233 30 222 7890",
    email: "info@dailyfoodintl.com",
    investorEmail: "investors@dailyfoodintl.com",
    mediaEmail: "media@dailyfoodintl.com",
  },
} as const;

export const NAV_ITEMS = [
  {
    label: "About Us",
    href: "/about",
    megaMenu: [
      { label: "Our Story", href: "/about", description: "Learn about our journey" },
      { label: "Leadership", href: "/about#leadership", description: "Meet our executive team" },
      { label: "History", href: "/about#history", description: "Our milestones" },
      { label: "Mission & Values", href: "/about#values", description: "What drives us" },
    ],
  },
  {
    label: "Our Brands",
    href: "/brands",
    megaMenu: [
      { label: "Boss Baker", href: "/brands/boss-baker", description: "Cakes, creams, wafers and snacks" },
      { label: "Big Boss", href: "/brands/big-boss", description: "Everyday value snacking" },
      { label: "All Products", href: "/products", description: "Browse the full product catalog" },
    ],
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    megaMenu: [
      { label: "Planet", href: "/sustainability#planet", description: "Pursuing Net Zero" },
      { label: "People", href: "/sustainability#people", description: "30 to 200+ and growing" },
      { label: "Prosperity", href: "/sustainability#prosperity", description: "Food For All Africa" },
      { label: "Governance", href: "/sustainability#governance", description: "ISO 22000 & FSSC 22000" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    megaMenu: [
      { label: "Open Positions", href: "/careers", description: "See what's available" },
      { label: "Life at Daily Food", href: "/careers#culture", description: "Our people & culture" },
      { label: "Internships", href: "/careers#internships", description: "For students & graduates" },
      { label: "Benefits", href: "/careers#benefits", description: "Why join our team" },
    ],
  },
  {
    label: "News & Media",
    href: "/news",
    megaMenu: [
      { label: "All News", href: "/news", description: "Latest updates" },
      { label: "Press Releases", href: "/news?category=press-release", description: "Official announcements" },
      { label: "Company News", href: "/news?category=company-news", description: "Inside Daily Food" },
      { label: "Product Launches", href: "/news?category=product-launch", description: "New products" },
    ],
  },
] as const;
