
"use client";

import Image from "next/image";
import { CheckCircle2, Globe, MessageCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export function About() {
  const sections = [
    {
      subtitle: "WELCOME TO",
      title: "SHREE BHUMI NATURES BEST PVT LTD",
      text: "In 2009, our group emerged onto the scene with a clear mission: to deliver top-notch products to consumers. Our journey began with a steadfast commitment to quality. As we steadily gained recognition for our dedication to excellence, we ventured into various sectors, including the premium spices and agricultural exports. Over time, our relentless pursuit of superior quality propelled us to the forefront of the market, establishing Shree Bhumi as a leading name in the realm of global food exports, not only within Gujarat but throughout India.",
      image: PlaceHolderImages.find(i => i.id === 'about-us')?.imageUrl || "",
      hint: "spice plantation",
      reversed: false
    },
    {
      subtitle: "OUR MISSION",
      title: "DELIVERING PURITY GLOBALLY",
      text: "Our core mission is to bridge the gap between authentic Indian farms and global kitchens. We ensure that every product, from our ground spices to our whole vegetables, meets the highest international food safety standards. We believe in sustainable growth that benefits both the farmers who grow our products and the consumers who trust our quality across 25+ countries.",
      image: PlaceHolderImages.find(i => i.id === 'hero-factory')?.imageUrl || "",
      hint: "food factory",
      reversed: true
    },
    {
      subtitle: "QUALITY ASSURANCE",
      title: "EXCELLENCE IN EVERY BATCH",
      text: "Shree Bhumi Natures Best (SBNB) employs state-of-the-art processing units adhering to FSSAI & ISO standards. Our transparency in the supply chain provides full traceability, ensuring that 'Natures Best' is not just a name, but a promise kept in every shipment. We offer customized packaging for retail and bulk orders, catering to specific market needs worldwide.",
      image: PlaceHolderImages.find(i => i.id === 'hero-vegetables')?.imageUrl || "",
      hint: "fresh vegetables",
      reversed: false
    }
  ];

  return (
    <section id="about" className="relative">
      {/* Floating WhatsApp Button */}
      <Link 
        href="https://wa.me/919106758216" 
        target="_blank"
        className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </Link>

      {sections.map((section, idx) => (
        <div key={idx} className={`py-24 ${idx % 2 !== 0 ? 'bg-primary/5' : 'bg-white'} overflow-hidden relative`}>
          <div className="container mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-16 ${section.reversed ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <span className="text-secondary text-2xl font-light tracking-[0.2em] block mb-2 uppercase">
                  {section.subtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                  {section.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">
                  {section.text}
                </p>
              </div>
              
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image 
                    src={section.image} 
                    alt={section.title} 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={section.hint}
                  />
                </div>
                <div className={`absolute -bottom-10 ${section.reversed ? '-left-10' : '-right-10'} w-64 h-64 bg-secondary rounded-full -z-0 opacity-10 blur-3xl`} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export function WhyChooseUs() {
  const points = [
    "Certified processing units adhering to FSSAI & ISO standards.",
    "Competitive global pricing with flexible shipping terms.",
    "Customized packaging options for retail and bulk orders.",
    "Transparent supply chain with full traceability.",
    "Customer-centric approach with 24/7 export support."
  ];

  return (
    <section id="why-us" className="py-24 bg-primary text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Why Choose Us?</h2>
            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <CheckCircle2 className="text-secondary w-6 h-6 group-hover:scale-110 transition-transform" />
                  <p className="text-lg text-white/80">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <h4 className="text-secondary text-5xl font-bold mb-4">24/7</h4>
              <p className="text-white/60">Export Logistics Support</p>
            </div>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <h4 className="text-secondary text-5xl font-bold mb-4">100%</h4>
              <p className="text-white/60">Natural Ingredients</p>
            </div>
            <div className="col-span-2 bg-secondary p-10 rounded-3xl text-primary flex items-center justify-between">
              <div>
                <h4 className="text-3xl font-bold mb-2">Global Network</h4>
                <p className="text-primary/70">Connecting 25+ Countries</p>
              </div>
              <Globe className="w-16 h-16 opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
