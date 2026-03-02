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
    <section className="bg-foreground py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row shadow-2xl border border-white/5">
          {/* Left Block */}
          <div className="lg:w-1/2 bg-primary p-8 md:p-16 flex flex-col justify-center">
            <span className="text-secondary text-xs md:text-lg font-bold mb-3 md:mb-4 uppercase tracking-[0.2em]">
              Fresh Export Express
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-[1.1] mb-6 md:mb-8 uppercase tracking-tighter">
              Global Fresh Grains &<br />
              Spices Supply
            </h2>
            <p className="text-white/80 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl font-medium">
              Driven by a passion for delivering premium quality produce, our mission 
              is to consistently provide a wide array of organically cultivated grains 
              and spices, ensuring authentic flavors and nourishment worldwide.
            </p>
            <div>
              <Button 
                variant="outline" 
                className="rounded-none border-secondary text-secondary hover:bg-secondary hover:text-primary px-6 md:px-8 py-4 md:py-6 text-xs md:text-sm font-bold uppercase transition-all w-full sm:w-auto bg-transparent"
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
                <p className="text-muted-foreground text-[8px] sm:text-[10px] md:text-base leading-tight md:leading-relaxed font-bold uppercase tracking-widest">
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