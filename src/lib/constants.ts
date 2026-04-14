export const SITE_NAME = "Daily Food Limited International";
export const SITE_SHORT_NAME = "Daily Food Intl";
export const SITE_TAGLINE = "Nourishing Lives, Building Brands";
export const SITE_DESCRIPTION =
  "Africa's leading food manufacturing company. Home to Boss Baker, Golden Harvest, FreshBite, Mama's Kitchen, and TropiFruit.";
export const SITE_URL = "https://www.dailyfoodintl.com";

export const COMPANY = {
  name: "Daily Food Limited International",
  shortName: "Daily Food Intl",
  tagline: "Nourishing Lives, Building Brands",
  founded: 2008,
  headquarters: {
    city: "Accra",
    country: "Ghana",
    address: "15 Industrial Avenue, North Industrial Area",
    postalCode: "GA-100-5620",
  },
  stockTicker: {
    symbol: "DFL",
    exchange: "GSE",
    price: "4.25",
    change: "+0.12",
    changePercent: "+2.9%",
  },
  stats: {
    employees: "3,500+",
    countries: "12",
    brands: "5",
    factorySquareFt: "250,000",
  },
  socialLinks: {
    linkedin: "https://linkedin.com/company/daily-food-intl",
    twitter: "https://twitter.com/dailyfoodintl",
    facebook: "https://facebook.com/dailyfoodintl",
    instagram: "https://instagram.com/dailyfoodintl",
    youtube: "https://youtube.com/@dailyfoodintl",
  },
  contact: {
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
      { label: "Boss Baker", href: "/brands/boss-baker", description: "Food on the go" },
      { label: "Golden Harvest", href: "/brands/golden-harvest", description: "Nature's finest grains" },
      { label: "FreshBite", href: "/brands/freshbite", description: "Snack smart, live bold" },
      { label: "Mama's Kitchen", href: "/brands/mamas-kitchen", description: "Home taste, anywhere" },
      { label: "TropiFruit", href: "/brands/tropifruit", description: "Pure tropical refreshment" },
      { label: "All Products", href: "/products", description: "Browse the full product catalog" },
    ],
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    megaMenu: [
      { label: "Our Commitments", href: "/sustainability", description: "ESG strategy overview" },
      { label: "Environment", href: "/sustainability#environment", description: "Reducing our footprint" },
      { label: "Community", href: "/sustainability#community", description: "Empowering communities" },
      { label: "Supply Chain", href: "/sustainability#supply-chain", description: "Responsible sourcing" },
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
