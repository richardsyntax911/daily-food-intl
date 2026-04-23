"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Flame, Wheat, Droplet, Leaf } from "lucide-react";
import { CertificationBadges } from "@/components/ui/CertificationBadges";
import {
  type Product,
  type MarketId,
  getVariant,
  resolveProductImage,
  getBrandBySlug,
  markets,
} from "@/data/brands";

interface ProductDetailModalProps {
  product: Product;
  market: MarketId;
  onClose: () => void;
}

export function ProductDetailModal({ product, market, onClose }: ProductDetailModalProps) {
  const variant = getVariant(product, market) ?? product.variants[0];
  const brand = getBrandBySlug(variant.brandSlug);
  const imageUrl = resolveProductImage(variant, product);

  /* Close on Esc */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const otherMarkets = product.variants.filter((v) => v.market !== market);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm md:items-center md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={variant.name}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md transition-all hover:bg-white hover:shadow-lg"
          aria-label="Close product details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-0 md:grid-cols-[1fr_1.2fr] lg:grid-cols-[1.1fr_1.3fr]">
          {/* Pack shot panel — catalogue yellow sunburst.
              Mobile: 4/5 ratio keeps the pack visible without swallowing
              the whole viewport before the content reveals. */}
          <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#F4C82E] via-[#F0B020] to-[#E89A0E] md:aspect-auto md:h-auto md:min-h-[500px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_transparent_65%)]" />
            <div className="relative h-[80%] w-[80%]">
              <Image
                src={imageUrl}
                alt={`${variant.name} — ${brand?.name ?? variant.brandSlug}`}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content panel */}
          <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6 md:max-h-[85vh] md:p-8 lg:p-10">
            {/* Brand + category */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                style={{ backgroundColor: "#791619" }}
              >
                {brand?.name ?? variant.brandSlug}
              </span>
              <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground-muted">
                {product.category}
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {markets.find((m) => m.id === market)?.flag}{" "}
                {markets.find((m) => m.id === market)?.shortLabel}
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl text-foreground md:text-4xl">
              {variant.name}
            </h2>

            <p className="mt-3 leading-relaxed text-foreground-muted">
              {variant.description}
            </p>

            {/* Nutrition (if available) */}
            {product.nutrition && (
              <div className="mt-6 rounded-xl border border-border bg-surface p-4 md:p-5">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground-muted">
                  Nutritional Value / 100g
                </h3>
                {/* 2-col grid: keeps long labels (Carbohydrate / Dietary fiber)
                    from colliding with neighbour icons. Fiber row spans full
                    width when present so we don't break the 2x2 rhythm. */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  <NutritionStat
                    icon={<Flame className="h-4 w-4" />}
                    label="Energy"
                    value={`${product.nutrition.energyKcal.toFixed(2)}`}
                    unit="kcal"
                  />
                  <NutritionStat
                    icon={<Wheat className="h-4 w-4" />}
                    label="Protein"
                    value={`${product.nutrition.proteinPct.toFixed(2)}`}
                    unit="%"
                  />
                  <NutritionStat
                    icon={<Droplet className="h-4 w-4" />}
                    label="Carbohydrate"
                    value={`${product.nutrition.carbPct.toFixed(2)}`}
                    unit="%"
                  />
                  <NutritionStat
                    icon={<Leaf className="h-4 w-4" />}
                    label="Fat"
                    value={`${product.nutrition.fatPct.toFixed(2)}`}
                    unit="%"
                  />
                  {product.nutrition.fiberPct !== undefined && (
                    <div className="col-span-2 border-t border-border pt-4">
                      <NutritionStat
                        icon={<Leaf className="h-4 w-4" />}
                        label="Dietary fiber"
                        value={`${product.nutrition.fiberPct.toFixed(2)}`}
                        unit="%"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Ingredients */}
            <div className="mt-6">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-foreground-muted">
                Ingredients
              </h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                {product.ingredients}
              </p>
            </div>

            {/* Burger Bun variant table */}
            {product.bunVariants && (
              <div className="mt-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-foreground-muted">
                  Available Formats
                </h3>
                {/* Horizontal scroll wrapper so the 4-col table doesn't
                    overflow the modal on narrow viewports. */}
                <div className="-mx-1 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full min-w-[480px] text-sm">
                    <thead className="bg-surface">
                      <tr>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-foreground">Customer</th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-foreground">Size</th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-foreground">Weight</th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-foreground">Pack</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-white">
                      {product.bunVariants.map((bv, i) => (
                        <tr key={i}>
                          <td className="whitespace-nowrap px-4 py-2 font-medium text-foreground">{bv.customer}</td>
                          <td className="whitespace-nowrap px-4 py-2 text-foreground-muted">{bv.size}</td>
                          <td className="whitespace-nowrap px-4 py-2 text-foreground-muted">{bv.weight}</td>
                          <td className="whitespace-nowrap px-4 py-2 text-foreground-muted">{bv.packaging}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Also available in — grid so cards stay full-width on narrow
                modals and 2-up when there's room */}
            {otherMarkets.length > 0 && (
              <div className="mt-6 border-t border-border pt-5">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-foreground-muted">
                  Also available in
                </h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {otherMarkets.map((v) => {
                    const m = markets.find((x) => x.id === v.market)!;
                    const b = getBrandBySlug(v.brandSlug);
                    return (
                      <div
                        key={v.market}
                        className="flex min-w-0 items-center gap-2 rounded-lg border border-border bg-white px-3 py-2"
                      >
                        <span className="text-base leading-none">{m.flag}</span>
                        <div className="flex min-w-0 flex-col">
                          <span className="truncate text-xs font-semibold text-foreground">
                            {v.name}
                          </span>
                          <span className="truncate text-[10px] uppercase tracking-wide text-foreground-muted">
                            {b?.name} · {m.shortLabel}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Footer — certification badges */}
            <div className="mt-8 border-t border-border pt-5">
              <CertificationBadges size="sm" className="items-start sm:items-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NutritionStat({
  icon,
  label,
  value,
  unit,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
        <span className="text-primary">{icon}</span>
        {label}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-heading text-xl text-foreground">{value}</span>
        <span className="text-xs text-foreground-muted">{unit}</span>
      </div>
    </div>
  );
}
