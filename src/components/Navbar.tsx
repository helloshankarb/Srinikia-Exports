"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const Logo = () => (
    <div className="flex flex-col items-start leading-none pl-3 border-l-4 border-secondary">
      <div className="flex items-baseline gap-1.5">
        <span className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase">SHREE BHUMI</span>
        <span className="text-white font-bold text-[10px] md:text-xs opacity-80 uppercase tracking-widest">PVT LTD</span>
      </div>
      <span className="text-secondary font-bold text-[10px] md:text-xs tracking-[0.2em] mt-0.5 uppercase">NATURE&apos;S BEST</span>
    </div>
  );

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
          <Link href="/" className="flex items-center justify-center">
            <Logo />
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
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>
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
