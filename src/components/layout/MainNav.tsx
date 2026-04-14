"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

export function MainNav() {
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logos/daily-food-international-logo.jpg"
            alt="Daily Food Limited International"
            width={746}
            height={340}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => setActiveMega(item.label)}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link
                href={item.href}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                  activeMega === item.label
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Right side: search + hamburger */}
        <div className="flex items-center gap-3">
          <button
            className="rounded-full p-2 text-foreground-muted transition-colors hover:bg-surface hover:text-primary"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-full p-2 text-foreground-muted transition-colors hover:bg-surface hover:text-primary lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Desktop Mega Menus */}
      {NAV_ITEMS.map((item) =>
        activeMega === item.label ? (
          <div
            key={item.label}
            onMouseEnter={() => setActiveMega(item.label)}
            onMouseLeave={() => setActiveMega(null)}
          >
            <MegaMenu
              items={item.megaMenu}
              onClose={() => setActiveMega(null)}
            />
          </div>
        ) : null
      )}

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
