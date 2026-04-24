"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { newsArticles, type NewsArticle } from "@/data/news";

/* ------------------------------------------------------------------ */
/*  Category filter options                                            */
/* ------------------------------------------------------------------ */
const categories = [
  "All",
  "Press Release",
  "Company News",
  "Product Launch",
  "Sustainability",
  "Interview",
] as const;

/* ------------------------------------------------------------------ */
/*  Category badge color                                               */
/* ------------------------------------------------------------------ */
function categoryColor(category: NewsArticle["category"]) {
  switch (category) {
    case "Press Release":
      return "bg-primary/10 text-primary";
    case "Company News":
      return "bg-secondary/20 text-amber-800";
    case "Product Launch":
      return "bg-accent/10 text-accent";
    case "Sustainability":
      return "bg-green-100 text-green-800";
    case "Interview":
      return "bg-coral/10 text-coral";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

/* ------------------------------------------------------------------ */
/*  Format date                                                        */
/* ------------------------------------------------------------------ */
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? newsArticles
      : newsArticles.filter((a) => a.category === activeCategory);

  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const remaining = filtered.filter((a) => a.id !== featured?.id);

  return (
    <main>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="bg-coral py-24 md:py-32">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                News &amp; Media
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                The latest press coverage, interviews and stories on Daily Food
                Limited International.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  CATEGORY FILTER                                              */}
      {/* ============================================================ */}
      <section className="border-b border-border bg-white">
        <Container>
          <div className="-mb-px flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? newsArticles.length
                  : newsArticles.filter((a) => a.category === cat).length;
              if (cat !== "All" && count === 0) return null;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "text-foreground-muted hover:bg-surface"
                  }`}
                >
                  {cat} {count > 0 && <span className="opacity-60">({count})</span>}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  NEWS GRID                                                    */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <Container>
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-foreground-muted">
              No articles found in this category.
            </p>
          ) : (
            <>
              {/* Featured article */}
              {featured && (
                <ScrollReveal>
                  <Link
                    href={`/news/${featured.slug}`}
                    className="group mb-12 block overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      <Image
                        src={featured.imageUrl}
                        alt={featured.title}
                        fill
                        sizes="(min-width: 1024px) 1024px, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColor(
                            featured.category
                          )}`}
                        >
                          {featured.category}
                        </span>
                        <span className="text-sm text-foreground-muted">
                          {formatDate(featured.publishedDate)}
                        </span>
                        {featured.sourceName && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground-muted">
                            <ExternalLink className="h-3 w-3" />
                            {featured.sourceName}
                          </span>
                        )}
                      </div>
                      <h2 className="mt-3 font-heading text-2xl text-foreground transition-colors group-hover:text-primary md:text-3xl">
                        {featured.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-foreground-muted">
                        {featured.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Read More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              )}

              {/* Remaining grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {remaining.map((article, index) => (
                  <ScrollReveal key={article.id} delay={index * 0.1}>
                    <Link
                      href={`/news/${article.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full px-3 py-0.5 text-xs font-semibold ${categoryColor(
                              article.category
                            )}`}
                          >
                            {article.category}
                          </span>
                          <span className="text-xs text-foreground-muted">
                            {formatDate(article.publishedDate)}
                          </span>
                        </div>
                        <h3 className="mt-3 line-clamp-2 font-heading text-lg text-foreground transition-colors group-hover:text-primary">
                          {article.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm text-foreground-muted">
                          {article.excerpt}
                        </p>
                        {article.sourceName && (
                          <p className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-foreground-muted">
                            <ExternalLink className="h-3 w-3" />
                            {article.sourceName}
                          </p>
                        )}
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Read More <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
    </main>
  );
}
