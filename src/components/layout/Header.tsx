"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn, WAITLIST_URL } from "@/lib/utils";

const navLinks = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Services", href: "#categories" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-200/60 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
          Groom Up
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WAITLIST_URL}
            className="rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
          >
            Liste d&apos;attente
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "overflow-hidden border-t border-stone-200/60 bg-white transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-64" : "max-h-0 border-t-0"
        )}
      >
        <nav className="flex flex-col gap-4 px-5 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-stone-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WAITLIST_URL}
            onClick={() => setMobileOpen(false)}
            className="rounded-full bg-stone-900 px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Liste d&apos;attente
          </a>
        </nav>
      </div>
    </header>
  );
}
