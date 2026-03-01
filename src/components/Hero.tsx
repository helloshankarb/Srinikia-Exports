"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: PlaceHolderImages.find(i => i.id === 'hero-export-plane')?.imageUrl || "",
    welcome: "WELCOME TO",
    title: "Shree Bhumi Natures Best Pvt Ltd",
    hint: "cargo plane"
  },
  {
    image: PlaceHolderImages.find(i => i.id === 'hero-export-ship')?.imageUrl || "",
    welcome: "TRUSTED PARTNER",
    title: "Global Supply Chain Excellence",
    hint: "cargo ship"
  },
  {
    image: PlaceHolderImages.find(i => i.id === 'hero-spices')?.imageUrl || "",
    welcome: "AUTHENTIC QUALITY",
    title: "Premium Indian Spices Export",
    hint: "indian spices"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [gridDelays, setGridDelays] = useState<number[]>([]);

  useEffect(() => {
    // Generate stable random delays only on the client to avoid hydration mismatch
    setGridDelays(Array.from({ length: 100 }, () => Math.random() * 0.5));

    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setAnimating(false);
    }, 500);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000",
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          )}
        >
          {/* Grid Reveal Effect */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-20 pointer-events-none">
            {index === current && gridDelays.length > 0 && gridDelays.map((delay, i) => (
              <div 
                key={i} 
                className="bg-black/10 animate-grid-reveal"
                style={{ 
                  animationDelay: `${delay}s`,
                  opacity: 0
                }}
              />
            ))}
          </div>

          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            data-ai-hint={slide.hint}
          />
          
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Centered Content */}
          <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6">
            <div className="mb-4 flex flex-col items-center animate-text-reveal">
              <span className="text-white text-lg md:text-xl font-medium tracking-[0.2em] relative inline-block">
                {slide.welcome}
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white opacity-60"></span>
              </span>
            </div>
            
            <h1 className="text-4xl md:text-8xl font-bold text-white mb-10 max-w-5xl leading-tight animate-text-reveal [animation-delay:0.2s]">
              {slide.title}
            </h1>

            <div className="animate-text-reveal [animation-delay:0.4s]">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-none border-2 border-white text-white bg-transparent hover:bg-secondary hover:border-secondary hover:text-white px-10 h-14 text-lg transition-all"
                asChild
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-3 text-white/50 hover:text-white transition-colors"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-3 text-white/50 hover:text-white transition-colors"
      >
        <ChevronRight size={48} />
      </button>

      {/* Progress indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1.5 transition-all duration-300 rounded-none",
              i === current ? "w-10 bg-secondary" : "w-3 bg-white/30"
            )}
          />
        ))}
      </div>
    </section>
  );
}
