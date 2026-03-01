"use client";

import React from 'react';
import Image from 'next/image';

const features = [
  { 
    title: "Farming & Production Chain", 
    body: "Direct farm-to-export supply chain ensuring freshness and purity." 
  },
  { 
    title: "Processing Technique", 
    body: "Advanced processing units adhering to FSSAI & ISO standards." 
  },
  { 
    title: "Ageing & Packaging", 
    body: "Traditional ageing combined with modern moisture-proof packing." 
  },
];

const keyImageUrl = "https://jbrotherexports.com/wp-content/themes/jbrotherexports/assets/img/key.png";

export function Stats() {
  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="group relative w-[280px] h-[360px] rounded-none bg-white p-10 border-2 border-border transition-all duration-500 ease-out overflow-visible hover:border-primary hover:shadow-[0_20px_50px_-12px_rgba(0,90,43,0.2)] flex flex-col items-center justify-start text-center cursor-pointer"
            >
              <div className="mb-8 w-24 h-24 relative flex items-center justify-center">
                <Image 
                  src={keyImageUrl} 
                  alt="key feature" 
                  width={80} 
                  height={80}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-xl font-black text-primary uppercase tracking-tight leading-none">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
              
              <button className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[125%] w-[75%] rounded-none border-none bg-primary text-white text-xs font-black py-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-[-50%] group-hover:opacity-100 shadow-2xl tracking-widest uppercase">
                More info
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
