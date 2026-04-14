"use client";

import type { Product } from "@/data/brands";
import { getBrandBySlug } from "@/data/brands";

interface ProductCardProps {
  product: Product;
  brandName?: string;
}

export function ProductCard({ product, brandName }: ProductCardProps) {
  const brand = getBrandBySlug(product.brandSlug);
  const displayBrandName = brandName ?? brand?.name ?? product.brandSlug;
  const primaryColor = brand?.primaryColor ?? "#791619";
  const secondaryColor = brand?.secondaryColor ?? "#F9B233";

  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Image area: colored gradient placeholder */}
      <div
        className="aspect-square"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}33, ${secondaryColor}55)`,
        }}
      >
        <div className="flex h-full items-center justify-center">
          <span className="text-5xl font-bold opacity-15">
            {product.name.charAt(0)}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Brand name badge */}
        <span
          className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white"
          style={{ backgroundColor: primaryColor }}
        >
          {displayBrandName}
        </span>

        <h3 className="mt-2 font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-foreground-muted">
          {product.description}
        </p>

        {/* Weight badge */}
        <div className="mt-3">
          <span className="rounded-full bg-surface px-3 py-0.5 text-xs font-medium text-foreground-muted">
            {product.weight}
          </span>
        </div>
      </div>
    </div>
  );
}
