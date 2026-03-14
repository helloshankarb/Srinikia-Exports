"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight, ChevronRight } from "lucide-react";

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/WhatsApp%20Image%202026-03-01%20at%2010.37.55%20AM.jpeg?alt=media&token=22012649-933c-4e4e-9775-dc1f1198cfe0";
  const footerBgUrl = "/footer_ref.png";

  if (!mounted) return null;

  return (
    <footer className="relative bg-primary text-white pt-10 pb-2 mt-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footerBgUrl}
          alt="Footer Background"
          fill
          className="object-cover blur-[5px]"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Logo - Centered */}
        <div className="flex justify-center mb-6">
          <Link href="/" className="inline-block">
            <div className="relative h-12 w-44 bg-white p-2 rounded-lg shadow-lg">
              <Image src={logoUrl} alt="Shree bhumi Nature's best Pvt Ltd" fill className="object-contain" sizes="176px" />
            </div>
          </Link>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-white/20 mb-6"></div>

        {/* Social Media - Centered */}
        <div className="flex justify-center gap-3 mb-8">
          <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/shreebhuminaturesbest?igsh=MTZjb2U2dmloMXRxNA%3D%3D" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/#products" },
                { name: "Export & Quality", href: "/#why-choose-us" },
                { name: "Contact", href: "/#contact" },
                { name: "Company Profile", href: "/company-profile" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white hover:text-secondary text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              Products
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Vegetables", href: "/vegetables" },
                { name: "Grains", href: "/grains" },
                { name: "Spices", href: "/spices" },
                { name: "Fruits", href: "/fruits" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white hover:text-secondary text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="w-9 h-9 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Address</p>
                  <p className="text-white text-sm">Hyderabad, Telangana, India</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-9 h-9 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Phone</p>
                  <a href="tel:+919550696255" className="text-white text-sm hover:text-secondary transition-colors">+91 9550696255</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-9 h-9 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:Shreebhuminaturesbest@gmail.com" className="text-white text-sm hover:text-secondary transition-colors">ShreebhumiNaturesbest@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">© {currentYear} Shree bhumi Nature's best Pvt Ltd. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-white/80 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-secondary text-sm transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
