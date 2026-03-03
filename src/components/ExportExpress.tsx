"use client";

import { Button } from "@/components/ui/button";

export function ExportExpress() {
  const stats = [
    { number: "700+", label: "Tonnes of produce sold." },
    { number: "500+", label: "Global Customers." },
    { number: "200+", label: "Expert Staff." },
    { number: "500+", label: "Containers Shipped" },
  ];

  return (
    <section className="bg-background py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-[2rem]">
          {/* Left Block - Styled based on the reference image */}
          <div className="lg:w-1/2 bg-[#40b14c] p-8 md:p-16 flex flex-col justify-center text-left">
            <span className="text-black text-sm md:text-xl font-bold mb-4 uppercase tracking-tight">
              Fresh Export Express
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-black leading-[1.1] mb-8 uppercase tracking-tighter">
              GLOBAL FRESH FRUITS &<br />
              VEGETABLES SUPPLY
            </h2>
            <p className="text-black/70 text-base md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
              Driven by a passion for delivering fresh, high-quality produce, our mission 
              is to consistently provide a wide array of cultivated vegetables 
              and fruits, ensuring that our clients across the globe experience the 
              authentic flavors and nourishment that nature offers.
            </p>
            <div>
              <Button 
                variant="outline" 
                className="h-14 md:h-16 px-10 border-black text-black hover:bg-black hover:text-[#40b14c] rounded-xl font-bold uppercase tracking-widest text-xs transition-all bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:w-1/2 bg-white grid grid-cols-2">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`p-6 sm:p-8 md:p-16 flex flex-col justify-center border-gray-100 ${
                  idx === 0 ? "border-r border-b" : 
                  idx === 1 ? "border-b" : 
                  idx === 2 ? "border-r" : ""
                }`}
              >
                <span className="text-2xl sm:text-3xl md:text-6xl font-black text-primary mb-2 md:mb-4">
                  {stat.number}
                </span>
                <p className="text-muted-foreground text-[10px] md:text-base leading-tight md:leading-relaxed font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
