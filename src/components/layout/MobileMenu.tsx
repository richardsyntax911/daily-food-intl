"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />

      {/* Slide-out panel */}
      <div className="animate-slide-in-right fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl">
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Close button */}
          <div className="flex items-center justify-between border-b border-border px-4 py-4">
            <span className="font-heading text-lg text-primary">Menu</span>
            <button
              onClick={onClose}
              className="rounded-full p-2 transition-colors hover:bg-surface"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-border/50">
                <button
                  onClick={() =>
                    setExpandedItem(
                      expandedItem === item.label ? null : item.label
                    )
                  }
                  className="flex w-full items-center justify-between py-4 text-left font-semibold text-foreground"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedItem === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedItem === item.label && (
                  <div className="animate-fade-in pb-4 pl-4">
                    {item.megaMenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={onClose}
                        className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-foreground-muted transition-colors hover:bg-surface hover:text-primary"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                        <div>
                          <div className="font-medium">{sub.label}</div>
                          <div className="text-xs text-foreground-muted/70">
                            {sub.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick links */}
          <div className="border-t border-border px-4 py-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/investors"
                onClick={onClose}
                className="text-sm font-medium text-foreground-muted hover:text-primary"
              >
                Investors
              </Link>
              <Link
                href="/careers"
                onClick={onClose}
                className="text-sm font-medium text-foreground-muted hover:text-primary"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="text-sm font-medium text-foreground-muted hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
