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
    image: "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/shreebhumi%2FChatGPT%20Image%20Mar%201%2C%202026%2C%2010_41_41%20PM.png?alt=media&token=1036b945-2f29-45d7-901b-795db1f7de99",
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
  }, [animating, current]);

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
      {/* Background Slides */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-0">
          <Image
            src={slides[current].image}
            alt="Current Background"
            fill
            className="object-cover animate-ken-burns"
            priority
            data-ai-hint={slides[current].hint}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className={cn("absolute inset-0 z-10", animating ? "opacity-100" : "opacity-0")}>
           <Image
            src={slides[prev].image}
            alt="Previous Slide Overlay"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      {/* Modern Shatter Transition Grid */}
      {animating && (
        <div className="absolute inset-0 z-20 grid grid-cols-5 md:grid-cols-10 grid-rows-5 md:grid-rows-10 pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="bg-primary animate-shutter"
              style={{
                animationDelay: `${Math.random() * 0.4}s`,
                animationDuration: '0.8s',
                animationName: 'shatter-reveal'
              }}
            />
          ))}
        </div>
      )}

      {/* Centered Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6">
        <div key={`text-${current}`} className="flex flex-col items-center w-full max-w-6xl">
          <span className="text-secondary text-xs sm:text-sm md:text-xl font-bold tracking-[0.4em] uppercase mb-4 md:mb-6 animate-text-reveal">
            {slides[current].welcome}
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 md:mb-12 leading-[1.1] md:leading-[1.05] uppercase animate-text-reveal [animation-delay:0.1s] drop-shadow-2xl px-4">
            {slides[current].title}
          </h1>

          <div className="animate-text-reveal [animation-delay:0.3s] w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-none border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-primary px-8 md:px-16 h-14 md:h-16 text-sm sm:text-lg md:text-xl font-black transition-all uppercase tracking-tighter w-full sm:w-auto"
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
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 text-white/30 hover:text-secondary transition-colors hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={64} strokeWidth={1} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 text-white/30 hover:text-secondary transition-colors hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight size={64} strokeWidth={1} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 z-40 flex gap-4 md:gap-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (animating || current === i) return;
              setPrev(current);
              setCurrent(i);
              setAnimating(true);
              setTimeout(() => setAnimating(false), 1200);
            }}
            className={cn(
              "h-1.5 transition-all duration-300 rounded-none",
              i === current ? "w-12 md:w-24 bg-secondary" : "w-4 md:w-6 bg-white/20 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
}
