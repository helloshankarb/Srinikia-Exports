
"use client";

import Image from "next/image";
import { CheckCircle2, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";

export function About() {
  const agriExportsImageUrl = "https://images.unsplash.com/photo-1771860108097-9e4214acfd37?q=80&w=1080";
  const exportMapUrl = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1080";
  const spicesImageUrl = "https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?q=80&w=1080";
  
  const sections = [
    {
      subtitle: "WELCOME TO",
      title: "SHREE BHUMI NATURES BEST PVT LTD",
      text: "In 2009, our group emerged onto the scene with a clear mission: to deliver top-notch products to consumers. Our journey began with a steadfast commitment to quality. As we steadily gained recognition for our dedication to excellence, we ventured into various sectors, including the premium spices and agricultural grains exports. Over time, our relentless pursuit of superior quality propelled us to the forefront of the market, establishing Shree Bhumi as a leading name in the realm of global food exports, not only within Gujarat but throughout India.",
      image: agriExportsImageUrl,
      hint: "agri exports",
      reversed: false
    },
    {
      subtitle: "OUR MISSION",
      title: "DELIVERING PURITY GLOBALLY",
      text: "Our core mission is to bridge the gap between authentic Indian farms and global kitchens. We ensure that every product, from our ground spices to our premium grains, meets the highest international food safety standards. We believe in sustainable growth that benefits both the farmers who grow our products and the consumers who trust our quality across 25+ countries.",
      image: exportMapUrl,
      hint: "export map",
      reversed: true
    },
    {
      subtitle: "QUALITY ASSURANCE",
      title: "EXCELLENCE IN EVERY BATCH",
      text: "Shree Bhumi Natures Best (SBNB) employs state-of-the-art processing units adhering to FSSAI & ISO standards. Our transparency in the supply chain provides full traceability, ensuring that 'Natures Best' is not just a name, but a promise kept in every shipment. We offer customized packaging for retail and bulk orders, catering to specific market needs worldwide.",
      image: spicesImageUrl,
      hint: "quality spices",
      reversed: false
    }
  ];

  return (
    <section id="about" className="relative">
      {/* Floating WhatsApp Button */}
      <Link 
        href="https://wa.me/919106758216" 
        target="_blank"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-current" />
      </Link>

      {sections.map((section, idx) => (
        <div key={idx} className={`py-16 md:py-24 ${idx % 2 !== 0 ? 'bg-primary/5' : 'bg-white'} overflow-hidden relative`}>
          <div className="container mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${section.reversed ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <span className="text-secondary text-lg md:text-2xl font-light tracking-[0.2em] block mb-2 md:mb-4 uppercase">
                  {section.subtitle}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 md:mb-8 leading-tight">
                  {section.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-8 leading-relaxed text-justify">
                  {section.text}
                </p>
              </div>
              
              <div className="lg:w-1/2 w-full relative">
                <div className="relative z-10 rounded-none overflow-hidden shadow-xl aspect-[4/3] w-full">
                  <Image 
                    src={section.image} 
                    alt={section.title} 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={section.hint}
                  />
                </div>
                <div className={`absolute -bottom-10 ${section.reversed ? '-left-10' : '-right-10'} w-48 md:w-64 h-48 md:h-64 bg-secondary rounded-full -z-0 opacity-10 blur-3xl`} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export function Certifications() {
  const logos = [
    { name: "GMP", url: "https://www.vhcaherbals.com/wp-content/uploads/2018/06/gmp-logo.png" },
    { name: "APEDA", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/apeda.png" },
    { name: "HALAL", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/halal.png" },
    { name: "Spices Board", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/spice_board.png" },
    { name: "IAF", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/iaf.png" },
    { name: "FDA", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/fda.png" },
    { name: "FSSAI", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/fssai.png" },
    { name: "MSME", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/msme.png" }
  ];

  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-primary uppercase">
            OUR <span className="text-secondary">CERTIFICATES</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity">
          {logos.map((logo, i) => (
            <div key={i} className="relative w-24 h-24 grayscale hover:grayscale-0 transition-all duration-300">
              <Image 
                src={logo.url} 
                alt={logo.name} 
                fill 
                className="object-contain"
                sizes="100px"
              />
            </div>
          ))}
        </div>
      </div>
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
    <section id="why-us" className="py-16 md:py-24 bg-primary text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 uppercase tracking-tight">Why Choose Us?</h2>
            <div className="space-y-4 md:space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <CheckCircle2 className="text-secondary w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform shrink-0 mt-1" />
                  <p className="text-base md:text-lg text-white/80">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white/5 p-8 md:p-10 rounded-none border border-white/10 hover:bg-white/10 transition-colors text-center md:text-left">
              <h4 className="text-secondary text-4xl md:text-5xl font-bold mb-2 md:mb-4">24/7</h4>
              <p className="text-white/60 text-sm md:text-base">Export Logistics Support</p>
            </div>
            <div className="bg-white/5 p-8 md:p-10 rounded-none border border-white/10 hover:bg-white/10 transition-colors text-center md:text-left">
              <h4 className="text-secondary text-4xl md:text-5xl font-bold mb-2 md:mb-4">100%</h4>
              <p className="text-white/60 text-sm md:text-base">Natural Ingredients</p>
            </div>
            <div className="sm:col-span-2 bg-secondary p-8 md:p-10 rounded-none text-primary flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 md:gap-0">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Global Network</h4>
                <p className="text-primary/70 text-sm md:text-base">Connecting 25+ Countries</p>
              </div>
              <Globe className="w-12 h-12 md:w-16 md:h-16 opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
