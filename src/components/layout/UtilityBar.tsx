"use client";

import Link from "next/link";
import { ShieldCheck, Linkedin, Facebook, Instagram } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function UtilityBar() {
  const { socialLinks } = COMPANY;

  return (
    <div className="bg-primary text-white/80 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
        {/* Credential strip — replaces the old GSE stock ticker since the
            company is private and founder-financed. */}
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
          <span className="font-semibold text-white">ISO 22000 & FSSC 22000</span>
          <span className="hidden text-white/60 sm:inline">
            · Serving 15 markets across Africa
          </span>
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
