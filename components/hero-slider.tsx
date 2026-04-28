"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const slides = [
  {
    img: "/home/slider.jpg",
    eyebrow: "Strong Mind",
    eyebrowHighlight: "S",          // first letter gets red
    headline: "STRONG BODY",
    sub: "MAKE YOUR SELF PROUD",
    cta: { label: "GET STARTED", href: "/classes" },
  },
  {
    img: "/home/slider1.jpg",
    eyebrow: "Everything Is Possible",
    eyebrowHighlight: "E",
    headline: "EVERYDAY ABS WORKOUT",
    sub: "TRANSFORM YOUR FITNESS JOURNEY",
    cta: { label: "EXPLORE CLASSES", href: "/classes" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  const prev = () => go((current - 1 + slides.length) % slides.length);
  const next = () => go((current + 1) % slides.length);

  // Auto-advance every 6s
  useEffect(() => {
    const t = setTimeout(() => go((current + 1) % slides.length), 6000);
    return () => clearTimeout(t);
  }, [current, go]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: "clamp(320px, 55vw, 680px)" }}>

      {/* ── Background image ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${animating ? "opacity-0" : "opacity-100"}`}
      >
        <img
          src={slide.img}
          alt={slide.headline}
          className="w-full h-full object-cover object-top"
        />
        {/* dark overlay — heavier on left so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* ── Text content ── */}
      <div
        className={`relative z-10 h-full flex flex-col justify-end pb-12 px-6 sm:px-12 lg:px-20 transition-all duration-500 ${
          animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Eyebrow — black box with first letter in red */}
        <div className="inline-flex items-center mb-3 w-fit">
          <span className="bg-black/80 px-3 py-1 text-sm font-bold tracking-wide text-white">
            <span className="text-primary">{slide.eyebrowHighlight}</span>
            {slide.eyebrow.slice(1)}
          </span>
        </div>

        {/* Main headline — red box */}
        <div className="inline-flex mb-4 w-fit">
          <h1 className="bg-primary px-4 py-2 text-white font-black text-3xl sm:text-5xl md:text-6xl uppercase leading-none tracking-tight">
            {slide.headline}
          </h1>
        </div>

        {/* Sub-line */}
        <p className="text-white font-black text-xs sm:text-sm uppercase tracking-[0.25em] mb-6 opacity-90">
          {slide.sub}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href={slide.cta.href}
            className="bg-primary text-white px-7 py-3 font-black uppercase text-xs tracking-widest hover:bg-primary/90 transition shadow-lg shadow-primary/30"
          >
            {slide.cta.label}
          </Link>
          <button className="flex items-center gap-2 text-white/70 hover:text-primary transition group text-xs uppercase tracking-widest font-bold">
            <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary transition">
              <Play className="w-3.5 h-3.5 fill-white group-hover:fill-primary transition" />
            </span>
            Watch Video
          </button>
        </div>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/50 hover:bg-primary transition flex items-center justify-center text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/50 hover:bg-primary transition flex items-center justify-center text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-primary"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
