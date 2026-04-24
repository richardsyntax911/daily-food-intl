"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { NewsArticle } from "@/data/news";

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

interface ArticleContentProps {
  article: NewsArticle;
}

export function ArticleContent({ article }: ArticleContentProps) {
  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <main>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="bg-coral py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span
                className={`mb-4 inline-block rounded-full px-4 py-1 text-sm font-semibold ${categoryColor(
                  article.category
                )} bg-white/90`}
              >
                {article.category}
              </span>
              <h1 className="font-heading text-3xl text-white md:text-4xl lg:text-5xl">
                {article.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.publishedDate)}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                {article.sourceName && (
                  <span className="flex items-center gap-1.5">
                    <ExternalLink className="h-4 w-4" />
                    {article.sourceName}
                  </span>
                )}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/*  ARTICLE BODY                                                 */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              {/* Hero image */}
              <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 768px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Source attribution — surfaces external publishing source */}
              {article.sourceName && article.sourceUrl && (
                <div className="mb-8 rounded-lg border border-border bg-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
                    Originally published by
                  </p>
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {article.sourceName}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}

              {/* Article body */}
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-6 leading-relaxed text-foreground-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Footer — source attribution + back link */}
              <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to News
                </Link>
                {article.sourceUrl && (
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground-muted transition-colors hover:text-foreground"
                  >
                    Read the original article
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
