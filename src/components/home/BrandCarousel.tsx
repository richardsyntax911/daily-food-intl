"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";
import {
  products,
  getVariant,
  resolveProductImage,
  hasRealImageForMarket,
  type Product,
} from "@/data/brands";

/* ------------------------------------------------------------------ */
/*  Home-page Product Showcase — interactive auto-scroll carousel     */
/*                                                                    */
/*  Design:                                                           */
/*   - Auto-scrolls right-to-left at ~35px/s (readable pace)          */
/*   - Pauses while the user is hovering the row                      */
/*   - Arrow buttons appear on hover (desktop) for precise navigation */
/*   - Native horizontal scroll works on touch / mouse wheel          */
/*   - Seamlessly loops by doubling the list and resetting scrollLeft */
/*     when we cross the halfway mark                                 */
/*   - Only shows products whose real Ghana pack shot is available    */
/*     (prevents fallback-image duplicates in the marquee)            */
/*                                                                    */
/*  Clicking any tile opens the full ProductDetailModal.              */
/* ------------------------------------------------------------------ */

export function BrandCarousel() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  /* Only products with real pack shots — no fallbacks in the teaser */
  const visibleProducts = products.filter((p) => hasRealImageForMarket(p, "ghana"));

  /* Duplicate for the seamless loop */
  const doubled = [...visibleProducts, ...visibleProducts];

  /* Carousel state */
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const userScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* RAF-driven auto-scroll — runs whenever nobody is hovering or scrubbing */
  useEffect(() => {
    if (isHovering || isUserScrolling) return;
    let rafId: number;
    const tick = () => {
      const el = trackRef.current;
      if (el) {
        el.scrollLeft += 0.6; // ~36px/s @ 60fps
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth; // invisible jump back to start
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isHovering, isUserScrolling]);

  /* Detect manual scrolling (wheel / touch / drag) and pause auto-scroll
     briefly so the user's interaction isn't fighting the RAF loop. */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const markInteracting = () => {
      setIsUserScrolling(true);
      if (userScrollTimer.current) clearTimeout(userScrollTimer.current);
      userScrollTimer.current = setTimeout(() => setIsUserScrolling(false), 2500);
    };
    el.addEventListener("wheel", markInteracting, { passive: true });
    el.addEventListener("touchstart", markInteracting, { passive: true });
    return () => {
      el.removeEventListener("wheel", markInteracting);
      el.removeEventListener("touchstart", markInteracting);
      if (userScrollTimer.current) clearTimeout(userScrollTimer.current);
    };
  }, []);

  /* Arrow-button navigation — scrolls by ~one tile width + gap.
     Also marks "user interacting" so the RAF auto-scroll pauses. */
  const scrollByCards = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const firstTile = el.querySelector<HTMLElement>("[data-tile]");
    const step = (firstTile?.offsetWidth ?? 240) + 20; // tile + gap
    el.scrollBy({ left: direction * step, behavior: "smooth" });
    setIsUserScrolling(true);
    if (userScrollTimer.current) clearTimeout(userScrollTimer.current);
    userScrollTimer.current = setTimeout(() => setIsUserScrolling(false), 2500);
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        {/* Boxed card wraps the whole showcase — heading, marquee and CTA
            all live inside a single rounded container on the page. The
            warm cream bg visually pairs with the yellow-sunburst pack
            shots inside and sets the section apart from the white
            sections above and below. */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background-warm px-4 py-10 shadow-sm sm:px-6 md:px-8 md:py-14 lg:px-12 lg:py-16">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Portfolio"
              title="Trusted Brands, Loved Across Africa"
              subtitle="Click any pack to see ingredients, nutrition and market-specific names. Hover the row to pause — swipe or use the arrows to browse."
            />
          </ScrollReveal>

          {/* Carousel inside the box */}
          <div
            className="group relative -mx-4 mt-8 sm:-mx-6 md:-mx-8 lg:-mx-12"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Left arrow — visible on hover (desktop), always visible on touch */}
            <button
              type="button"
              aria-label="Scroll products left"
              onClick={() => scrollByCards(-1)}
              className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-md transition-all hover:bg-primary hover:text-white hover:shadow-lg group-hover:flex md:flex md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right arrow */}
            <button
              type="button"
              aria-label="Scroll products right"
              onClick={() => scrollByCards(1)}
              className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-md transition-all hover:bg-primary hover:text-white hover:shadow-lg group-hover:flex md:flex md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Edge fade masks — fade into the box's warm cream so the
                marquee dissolves at the rounded corners instead of hard-
                clipping */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background-warm to-transparent md:w-20" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background-warm to-transparent md:w-20" />

            {/* Scrollable track */}
            <div
              ref={trackRef}
              className="scrollbar-hide overflow-x-auto scroll-smooth"
              style={{ scrollSnapType: "x proximity" }}
            >
              <div className="flex w-max items-stretch gap-5 px-4 sm:px-6 md:gap-6 md:px-8 lg:px-12">
                {doubled.map((product, i) => (
                  <ProductTile
                    key={`${product.id}-${i}`}
                    product={product}
                    onClick={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA inside the box */}
          <ScrollReveal>
            <div className="mt-10 flex justify-center">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
              >
                Explore All Products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Detail modal — shared with the Products page */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          market="ghana"
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ProductTile — compact pack-shot card                              */
/* ------------------------------------------------------------------ */
function ProductTile({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  const variant = getVariant(product, "ghana") ?? product.variants[0];
  const imageUrl = resolveProductImage(variant, product);

  return (
    <button
      type="button"
      data-tile
      onClick={onClick}
      aria-label={`View ${variant.name}`}
      className="group/tile flex w-48 flex-shrink-0 flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:w-56 lg:w-60"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Pack shot on yellow sunburst */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#F4C82E] via-[#F0B020] to-[#E89A0E]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.35)_0%,_transparent_60%)]" />
        <div className="relative flex h-full items-center justify-center p-4">
          <div className="relative h-full w-full">
            <Image
              src={imageUrl}
              alt={`${variant.name} pack`}
              fill
              sizes="(min-width: 1024px) 240px, (min-width: 640px) 224px, 192px"
              className="object-contain transition-transform duration-500 group-hover/tile:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Body — extra vertical rhythm so the product name reads as a
          distinct line, not crowded against the brand badge. */}
      <div className="flex flex-col gap-3 p-4 md:p-5">
        <span
          className="self-start rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: "#791619" }}
        >
          Boss Baker
        </span>
        <h3 className="line-clamp-1 font-heading text-sm text-foreground transition-colors group-hover/tile:text-primary md:text-base">
          {variant.name}
        </h3>
      </div>
    </button>
  );
}
