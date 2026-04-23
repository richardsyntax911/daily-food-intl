"use client";

import Image from "next/image";
import type { Product, MarketId } from "@/data/brands";
import { getBrandBySlug, getVariant, resolveProductImage } from "@/data/brands";

interface ProductCardProps {
  product: Product;
  market?: MarketId;
  onClick?: (product: Product) => void;
}

export function ProductCard({ product, market = "ghana", onClick }: ProductCardProps) {
  /* Resolve the right variant for the selected market — with graceful fallback */
  const variant = getVariant(product, market) ?? product.variants[0];
  const brand = getBrandBySlug(variant.brandSlug);
  const imageUrl = resolveProductImage(variant, product);

  const displayName = variant.name;
  const displayDescription = variant.description;
  const displayBrandName = brand?.name ?? variant.brandSlug;

  return (
    <button
      type="button"
      onClick={() => onClick?.(product)}
      className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
    >
      {/* Pack shot on yellow sunburst — matches catalogue branding */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#F4C82E] via-[#F0B020] to-[#E89A0E]">
        {/* Sunburst rays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.35)_0%,_transparent_60%)]" />
        <div className="relative flex h-full items-center justify-center p-6">
          <div className="relative h-full w-full">
            <Image
              src={imageUrl}
              alt={`${displayName} — ${displayBrandName}`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Brand badge */}
        <span
          className="self-start rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white"
          style={{ backgroundColor: "#791619" }}
        >
          {displayBrandName}
        </span>

        <h3 className="mt-3 font-heading text-lg text-foreground">
          {displayName}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-foreground-muted">
          {displayDescription}
        </p>

        {/* Meta row: category + nutrition highlight */}
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-3">
          <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-foreground-muted">
            {product.category}
          </span>
          {product.nutrition && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {product.nutrition.energyKcal.toFixed(0)} kcal / 100g
            </span>
          )}
          {product.bunVariants && (
            <span className="rounded-full bg-coral/10 px-2.5 py-0.5 text-xs font-medium text-coral">
              {product.bunVariants.length} variants
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
