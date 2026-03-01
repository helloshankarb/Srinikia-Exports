
"use client";

import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Leaf className="text-primary w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">SBNB <span className="text-secondary">Global</span></span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Global leaders in premium Indian food exports. Dedicated to quality, purity, and sustainable farming practices since 2012.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Products", "About Us", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-secondary transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Product Categories</h4>
            <ul className="space-y-4">
              {["Spices", "Pickles", "Vegetables", "Masala Powders", "Organic Tea"].map((item) => (
                <li key={item}>
                  <Link href="#products" className="text-white/60 hover:text-secondary transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-secondary shrink-0" />
                <span className="text-white/60">42 Export Plaza, Business Hub, Mumbai - 400001</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-secondary shrink-0" />
                <span className="text-white/60">+91 98765 43210</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-secondary shrink-0" />
                <span className="text-white/60">info@sbnbglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© {currentYear} SBNB Global Foods Private Limited. All Rights Reserved.</p>
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
