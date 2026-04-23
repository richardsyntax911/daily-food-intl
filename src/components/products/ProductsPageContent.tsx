"use client";

import { useState, useMemo } from "react";
import { PackageSearch, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";
import {
  products,
  markets,
  getProductCategories,
  type MarketId,
  type Product,
} from "@/data/brands";

export function ProductsPageContent() {
  const categories = getProductCategories();

  const [activeMarket, setActiveMarket] = useState<MarketId>("ghana");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const activeMarketData = markets.find((m) => m.id === activeMarket)!;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const inMarket = product.variants.some((v) => v.market === activeMarket);
      const inCategory =
        activeCategory === "All" || product.category === activeCategory;
      return inMarket && inCategory;
    });
  }, [activeMarket, activeCategory]);

  return (
    <main>
      {/* =========================================================== */}
      {/*  HERO                                                        */}
      {/* =========================================================== */}
      <section className="bg-coral py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl text-white md:text-5xl lg:text-6xl">
                Our Products
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Twelve SKUs produced to ISO 22000 and FSSC 22000 standards,
                shipped across 15 West and Central African markets under our
                Boss Baker and Big Boss brands.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* =========================================================== */}
      {/*  MARKET SELECTOR                                             */}
      {/* =========================================================== */}
      <section className="border-b border-border bg-white py-6">
        <Container>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2 text-sm text-foreground-muted">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-semibold text-foreground">Viewing market:</span>
              <span className="hidden sm:inline">
                {activeMarketData.countries.join(", ")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {markets.map((market) => (
                <button
                  key={market.id}
                  type="button"
                  onClick={() => setActiveMarket(market.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    activeMarket === market.id
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-border bg-white text-foreground-muted hover:border-primary/50 hover:text-foreground"
                  }`}
                  aria-pressed={activeMarket === market.id}
                >
                  <span className="text-base leading-none">{market.flag}</span>
                  <span>{market.shortLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================== */}
      {/*  CATEGORY FILTER + PRODUCT GRID                              */}
      {/* =========================================================== */}
      <section className="bg-background-warm py-12 md:py-16">
        <Container>
          {/* Category pills */}
          <ScrollReveal>
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === "All"
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-foreground-muted hover:bg-surface"
                }`}
              >
                All ({products.filter((p) => p.variants.some((v) => v.market === activeMarket)).length})
              </button>
              {categories.map((category) => {
                const count = products.filter(
                  (p) =>
                    p.category === category &&
                    p.variants.some((v) => v.market === activeMarket)
                ).length;
                if (count === 0) return null;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      activeCategory === category
                        ? "bg-primary text-white shadow-sm"
                        : "bg-white text-foreground-muted hover:bg-surface"
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Results count */}
          <p className="mb-6 text-sm text-foreground-muted">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"} in{" "}
            <span className="font-semibold text-foreground">
              {activeMarketData.label}
            </span>
          </p>

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  delay={Math.min(index * 0.05, 0.4)}
                >
                  <ProductCard
                    product={product}
                    market={activeMarket}
                    onClick={(p) => setSelectedProduct(p)}
                  />
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
                Try a different category or switch to another market.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-6 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Clear Filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* =========================================================== */}
      {/*  PRODUCT DETAIL MODAL                                         */}
      {/* =========================================================== */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          market={activeMarket}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}
