"use client";

import { UtilityBar } from "./UtilityBar";
import { MainNav } from "./MainNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <UtilityBar />
      <MainNav />
    </header>
  );
}
