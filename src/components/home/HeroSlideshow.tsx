"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/hero-1.jpg", alt: "Volleyball players in action" },
  { src: "/images/hero-2.jpg", alt: "Team celebrating a point" },
  { src: "/images/hero-3.jpg", alt: "Players training on court" },
  { src: "/images/hero-4.jpg", alt: "Match in progress" },
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="absolute inset-0" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {SLIDES.map((slide, i) => (
        <div key={slide.src} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <Image src={slide.src} alt={slide.alt} fill className="object-cover" loading="eager" sizes="100vw" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 from-10% via-dark/40 via-40% to-transparent to-70%" />
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} aria-current={i === current ? "true" : undefined}
            className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-gold" : "w-2 bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}
