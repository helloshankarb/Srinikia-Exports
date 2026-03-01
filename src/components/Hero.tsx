"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    welcome: "WELCOME TO",
    title: "Shree Bhumi Natures Best Pvt Ltd",
    hint: "indian spices"
  },
  {
    image: "https://oesexportimport.com/wp-content/uploads/2024/11/165.webp",
    welcome: "TRUSTED GLOBAL PARTNER",
    title: "Supply Chain Excellence Redefined",
    hint: "logistics center"
  },
  {
    image: "https://images.unsplash.com/photo-1551884171-004163219904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    welcome: "PREMIUM QUALITY",
    title: "The Finest Indian Agri-Exports",
    hint: "food factory"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      handleNextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [animating]);

  const gridData = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 100 }, () => ({
      delay: Math.random() * 0.5,
      tx: (Math.random() - 0.5) * 400,
      ty: (Math.random() - 0.5) * 400,
      rot: (Math.random() - 0.5) * 90
    }));
  }, [mounted]);

  const handleNextSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setCurrent((prevIdx) => (prevIdx + 1) % slides.length);
    setTimeout(() => setAnimating(false), 1200);
  }, [animating]);

  const handlePrevSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setCurrent((prevIdx) => (prevIdx === 0 ? slides.length - 1 : prevIdx - 1));
    setTimeout(() => setAnimating(false), 1200);
  }, [animating]);

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
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
      ))}

      {/* Shatter Transition Layer */}
      {animating && mounted && (
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 z-20 pointer-events-none">
          {gridData.map((data, i) => (
            <div 
              key={i} 
              className="bg-primary animate-grid-shatter"
              style={{ 
                animationDelay: `${data.delay}s`,
                '--tx': `${data.tx}px`,
                '--ty': `${data.ty}px`,
                '--rot': `${data.rot}deg`
              } as any}
            />
          ))}
        </div>
      )}

      {/* Centered Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6">
        <div key={`text-${current}`} className="flex flex-col items-center">
          <span className="text-secondary text-lg md:text-xl font-bold tracking-[0.4em] uppercase mb-6 animate-text-reveal">
            {slides[current].welcome}
          </span>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-12 max-w-6xl leading-[1.05] uppercase animate-text-reveal [animation-delay:0.1s] drop-shadow-2xl">
            {slides[current].title}
          </h1>

          <div className="animate-text-reveal [animation-delay:0.3s]">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-none border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-primary px-16 h-16 text-xl font-black transition-all uppercase tracking-tighter"
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
        className="absolute left-8 top-1/2 -translate-y-1/2 z-40 p-3 text-white/30 hover:text-secondary transition-colors hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={80} strokeWidth={1} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-40 p-3 text-white/30 hover:text-secondary transition-colors hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={80} strokeWidth={1} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex gap-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (animating || current === i) return;
              setAnimating(true);
              setCurrent(i);
              setTimeout(() => setAnimating(false), 1200);
            }}
            className={cn(
              "h-1.5 transition-all duration-300 rounded-none",
              i === current ? "w-24 bg-secondary" : "w-6 bg-white/20 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
}
