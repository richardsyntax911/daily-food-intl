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
/*  Behaviour:                                                        */
/*   - Auto-scrolls right-to-left at ~36px/s                          */
/*   - Pauses immediately on mouse hover (mouseenter -> mouseleave)   */
/*   - Pauses on touch — explicit touchstart/touchend tracking so the */
/*     auto-scroll never resumes while a finger is still on the row   */
/*   - Pauses briefly on wheel / arrow-button interaction             */
/*   - Native horizontal scroll for touch drag + mouse wheel          */
/*   - touch-action: pan-x tells mobile browsers to commit to a       */
/*     horizontal gesture without vertical-scroll hesitation          */
/*   - Seamlessly loops by doubling the list and resetting scrollLeft */
/*     when we cross the halfway mark                                 */
/*   - Only shows products whose real Ghana pack shot is available    */
/*                                                                    */
/*  Clicking any tile opens the full ProductDetailModal.              */
/* ------------------------------------------------------------------ */

export function BrandCarousel() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  /* Only products with real pack shots — no fallbacks in the teaser */
  const visibleProducts = products.filter((p) => hasRealImageForMarket(p, "ghana"));

  /* Duplicate for the seamless loop */
  const doubled = [...visibleProducts, ...visibleProducts];

  /* Carousel state — three independent pause sources so no timer has
     to arbitrate. AutoScroll runs when all three are false. */
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);   // mouse over row
  const [isTouching, setIsTouching] = useState(false);   // finger down
  const [isWheeling, setIsWheeling] = useState(false);   // recent wheel / arrow
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const shouldPause = isHovering || isTouching || isWheeling;

  /* RAF-driven auto-scroll — right-to-left motion comes from increasing
     scrollLeft (content visually moves left as the viewport pans right). */
  useEffect(() => {
    if (shouldPause) return;
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
  }, [shouldPause]);

  /* Wheel / trackpad scroll — pause briefly while the user scrolls so
     the RAF loop doesn't fight the browser's momentum. Auto-clears. */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = () => {
      setIsWheeling(true);
      if (wheelTimer.current) clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => setIsWheeling(false), 1200);
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (wheelTimer.current) clearTimeout(wheelTimer.current);
    };
  }, []);

  /* Arrow-button navigation — scrolls by ~one tile width + gap.
     Uses the wheel-pause lane so the smooth scroll can complete. */
  const scrollByCards = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const firstTile = el.querySelector<HTMLElement>("[data-tile]");
    const step = (firstTile?.offsetWidth ?? 240) + 20; // tile + gap
    el.scrollBy({ left: direction * step, behavior: "smooth" });
    setIsWheeling(true);
    if (wheelTimer.current) clearTimeout(wheelTimer.current);
    wheelTimer.current = setTimeout(() => setIsWheeling(false), 1200);
  };

  return (
    /* Full-width section. Warm cream bg (#FFF9EF) pairs with the yellow-
       sunburst pack shots and provides a breath between the surrounding
       white sections, without needing a boxed card treatment. */
    <section className="bg-background-warm py-16 md:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Trusted Brands, Loved Across Africa"
            subtitle="Click any pack to see ingredients, nutrition and market-specific names. Hover the row to pause — swipe or use the arrows to browse."
          />
        </ScrollReveal>
      </Container>

      {/* Edge-to-edge carousel */}
      <div
        className="group relative mt-8"
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

        {/* Scrollable track.
            touch-action: pan-x — browser commits to horizontal pan
            overscroll-behavior-x: contain — swipe doesn't trigger page nav
            onTouchStart/End — pause auto-scroll only while finger is down

            Vertical py-* on the inner flex row gives the hover shadow
            breathing room INSIDE the track. overflow-x-auto implicitly
            clips overflow-y (per CSS spec), so without this padding the
            hover:shadow-xl on each card gets cropped at the track edges
            and reads as a hard line below each card. */}
        <div
          ref={trackRef}
          className="scrollbar-hide overflow-x-auto cursor-grab active:cursor-grabbing"
          style={{
            scrollSnapType: "x proximity",
            touchAction: "pan-x",
            overscrollBehaviorX: "contain",
          }}
          onTouchStart={() => setIsTouching(true)}
          onTouchEnd={() => setIsTouching(false)}
          onTouchCancel={() => setIsTouching(false)}
        >
          <div className="flex w-max items-stretch gap-4 px-4 py-5 sm:gap-5 sm:px-6 md:gap-6 md:px-8 md:py-7 lg:px-12 lg:py-8">
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

      {/* CTA strip — extra top margin gives the hover shadow of the last
          card room to land before the button. */}
      <Container>
        <ScrollReveal>
          <div className="mt-8 flex justify-center md:mt-10">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
            >
              Explore All Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
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

      {/* Body — extra bottom padding so the product name isn't crammed
          against the card's bottom edge. Generous vertical rhythm
          between brand badge and product name. */}
      <div className="flex flex-col gap-3 px-4 pt-4 pb-5 md:gap-4 md:px-5 md:pt-5 md:pb-6">
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
