"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

/*
 * Nav hover timing — tuned for intent detection:
 *   OPEN_DELAY  — short delay before opening a mega menu, prevents flash
 *     when the user is only passing through on their way to another link
 *   CLOSE_DELAY — longer delay before closing, gives the user time to
 *     travel the vertical gap from nav link to mega menu without the
 *     menu collapsing out from under them
 */
const OPEN_DELAY = 80;
const CLOSE_DELAY = 200;

export function MainNav() {
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* One timer for both directions — clearing the pending action when the
     user's cursor decision changes (e.g. they move back into a nav link
     while a close timer is running). */
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const scheduleOpen = useCallback((label: string) => {
    clearTimer();
    /* If another mega is already open, swap instantly — no delay on
       nav-link-to-nav-link transitions */
    if (activeMega !== null && activeMega !== label) {
      setActiveMega(label);
      return;
    }
    timerRef.current = setTimeout(() => setActiveMega(label), OPEN_DELAY);
  }, [activeMega]);

  const scheduleClose = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => setActiveMega(null), CLOSE_DELAY);
  }, []);

  const cancelScheduledClose = useCallback(() => {
    clearTimer();
  }, []);

  /* Close on Escape — basic keyboard affordance */
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMega(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("keydown", onEsc);
      clearTimer();
    };
  }, []);

  /* Cleanup on unmount */
  useEffect(() => () => clearTimer(), []);

  const activeItem = NAV_ITEMS.find((i) => i.label === activeMega) ?? null;

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
          {NAV_ITEMS.map((item) => {
            const isActive = activeMega === item.label;
            return (
              <div
                key={item.label}
                onMouseEnter={() => scheduleOpen(item.label)}
                onMouseLeave={scheduleClose}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onFocus={() => scheduleOpen(item.label)}
                  aria-haspopup={item.megaMenu.length > 0}
                  aria-expanded={isActive}
                >
                  {item.label}
                  {item.megaMenu.length > 0 && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
              </div>
            );
          })}
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

      {/* Desktop mega menu — SINGLE shared container.
          Invisible hover bridge (first div) ensures the 4px gap between
          nav and menu still counts as "hovering the menu", killing the
          old close-while-traveling bug. */}
      {activeItem && (
        <div
          onMouseEnter={cancelScheduledClose}
          onMouseLeave={scheduleClose}
          className="absolute left-0 right-0 top-full z-40"
        >
          {/* Invisible bridge — catches the cursor in the visual gap */}
          <div className="h-2 w-full" aria-hidden="true" />
          <MegaMenu
            label={activeItem.label}
            items={activeItem.megaMenu}
            onClose={() => setActiveMega(null)}
          />
        </div>
      )}

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
