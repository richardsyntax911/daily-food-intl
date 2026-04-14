"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import type { Brand } from "@/data/brands";

interface BrandDetailContentProps {
  brand: Brand;
}

export function BrandDetailContent({ brand }: BrandDetailContentProps) {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative py-24 md:py-32"
        style={{ backgroundColor: brand.primaryColor }}
      >
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <ScrollReveal>
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/15 p-4">
                <Image
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  width={180}
                  height={90}
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                {brand.name}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 text-xl italic text-white/80">
                {brand.tagline}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                {brand.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="mt-4 flex items-center gap-4">
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
                  {brand.category}
                </span>
                <span className="text-sm text-white/60">
                  Est. {brand.yearEstablished}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Brand story */}
      <section className="bg-background-warm py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-3xl text-foreground md:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
                {brand.longDescription}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Products section */}
      <section className="bg-white py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Product Range"
              title={`Products from ${brand.name}`}
              subtitle={`Explore the full range of quality products under the ${brand.name} brand.`}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brand.products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.1}>
                <div className="group overflow-hidden rounded-xl bg-surface shadow-sm transition-all duration-300 hover:shadow-md">
                  {/* Gradient placeholder */}
                  <div
                    className="aspect-square"
                    style={{
                      background: `linear-gradient(135deg, ${brand.primaryColor}33, ${brand.secondaryColor}55)`,
                    }}
                  >
                    <div className="flex h-full items-center justify-center">
                      <span className="text-4xl font-bold opacity-20">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Product info */}
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {product.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="rounded-full bg-border px-3 py-0.5 text-xs font-medium text-foreground-muted">
                        {product.weight}
                      </span>
                      <span className="rounded-full bg-secondary/15 px-3 py-0.5 text-xs font-medium text-accent">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-12 text-center">
              <Button href={`/products?brand=${brand.slug}`} variant="primary">
                View All {brand.name} Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
