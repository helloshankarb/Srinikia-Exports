
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/WhatsApp%20Image%202026-03-01%20at%2010.37.55%20AM.jpeg?alt=media&token=22012649-933c-4e4e-9775-dc1f1198cfe0";

  const Logo = () => (
    <div className="relative h-10 w-36 md:h-12 md:w-48">
      <Image 
        src={logoUrl} 
        alt="Shree Bhumi Natures Best Logo" 
        fill 
        className="object-contain object-left"
        priority
      />
    </div>
  );

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-white py-2 hidden md:block border-b border-secondary/30">
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
              <span className="group-hover:text-secondary transition-colors text-xs md:text-sm">+91 9550696255</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 group cursor-pointer">
              <Mail className="w-4 h-4 text-secondary" />
              <span className="group-hover:text-secondary transition-colors text-xs md:text-sm">info@sbnbglobal.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Logo Nav Bar */}
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300 border-b border-border/10",
          scrolled 
            ? "bg-white/95 shadow-lg py-1 top-0" 
            : "bg-white md:top-[41px] py-2"
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
                className="text-[13px] font-bold text-primary hover:text-secondary transition-colors nav-link-underline tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary p-2"
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
