"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Users,
  History,
  Heart,
  Cookie,
  Package,
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Gift,
  Newspaper,
  Megaphone,
  Building,
  Sparkles,
  LucideIcon,
} from "lucide-react";

interface MegaMenuItem {
  label: string;
  href: string;
  description: string;
}

interface MegaMenuProps {
  label: string;
  items: readonly MegaMenuItem[];
  onClose: () => void;
}

/*
 * Per-label icon map — makes each dropdown feel specific to its section
 * rather than showing the same generic chevron 20 times. Falls back to a
 * sparkle icon if a label isn't mapped.
 */
const iconByLabel: Record<string, LucideIcon> = {
  /* About Us */
  "Our Story": Building2,
  Leadership: Users,
  History: History,
  "Mission & Values": Heart,

  /* Our Brands */
  "Boss Baker": Cookie,
  "Big Boss": Cookie,
  "All Products": Package,

  /* Sustainability */
  Planet: Leaf,
  People: Users,
  Prosperity: HeartHandshake,
  Governance: ShieldCheck,

  /* Careers */
  "Open Positions": Briefcase,
  "Life at Daily Food": Users,
  Internships: GraduationCap,
  Benefits: Gift,

  /* News & Media */
  "All News": Newspaper,
  "Press Releases": Megaphone,
  "Company News": Building,
  "Product Launches": Package,
};

export function MegaMenu({ label, items, onClose }: MegaMenuProps) {
  return (
    <div className="animate-dropdown-enter border-t border-border bg-white shadow-xl">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Section caption — gives the dropdown an anchor */}
        <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
          <p className="text-xs font-bold uppercase tracking-widest text-coral">
            {label}
          </p>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">
            Esc to close
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = iconByLabel[item.label] ?? Sparkles;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group relative flex items-start gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-surface hover:-translate-y-0.5"
              >
                {/* Icon tile */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground transition-colors group-hover:text-primary">
                    <span className="truncate">{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-foreground-muted">
                    {item.description}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
