/*
 * News & Press Coverage
 *
 * Real external press coverage of Daily Food and Geoffrey Fadoul.
 * Each entry carries a `sourceName` + `sourceUrl` that credits the
 * original publication; the body text is a faithful summary of what
 * was published, used here with attribution back to the source.
 *
 * Add new entries at the top (most recent first) as additional press
 * hits / press releases land. One article may be marked `featured: true`
 * to surface as the hero card on /news.
 */

export type NewsCategory =
  | "Press Release"
  | "Company News"
  | "Product Launch"
  | "Sustainability"
  | "Interview";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  imageUrl: string;
  publishedDate: string;
  author: string;
  featured: boolean;
  /* Optional external attribution — present when the article is real
     press coverage rather than a self-published company update. */
  sourceName?: string;
  sourceUrl?: string;
}

export const newsArticles: NewsArticle[] = [
  /* ============================================================== */
  /*  2022-07-26 — How We Made It In Africa                         */
  /*  CEO's journey building a mass-market snack food business      */
  /*  Featured because it's the richest, most complete story.       */
  /* ============================================================== */
  {
    id: "1",
    slug: "ceo-journey-mass-market-snack-food-business",
    title:
      "Ghana: CEO's Journey of Building a Mass-Market Snack-Food Business",
    excerpt:
      "Geoffrey Fadoul on founding Daily Food, the pivot from beef rolls to Boss Baker cupcakes, and building an industrial bakery that supplies KFC, Burger King and 15 African markets from a single Ghana factory.",
    content: `Geoffrey Fadoul was born to Lebanese parents and his family — spanning three generations — grew up across multiple West African nations including Mali, Côte d'Ivoire, Burkina Faso and Guinea.

"After finishing up my MBA in Scotland, I decided to work for our family business in Benin and the regions we operate in across Africa," Fadoul explains.

The family operates a diversified portfolio of companies under the Fadoul Group Africa umbrella. Founded in 1966, the group began operations in Burkina Faso before gradually expanding into more than 10 African countries.

Leveraging his knowledge of West Africa's business climate and family connections, Fadoul sought to pivot away from trading toward manufacturing fast-moving consumer goods.

"I knew I wanted to manufacture products that could sell quickly in large quantities. My best bet was to produce snack foods, which people could purchase with a small amount of money," he says.

With this vision, Fadoul established Daily Food Ltd with Jean-Paul Nassar as co-founder in 2018. The industrial bakery manufactures and distributes food products across several West African countries including Ghana, Benin, Togo and Côte d'Ivoire, operating from a single Ghana factory while exporting to French-speaking markets.

During a pre-launch trip to Nigeria, Fadoul observed street vendors selling Gala sausage rolls to people stuck in traffic. "It was an eye-opening observation because we saw how popular this product was among Nigerian consumers and how quickly they sold on the streets of Lagos."

Inspired by this market potential, he returned to Ghana to produce sausage, chicken and beef rolls for street vendors and open markets. However, the Ghanaian market proved different from Nigeria's expectations. "Ghanaians did not appreciate the meat consistency of the beef and sausage rolls. Instead, our research revealed they preferred to see meat chunks in their pastries. Secondly, traffic in Ghanaian cities wasn't heavy enough to enable street vendors to sell our products to interested customers," he explains.

Facing this challenge, Daily Food chose to pivot rather than persist. The company introduced the Boss Baker cupcake in 2019, and within three months the factory operated at full capacity.

"About a year after we tested our initial product offering, we used the same machinery to produce and package our cupcakes. We were successful in this pivot, and the cupcake became a best-seller in months," Fadoul explains.

Before launching cupcakes, KFC approached Daily Food seeking localised burger bun production meeting international standards. "KFC wanted to localise their purchase of burger bread buns. So, we worked with them to develop buns that met KFC's international standards. We also registered our bread buns with Burger King," Fadoul says. The company's ISO 22000 and FSSC 22000 certifications likely influenced these partnerships.

Accessing consumer data proved complex and expensive. Fadoul built internal marketing and sales capacity using grassroots research methods — distributing samples and feedback questionnaires in markets and streets, then adjusting recipes based on responses. "We still run ongoing trials and rely on market feedback to help us build our business."

Following Ghana's success, Daily Food expanded into other West African markets. The World Bank predicted in 2019 that approximately 62.5% of Africa's fastest-growing economies would be in francophone Africa. French-speaking countries like Côte d'Ivoire maintained economic growth following the 2020 pandemic.

"Our research revealed West African countries have similar FMCG environments, where a large portion of business is done in large local markets, not supermarkets," he adds. "Before we began to export our products, we identified the big wholesalers and distributors in our category and trained these players. We gave them the resources to get our products into the hands of our end customers."

Since launching Boss Baker cupcakes in 2019, Daily Food expanded its range to include Boss Baker fruit cake, strawberry cake, chocolate cake, oat digestive and shortbread biscuits.

"Soon, our products will reach Nigeria and the United Arab Emirates," Fadoul reveals. "We have acquired all the necessary approvals and are waiting to send our shipments into these regions."`,
    category: "Interview",
    imageUrl: "/images/news/boss-baker-cupcake.jpg",
    publishedDate: "2022-07-26",
    author: "Koromone Koroye",
    sourceName: "How We Made It In Africa",
    sourceUrl:
      "https://www.howwemadeitinafrica.com/ghana-ceos-journey-of-building-a-mass-market-snack-food-business/145811/",
    featured: true,
  },

  /* ============================================================== */
  /*  2022-06-07 — Marcopolis interview                             */
  /*  Snack Food Industry in West Africa: latest trends             */
  /* ============================================================== */
  {
    id: "2",
    slug: "snack-food-industry-west-africa-latest-trends",
    title:
      "Snack Food Industry in West Africa: Discussing Latest Trends with Geoffrey Fadoul",
    excerpt:
      "Geoffrey Fadoul on Daily Food's path from startup to ISO 22000-certified industrial bakery, exports across 9 West African countries, and plans to double daily cupcake output from 500,000 to over 1 million in three years.",
    content: `Geoffrey Fadoul, Co-Founder and CEO of Daily Food Ltd, gives an overview of the industrial bakery business and snack food industry in West Africa. Daily Food is the only industrial bakery in Ghana to be ISO 22000 certified, and its flagship product — the Boss Baker cake — was named best snack product of the year at the 2021 Ghana International Products Awards.

Daily Food was founded by Fadoul and Jean-Paul Nassar in 2018, initially inspired by the Nigerian Beef Roll product. After discovering Ghanaian consumer preferences differed from Nigerian markets, the company pivoted to cupcakes. Within two months of launch, demand necessitated a second production line, eventually expanding to three. Today, Daily Food supplies to fast-food chains including Burger King, KFC and Domino's, maintaining ISO 22000 and FSSC 22000 certifications — the highest food safety standards globally.

The company's competitive advantages include high standards, quality, taste and affordability. Fadoul's francophone background and decade-long residence in neighbouring countries facilitated regional expansion. The founders' French heritage enables easier communication with West African markets that competitors struggle to penetrate effectively.

Fadoul embraces market competition, noting it stimulates growth and industry visibility. However, prior competitors entered unprofitably and exited quickly. The snack food industry has demonstrated steady growth since 2018, though the pandemic slowed expansion due to reduced out-of-home consumption when schools closed. Post-pandemic recovery faced significant headwinds from inflation and currency devaluation, causing consumers to prioritise necessities over non-essential snacks.

Daily Food exports to nine West African nations: Togo, Benin, Burkina Faso, Ivory Coast, Niger, Mali, Guinea, Liberia and Sierra Leone. Ivory Coast represents the company's most strategically important market, receiving equal marketing investment as Ghana. Products are tailored to regional preferences, with packaging and campaigns customised by language and price point. The company operates one factory serving the entire region and has registered for Nigerian market entry and Dubai retail placement at Carrefour.

Manufacturing expansion to other countries is not currently planned, as Fadoul believes Ghana-based production offers competitive advantages over operating facilities elsewhere. The company remains open to investor partnerships that provide strategic value beyond capital investment.

Medium-term vision encompasses three expansion axes. First, securing additional multinational fast-food franchise partnerships like Pizza Hut and Chicken Inn regionally and internationally. Second, launching biscuit varieties for Ghana and regional markets. Third, increasing cupcake innovation, including sugar-free options, with European and U.S. export aspirations within three years. Current production reaches 500,000 cupcakes daily regionally; Fadoul projects doubling this to above one million within three years.

Daily Food prioritises social impact through active engagement with Food For All Africa, an NGO combating hunger in Ghana and West Africa. Fadoul takes particular pride that Boss Baker cupcakes reach both children attending elite schools and street children unable to access formal education, cutting across socioeconomic classes. The company committed to reducing plastic consumption by replacing rubber bags with string packaging one year prior, eliminating thousands of tons of plastic waste.`,
    category: "Interview",
    imageUrl: "/images/news/geoffrey-fadoul-portrait.jpg",
    publishedDate: "2022-06-07",
    author: "Marcopolis Editorial",
    sourceName: "Marcopolis",
    sourceUrl:
      "https://marcopolis.net/snack-food-industry-in-west-africa-discussing-latest-trends-with-geoffrey-fadoul-of-daily-food.htm",
    featured: false,
  },

  /* ============================================================== */
  /*  2018-12-10 — Happy Ghana                                      */
  /*  DailyFood partners FoodForAll (National Pastry Day)           */
  /* ============================================================== */
  {
    id: "3",
    slug: "dailyfood-foodforall-national-pastry-day",
    title: "DailyFood Partners FoodForAll to Help the Needy",
    excerpt:
      "Daily Food and FoodForAll co-host the maiden National Pastry Day in Accra, pledging to feed 300 vulnerable people weekly with free Boss Baker products.",
    content: `In its quest to help feed over 1,000 people on the streets of Accra and other parts of the country with good food, DailyFood — producers of Boss Baker — has partnered FoodForAll to observe the maiden edition of National Pastry Day on Saturday 8 December 2018 at Daily Food Industrial Bakery, North Industrial Area in Accra.

The event focuses on charity and on encouraging the Ghanaian industry to instil the habit of consuming healthy pastries.

According to the Managing Director of DailyFood, Geoffrey Fadoul: "National Pastry Day is an event many Ghanaians do not know about, but DailyFood, Boss Baker and FoodForAll are delighted to announce that the event will be celebrated annually in Ghana."

He emphasised that the celebration centres on "celebrating with the people who do not have the means to celebrate," and committed to expanding participation next year by engaging additional companies to increase charitable distribution.

FoodForAll Founder Chef Elijah Amoo Addo noted that "one out of four children in Ghana actually go to bed without food" and highlighted that approximately 45% of food is wasted throughout the supply chain. He expressed gratitude for the partnership, stating the initiative would enable regular staff-led efforts to distribute food to vulnerable individuals across Accra and the nation.

Director of Non-Governmental Organisations at the Department of Social Welfare, Stephen Dombo, commended both organisations for their commitment to supporting vulnerable street populations.

The partnership ensures that 300 vulnerable people weekly receive free DailyFood pastry products. As part of the celebration, the organisations donated products to the Accra Psychiatric Hospital.`,
    category: "Sustainability",
    imageUrl: "/images/news/foodforall-pastry-day-2.jpg",
    publishedDate: "2018-12-10",
    author: "Joseph Nii Ankrah",
    sourceName: "Happy Ghana",
    sourceUrl:
      "https://www.happyghana.com/dailyfood-partners-foodforall-to-help-the-needy/",
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
