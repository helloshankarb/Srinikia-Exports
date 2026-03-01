"use client";

import Image from "next/image";
import { CheckCircle2, Globe } from "lucide-react";
import Link from "next/link";

export function About() {
  const agriExportsImageUrl = "https://images.unsplash.com/photo-1771860108097-9e4214acfd37?q=80&w=1080";
  const exportMapUrl = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1080";
  const spicesImageUrl = "https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBzcGljZXN8ZW58MHx8fHwxNzc2MzM2MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080";
  
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
      {/* Dynamic Expanding WhatsApp Button */}
      <Link 
        href="https://wa.me/919106758216" 
        target="_blank"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-center justify-start w-[45px] h-[45px] bg-[#00d757] rounded-full shadow-lg transition-all duration-300 group overflow-hidden hover:w-[150px] hover:rounded-[40px] active:translate-x-[2px] active:translate-y-[2px]"
      >
        <div className="flex items-center justify-center w-[45px] shrink-0 transition-all duration-300 group-hover:w-[30%] group-hover:pl-2">
          <svg className="w-6 h-6 fill-white" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-white font-semibold text-sm pr-4 whitespace-nowrap overflow-hidden">
          Whatsapp
        </div>
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
    { name: "APEDA", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/Apeda.png" },
    { name: "FSSAI", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/fssai.png" },
    { name: "Spices Board India", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/spices-board-india.png" },
    { name: "MSME", url: "https://jbrotherexports.com/wp-content/uploads/2023/02/MSME.png" }
  ];

  return (
    <section className="py-16 bg-white border-t border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-primary uppercase">
            OUR <span className="text-secondary">CERTIFICATES</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {logos.map((logo, i) => (
            <div key={i} className="relative w-40 h-40 transition-all duration-300">
              <Image 
                src={logo.url} 
                alt={logo.name} 
                fill 
                className="object-contain"
                sizes="160px"
                priority
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