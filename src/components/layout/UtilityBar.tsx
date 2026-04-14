"use client";

import Link from "next/link";
import { TrendingUp, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function UtilityBar() {
  const { stockTicker, socialLinks } = COMPANY;

  return (
    <div className="bg-background-dark text-white/80 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
        {/* Stock ticker */}
        <div className="flex items-center gap-2">
          <TrendingUp className="h-3.5 w-3.5 text-secondary" />
          <span className="font-semibold text-white">{stockTicker.symbol}</span>
          <span className="text-white/60">({stockTicker.exchange})</span>
          <span>GHS {stockTicker.price}</span>
          <span className="text-green-400">{stockTicker.change} ({stockTicker.changePercent})</span>
        </div>

        {/* Quick links + social */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-4">
            <Link href="/investors" className="transition-colors hover:text-white">
              Investors
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
          <div className="h-3 w-px bg-white/20" />
          <div className="flex items-center gap-3">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="Twitter">
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="Facebook">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="Instagram">
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
