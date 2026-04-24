"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { newsArticles, type NewsArticle } from "@/data/news";

/* Category badge colour — mirrors the /news page palette so chips look
   consistent between home teaser and full news page. */
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

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsHighlights() {
  /* Show the 3 most recent articles (featured first, then by date desc) */
  const items = [...newsArticles]
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    })
    .slice(0, 3);

  return (
    <section className="bg-white py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Latest Updates"
            title="News & Media"
            subtitle="Press coverage, interviews and stories on Daily Food Limited International."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15}>
              <Link
                href={`/news/${item.slug}`}
                className="group flex h-full flex-col rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Real article image */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category chip */}
                  <span
                    className={`absolute top-4 left-4 inline-block rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${categoryColor(item.category)}`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-xs text-foreground-muted uppercase tracking-wider">
                    {formatDate(item.publishedDate)}
                  </time>
                  <h3 className="mt-2 font-heading text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-foreground-muted leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    {item.sourceName && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-foreground-muted">
                        <ExternalLink className="h-3 w-3" />
                        {item.sourceName}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/news" variant="outline" size="lg">
            View All News
          </Button>
        </div>
      </Container>
    </section>
  );
}
