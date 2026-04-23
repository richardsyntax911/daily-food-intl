/*
 * News & Milestones
 *
 * The live news feed (2023 onwards) is TODO — to be supplied by the client's
 * communications team. Until then, this file holds deck-backed archival
 * milestones from the Nov 2022 management deck. Each entry summarises a real
 * company milestone, without fabricating executive quotes or revenue figures.
 */

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Press Release" | "Company News" | "Product Launch" | "Sustainability";
  imageUrl: string;
  publishedDate: string;
  author: string;
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "breakeven-october-2022",
    title: "Daily Food Reaches Breakeven, Debt-Free and Founder-Financed",
    excerpt:
      "After a year of wheat, sugar and Cedi shocks, Daily Food hits operational breakeven in October 2022 — entirely on founder equity, with zero debt.",
    content: `Daily Food Limited International reached operational breakeven in October 2022, a milestone achieved entirely on founder shareholder equity with no external debt on the balance sheet.

The milestone comes against a backdrop of severe cost pressure across 2022: global wheat and sugar prices spiked, and the Ghanaian Cedi saw a sharp devaluation against the dollar. Despite those headwinds, the company expanded into four new markets — Nigeria, Benin, Guinea-Bissau and Gabon — and signed on as a Burger King Africa supplier in the same year.

Founded in Ghana in 2017 with a thesis that West Africa's 70% import-dominated baked goods market was underserved by local producers, Daily Food today supplies 15 countries across West and Central Africa through its Boss Baker and Big Boss brands.`,
    category: "Company News",
    imageUrl: "/images/news/breakeven-2022.jpg",
    publishedDate: "2022-10-31",
    author: "Daily Food Communications",
    featured: true,
  },
  {
    id: "2",
    slug: "burger-king-africa-supplier",
    title: "Daily Food Signs On as Burger King Africa Supplier",
    excerpt:
      "Boss Baker burger buns are now certified for Burger King restaurants across the African continent.",
    content: `Daily Food Limited International has signed on as the continental supplier of burger buns to Burger King Africa, extending a relationship that began with Burger King certification in 2021.

The certification builds on Boss Baker's existing quick-service restaurant partnerships, including KFC, Rocomamas and others. All production runs through Daily Food's ISO 22000 and FSSC 22000 certified facility in Ghana.

The deal reinforces Daily Food's position as a world-class local producer in a baked goods category long dominated by imports.`,
    category: "Press Release",
    imageUrl: "/images/news/burger-king-supplier.jpg",
    publishedDate: "2022-08-15",
    author: "Daily Food Communications",
    featured: true,
  },
  {
    id: "3",
    slug: "4x-capacity-expansion-2021",
    title: "Daily Food Quadruples Production Capacity, Hits 80% Utilisation",
    excerpt:
      "A new production line installed in May 2021 delivers a 4X capacity increase; Q4 closes at 80% utilisation of the expanded line.",
    content: `Daily Food Limited International has brought a new production line online, quadrupling total manufacturing capacity at its Ghana facility. By the fourth quarter of 2021, the new line was operating at 80% utilisation.

The capacity expansion was paired with product-range diversification to drive consumption, and with geographic expansion into Liberia and Sierra Leone. The company also received Burger King certification during the year, positioning Boss Baker as a certified burger-bun supplier for the quick-service restaurant market.

The expansion follows the 2019 pivot to cakes and the $5 million production line investment that preceded it — a turnaround from the company's early beef-roll product that failed to land in-market.`,
    category: "Company News",
    imageUrl: "/images/news/capacity-expansion.jpg",
    publishedDate: "2021-12-15",
    author: "Daily Food Communications",
    featured: false,
  },
  {
    id: "4",
    slug: "covid-export-markets-niger-burkina",
    title: "Covid-Era Pivot: New Export Markets Open in Niger and Burkina Faso",
    excerpt:
      "With schools closing across the region, Daily Food opens new export markets in Niger and Burkina Faso to absorb displaced volume.",
    content: `With Covid-19 closing schools across the West African region and wiping out a key distribution channel, Daily Food Limited International has opened new export markets in Niger and Burkina Faso to absorb the displaced volume.

The move builds on the company's existing footprint in Ghana, Côte d'Ivoire, Mali and Togo, and follows the 2019 pivot from beef rolls to cakes that was underpinned by a $5 million production line investment.

The company continues to develop burger bun capabilities and has begun KFC registration as part of a broader quick-service restaurant strategy.`,
    category: "Company News",
    imageUrl: "/images/news/covid-expansion.jpg",
    publishedDate: "2020-09-01",
    author: "Daily Food Communications",
    featured: false,
  },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getFeaturedNews(): NewsArticle[] {
  return newsArticles.filter((article) => article.featured);
}

export function getNewsByCategory(
  category: NewsArticle["category"]
): NewsArticle[] {
  return newsArticles.filter((article) => article.category === category);
}
