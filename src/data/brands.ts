/*
 * Brands + Products — Daily Food Limited International
 *
 * Sources of truth:
 *  - Nov 2022 Management Deck (strategy, market positioning)
 *  - PRODUCT CATALOG_U6_GH.pdf (Ghana — Boss Baker, English)
 *  - PRODUCT CATALOG_U6_NG.pdf (Nigeria — Big Boss, English)
 *  - PRODUCT CATALOG_U6_FR.pdf (Francophone — Boss Baker, French)
 *
 * Strategic model — confirmed by the three catalogues:
 *  Brand = Market, not Category.
 *    • Ghana           → Boss Baker (English, FDA GH)
 *    • Nigeria         → Big Boss   (English, NAFDAC)
 *    • Francophone W/C → Boss Baker (French)
 *
 * Every product uses the same recipe, same nutritional profile, and same
 * ISO 22000 / FSSC 22000 certified production — localised brand, pack,
 * name and copy per market. One product line, three regional identities.
 */

/* ================================================================== */
/*  Markets                                                            */
/* ================================================================== */

export type MarketId = "ghana" | "nigeria" | "francophone";

export interface Market {
  id: MarketId;
  label: string;
  shortLabel: string;
  brandSlug: string;
  language: "en" | "fr";
  flag: string;
  countries: string[];
}

