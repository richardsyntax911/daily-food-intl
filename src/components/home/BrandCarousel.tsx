"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { brands } from "@/data/brands";

export function BrandCarousel() {
  return (
    <section className="bg-background-warm py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Trusted Brands, Loved Worldwide"
            subtitle="Discover the family of brands that bring quality, nutrition, and flavor to tables across Africa and beyond."
          />
        </ScrollReveal>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <ScrollReveal key={brand.id} delay={index * 0.1}>
              <Link
                href={`/brands/${brand.slug}`}
                className="group block rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                  <Image
                    src={brand.logoUrl}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain max-h-16 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted line-clamp-2">
                  {brand.tagline}
                </p>
                <span className="mt-3 inline-block rounded-full bg-secondary/15 px-3 py-1 text-xs font-medium text-accent">
                  {brand.category}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brands/${brand.slug}`}
                className="group flex-shrink-0 w-[280px] snap-start rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                  <Image
                    src={brand.logoUrl}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain max-h-16 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted line-clamp-2">
                  {brand.tagline}
                </p>
                <span className="mt-3 inline-block rounded-full bg-secondary/15 px-3 py-1 text-xs font-medium text-accent">
                  {brand.category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
