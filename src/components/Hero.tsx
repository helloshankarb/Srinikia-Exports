"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [prev, setPrev] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [animating]);

  const handleNextSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setPrev(current);
    setCurrent((prevIdx) => (prevIdx + 1) % slides.length);
    setTimeout(() => setAnimating(false), 1000);
  }, [animating, current]);

  const handlePrevSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setPrev(current);
    setCurrent((prevIdx) => (prevIdx === 0 ? slides.length - 1 : prevIdx - 1));
    setTimeout(() => setAnimating(false), 1000);
  }, [animating, current]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Previous Slide (stays visible during transition) */}
        <div className="absolute inset-0 z-0">
          <Image
            src={slides[prev].image}
            alt="Previous Slide"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Current Slide */}
        <div
          key={current}
          className={cn(
            "absolute inset-0 transition-opacity duration-500 z-10",
            animating ? "opacity-0" : "opacity-100"
          )}
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover animate-ken-burns"
            priority
            data-ai-hint={slides[current].hint}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Vertical Shutter Transition Overlay */}
      {animating && (
        <div className="absolute inset-0 z-20 flex pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-primary animate-shutter"
              style={{
                animationDelay: `${i * 0.05}s`
              }}
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
              setPrev(current);
              setCurrent(i);
              setAnimating(true);
              setTimeout(() => setAnimating(false), 1000);
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
