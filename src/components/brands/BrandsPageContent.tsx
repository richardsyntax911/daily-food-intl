"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BrandCard } from "@/components/brands/BrandCard";
import { brands } from "@/data/brands";

export function BrandsPageContent() {
  return (
    <main>
      {/* Hero banner */}
      <section className="bg-primary py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                Our Brand Portfolio
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Five distinctive brands united by a shared commitment to quality,
                nutrition, and flavour. From baked goods to fresh juices, discover
                the products that nourish millions across Africa and beyond.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Brand grid */}
      <section className="bg-background-warm py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, index) => (
              <ScrollReveal key={brand.id} delay={index * 0.1}>
                <BrandCard brand={brand} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
