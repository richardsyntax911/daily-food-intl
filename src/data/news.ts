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
    slug: "q3-2025-earnings-results",
    title: "Daily Food Limited International Reports Strong Q3 2025 Results",
    excerpt:
      "Revenue grew 23% year-over-year to GHS 145 million, driven by robust performance across all five brands and continued expansion into new markets.",
    content: `Daily Food Limited International today announced financial results for the third quarter ended September 30, 2025. The company reported revenue of GHS 145 million, representing a 23% increase compared to the same period last year. Net income rose to GHS 28 million, up from GHS 19 million in Q3 2024, reflecting improved operational efficiency and higher margins across the product portfolio.

The strong performance was driven by continued growth in the Boss Baker and FreshBite brands, which together accounted for over 60% of total revenue. International markets contributed 35% of quarterly revenue, up from 28% in the prior year, underscoring the success of the company's geographic diversification strategy.

"These results demonstrate the strength of our multi-brand strategy and the growing demand for quality African food products both domestically and internationally," said CEO Kwame Mensah. "We remain on track to achieve our full-year guidance and are excited about the pipeline of new products launching in Q4."`,
    category: "Press Release",
    imageUrl: "/images/news/q3-earnings.jpg",
    publishedDate: "2025-10-15",
    author: "Abena Osei-Bonsu",
    featured: true,
  },
  {
    id: "2",
    slug: "boss-baker-east-africa-expansion",
    title: "Boss Baker Expands to East Africa with Launch in Kenya and Tanzania",
    excerpt:
      "Daily Food's flagship snack brand enters the East African market, bringing its popular range of baked goods to consumers in Kenya and Tanzania.",
    content: `Daily Food Limited International has officially launched its flagship Boss Baker brand in Kenya and Tanzania, marking a significant milestone in the company's East African expansion strategy. The rollout includes the full range of Boss Baker products, from the iconic meat pies and sausage rolls to the recently introduced pastry line.

The launch is supported by a distribution partnership with leading East African retail chains and a dedicated marketing campaign tailored to local tastes and preferences. The company has invested GHS 12 million in establishing local supply chain infrastructure, including a distribution center in Nairobi that will serve both markets.

"East Africa represents one of the fastest-growing consumer markets on the continent, and we believe Boss Baker's combination of quality, convenience, and affordability will resonate strongly with consumers in this region," said Chief Marketing Officer Ama Serwaa. Initial retail placement covers over 2,000 outlets across both countries, with plans to expand to 5,000 by mid-2026.`,
    category: "Company News",
    imageUrl: "/images/news/boss-baker-east-africa.jpg",
    publishedDate: "2025-09-22",
    author: "Ama Serwaa",
    featured: true,
  },
  {
    id: "3",
    slug: "freshbite-plantain-chips-launch",
    title: "FreshBite Launches New Plantain Chips Range in Three Flavors",
    excerpt:
      "The health-focused snack brand introduces a line of plantain chips made from locally sourced plantains, available in Original, Spicy Suya, and Garden Herb varieties.",
    content: `FreshBite, Daily Food Limited International's health-conscious snack brand, has launched a new line of plantain chips crafted from premium, locally sourced plantains. The range debuts in three distinct flavors: Original Sea Salt, Spicy Suya inspired by the beloved West African street food, and Garden Herb featuring a blend of traditional African herbs and spices.

Each variety is made using a proprietary low-oil cooking process that retains the natural sweetness and crunch of the plantain while keeping fat content 30% lower than conventional chips. The plantains are sourced exclusively from smallholder farmers in Ghana's Eastern Region through the company's Community Farming Program, ensuring both quality and fair compensation for growers.

"Plantain chips are already a beloved snack across Africa, but we saw an opportunity to elevate the category with better ingredients, cleaner processing, and more exciting flavors," said the FreshBite brand director. The new range is available in 50g and 150g packs at major retailers across Ghana, Nigeria, and Kenya, with an introductory price point designed to make healthy snacking accessible to all consumers.`,
    category: "Product Launch",
    imageUrl: "/images/news/freshbite-plantain-chips.jpg",
    publishedDate: "2025-08-10",
    author: "Ama Serwaa",
    featured: true,
  },
  {
    id: "4",
    slug: "sustainability-report-2025",
    title: "Daily Food Publishes 2025 Sustainability Report, Highlights Progress on ESG Goals",
    excerpt:
      "The annual report details significant progress toward zero-waste manufacturing, community farming support, and the transition to sustainable packaging.",
    content: `Daily Food Limited International has released its annual Sustainability Report for 2025, detailing the company's environmental, social, and governance performance over the past year. The report highlights a 40% reduction in manufacturing waste since 2020, putting the company on track to achieve its zero-waste-to-landfill target by 2030.

Key achievements outlined in the report include the expansion of the Community Farming Program to support over 5,000 smallholder farmers, the transition of 65% of product packaging to recyclable or compostable materials, and the installation of solar panels at the Accra headquarters that now provide 50% of the facility's energy needs. The company also invested GHS 8 million in community education and nutrition programs across its operating markets.

"Sustainability is not a separate initiative for us; it is embedded in how we do business," said VP of Sustainability Nana Adjei. "This report reflects our belief that doing well and doing good are not mutually exclusive. We are proud of the progress we have made, and we remain committed to transparent reporting as we work toward our ambitious 2030 goals."`,
    category: "Sustainability",
    imageUrl: "/images/news/sustainability-report.jpg",
    publishedDate: "2025-07-05",
    author: "Nana Adjei",
    featured: false,
  },
  {
    id: "5",
    slug: "nairobi-office-opening",
    title: "Daily Food Opens New Regional Office in Nairobi to Anchor East Africa Operations",
    excerpt:
      "The new Nairobi office will serve as the regional hub for Daily Food's growing operations across Kenya, Tanzania, Uganda, and Rwanda.",
    content: `Daily Food Limited International has officially opened its new regional office in Nairobi's Westlands business district, establishing a dedicated hub for the company's expanding East African operations. The office, located on the 8th floor of Delta Tower, will house teams covering sales, marketing, supply chain management, and quality assurance for the Kenya, Tanzania, Uganda, and Rwanda markets.

The opening ceremony was attended by company leadership, local government officials, and key distribution partners. The office represents an investment of GHS 5 million and will initially employ 45 staff, with plans to grow to 80 employees by the end of 2026 as the company deepens its presence in the region.

"Nairobi is one of Africa's most dynamic business cities, and establishing a permanent presence here signals our long-term commitment to East African consumers," said CEO Kwame Mensah. "Having a local team on the ground allows us to better understand consumer preferences, respond quickly to market opportunities, and build stronger relationships with our retail and distribution partners."`,
    category: "Company News",
    imageUrl: "/images/news/nairobi-office.jpg",
    publishedDate: "2025-06-18",
    author: "Kwame Mensah",
    featured: false,
  },
  {
    id: "6",
    slug: "tropifruit-best-juice-award",
    title: "TropiFruit Wins Best Natural Juice at African Food & Beverage Awards 2025",
    excerpt:
      "TropiFruit's Mango & Baobab blend was named Best Natural Juice at the prestigious African Food & Beverage Awards ceremony held in Johannesburg.",
    content: `TropiFruit, the natural fruit juice brand from Daily Food Limited International, has been named winner of the Best Natural Juice category at the 2025 African Food & Beverage Awards held in Johannesburg, South Africa. The award was given to TropiFruit's Mango & Baobab blend, which impressed judges with its authentic tropical flavor profile and commitment to using 100% natural ingredients with no added sugars or preservatives.

The African Food & Beverage Awards is one of the continent's most prestigious industry recognitions, attracting entries from over 200 food and beverage companies across 30 African countries. The judging panel praised TropiFruit for its innovative use of baobab fruit, a nutrient-dense superfood native to Africa, combined with sustainably sourced mangoes from the company's partner farms in Ghana's Northern Region.

"This award is a tremendous validation of our approach to the beverages category, which is to create products that are both delicious and authentically African," said CEO Kwame Mensah. "TropiFruit was built on the belief that Africa's incredible natural ingredients deserve a world-class brand, and we are honored that the industry has recognized our efforts."`,
    category: "Company News",
    imageUrl: "/images/news/tropifruit-award.jpg",
    publishedDate: "2025-05-02",
    author: "Ama Serwaa",
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
