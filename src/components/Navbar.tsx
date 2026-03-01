
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf, Globe, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "AI Tools", href: "/tools" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-primary shadow-lg py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Leaf className="text-primary w-6 h-6" />
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight",
              scrolled ? "text-white" : "text-primary md:text-white"
            )}>
              SBNB <span className="text-secondary">Global</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-secondary transition-colors",
                  scrolled ? "text-white/90" : "text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="secondary" size="sm" className="font-semibold" asChild>
              <Link href="#contact">Enquire Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white bg-primary/20 p-2 rounded-md"
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
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Leaf className="text-primary w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-white">SBNB <span className="text-secondary">Global</span></span>
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
              className="text-2xl font-semibold text-white/80 hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="secondary" size="lg" className="w-64" asChild onClick={() => setIsOpen(false)}>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </nav>

        <div className="p-10 bg-black/10 flex flex-col gap-4 text-white/60 text-center">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            <span>export@sbnbglobal.com</span>
          </div>
        </div>
      </div>
    </>
  );
}