export const markets: Market[] = [
  {
    id: "ghana",
    label: "Ghana",
    shortLabel: "Ghana",
    brandSlug: "boss-baker",
    language: "en",
    flag: "🇬🇭",
    countries: ["Ghana"],
  },
  {
    id: "nigeria",
    label: "Nigeria",
    shortLabel: "Nigeria",
    brandSlug: "big-boss",
    language: "en",
    flag: "🇳🇬",
    countries: ["Nigeria"],
  },
  {
    id: "francophone",
    label: "Francophone West & Central Africa",
    shortLabel: "Francophone",
    brandSlug: "boss-baker",
    language: "fr",
    flag: "🇨🇮",
    /* Authoritative list — 10 Francophone markets confirmed on the
       "Daily Food today" slide of the Nov 2022 management deck. */
    countries: [
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
  },
];

export function getMarket(id: MarketId): Market {
  const m = markets.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown market: ${id}`);
  return m;
}

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

export interface Nutrition {
  energyKcal: number; // per 100g
  proteinPct: number;
  carbPct: number;
  fatPct: number;
  fiberPct?: number;
}

export interface ProductVariant {
  market: MarketId;
  brandSlug: string; // boss-baker | big-boss
  name: string; // Market-specific display name (e.g. "Fruit Cake" or "Gâteau aux fruits")
  description: string; // Market-specific copy (EN or FR)
  imageUrl: string; // Pack shot — falls back gracefully via getProductImage()
}

export interface BunVariant {
  customer: "KFC" | "Burger King";
  size: string; // e.g. '4 inches'
  weight: string; // e.g. '66g'
  packaging: string; // e.g. '60 pcs'
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  /* Shared recipe data — identical across all markets */
  ingredients: string;
  nutrition?: Nutrition; // optional so Burger Bun can omit it (sold B2B by size)
  /* Per-market variants */
  variants: ProductVariant[];
  /* Burger Bun only — the line has 5 sub-SKUs keyed by customer + size */
  bunVariants?: BunVariant[];
  featured?: boolean;
  /* Backward-compat defaults pulled from the Ghana variant */
  name: string;
  description: string;
  imageUrl: string;
  brandSlug: string;
  weight: string;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  logoUrl: string;
  heroImageUrl: string;
  primaryColor: string;
  secondaryColor: string;
  category: string;
  yearEstablished: number;
  markets: MarketId[];
  products: Product[]; // populated by brand; actual source of truth is `products`
  featured: boolean;
}

/* ================================================================== */
/*  Image fallback helper                                              */
/*                                                                     */
/*  When a market's pack shot isn't yet available, fall back to the    */
/*  Ghana (Boss Baker EN) image so the grid never shows broken tiles.  */
/* ================================================================== */

const AVAILABLE_IMAGES = new Set([
  "/products/boss-baker-fruit-cake.png",
  "/products/boss-baker-cake-original.png",
  "/products/boss-baker-chocolate-cake.png",
  "/products/boss-baker-strawberry-cake.png",
  "/products/boss-baker-chocolate-cookie.png",
  "/products/boss-baker-oats-digestive.png",
  "/products/boss-baker-sugar-free-cake.png",
  "/products/boss-baker-fr-gateau-original.png",
  "/products/boss-baker-fr-gateau-chocolat.png",
]);

export function resolveProductImage(variant: ProductVariant, product: Product): string {
  if (AVAILABLE_IMAGES.has(variant.imageUrl)) return variant.imageUrl;
  // Fall back to the Ghana variant (always the first variant, by convention)
  const ghanaVariant = product.variants.find((v) => v.market === "ghana");
  if (ghanaVariant && AVAILABLE_IMAGES.has(ghanaVariant.imageUrl)) return ghanaVariant.imageUrl;
  // Final fallback — return the requested URL (will 404 gracefully)
  return variant.imageUrl;
}

export function getVariant(product: Product, market: MarketId): ProductVariant | undefined {
  return product.variants.find((v) => v.market === market);
}

/* Returns true when the product has its OWN Ghana pack shot (not just the
   shared fallback). Used by the home-page marquee to hide SKUs whose real
   images haven't been supplied yet. */
export function hasRealImageForMarket(product: Product, market: MarketId): boolean {
  const variant = product.variants.find((v) => v.market === market);
  if (!variant) return false;
  return AVAILABLE_IMAGES.has(variant.imageUrl);
}

/* ================================================================== */
/*  Brands                                                             */
/* ================================================================== */

export const brands: Brand[] = [
  {
    id: "boss-baker",
    slug: "boss-baker",
    name: "Boss Baker",
    tagline: "Be Smart, Eat Smart",
    description:
      "Our flagship brand in Ghana and Francophone West & Central Africa — cakes, biscuits, cookies and burger buns produced to world-class standards from Ghana.",
    longDescription:
      "Boss Baker launched alongside Daily Food in 2017 and became the category leader in West Africa's baked goods market after the 2019 pivot to cakes. Certified to ISO 22000 and FSSC 22000, Boss Baker supplies Burger King and KFC across the continent and reaches 400 million+ consumers through 15 markets. The brand is sold in English across Ghana and in French across the Francophone West & Central Africa region.",
    logoUrl: "/logos/boss-baker-logo.svg",
    heroImageUrl: "/images/brands/boss-baker-hero.jpg",
    primaryColor: "#791619",
    secondaryColor: "#F9B233",
    category: "Baked Goods & Snacks",
    yearEstablished: 2017,
    markets: ["ghana", "francophone"],
    products: [], // populated below
    featured: true,
  },
  {
    id: "big-boss",
    slug: "big-boss",
    name: "Big Boss",
    tagline: "Enjoy!",
    description:
      "Our Nigerian market brand — the same Daily Food recipes, the same ISO-certified production, delivered through a locally-resonant identity for the 230M+ consumer Nigerian market.",
    longDescription:
      "Big Boss is Daily Food's Nigerian market brand, NAFDAC-approved and carrying the full Daily Food product line — from Fruit Cake and Chocolate Cake to Milk Biscuits and Burger Buns. Same ISO 22000 and FSSC 22000 certified facilities as Boss Baker, same recipes, same quality — adapted to resonate with the Nigerian consumer.",
    logoUrl: "/logos/big-boss-logo.svg",
    heroImageUrl: "/images/brands/big-boss-hero.jpg",
    primaryColor: "#791619",
    secondaryColor: "#F9B233",
    category: "Baked Goods & Snacks",
    yearEstablished: 2020,
    markets: ["nigeria"],
    products: [], // populated below
    featured: true,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

/* ================================================================== */
/*  Product variant builder helpers                                    */
/* ================================================================== */

function ghanaVariant(
  name: string,
  description: string,
  slug: string,
): ProductVariant {
  return {
    market: "ghana",
    brandSlug: "boss-baker",
    name,
    description,
    imageUrl: `/products/boss-baker-${slug}.png`,
  };
}

function nigeriaVariant(
  name: string,
  description: string,
  slug: string,
): ProductVariant {
  return {
    market: "nigeria",
    brandSlug: "big-boss",
    name,
    description,
    imageUrl: `/products/big-boss-${slug}.png`,
  };
}

function francophoneVariant(
  name: string,
  description: string,
  slug: string,
): ProductVariant {
  return {
    market: "francophone",
    brandSlug: "boss-baker",
    name,
    description,
    imageUrl: `/products/boss-baker-fr-${slug}.png`,
  };
}

/* ================================================================== */
/*  Products — 12 SKUs total                                           */
/*  (10 catalogue products + Oats Digestive + Sugar-Free Cake)         */
/* ================================================================== */

const _products: Product[] = [
  /* -------------------- 1. Fruit Cake -------------------- */
  {
    id: "fruit-cake",
    slug: "fruit-cake",
    category: "Cakes",
    ingredients:
      "Wheat flour, vegetable oil, cake mix, sugar, whole egg powder, potassium sorbate, citric acid, glycerin, mixed fruit cubes and orange flavour.",
    nutrition: { energyKcal: 425.08, proteinPct: 6.63, carbPct: 53.74, fatPct: 20.40 },
    variants: [
      ghanaVariant(
        "Fruit Cake",
        "A spongy cake filled with strawberries, oranges, pineapple, and rich in all your favorite flavors to offer you a taste of freshness.",
        "fruit-cake",
      ),
      nigeriaVariant(
        "Fruit Cake",
        "A spongy cake filled with strawberries, oranges, pineapple, and rich in all your favorite flavors to offer you a taste of freshness.",
        "fruit-cake",
      ),
      francophoneVariant(
        "Gâteau aux fruits",
        "Un gâteau moelleux garni de fraises, d'oranges, d'ananas et riche en toutes vos saveurs préférées pour vous offrir un goût de fraîcheur.",
        "gateau-aux-fruits",
      ),
    ],
    featured: true,
    name: "Fruit Cake",
    description:
      "A spongy cake filled with strawberries, oranges, pineapple, and rich in all your favorite flavors to offer you a taste of freshness.",
    imageUrl: "/products/boss-baker-fruit-cake.png",
    brandSlug: "boss-baker",
    weight: "45g",
  },

  /* -------------------- 2. Cake Original -------------------- */
  {
    id: "cake-original",
    slug: "cake-original",
    category: "Cakes",
    ingredients:
      "Wheat flour, vegetable oil, corn starch, liquid glucose, sugar, fresh eggs, baking powder, xanthan gum, potassium sorbate, citric acid, glycerin, butter flavour, emulsifier (E471).",
    nutrition: { energyKcal: 424.64, proteinPct: 8.66, carbPct: 47.10, fatPct: 22.40 },
    variants: [
      ghanaVariant(
        "Cake Original",
        "A delicious recipe of a moist cake baked to perfection with the highest quality of wheat, eggs, flour to give you a yummy treat.",
        "cake-original",
      ),
      nigeriaVariant(
        "Cake Original",
        "A delicious recipe of a moist cake baked to perfection with the highest quality of wheat, eggs, flour to give you a yummy treat.",
        "cake-original",
      ),
      francophoneVariant(
        "Gâteau Original",
        "Une délicieuse recette d'un gâteau moelleux cuit à la perfection avec la plus haute qualité de blé, d'œufs et de farine pour vous offrir une gâterie savoureuse.",
        "gateau-original",
      ),
    ],
    featured: true,
    name: "Cake Original",
    description:
      "A delicious recipe of a moist cake baked to perfection with the highest quality of wheat, eggs, flour to give you a yummy treat.",
    imageUrl: "/products/boss-baker-cake-original.png",
    brandSlug: "boss-baker",
    weight: "45g",
  },

  /* -------------------- 3. Chocolate Cake -------------------- */
  {
    id: "chocolate-cake",
    slug: "chocolate-cake",
    category: "Cakes",
    ingredients:
      "Wheat flour, vegetable oil, cake mix, sugar, fresh eggs, baking powder, potassium sorbate, citric acid, glycerin, cocoa powder, iodized salt, butter flavour.",
    nutrition: { energyKcal: 437.52, proteinPct: 13.77, carbPct: 46.11, fatPct: 22.00 },
    variants: [
      ghanaVariant(
        "Chocolate Cake",
        "A heavenly combination between a tender cake and a rich chocolate flavor to fill your desire for something tasty.",
        "chocolate-cake",
      ),
      nigeriaVariant(
        "Chocolate Cake",
        "A heavenly combination between a tender cake and a rich chocolate flavor to fill your desire for something tasty.",
        "chocolate-cake",
      ),
      francophoneVariant(
        "Gâteau au chocolat",
        "Une combinaison céleste entre un gâteau tendre et une saveur riche de chocolat pour combler votre désir de quelque chose de délicieux.",
        "gateau-chocolat",
      ),
    ],
    featured: true,
    name: "Chocolate Cake",
    description:
      "A heavenly combination between a tender cake and a rich chocolate flavor to fill your desire for something tasty.",
    imageUrl: "/products/boss-baker-chocolate-cake.png",
    brandSlug: "boss-baker",
    weight: "45g",
  },

  /* -------------------- 4. Strawberry Cake -------------------- */
  {
    id: "strawberry-cake",
    slug: "strawberry-cake",
    category: "Cakes",
    ingredients:
      "Cake mix, sugar, potassium sorbate, citric acid, whole egg powder, vegetable oil, corn starch, glycerine, sorbitol, butter flavour and strawberry filling.",
    nutrition: { energyKcal: 385.38, proteinPct: 5.14, carbPct: 58.13, fatPct: 14.70 },
    variants: [
      ghanaVariant(
        "Strawberry Cake",
        "A heart of strawberry jam hidden inside a yummy soft cake to satisfy your snack cravings.",
        "strawberry-cake",
      ),
      nigeriaVariant(
        "Cake with Strawberry Filling",
        "A heart of strawberry jam hidden inside a yummy soft cake to satisfy your snack cravings.",
        "strawberry-cake",
      ),
      francophoneVariant(
        "Gâteau aux fraises",
        "Un cœur de confiture de fraises caché à l'intérieur d'un délicieux gâteau moelleux pour satisfaire vos envies.",
        "gateau-fraises",
      ),
    ],
    featured: false,
    name: "Strawberry Cake",
    description:
      "A heart of strawberry jam hidden inside a yummy soft cake to satisfy your snack cravings.",
    imageUrl: "/products/boss-baker-strawberry-cake.png",
    brandSlug: "boss-baker",
    weight: "45g",
  },

  /* -------------------- 5. Chocolate Cookie -------------------- */
  {
    id: "chocolate-cookie",
    slug: "chocolate-cookie",
    category: "Cookies",
    ingredients:
      "Wheat flour, sugar, vegetable oil, fresh eggs, cocoa powder, sodium bi carbonate (E-500ii), sorbitol, soya lecithin (E-322), preservatives (E-282), antioxidant (E-319), vanillin.",
    nutrition: { energyKcal: 462.12, proteinPct: 8.61, carbPct: 61.27, fatPct: 20.20 },
    variants: [
      ghanaVariant(
        "Chocolate Cookie",
        "A golden baked crunchy snack with a creamy chocolate hazelnut filling that gives you pleasure with every bite.",
        "chocolate-cookie",
      ),
      nigeriaVariant(
        "Chocolate Cookie",
        "A golden baked crunchy snack with a creamy chocolate hazelnut filling that gives you pleasure with every bite.",
        "chocolate-cookie",
      ),
      francophoneVariant(
        "Cookie au chocolat",
        "Un biscuit croustillant dorée au four avec un remplissage crémeux de chocolat-noisette qui vous procure du plaisir à chaque bouchée.",
        "cookie-chocolat",
      ),
    ],
    featured: true,
    name: "Chocolate Cookie",
    description:
      "A golden baked crunchy snack with a creamy chocolate hazelnut filling that gives you pleasure with every bite.",
    imageUrl: "/products/boss-baker-chocolate-cookie.png",
    brandSlug: "boss-baker",
    weight: "45g",
  },

  /* -------------------- 6. Shortbread -------------------- */
  {
    id: "shortbread",
    slug: "shortbread",
    category: "Biscuits",
    ingredients:
      "Fortified wheat flour, butter, sugar, vegetable oil, corn starch, iodized salt, soya lecithin (E-322), butter flavours & condensed milk flavour.",
    nutrition: { energyKcal: 520.00, proteinPct: 11.72, carbPct: 53.48, fatPct: 28.80 },
    variants: [
      ghanaVariant(
        "Shortbread",
        "A crunchy buttery biscuit with a delicious unique taste for a perfect ready to eat snack.",
        "shortbread",
      ),
      nigeriaVariant(
        "Shortbread",
        "A crunchy buttery biscuit with a delicious unique taste for a perfect ready to eat snack.",
        "shortbread",
      ),
      francophoneVariant(
        "Shortbread",
        "Un biscuit croustillant au beurre avec un délicieux goût unique pour un gouter parfait prêt à être dégustée.",
        "shortbread",
      ),
    ],
    name: "Shortbread",
    description:
      "A crunchy buttery biscuit with a delicious unique taste for a perfect ready to eat snack.",
    imageUrl: "/products/boss-baker-shortbread.png",
    brandSlug: "boss-baker",
    weight: "40g",
  },

  /* -------------------- 7. Biscuit Original / Milk Biscuit Original -------------------- */
  {
    id: "biscuit-original",
    slug: "biscuit-original",
    category: "Biscuits",
    ingredients:
      "Flour (whole wheat, wheat), whey powder (milk), chicory root fiber, modified starch, toasted wheat germs, emulsifier (sodium stearoyl-2-lactylate E481, mono- and diglycerides of fatty acids E471), raising agent (disodium diphosphate E450i, sodium hydrogen carbonate E500ii), toasted wheat bran, egg white powder, salt, wheat gluten, soybean flour, thickener (sodium carboxy methyl cellulose E466, xanthan gum E415, guar gum E412), flavouring, enzymes (wheat), instant oats, whole egg powder, vegetable oil, potassium sorbate, sorbitol, glycerine and sugar.",
    nutrition: { energyKcal: 381.24, proteinPct: 8.96, carbPct: 54.40, fatPct: 14.20, fiberPct: 5.04 },
    variants: [
      ghanaVariant(
        "Biscuit Original",
        "Boss Baker Biscuit Original — a delightful treat that's rich in milk and packed with amazing flavors. These biscuits are the perfect blend of goodness and indulgence, making them a favorite for any occasion. With every bite, you'll savor the creamy milkiness and experience a burst of mouthwatering tastes.",
        "biscuit-original",
      ),
      nigeriaVariant(
        "Milk Biscuit Original",
        "Introducing Big Boss Milk Biscuit Original — a delightful treat that's rich in milk and packed with amazing flavors. These biscuits are the perfect blend of goodness and indulgence, making them a favorite for any occasion.",
        "milk-biscuit-original",
      ),
      francophoneVariant(
        "Biscuit Original",
        "Boss Baker Biscuit Original — une délicieuse gourmandise riche en lait et regorgeant de saveurs incroyables. Ces biscuits croustillants fondent dans la bouche, et sont le mélange parfait de bonté et de plaisir pour toutes les occasions.",
        "biscuit-original",
      ),
    ],
    name: "Biscuit Original",
    description:
      "Boss Baker Biscuit Original — a delightful treat that's rich in milk and packed with amazing flavors.",
    imageUrl: "/products/boss-baker-biscuit-original.png",
    brandSlug: "boss-baker",
    weight: "40g",
  },

  /* -------------------- 8. Energy Biscuit / Énergie Biscuits -------------------- */
  {
    id: "energy-biscuit",
    slug: "energy-biscuit",
    category: "Biscuits",
    ingredients:
      "Flour (whole wheat, wheat), whey powder (milk), chicory root fiber, modified starch, toasted wheat germs, emulsifier (sodium stearoyl-2-lactylate E481, mono- and diglycerides of fatty acids E471), raising agent (disodium diphosphate E450i, sodium hydrogen carbonate E500ii), toasted wheat bran, egg white powder, salt, wheat gluten, soybean flour, thickener (sodium carboxy methyl cellulose E466, xanthan gum E415, guar gum E412), flavouring, enzymes (wheat), instant oats, whole egg powder, vegetable oil, potassium sorbate, sorbitol, glycerine and sugar.",
    nutrition: { energyKcal: 381.24, proteinPct: 8.96, carbPct: 54.40, fatPct: 14.20, fiberPct: 5.04 },
    variants: [
      ghanaVariant(
        "Energy Biscuit",
        "Introducing Boss Baker Biscuit Energy — the ultimate fuel to power up your day! Packed with all the essential ingredients you need to boost your energy levels, these biscuits are your perfect companions before sports or during a busy day at work.",
        "energy-biscuit",
      ),
      nigeriaVariant(
        "Energy Biscuit",
        "Introducing Boss Baker Biscuit Energy — the ultimate fuel to power up your day! Packed with all the essential ingredients you need to boost your energy levels, these biscuits are your perfect companions before sports or during a busy day at work.",
        "energy-biscuit",
      ),
      francophoneVariant(
        "Énergie Biscuits",
        "Boss Baker Biscuit Energie — le carburant ultime pour dynamiser votre journée ! Remplis d'ingrédients essentiels qui augmentent vos niveaux d'énergie, ces biscuits sont vos parfaits compagnons avant le sport ou lors d'une journée chargée au travail.",
        "energie-biscuit",
      ),
    ],
    name: "Energy Biscuit",
    description:
      "The ultimate fuel to power up your day — packed with essential ingredients to boost energy levels.",
    imageUrl: "/products/boss-baker-energy-biscuit.png",
    brandSlug: "boss-baker",
    weight: "40g",
  },

  /* -------------------- 9. Crunchy Biscuit / Crousti Doré -------------------- */
  {
    id: "crunchy-biscuit",
    slug: "crunchy-biscuit",
    category: "Biscuits",
    ingredients:
      "Flour (whole wheat, wheat), whey powder (milk), chicory root fiber, modified starch, toasted wheat germs, emulsifier (sodium stearoyl-2-lactylate E481, mono- and diglycerides of fatty acids E471), raising agent (disodium diphosphate E450i, sodium hydrogen carbonate E500ii), toasted wheat bran, egg white powder, salt, wheat gluten, soybean flour, thickener (sodium carboxy methyl cellulose E466, xanthan gum E415, guar gum E412), flavouring, enzymes (wheat), instant oats, whole egg powder, vegetable oil, potassium sorbate, sorbitol, glycerine and sugar.",
    nutrition: { energyKcal: 479.40, proteinPct: 5.99, carbPct: 18.40, fatPct: 72.46 },
    variants: [
      ghanaVariant(
        "Crunchy Biscuit",
        "Discover a taste sensation like no other with Boss Baker Crunchy — the biscuit that's rich in milk and brimming with amazing flavors. With a delectable cream filling nestled in the middle, each bite offers an exciting journey of new feelings and indulgence.",
        "crunchy-biscuit",
      ),
      nigeriaVariant(
        "Crunchy Biscuit",
        "Discover a taste sensation like no other with Boss Baker Crunchy — the biscuit that's rich in milk and brimming with amazing flavors. With a delectable cream filling nestled in the middle, each bite offers an exciting journey of new feelings and indulgence.",
        "crunchy-biscuit",
      ),
      francophoneVariant(
        "Crousti Biscuit",
        "Découvrez une sensation unique avec Boss Baker Crousti — le biscuit qui est riche en lait et débordant de saveurs incroyables. Avec une délicieuse crème au cœur, chaque bouchée offre un voyage excitant de nouvelles sensations et d'indulgence.",
        "crousti-biscuit",
      ),
    ],
    name: "Crunchy Biscuit",
    description:
      "Vanilla biscuit filled with vanilla cream — a delectable cream filling nestled in the middle.",
    imageUrl: "/products/boss-baker-crunchy-biscuit.png",
    brandSlug: "boss-baker",
    weight: "40g",
  },

  /* -------------------- 10. Burger Bun (B2B — KFC + Burger King) -------------------- */
  {
    id: "burger-bun",
    slug: "burger-bun",
    category: "Bread & Buns",
    ingredients:
      "Wheat flour, water, sugar, vegetable oil, yeast, salt, emulsifier, sesame seeds (for seeded variants).",
    /* No nutritional panel — Burger Bun is sold B2B by size and packaging unit. */
    variants: [
      ghanaVariant(
        "Burger Bun",
        "The burger bun that certified Boss Baker as a Burger King and KFC supplier across Africa — available in 5 size variants for both customers.",
        "burger-bun",
      ),
      nigeriaVariant(
        "Burger Bun",
        "The burger bun that certified Boss Baker as a Burger King and KFC supplier across Africa — available in 5 size variants for both customers.",
        "burger-bun",
      ),
      francophoneVariant(
        "Pain à burger",
        "Le pain à burger qui a certifié Boss Baker comme fournisseur de Burger King et KFC en Afrique — disponible en 5 formats pour les deux clients.",
        "burger-bun",
      ),
    ],
    bunVariants: [
      { customer: "KFC",         size: "4 inches",   weight: "66g", packaging: "60 pcs" },
      { customer: "KFC",         size: "3.5 inches", weight: "44g", packaging: "60 pcs" },
      { customer: "Burger King", size: "4 inches",   weight: "58g", packaging: "48 pcs" },
      { customer: "Burger King", size: "5 inches",   weight: "91g", packaging: "24 pcs" },
      { customer: "Burger King", size: "7 inches",   weight: "80g", packaging: "48 pcs" },
    ],
    featured: true,
    name: "Burger Bun",
    description:
      "The burger bun that certified Boss Baker as a Burger King and KFC supplier across Africa.",
    imageUrl: "/products/boss-baker-burger-bun.png",
    brandSlug: "boss-baker",
    weight: "66g",
  },

  /* -------------------- 11. Oats Digestive (new SKU — beyond Nov 2022 catalogue) -------------------- */
  {
    id: "oats-digestive",
    slug: "oats-digestive",
    category: "Biscuits",
    /* TODO(client): confirm ingredients + nutrition panel — this SKU was not
       in the three regional catalogues we received and needs client data. */
    ingredients:
      "Oat flour, whole wheat flour, vegetable oil, sugar, whole milk powder, raising agents, salt, malt extract. (Pending client confirmation.)",
    variants: [
      ghanaVariant(
        "Oats Digestive",
        "A wholesome oat-and-wheat digestive biscuit — baked for a wholesome, fibre-rich snack that fits every occasion.",
        "oats-digestive",
      ),
      nigeriaVariant(
        "Oats Digestive",
        "A wholesome oat-and-wheat digestive biscuit — baked for a wholesome, fibre-rich snack that fits every occasion.",
        "oats-digestive",
      ),
      francophoneVariant(
        "Digestive aux flocons d'avoine",
        "Un biscuit digestive à base d'avoine et de blé complet — cuit pour une collation saine et riche en fibres, adaptée à toutes les occasions.",
        "oats-digestive",
      ),
    ],
    name: "Oats Digestive",
    description:
      "A wholesome oat-and-wheat digestive biscuit — fibre-rich and baked for every occasion.",
    imageUrl: "/products/boss-baker-oats-digestive.png",
    brandSlug: "boss-baker",
    weight: "45g",
  },

  /* -------------------- 12. Sugar-Free Cake (new SKU — beyond Nov 2022 catalogue) -------------------- */
  {
    id: "sugar-free-cake",
    slug: "sugar-free-cake",
    category: "Cakes",
    /* TODO(client): confirm ingredients + nutrition panel — this SKU was not
       in the three regional catalogues we received and needs client data. */
    ingredients:
      "Wheat flour, vegetable oil, maltitol (sugar substitute), whole egg powder, potassium sorbate, glycerin, baking powder, butter flavour. (Pending client confirmation.)",
    variants: [
      ghanaVariant(
        "Sugar-Free Cake",
        "All the soft, moist goodness of our flagship cake — reformulated without added sugar for the health-conscious consumer.",
        "sugar-free-cake",
      ),
      nigeriaVariant(
        "Sugar-Free Cake",
        "All the soft, moist goodness of our flagship cake — reformulated without added sugar for the health-conscious consumer.",
        "sugar-free-cake",
      ),
      francophoneVariant(
        "Gâteau sans sucre",
        "Toute la douceur et le moelleux de notre gâteau phare — reformulé sans sucre ajouté pour le consommateur soucieux de sa santé.",
        "gateau-sans-sucre",
      ),
    ],
    name: "Sugar-Free Cake",
    description:
      "All the soft, moist goodness of our flagship cake — reformulated without added sugar for the health-conscious consumer.",
    imageUrl: "/products/boss-baker-sugar-free-cake.png",
    brandSlug: "boss-baker",
    weight: "45g",
  },
];

/* ================================================================== */
/*  Attach every product to both brands so brand pages render fully.   */
/*  (A single Product serves both Boss Baker AND Big Boss via variants) */
/* ================================================================== */

brands.forEach((brand) => {
  brand.products = _products;
});

export const products = _products;

/* ================================================================== */
/*  Query helpers                                                      */
/* ================================================================== */

export function getAllProducts(): Product[] {
  return _products;
}

export function getFeaturedProducts(): Product[] {
  return _products.filter((p) => p.featured);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return _products.filter((p) =>
    p.variants.some((v) => v.brandSlug === brandSlug)
  );
}

export function getProductsByMarket(market: MarketId): Product[] {
  return _products.filter((p) =>
    p.variants.some((v) => v.market === market)
  );
}

export function getProductCategories(): string[] {
  const categories = new Set(_products.map((p) => p.category));
  return Array.from(categories).sort();
}

export function getProductBySlug(slug: string): Product | undefined {
  return _products.find((p) => p.slug === slug);
}
