"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/WhatsApp%20Image%202026-03-01%20at%2010.37.55%20AM.jpeg?alt=media&token=22012649-933c-4e4e-9775-dc1f1198cfe0";

  return (
    <footer className="relative bg-primary text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="relative h-16 w-64 bg-white p-2">
              <Image src={logoUrl} alt="SBNB Logo" fill className="object-contain" sizes="256px" />
            </div>
            <p className="text-white/70 leading-relaxed text-sm italic">
              "Rooted in Nature. Trusted Worldwide."
            </p>
            <p className="text-white/60 text-sm">
              Shree Bhumi Nature’s Best Pvt. Ltd. is a farmer-driven global export leader delivering pure, traceable, and sustainable Indian produce.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest border-b border-secondary pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Export & Quality"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-secondary transition-colors flex items-center gap-2 group text-xs font-black uppercase tracking-widest">
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest border-b border-secondary pb-2 inline-block">Our Focus</h4>
            <ul className="space-y-4">
              {["Premium Spices", "Fresh Vegetables", "Sustainable Grains", "Fresh Fruits"].map((item) => (
                <li key={item}>
                  <Link href="/#products" className="text-white/60 hover:text-secondary transition-colors flex items-center gap-2 group text-xs font-black uppercase tracking-widest">
                    <ChevronRight className="w-4 h-4 text-secondary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest border-b border-secondary pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-secondary shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">48/48 papaiah Yadav Nagar colony chintal Hyderabad Telangana 500055</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-secondary shrink-0" />
                <span className="text-white/70 text-sm">+91 9550696255</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-secondary shrink-0" />
                <span className="text-white/70 text-sm">info@sbnbglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
          <p>© {currentYear} Shree Bhumi Nature’s Best Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
