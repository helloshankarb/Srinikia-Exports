"use client";

import Image from "next/image";
import { CheckCircle2, Globe, Heart, ShieldCheck, Sprout } from "lucide-react";
import Link from "next/link";

export function About() {
  const welcomeImageUrl = "https://ml0k8npvi8h7.i.optimole.com/cb:K2_q.4551d/w:1000/h:667/q:mauto/f:best/https://freshlineexim.com/wp-content/uploads/2023/02/5a874b9ace.jpg";
  const purityImageUrl = "https://ml0k8npvi8h7.i.optimole.com/cb:K2_q.4551d/w:1000/h:667/q:mauto/f:best/https://freshlineexim.com/wp-content/uploads/2023/02/b0f8ee0ccf.jpg";
  const qualityImageUrl = "https://www.knpexport.com/wp-content/uploads/2023/11/large-market-stall-full-organic-vegetables-min-1536x1006.jpg";
  
  return (
    <section id="about" className="relative">
      {/* Floating WhatsApp */}
      <Link 
        href="https://wa.me/919550696255" 
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

      {/* Brand Story */}
      <div className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-primary text-xl font-bold tracking-widest block mb-4 uppercase">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">Shree Bhumi Nature's Best Pvt. Ltd.</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
                <p>Rooted in the fertile lands of India, our name reflects our belief: <strong>Shree (Prosperity)</strong>, <strong>Bhumi (Mother Earth)</strong>, and <strong>Nature’s Best</strong>—Pure, Honest, and Sustainable Produce.</p>
                <p>We are a farmer-driven agricultural bridge, connecting Indian fields directly to global markets. We ensure purity and traceability in every harvest of spices, grains, vegetables, and fruits.</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <Sprout className="text-secondary w-6 h-6" />
                    <span className="font-bold text-primary">Prosperity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-secondary w-6 h-6" />
                    <span className="font-bold text-primary">Mother Earth</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative">
              <div className="relative z-10 aspect-[4/3] w-full">
                <Image src={welcomeImageUrl} alt="Our Heritage" fill className="object-cover" sizes="50vw" data-ai-hint="indian farms" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Farmer Based Model */}
      <div className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-secondary text-xl font-bold tracking-widest block mb-4 uppercase">Our Core</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight uppercase">The Farmer-Based Model</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">We work directly with local farmer groups and organic clusters. By eliminating middlemen, we ensure fair income for our farmers and 100% traceable, fresh products for our global partners.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Heart, text: "Fair Pricing" },
                  { icon: Sprout, text: "Organic Clusters" },
                  { icon: ShieldCheck, text: "No Middlemen" },
                  { icon: CheckCircle2, text: "Full Traceability" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 border border-white/10">
                    <item.icon className="text-secondary w-6 h-6" />
                    <span className="font-bold uppercase tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/3] w-full">
                <Image src={purityImageUrl} alt="Farmer Network" fill className="object-cover" sizes="50vw" data-ai-hint="farmer harvesting" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 border-2 border-primary/10 hover:border-primary transition-all group">
              <h3 className="text-3xl font-bold text-primary mb-6 group-hover:text-secondary">Our Vision</h3>
              <p className="text-lg text-muted-foreground">To become a globally trusted agricultural export brand while uplifting rural farming communities and promoting sustainable excellence across 25+ countries.</p>
            </div>
            <div className="p-12 border-2 border-primary/10 hover:border-primary transition-all group">
              <h3 className="text-3xl font-bold text-primary mb-6 group-hover:text-secondary">Our Mission</h3>
              <ul className="space-y-4">
                {["Support farmers with fair pricing", "Promote sustainable organic farming", "Deliver premium quality produce", "Maintain global export standards"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground">
                    <CheckCircle2 className="text-secondary w-5 h-5 shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
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
              <Image src={logo.url} alt={logo.name} fill className="object-contain" sizes="160px" priority />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const points = [
    "Farmer-Based Sourcing for ultimate freshness.",
    "Premium Quality Control with FSSAI & ISO compliance.",
    "Global Export Standards for 25+ countries.",
    "Sustainable & Organic Farming practices.",
    "Competitive Global Pricing with flexible terms."
  ];

  return (
    <section id="why-us" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tight">Why Choose Us?</h2>
            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <CheckCircle2 className="text-secondary w-6 h-6 shrink-0 mt-1" />
                  <p className="text-xl text-white/80">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 p-10 border border-white/10 hover:bg-white/10 transition-colors text-center">
              <h4 className="text-secondary text-5xl font-bold mb-4">24/7</h4>
              <p className="text-white/60">Export Logistics Support</p>
            </div>
            <div className="bg-white/5 p-10 border border-white/10 hover:bg-white/10 transition-colors text-center">
              <h4 className="text-secondary text-5xl font-bold mb-4">100%</h4>
              <p className="text-white/60">Farmer-Direct Sourcing</p>
            </div>
            <div className="sm:col-span-2 bg-secondary p-10 text-primary flex items-center justify-between gap-4">
              <div>
                <h4 className="text-3xl font-bold mb-2 uppercase">Global Presence</h4>
                <p className="text-primary/70">Middle East | Europe | Asia | USA</p>
              </div>
              <Globe className="w-16 h-16 opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}