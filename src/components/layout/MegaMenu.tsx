"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface MegaMenuItem {
  label: string;
  href: string;
  description: string;
}

interface MegaMenuProps {
  items: readonly MegaMenuItem[];
  onClose: () => void;
}

export function MegaMenu({ items, onClose }: MegaMenuProps) {
  return (
    <div className="animate-dropdown-enter absolute left-0 top-full z-50 w-full border-t border-border bg-white shadow-xl">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-surface"
            >
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <ChevronRight className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-foreground group-hover:text-primary">
                  {item.label}
                </div>
                <div className="mt-0.5 text-sm text-foreground-muted">
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
