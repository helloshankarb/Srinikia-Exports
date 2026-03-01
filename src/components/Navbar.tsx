"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/WhatsApp_Image_2026-03-01_at_10.37.55_AM-removebg-preview.png?alt=media&token=50f1f021-598f-4b00-ac36-db16ebb06120";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "PRODUCTS", href: "#products" },
    { name: "TECHNOLOGY", href: "#why-us" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-white py-3 hidden md:block border-b border-secondary/30">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm font-medium">
          <div className="flex gap-6 items-center">
            <Facebook className="w-4 h-4 hover:text-secondary cursor-pointer transition-colors" />
            <div className="w-px h-4 bg-white/20" />
            <Instagram className="w-4 h-4 hover:text-secondary cursor-pointer transition-colors" />
            <div className="w-px h-4 bg-white/20" />
            <Twitter className="w-4 h-4 hover:text-secondary cursor-pointer transition-colors" />
            <div className="w-px h-4 bg-white/20" />
            <Linkedin className="w-4 h-4 hover:text-secondary cursor-pointer transition-colors" />
            <div className="w-px h-4 bg-white/20" />
            <Youtube className="w-4 h-4 hover:text-secondary cursor-pointer transition-colors" />
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Phone className="w-4 h-4 text-secondary" />
              <span className="group-hover:text-secondary transition-colors">+91 9106758216</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 group cursor-pointer">
              <Mail className="w-4 h-4 text-secondary" />
              <span className="group-hover:text-secondary transition-colors">info@sbnbglobal.com</span>
            </div>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-primary/95 shadow-lg py-3 top-0" 
            : "bg-primary md:top-[49px] py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="relative h-12 w-40 md:h-16 md:w-60 bg-white/95 p-2 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={logoUrl}
                alt="Shree Bhumi Natures Best Pvt Ltd"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-white hover:text-secondary transition-colors nav-link-underline tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-primary flex flex-col transition-transform duration-500 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div className="relative h-10 w-32 bg-white/95 p-1 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={logoUrl}
                alt="Shree Bhumi Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <button
            className="text-white p-2"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white/80 hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
