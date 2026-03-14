"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Globe, Users, Award, CheckCircle2, Leaf, Heart, Eye, Target, Handshake } from "lucide-react";

export default function CompanyProfilePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Shree Bhumi Nature's Best Pvt. Ltd.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-secondary mb-4">
              Farmer-Based Global Agricultural Export Company
            </p>
            <p className="text-lg md:text-xl text-white/80">
              Rooted in Nature. Trusted Worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              Who We Are
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Shree Bhumi Nature's Best Pvt. Ltd. is a farmer-driven agricultural export company rooted in the fertile lands of India. Our name carries a deep and honest meaning — <strong>Shree</strong> represents Prosperity, <strong>Bhumi</strong> honors Mother Earth, and <strong>Nature's Best</strong> reflects our promise of pure, honest, and sustainable produce.
              </p>
              <p>
                We are not just exporters — we are a trusted bridge between hardworking Indian farmers and global markets. From the rich farmlands of Telangana, Maharashtra, Andhra Pradesh, and beyond, we deliver premium quality Spices, Grains, Vegetables, and Fruits to buyers across 25+ countries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Founded in Hyderabad, Telangana, Shree Bhumi Nature's Best Pvt. Ltd. was born out of a simple but powerful mission — to empower Indian farming communities while bringing the finest produce of Indian soil to global tables.
              </p>
              <p>
                We recognized a critical gap in the agricultural export ecosystem — the absence of a direct, transparent, and farmer-friendly supply chain. We chose to build one. By partnering directly with local farmer groups, organic farm clusters, and contract farming networks, we eliminated middlemen, ensured fair farmer income, and now deliver fresher, fully traceable products to our international clients.
              </p>
              <p>
                Today, we proudly serve buyers across Europe, the Middle East, Asia, and North America — with every shipment carrying the trust, quality, and warmth of Indian farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-secondary" />
                <h3 className="text-xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                To become a globally trusted agricultural export brand while uplifting rural farming communities across India.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-secondary" />
                <h3 className="text-xl font-bold text-primary">Our Mission</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <span>Support farmer communities with fair and transparent pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <span>Promote sustainable and responsible farming practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <span>Deliver premium quality produce to global markets consistently</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <span>Maintain the highest international export and food safety standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <span>Build long-term partnerships with buyers based on trust and reliability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Heart, title: "Integrity", desc: "Honest and transparent business practices" },
              { icon: Star, title: "Quality", desc: "Uncompromising excellence in every shipment" },
              { icon: Leaf, title: "Sustainability", desc: "Environment-friendly farming and operations" },
              { icon: Handshake, title: "Compassion", desc: "Supporting farmers and rural communities" },
              { icon: Eye, title: "Transparency", desc: "Clear communication with every stakeholder" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Model Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              Our Farmer-Based Model
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-8">
              <p>
                At the heart of everything we do is our direct farmer sourcing model — the foundation that makes Shree Bhumi different from every conventional exporter.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "We partner with 100+ local farmer groups and organic farm clusters across India",
                "Contract farming ensures consistent supply, quality, and pricing",
                "No middlemen means fairer income for farmers and better prices for buyers",
                "Every batch is fully traceable from farm to final shipment"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-muted p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span className="font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "7+", label: "Years Experience" },
              { number: "10+", label: "Global Clients" },
              { number: "100+", label: "Farm Partners" },
              { number: "50+", label: "Products" }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{item.number}</div>
                <div className="text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            Certifications & Memberships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "FSSAI Certified", desc: "Food Safety and Standards Authority of India", status: "Certified" },
              { name: "APEDA Member", desc: "Agricultural & Processed Food Products Export Development Authority", status: "Member" },
              { name: "Foreign Trade Export Certificate", desc: "Official export authorization", status: "Certified" },
              { name: "ISO Quality Standards", desc: "International quality management", status: "In Progress" },
              { name: "Organic Certification", desc: "Certified organic produce", status: "In Progress" }
            ].map((cert, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className={`w-6 h-6 ${cert.status === "Certified" || cert.status === "Member" ? "text-green-500" : "text-amber-500"} shrink-0`} />
                  <div>
                    <h3 className="font-bold text-primary">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.desc}</p>
                    <span className={`text-xs font-medium ${cert.status === "Certified" || cert.status === "Member" ? "text-green-600" : "text-amber-600"}`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Our Global Reach
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We export to 25+ countries across 4 continents
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: "Europe", countries: "UK, Germany, Netherlands, Spain, France, Italy", emoji: "🌍" },
              { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain", emoji: "🌏" },
              { region: "Asia", countries: "Singapore, Malaysia, Hong Kong, Japan, South Korea", emoji: "🌏" },
              { region: "North America", countries: "USA, Canada", emoji: "🌎" }
            ].map((item, i) => (
              <div key={i} className="bg-muted p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.region}</h3>
                <p className="text-sm text-muted-foreground">{item.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Whether you are a wholesaler, retailer, or distributor looking for reliable premium agricultural exports from India — we are your trusted partner. Get in touch with our export team today for product samples, pricing, and custom packaging options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="btn-secondary text-base px-8 py-3">
                Get Export Quote
              </a>
              <a href="/#products" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-lg transition-colors">
                Explore Our Products
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Helper component for Star icon
function Star({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}
