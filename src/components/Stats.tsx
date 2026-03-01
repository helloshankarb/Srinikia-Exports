
"use client";

import React from 'react';
import { Sprout, LayoutGrid, Timer, Award, Package } from 'lucide-react';

const features = [
  { title: "Farming & Production Chain", icon: Sprout },
  { title: "Categories & Types", icon: LayoutGrid },
  { title: "Processing Technique", icon: Timer },
  { title: "Ageing", icon: Award },
  { title: "Packaging", icon: Package },
];

export function Stats() {
  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="group relative w-[240px] h-[220px] rounded-none bg-white p-8 border-2 border-border transition-all duration-500 ease-out overflow-visible hover:border-primary hover:shadow-[0_15px_40px_-5px_rgba(0,90,43,0.15)] flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="h-full flex flex-col items-center justify-center gap-5">
                <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <item.icon className="w-10 h-10 text-primary" strokeWidth={1.2} />
                </div>
                <p className="text-[13px] font-bold text-primary uppercase tracking-tight leading-tight max-w-[180px]">
                  {item.title}
                </p>
              </div>
              
              <button className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[125%] w-[70%] rounded-none border-none bg-primary text-white text-[11px] font-bold py-2.5 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-[-50%] group-hover:opacity-100 shadow-xl whitespace-nowrap">
                More info
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
