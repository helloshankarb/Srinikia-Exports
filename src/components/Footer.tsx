"use client";

import Link from "next/link";
import Image from "next/image";
import { Leaf, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const bgImageUrl = "https://i.ibb.co/v667tdY6/image.png";

  return (
    <footer className="relative text-white pt-20 pb-10 overflow-hidden">
      {/* Background Image Only */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImageUrl}
          alt="Footer Background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-none flex items-center justify-center">
                <Leaf className="text-primary w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tighter">
                SHREE BHUMI 
                <span className="text-secondary block text-[10px] uppercase tracking-widest mt-1">
                  Natures Best Pvt Ltd
                </span>
              </span>
            </Link>
            <p className="text-white/90 leading-relaxed text-sm drop-shadow-md">
              Global leaders in premium Indian food exports. Dedicated to quality, purity, and sustainable farming practices that bridge the gap between farms and the world.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 uppercase tracking-tighter border-b border-secondary/30 pb-2 inline-block drop-shadow-md">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Technology", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-secondary transition-colors flex items-center gap-2 group text-sm font-bold drop-shadow-sm">
                    <ChevronRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 uppercase tracking-tighter border-b border-secondary/30 pb-2 inline-block drop-shadow-md">Product Catalog</h4>
            <ul className="space-y-4">
              {["Premium Spices", "Authentic Pickles", "Fresh Vegetables", "Masala Powders"].map((item) => (
                <li key={item}>
                  <Link href="#products" className="text-white hover:text-secondary transition-colors flex items-center gap-2 group text-sm font-bold drop-shadow-sm">
                    <ChevronRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 uppercase tracking-tighter border-b border-secondary/30 pb-2 inline-block drop-shadow-md">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-secondary shrink-0 mt-1" />
                <span className="text-white text-sm leading-relaxed font-bold drop-shadow-sm">Global Headquarters, Gujarat, India</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-secondary shrink-0" />
                <span className="text-white text-sm font-bold drop-shadow-sm">+91 9106758216</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-secondary shrink-0" />
                <span className="text-white text-sm font-bold drop-shadow-sm">info@sbnbglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-[10px] uppercase tracking-widest font-bold drop-shadow-md">
          <p>© {currentYear} Shree Bhumi Natures Best Pvt Ltd. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
