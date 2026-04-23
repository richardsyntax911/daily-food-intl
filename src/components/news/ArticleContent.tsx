"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
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
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.publishedDate)}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
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
              {/* Placeholder image area */}
              <div className="mb-10 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/20 to-accent/15" />

              {/* Article text */}
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

              {/* Back link */}
              <div className="mt-12 border-t border-border pt-8">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to News
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
