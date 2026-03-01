"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: PlaceHolderImages.find(i => i.id === 'hero-spices')?.imageUrl || "https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?q=80&w=1920",
    welcome: "WELCOME TO",
    title: "Shree Bhumi Natures Best Pvt Ltd",
    hint: "indian spices"
  },
  {
    image: PlaceHolderImages.find(i => i.id === 'hero-export-ship')?.imageUrl || "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1920",
    welcome: "TRUSTED GLOBAL PARTNER",
    title: "Supply Chain Excellence Redefined",
    hint: "cargo ship"
  },
  {
    image: PlaceHolderImages.find(i => i.id === 'hero-factory')?.imageUrl || "https://images.unsplash.com/photo-1551884171-004163219904?q=80&w=1920",
    welcome: "PREMIUM QUALITY",
    title: "The Finest Indian Agri-Exports",
    hint: "food factory"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [gridDelays, setGridDelays] = useState<number[]>([]);

  useEffect(() => {
    // Stable random delays for hydration
    setGridDelays(Array.from({ length: 100 }, () => Math.random() * 0.4));

    const timer = setInterval(() => {
      handleNextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setPrev(current);
    setCurrent((prevIdx) => (prevIdx + 1) % slides.length);
    setTimeout(() => setAnimating(false), 1200);
  }, [animating, current]);

  const handlePrevSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setPrev(current);
    setCurrent((prevIdx) => (prevIdx === 0 ? slides.length - 1 : prevIdx - 1));
    setTimeout(() => setAnimating(false), 1200);
  }, [animating, current]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            data-ai-hint={slide.hint}
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
      ))}

      {/* Grizzle/Break Transition Layer */}
      {animating && (
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-20 pointer-events-none">
          {gridDelays.map((delay, i) => (
            <div 
              key={i} 
              className="bg-primary animate-grid-shatter"
              style={{ 
                animationDelay: `${delay}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Centered Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6">
        <div key={`text-${current}`} className="flex flex-col items-center">
          <span className="text-secondary text-lg md:text-xl font-bold tracking-[0.3em] uppercase mb-4 animate-text-reveal">
            {slides[current].welcome}
          </span>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-10 max-w-5xl leading-[1.1] uppercase animate-text-reveal [animation-delay:0.1s]">
            {slides[current].title}
          </h1>

          <div className="animate-text-reveal [animation-delay:0.3s]">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-none border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-primary px-12 h-14 text-lg font-bold transition-all"
              asChild
            >
              <Link href="#contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-3 text-white/50 hover:text-secondary transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={64} strokeWidth={1} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-3 text-white/50 hover:text-secondary transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={64} strokeWidth={1} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (animating || current === i) return;
              setAnimating(true);
              setPrev(current);
              setCurrent(i);
              setTimeout(() => setAnimating(false), 1200);
            }}
            className={cn(
              "h-1.5 transition-all duration-300 rounded-none",
              i === current ? "w-16 bg-secondary" : "w-4 bg-white/30 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </section>
  );
}
