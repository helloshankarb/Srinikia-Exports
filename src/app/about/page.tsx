"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  const factoryImageUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/shreebhumi%2FChatGPT%20Image%20Mar%201%2C%202026%2C%2010_41_41%20PM.png?alt=media&token=1036b945-2f29-45d7-901b-795db1f7de99";
  const welcomeImageUrl = "https://ml0k8npvi8h7.i.optimole.com/cb:K2_q.4551d/w:1000/h:667/q:mauto/f:best/https://freshlineexim.com/wp-content/uploads/2023/02/5a874b9ace.jpg";

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <Badge className="mb-6 bg-secondary text-white rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest">Global Export Leader</Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium italic">
            "The freshest fruits and vegetables, from our farm to your door."
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-primary mb-8 uppercase tracking-tight">Experience the taste of premium-quality exports</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
                <p>
                  At <strong>Shree Bhumi Nature's Best Pvt Ltd</strong>, we pride ourselves on exporting the freshest, tastiest produce from Nashik. With a deep focus on quality control and customer satisfaction, we provide end-to-end services, including procurement, packing, and delivery. Trust us to deliver excellence in every shipment.
                </p>
                <p>
                  <strong>Shree Bhumi Nature's Best Pvt Ltd</strong> is a premier export company based in Nashik, India that specializes in the export of premium-quality fresh fruits and vegetables. We are dedicated to providing our customers with the freshest and most flavorful produce sourced from the fertile lands of India.
                </p>
                <p>
                  Our product range includes a wide selection of <strong>ONIONs, TOMATOs, GRAPEs, POMEGRANATEs, GREEN CHILLIEs, LEMONs, WATERMELONs and MUSKMELONs</strong>. We provide both premium export quality and domestic quality products to meet your packaging specifications.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3] w-full shadow-2xl overflow-hidden rounded-[2rem]">
                <Image src={welcomeImageUrl} alt="Fresh Produce Fields" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Fresh Produce & Spices Exporter Section */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-[3rem] bg-white border border-primary/5">
            <div className="lg:w-3/5 p-12 md:p-20">
              <span className="text-secondary text-sm font-bold mb-4 uppercase tracking-[0.2em] block">End-to-End Excellence</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight mb-8 uppercase tracking-tighter">
                GLOBAL FRESH PRODUCE &<br />
                SPICES EXPORTER
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-justify">
                At <strong>Shree Bhumi Nature's Best Pvt Ltd</strong>, we understand the importance of timely and reliable delivery. That’s why we offer a complete start-to-end service that includes product procurement, sorting and grading, standard packing, container booking, and CHA services. With our extensive network and years of experience, we ensure that your orders are fulfilled quickly and efficiently.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Product Procurement",
                  "Sorting & Grading",
                  "Standard Packing",
                  "Container Booking",
                  "CHA Services",
                  "Quality Audits"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary w-5 h-5 shrink-0" />
                    <span className="font-bold text-primary text-sm uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 relative h-[400px] lg:h-auto">
              <Image src={factoryImageUrl} alt="SBNB Processing Facility" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Our team is dedicated to providing the best possible service and ensuring the satisfaction of our clients. Whether you’re looking for a steady supply of high-quality produce or a one-time shipment, <strong>Shree Bhumi Nature's Best Pvt Ltd</strong> is here to help.
            </p>
            <div className="p-10 bg-primary text-white rounded-[2rem] shadow-xl relative overflow-hidden group">
               <div className="relative z-10">
                 <h3 className="text-2xl md:text-4xl font-black mb-8 uppercase tracking-tighter">
                   Choose Shree Bhumi Nature's Best for premium-quality, fresh fruits and vegetables, and a seamless export experience.
                 </h3>
                 <Button className="bg-secondary text-primary hover:bg-white hover:text-primary rounded-full px-12 h-16 font-bold uppercase tracking-widest text-sm transition-all shadow-lg">
                   Contact us today
                 </Button>
               </div>
               <div className="absolute top-0 left-0 w-full h-full bg-black/10 transition-opacity opacity-0 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary uppercase tracking-tighter">Meet the Directors of Shree Bhumi Nature's Best</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-6" />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              At <strong>Shree Bhumi Nature's Best Pvt Ltd</strong>, we are proud to be led by a talented and experienced team of directors who are dedicated to bringing the finest produce from Nashik to customers worldwide. With decades of combined experience in the export industry, our directors are well-equipped to guide our company to continued success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-12 rounded-[2rem] shadow-xl border border-primary/5 transition-transform hover:-translate-y-2">
                 <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-8 flex items-center justify-center">
                   <Users className="text-primary w-10 h-10" />
                 </div>
                 <h4 className="text-xl font-bold text-primary uppercase tracking-tight">Technical Leadership</h4>
                 <p className="text-sm text-muted-foreground mt-4 italic leading-relaxed">
                   Guided by decades of export expertise and a passion for Indian agriculture.
                 </p>
              </div>
              <div className="bg-white p-12 rounded-[2rem] shadow-xl border border-primary/5 transition-transform hover:-translate-y-2">
                 <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-8 flex items-center justify-center">
                   <ShieldCheck className="text-primary w-10 h-10" />
                 </div>
                 <h4 className="text-xl font-bold text-primary uppercase tracking-tight">Quality Assurance</h4>
                 <p className="text-sm text-muted-foreground mt-4 italic leading-relaxed">
                   Unwavering commitment to international safety standards and client trust.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}