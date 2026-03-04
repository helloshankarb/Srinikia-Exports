"use client";

import React from 'react';
import Image from 'next/image';

const features = [
  { 
    title: "7+ Years Excellence", 
    body: "Seven years of dedicated service in the global agricultural export industry." 
  },
  { 
    title: "25+ Global Clients", 
    body: "Trusted by twenty-five premium importers across Europe, Asia, and the Middle East." 
  },
  { 
    title: "100+ Local Partners", 
    body: "A strong network of over a hundred local Indian farm clusters and suppliers." 
  },
];

const keyImageUrl = "https://jbrotherexports.com/wp-content/themes/jbrotherexports/assets/img/key.png";

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="group relative w-full sm:w-[320px] h-[320px] md:h-[360px] rounded-none bg-white p-8 md:p-10 border border-border transition-all duration-500 ease-out overflow-visible hover:border-secondary hover:shadow-[0_20px_50px_-12px_rgba(43,32,56,0.1)] flex flex-col items-center justify-start text-center cursor-pointer"
            >
              <div className="mb-6 md:mb-8 w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center">
                <Image 
                  src={keyImageUrl} 
                  alt="key feature" 
                  width={80} 
                  height={80}
                  className="object-contain transition-transform duration-500 group-hover:scale-110 w-16 h-16 md:w-20 md:h-20"
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
                <p className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight leading-tight">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
              
              <button className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[125%] w-[75%] rounded-none border-none bg-secondary text-white text-[10px] md:text-xs font-black py-3 md:py-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-[-50%] group-hover:opacity-100 shadow-2xl tracking-widest uppercase">
                Company Credentials
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
