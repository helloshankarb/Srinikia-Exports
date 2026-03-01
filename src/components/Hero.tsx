
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const slides = [
  {
    image: PlaceHolderImages.find(i => i.id === 'hero-spices')?.imageUrl || "",
    title: "Pure Authentic Indian Spices",
    subtitle: "From farm to world, delivering the essence of premium quality.",
    cta: "Explore Spices",
    hint: "indian spices"
  },
  {
    image: PlaceHolderImages.find(i => i.id === 'hero-vegetables')?.imageUrl || "",
    title: "Fresh Global Food Exports",
    subtitle: "Consistently delivering fresh, high-quality produce worldwide.",
    cta: "View Products",
    hint: "fresh vegetables"
  },
  {
    image: PlaceHolderImages.find(i => i.id === 'hero-factory')?.imageUrl || "",
    title: "Quality You Can Trust",
    subtitle: "Adhering to international safety standards in every pack.",
    cta: "Our Process",
    hint: "food factory"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-primary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover transition-transform duration-[6000ms] ease-linear scale-105 group-hover:scale-100"
            priority={index === 0}
            data-ai-hint={slide.hint}
          />
          <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center items-start text-white">
            <span className="text-secondary font-semibold tracking-widest uppercase mb-4 animate-fade-in-up">
              Welcome to SBNB Global Foods
            </span>
            <h1 className="text-4xl md:text-7xl font-bold max-w-3xl mb-6 leading-tight animate-fade-in-up delay-75">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 animate-fade-in-up delay-150">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary border-none">
                {slide.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-4">
        <button
          onClick={prev}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-secondary hover:text-primary transition-all"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-secondary hover:text-primary transition-all"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              i === current ? "w-12 bg-secondary" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
