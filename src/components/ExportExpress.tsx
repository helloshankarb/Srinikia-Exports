"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ExportExpress() {
  const factoryImageUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/shreebhumi%2FChatGPT%20Image%20Mar%201%2C%202026%2C%2010_41_41%20PM.png?alt=media&token=1036b945-2f29-45d7-901b-795db1f7de99";

  return (
    <section className="bg-background py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-[2rem]">
          {/* Left Block - Branding & CTA */}
          <div className="lg:w-3/5 bg-[#40b14c] p-8 md:p-16 flex flex-col justify-center text-left z-10">
            <span className="text-black text-sm md:text-xl font-bold mb-4 uppercase tracking-tight">
              Fresh Export Express
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-black leading-[1.1] mb-8 uppercase tracking-tighter">
              GLOBAL FRESH PRODUCE &<br />
              SPICES EXPORTER
            </h2>
            <p className="text-black/70 text-base md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
              Driven by a passion for delivering premium agricultural exports, our mission 
              is to consistently provide a wide array of high-quality vegetables, grains, 
              fruits, and authentic Indian spices to global markets.
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

          {/* Right Block - Visual Representation shifted slightly right and aligned left to show logo */}
          <div className="lg:w-2/5 relative h-[400px] lg:h-auto lg:translate-x-6 transition-transform duration-500">
            <Image 
              src={factoryImageUrl} 
              alt="Shree Bhumi Nature's Best Factory" 
              fill 
              className="object-cover object-left"
              data-ai-hint="food factory"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
