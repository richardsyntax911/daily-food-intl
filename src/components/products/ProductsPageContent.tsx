"use client";

import { useState, useMemo } from "react";
import { PackageSearch } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductCard } from "@/components/products/ProductCard";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import {
  brands,
  getAllProducts,
  getProductCategories,
} from "@/data/brands";

export function ProductsPageContent() {
  const allProducts = getAllProducts();
  const categories = getProductCategories();

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesBrand =
        activeBrand === "All" || product.brandSlug === activeBrand;
      return matchesCategory && matchesBrand;
    });
  }, [allProducts, activeCategory, activeBrand]);

  return (
    <main>
      {/* Hero banner */}
      <section className="bg-primary py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                Our Products
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Browse the complete product catalogue from Daily Food Limited
                International. From baked goods and cereals to juices and
                ready-to-eat meals.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Filter bar + product grid */}
      <section className="bg-background-warm py-16">
        <Container>
          {/* Filter bar */}
          <ScrollReveal>
            <div className="mb-10 rounded-2xl bg-white p-6 shadow-sm">
              <CategoryFilter
                categories={categories}
                brands={brands}
                activeCategory={activeCategory}
                activeBrand={activeBrand}
                onCategoryChange={setActiveCategory}
                onBrandChange={setActiveBrand}
              />
            </div>
          </ScrollReveal>

          {/* Results count */}
          <p className="mb-6 text-sm text-foreground-muted">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <ScrollReveal key={product.id} delay={Math.min(index * 0.05, 0.4)}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-20 text-center shadow-sm">
              <PackageSearch className="mb-4 h-12 w-12 text-foreground-muted/40" />
              <h3 className="font-heading text-xl text-foreground">
                No products found
              </h3>
              <p className="mt-2 max-w-sm text-sm text-foreground-muted">
                Try adjusting your filters. Select a different category or brand
                to see more products.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setActiveBrand("All");
                }}
                className="mt-6 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
