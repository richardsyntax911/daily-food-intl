export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  brandSlug: string;
  weight: string;
  featured: boolean;
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
  products: Product[];
  featured: boolean;
}

export const brands: Brand[] = [
  {
    id: "boss-baker",
    slug: "boss-baker",
    name: "Boss Baker",
    tagline: "Food on the go",
    description:
      "Premium baked goods and on-the-go snacks crafted with the finest ingredients for busy lifestyles.",
    longDescription:
      "Boss Baker has been the flagship brand of Daily Food Limited International since 2010. Known for premium pastries, bread products, and convenient snack solutions, Boss Baker serves millions of consumers who demand quality without compromise. From our signature meat pies to artisan bread loaves, every Boss Baker product delivers on our promise of excellence.",
    logoUrl: "/logos/boss-baker-logo.svg",
    heroImageUrl: "/images/brands/boss-baker-hero.jpg",
    primaryColor: "#791619",
    secondaryColor: "#F9B233",
    category: "Baked Goods & Snacks",
    yearEstablished: 2010,
    products: [
      {
        id: "bb-1",
        name: "Classic Meat Pie",
        description: "Flaky pastry filled with seasoned minced meat",
        imageUrl: "/images/products/meat-pie.jpg",
        category: "Pies",
        brandSlug: "boss-baker",
        weight: "150g",
        featured: true,
      },
      {
        id: "bb-2",
        name: "Chicken Sausage Roll",
        description: "Golden pastry wrapped around savory chicken sausage",
        imageUrl: "/images/products/sausage-roll.jpg",
        category: "Rolls",
        brandSlug: "boss-baker",
        weight: "120g",
        featured: true,
      },
      {
        id: "bb-3",
        name: "Butter Croissant",
        description: "Layered French-style butter croissant",
        imageUrl: "/images/products/croissant.jpg",
        category: "Pastries",
        brandSlug: "boss-baker",
        weight: "80g",
        featured: false,
      },
      {
        id: "bb-4",
        name: "Whole Wheat Bread",
        description: "Nutritious whole wheat sandwich bread",
        imageUrl: "/images/products/wheat-bread.jpg",
        category: "Bread",
        brandSlug: "boss-baker",
        weight: "600g",
        featured: false,
      },
      {
        id: "bb-5",
        name: "Chocolate Doughnut",
        description: "Soft ring doughnut with rich chocolate glaze",
        imageUrl: "/images/products/doughnut.jpg",
        category: "Pastries",
        brandSlug: "boss-baker",
        weight: "70g",
        featured: true,
      },
      {
        id: "bb-6",
        name: "Spring Roll (Vegetable)",
        description: "Crispy spring roll filled with seasoned vegetables",
        imageUrl: "/images/products/spring-roll.jpg",
        category: "Rolls",
        brandSlug: "boss-baker",
        weight: "100g",
        featured: false,
      },
    ],
    featured: true,
  },
  {
    id: "golden-harvest",
    slug: "golden-harvest",
    name: "Golden Harvest",
    tagline: "Nature's finest grains",
    description:
      "Premium cereals, flours, and grain products sourced from the finest farms across West Africa.",
    longDescription:
      "Golden Harvest represents our commitment to wholesome nutrition. Specializing in cereals, flours, and grain-based products, Golden Harvest partners with local farming communities to bring the best of Africa's agricultural heritage to breakfast tables worldwide.",
    logoUrl: "/logos/golden-harvest-logo.svg",
    heroImageUrl: "/images/brands/golden-harvest-hero.jpg",
    primaryColor: "#D4A843",
    secondaryColor: "#8B6914",
    category: "Cereals & Grains",
    yearEstablished: 2014,
    products: [
      {
        id: "gh-1",
        name: "Toasted Corn Flakes",
        description: "Crunchy golden corn flakes for a perfect breakfast",
        imageUrl: "/images/products/corn-flakes.jpg",
        category: "Cereals",
        brandSlug: "golden-harvest",
        weight: "500g",
        featured: true,
      },
      {
        id: "gh-2",
        name: "Premium Wheat Flour",
        description: "All-purpose baking flour, finely milled",
        imageUrl: "/images/products/wheat-flour.jpg",
        category: "Flour",
        brandSlug: "golden-harvest",
        weight: "2kg",
        featured: true,
      },
      {
        id: "gh-3",
        name: "Instant Oats",
        description: "Quick-cooking rolled oats for busy mornings",
        imageUrl: "/images/products/oats.jpg",
        category: "Cereals",
        brandSlug: "golden-harvest",
        weight: "400g",
        featured: false,
      },
      {
        id: "gh-4",
        name: "Millet Porridge Mix",
        description: "Traditional millet porridge blend with natural sweetness",
        imageUrl: "/images/products/millet.jpg",
        category: "Cereals",
        brandSlug: "golden-harvest",
        weight: "300g",
        featured: false,
      },
    ],
    featured: true,
  },
  {
    id: "freshbite",
    slug: "freshbite",
    name: "FreshBite",
    tagline: "Snack smart, live bold",
    description:
      "Modern, healthier snack alternatives for the health-conscious consumer.",
    longDescription:
      "FreshBite was born from a simple idea: snacking should not mean compromising on health. Our range of baked chips, protein bars, and nut mixes uses natural ingredients with no artificial preservatives. FreshBite is the snack brand for a new generation that cares about what they eat.",
    logoUrl: "/logos/freshbite-logo.svg",
    heroImageUrl: "/images/brands/freshbite-hero.jpg",
    primaryColor: "#2E7D32",
    secondaryColor: "#81C784",
    category: "Healthy Snacks",
    yearEstablished: 2018,
    products: [
      {
        id: "fb-1",
        name: "Plantain Chips (Sea Salt)",
        description: "Baked plantain chips with a light sea salt finish",
        imageUrl: "/images/products/plantain-chips.jpg",
        category: "Chips",
        brandSlug: "freshbite",
        weight: "100g",
        featured: true,
      },
      {
        id: "fb-2",
        name: "Mixed Nut Trail Bar",
        description: "Energy bar with cashews, peanuts and honey",
        imageUrl: "/images/products/trail-bar.jpg",
        category: "Bars",
        brandSlug: "freshbite",
        weight: "45g",
        featured: true,
      },
      {
        id: "fb-3",
        name: "Cassava Crisps",
        description: "Thin-cut baked cassava crisps, lightly seasoned",
        imageUrl: "/images/products/cassava-crisps.jpg",
        category: "Chips",
        brandSlug: "freshbite",
        weight: "80g",
        featured: false,
      },
    ],
    featured: true,
  },
  {
    id: "mamas-kitchen",
    slug: "mamas-kitchen",
    name: "Mama's Kitchen",
    tagline: "Home taste, anywhere",
    description:
      "Ready-to-eat and frozen meal solutions inspired by traditional West African home cooking.",
    longDescription:
      "Mama's Kitchen brings the warmth and flavor of traditional home cooking to your table in minutes. Our range of frozen and ready-to-eat meals are prepared using authentic family recipes passed down through generations. From jollof rice to groundnut soup, every Mama's Kitchen meal is a taste of home.",
    logoUrl: "/logos/mamas-kitchen-logo.svg",
    heroImageUrl: "/images/brands/mamas-kitchen-hero.jpg",
    primaryColor: "#C62828",
    secondaryColor: "#FF8F00",
    category: "Ready Meals",
    yearEstablished: 2016,
    products: [
      {
        id: "mk-1",
        name: "Frozen Jollof Rice",
        description: "Ready-to-heat party-style jollof rice",
        imageUrl: "/images/products/jollof.jpg",
        category: "Frozen Meals",
        brandSlug: "mamas-kitchen",
        weight: "500g",
        featured: true,
      },
      {
        id: "mk-2",
        name: "Groundnut Soup Base",
        description: "Traditional groundnut soup concentrate",
        imageUrl: "/images/products/groundnut-soup.jpg",
        category: "Sauces",
        brandSlug: "mamas-kitchen",
        weight: "350g",
        featured: true,
      },
      {
        id: "mk-3",
        name: "Waakye Mix",
        description: "Pre-seasoned rice and beans mix for easy prep",
        imageUrl: "/images/products/waakye.jpg",
        category: "Meal Kits",
        brandSlug: "mamas-kitchen",
        weight: "400g",
        featured: false,
      },
    ],
    featured: true,
  },
  {
    id: "tropifruit",
    slug: "tropifruit",
    name: "TropiFruit",
    tagline: "Pure tropical refreshment",
    description:
      "100% natural tropical fruit juices and beverages with no added sugar.",
    longDescription:
      "TropiFruit captures the essence of tropical Africa in every bottle. Using only locally sourced fruits — mangoes from the Northern Region, pineapples from the Eastern coast, and baobab from the savannah — TropiFruit delivers authentic, no-sugar-added refreshment that celebrates Africa's incredible biodiversity.",
    logoUrl: "/logos/tropifruit-logo.svg",
    heroImageUrl: "/images/brands/tropifruit-hero.jpg",
    primaryColor: "#F57F17",
    secondaryColor: "#FFF176",
    category: "Juices & Beverages",
    yearEstablished: 2020,
    products: [
      {
        id: "tf-1",
        name: "Mango Nectar",
        description: "100% natural mango juice, no added sugar",
        imageUrl: "/images/products/mango.jpg",
        category: "Juices",
        brandSlug: "tropifruit",
        weight: "500ml",
        featured: true,
      },
      {
        id: "tf-2",
        name: "Pineapple Ginger Blend",
        description: "Pineapple juice with a refreshing ginger kick",
        imageUrl: "/images/products/pineapple-ginger.jpg",
        category: "Juices",
        brandSlug: "tropifruit",
        weight: "500ml",
        featured: true,
      },
      {
        id: "tf-3",
        name: "Baobab Smoothie",
        description: "Creamy baobab fruit smoothie packed with vitamin C",
        imageUrl: "/images/products/baobab.jpg",
        category: "Smoothies",
        brandSlug: "tropifruit",
        weight: "350ml",
        featured: false,
      },
    ],
    featured: false,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getAllProducts(): Product[] {
  return brands.flatMap((b) => b.products);
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((p) => p.featured);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  const brand = getBrandBySlug(brandSlug);
  return brand?.products ?? [];
}

export function getProductCategories(): string[] {
  const categories = new Set(getAllProducts().map((p) => p.category));
  return Array.from(categories).sort();
}
