"use client";

import { Button } from "@/components/ui/button";

export function ExportExpress() {
  const stats = [
    { number: "700+", label: "Tonnes of fresh fruit sold." },
    { number: "500+", label: "Customers in worldwide." },
    { number: "200+", label: "Around Employees." },
    { number: "500+", label: "containers successfully shipped" },
  ];

  return (
    <section className="bg-[#1a1a1a] py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row shadow-2xl">
          {/* Left Green Block */}
          <div className="lg:w-1/2 bg-[#4caf50] p-8 md:p-16 flex flex-col justify-center">
            <span className="text-black text-xs md:text-lg font-bold mb-3 md:mb-4 uppercase tracking-tight">
              Fresh Export Express
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black leading-[1.1] mb-6 md:mb-8 uppercase tracking-tighter">
              Global Fresh Grains &<br />
              Spices Supply
            </h2>
            <p className="text-black/80 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl font-medium">
              Driven by a passion for delivering premium quality produce, our mission 
              is to consistently provide a wide array of organically cultivated grains 
              and spices, ensuring that our clients across the globe experience the 
              authentic flavors and nourishment that nature offers.
            </p>
            <div>
              <Button 
                variant="outline" 
                className="rounded-none border-black text-black hover:bg-black hover:text-white px-6 md:px-8 py-4 md:py-6 text-xs md:text-sm font-bold uppercase transition-all w-full sm:w-auto"
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
                <span className="text-2xl sm:text-3xl md:text-6xl font-black text-[#1a1a1a] mb-2 md:mb-4">
                  {stat.number}
                </span>
                <p className="text-muted-foreground text-[8px] sm:text-[10px] md:text-base leading-tight md:leading-relaxed font-medium uppercase md:normal-case">
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
