import type { MetadataRoute } from "next";
import { brands } from "@/data/brands";
import { newsArticles } from "@/data/news";

const SITE_URL = "https://www.dailyfoodintl.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/brands",
    "/products",
    "/sustainability",
    "/careers",
    "/news",
    "/investors",
    "/contact",
  ];

  const brandPages = brands.map((brand) => `/brands/${brand.slug}`);
  const newsPages = newsArticles.map((article) => `/news/${article.slug}`);

  const allPages = [...staticPages, ...brandPages, ...newsPages];

  return allPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/") ? 0.7 : 0.8,
  }));
}
