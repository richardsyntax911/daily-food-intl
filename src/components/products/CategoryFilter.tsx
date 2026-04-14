"use client";

import { cn } from "@/lib/utils";
import type { Brand } from "@/data/brands";

interface CategoryFilterProps {
  categories: string[];
  brands: Brand[];
  activeCategory: string;
  activeBrand: string;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
}

export function CategoryFilter({
  categories,
  brands,
  activeCategory,
  activeBrand,
  onCategoryChange,
  onBrandChange,
}: CategoryFilterProps) {
  return (
    <div className="space-y-4">
      {/* Category tabs - horizontal scrollable */}
      <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            type="button"
            onClick={() => onCategoryChange("All")}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === "All"
                ? "bg-primary text-white"
                : "bg-surface text-foreground-muted hover:bg-border"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-surface text-foreground-muted hover:bg-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Brand filter pills */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onBrandChange("All")}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
            activeBrand === "All"
              ? "bg-accent text-white"
              : "bg-surface text-foreground-muted hover:bg-border"
          )}
        >
          All Brands
        </button>
        {brands.map((brand) => (
          <button
            key={brand.id}
            type="button"
            onClick={() => onBrandChange(brand.slug)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              activeBrand === brand.slug
                ? "text-white"
                : "bg-surface text-foreground-muted hover:bg-border"
            )}
            style={
              activeBrand === brand.slug
                ? { backgroundColor: brand.primaryColor }
                : undefined
            }
          >
            {brand.name}
          </button>
        ))}
      </div>
    </div>
  );
}
