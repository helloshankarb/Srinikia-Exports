"use client";

import React from 'react';

const features = [
  { title: "Premium Quality", desc: "Highest standards of purity and taste." },
  { title: "Global Export", desc: "Supply chain across 25+ countries." },
  { title: "Fast Delivery", desc: "Swift processing and reliable logistics." },
  { title: "Organic Source", desc: "100% natural direct from farms." },
];

export function Stats() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="group relative w-[280px] h-[200px] rounded-none bg-white p-6 border-2 border-border transition-all duration-500 ease-out overflow-visible hover:border-primary hover:shadow-[0_10px_30px_-5px_rgba(0,90,43,0.15)] flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="h-full flex flex-col items-center justify-center gap-3">
                <div className="mb-1 transform transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src="https://jbrotherexports.com/wp-content/themes/jbrotherexports/assets/img/key.png" 
                    alt="Key Feature" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-base font-bold text-primary uppercase tracking-tight leading-tight">
                  {item.title}
                </p>
                <p className="text-[10px] text-muted-foreground leading-relaxed px-2">
                  {item.desc}
                </p>
              </div>
              
              <button className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[125%] w-[65%] rounded-none border-none bg-primary text-white text-[11px] font-bold py-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-[-50%] group-hover:opacity-100 shadow-xl whitespace-nowrap">
                More info
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
