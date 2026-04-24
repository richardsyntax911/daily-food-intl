"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  gradientFrom: string;
  gradientTo: string;
  slug: string;
}

const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "DFLI Expands Operations to Three New West African Markets",
    excerpt:
      "Daily Food Limited International announces the launch of distribution networks in Senegal, Ivory Coast, and Cameroon, bringing our portfolio of brands to millions of new consumers.",
    date: "March 5, 2026",
    category: "Expansion",
    gradientFrom: "from-primary",
    gradientTo: "to-accent",
    slug: "dfli-expands-west-africa",
  },
  {
    id: "news-2",
    title: "Boss Baker Wins Gold at African Food Excellence Awards",
    excerpt:
      "Our flagship brand Boss Baker has been recognized with the Gold Award for Product Innovation at the 2026 African Food Excellence Awards for the Classic Meat Pie range.",
    date: "February 18, 2026",
    category: "Awards",
    gradientFrom: "from-secondary",
    gradientTo: "to-accent",
    slug: "boss-baker-gold-award",
  },
  {
    id: "news-3",
    title: "New State-of-the-Art Production Facility Breaks Ground",
    excerpt:
      "Construction begins on our newest 80,000 sq ft production facility, which will double our baked goods capacity and create 500 new jobs in the region.",
    date: "January 30, 2026",
    category: "Operations",
    gradientFrom: "from-green-600",
    gradientTo: "to-green-400",
    slug: "new-production-facility",
  },
];

export function NewsHighlights() {
  return (
    <section className="bg-white py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Latest Updates"
            title="News & Media"
            subtitle="Stay up to date with the latest from Daily Food Limited International."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15}>
              <article className="group rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Image placeholder */}
                <div
                  className={`aspect-video bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-sm tracking-widest uppercase">
                      News Image
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <time className="text-xs text-foreground-muted uppercase tracking-wider">
                    {item.date}
                  </time>
                  <h3 className="mt-2 font-heading text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground-muted leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
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
