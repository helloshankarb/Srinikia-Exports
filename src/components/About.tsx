"use client";

import Image from "next/image";
import { CheckCircle2, Shield, Leaf, Ship, Star, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  {
    title: "100% Organic",
    desc: "Sourced from the finest organic farms across India.",
    icon: Leaf
  },
  {
    title: "Quality Control",
    desc: "Rigorous testing to meet international food safety standards.",
    icon: Shield
  },
  {
    title: "Global Shipping",
    desc: "Reliable logistics to deliver products fresh anywhere.",
    icon: Ship
  }
];

export function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src={PlaceHolderImages.find(i => i.id === 'about-us')?.imageUrl || ""} 
                alt="About SBNB" 
                width={800} 
                height={600} 
                className="object-cover"
                data-ai-hint="spice plantation"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-full -z-0 opacity-20 blur-3xl" />
            <div className="absolute top-10 -left-10 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-border">
              <div className="flex items-center gap-4 mb-2">
                <Star className="text-secondary fill-secondary" />
                <span className="font-bold text-primary text-xl">Top Exporter 2023</span>
              </div>
              <p className="text-sm text-muted-foreground">Recognized for Excellence in Spices</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <Badge variant="outline" className="text-secondary border-secondary mb-4">Our Story</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Pioneers of Authentic Indian Export</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded with a passion for bringing the rich flavors of India to the global table, SBNB Global Foods has grown from a local supplier to a trusted international export partner. We bridge the gap between rural farmers and global kitchens.
            </p>
            
            <div className="space-y-6">
              {features.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
    <section id="why-us" className="py-24 bg-primary text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why SBNB Global?</h2>
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
