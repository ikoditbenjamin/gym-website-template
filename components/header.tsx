"use client";

import { useState, useEffect } from "react";
import { Menu, X, MapPin, Moon, Sun, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";

type NavItem = {
  label: string;
  sub: string;
  href: string;
  badge?: string;
  dropdown?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", sub: "Start here", href: "/" },
  { label: "About", sub: "Our team", href: "/about" },
  { label: "Classes", sub: "Training", href: "/classes" },
  { label: "Articles", sub: "Tutorials", href: "/articles" },
  {
    label: "Join Now",
    sub: "Membership",
    href: "/membership",
    badge: "50% Off",
  },
  {
    label: "Pages",
    sub: "Others",
    href: "#",
    dropdown: [
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Pricing", href: "/pricing" },
      { label: "Promos", href: "/promos" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Profile", href: "/profile" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/98 shadow-lg shadow-black/40"
          : "bg-gray-950"
      } border-b border-white/5`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            {/* circular red badge icon */}
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
              <span className="text-white font-black text-xl">⚡</span>
            </div>
            <div>
              <p className="font-black text-xl leading-none tracking-wide">
                <span className="text-white">TROY</span>
                <span className="text-primary">GYM</span>
              </p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mt-0.5">
                Fitness Community
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="flex flex-col items-center px-4 py-2 group/btn"
                      onClick={() => setPagesOpen(!pagesOpen)}
                    >
                      <span className="flex items-center gap-1 text-white font-bold text-sm hover:text-primary transition">
                        {item.label}
                        <ChevronDown className="w-3 h-3 opacity-50" />
                        {item.badge && (
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                      </span>
                      <span className="text-white/30 text-[10px] mt-0.5">{item.sub}</span>
                    </button>
                    {/* dropdown */}
                    <div className="absolute top-full left-0 mt-1 w-44 bg-gray-950 border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.label}
                          href={d.href}
                          className="block px-4 py-2.5 text-xs text-white/60 font-semibold uppercase tracking-wide hover:text-primary hover:bg-white/5 transition border-b border-white/5 last:border-0"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="relative flex flex-col items-center px-4 py-2 group/link"
                  >
                    {item.badge && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm whitespace-nowrap z-10">
                        {item.badge}
                      </span>
                    )}
                    <span className="text-white font-bold text-sm group-hover/link:text-primary transition">
                      {item.label}
                    </span>
                    <span className="text-white/30 text-[10px] mt-0.5 group-hover/link:text-primary/60 transition">
                      {item.sub}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* ── Right — Location block + theme ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="text-white/40 hover:text-primary transition p-2"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Red location block */}
            <div className="flex items-center gap-3 bg-primary px-4 py-3 min-w-[180px]">
              <MapPin className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <p className="text-white/80 text-[10px] uppercase tracking-widest leading-none mb-1">
                  Wakiso, Uganda
                </p>
                <p className="text-white font-black text-sm leading-none">
                  Kireka, Kamuli
                </p>
              </div>
            </div>
          </div>

          {/* ── Mobile right ── */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="text-white/50 hover:text-primary transition p-2"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              className="p-2 text-white/70 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-950 border-t border-white/5">
          <nav className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-white/5 group"
                >
                  <div>
                    <span className="font-bold text-sm text-white/80 group-hover:text-primary transition block">
                      {item.label}
                    </span>
                    <span className="text-white/30 text-xs">{item.sub}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-primary text-white text-[9px] font-black px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 pb-2">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.label}
                        href={d.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-xs text-white/40 hover:text-primary transition uppercase tracking-wide"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Mobile location */}
            <div className="flex items-center gap-3 bg-primary px-4 py-3 mt-3 mb-2">
              <MapPin className="w-5 h-5 text-white flex-shrink-0" />
              <div>
                <p className="text-white/80 text-[10px] uppercase tracking-widest">Wakiso, Uganda</p>
                <p className="text-white font-black text-sm">Kireka, Kamuli</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
