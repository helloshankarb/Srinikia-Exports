"use client";

import Image from "next/image";
import { Users, Sprout, MapPin, ShieldCheck, Heart } from "lucide-react";

export function FarmerNetwork() {
  const farmerImages = [
    "https://images.unsplash.com/photo-1590779033100-9f60705a2d3d?q=80&w=800",
    "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=800",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800"
  ];

  return (
    <section id="farmer-network" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <span className="text-secondary text-xl font-bold tracking-[0.2em] block mb-4 uppercase">Empowering Farmers</span>
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight uppercase">Growing Together</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At SBNB, we don't just export products; we cultivate relationships. Our farmer-based model ensures that every grain and spice is grown with care, supporting thousands of rural families while delivering the purest nature has to offer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Users, title: "10,000+ Farmers", desc: "Connected across Indian states" },
                { icon: Sprout, title: "Organic Clusters", desc: "Chemical-free farming methods" },
                { icon: MapPin, title: "Diverse Regions", desc: "Grown in fertile soil hubs" },
                { icon: Heart, title: "Fair Pricing", desc: "Supporting rural livelihoods" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary uppercase text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden">
              <Image src={farmerImages[0]} alt="Farmer" fill className="object-cover" data-ai-hint="indian farmer" />
            </div>
            <div className="space-y-4">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden">
                <Image src={farmerImages[1]} alt="Harvesting" fill className="object-cover" data-ai-hint="farming harvesting" />
              </div>
              <div className="relative aspect-square rounded-[2rem] overflow-hidden">
                <Image src={farmerImages[2]} alt="Grading" fill className="object-cover" data-ai-hint="vegetable grading" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary p-12 md:p-16 rounded-[3rem] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Farm Inspection</h4>
              <p className="text-white/60">Rigorous checks from soil testing to pre-harvest quality audits.</p>
            </div>
            <div>
              <Sprout className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Harvest Monitoring</h4>
              <p className="text-white/60">Optimal harvest windows to ensure peak nutritional value and flavor.</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Training Support</h4>
              <p className="text-white/60">Educating our partners on global organic and sustainable standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}