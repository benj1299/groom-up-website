"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn, WAITLIST_URL } from "@/lib/utils";

const navLinks = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Professionnels", href: "#pros" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-stone-950/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img src="/favicon.png" alt="" className="h-7 w-7 rounded-md" />
          <span className="font-[family-name:var(--font-display)] text-base font-bold text-white">
            Groom Up
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-stone-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href={WAITLIST_URL}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-stone-950 transition-all hover:shadow-lg hover:shadow-white/10"
          >
            <span className="relative z-10">Accès anticipé</span>
            <svg
              className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-stone-400 md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-stone-950/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-6 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/5 py-3 text-sm text-stone-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WAITLIST_URL}
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-white py-2.5 text-center text-sm font-semibold text-stone-950"
            >
              Accès anticipé
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
