"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Brand } from "@/data/brands";

interface BrandCardProps {
  brand: Brand;
}

/**
 * Circular brand frame — each sub-brand is presented as a thin-outlined
 * circle in that brand's own primary color, with the logo centered inside
 * on a white field. Inspired by Mondelēz's /our-brands treatment.
 */
export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group flex flex-col items-center text-center"
    >
      {/* Circular logo frame — brand-colored ring, white interior */}
      <div
        className="relative flex aspect-square w-full max-w-[18rem] items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
        style={{
          border: `2px solid ${brand.primaryColor}`,
          boxShadow: `0 1px 3px ${brand.primaryColor}22`,
        }}
      >
        {/* Hover ring fill — subtle tinted wash on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          style={{ backgroundColor: brand.primaryColor }}
          aria-hidden="true"
        />
        <Image
          src={brand.logoUrl}
          alt={`${brand.name} logo`}
          width={180}
          height={90}
          className="relative h-auto w-[60%] max-w-[60%] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Brand identity */}
      <div className="mt-6 flex flex-col items-center gap-1.5">
        <h3 className="font-heading text-lg uppercase tracking-wider text-foreground transition-colors group-hover:text-primary">
          {brand.name}
        </h3>
        <p className="text-sm italic text-foreground-muted">{brand.tagline}</p>
        <span
          className="mt-1 inline-block rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wider"
          style={{
            color: brand.primaryColor,
            backgroundColor: `${brand.primaryColor}14`,
          }}
        >
          {brand.category}
        </span>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
          Explore Brand
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
