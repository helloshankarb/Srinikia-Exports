
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Facebook, Instagram, Linkedin, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    { name: "HOME", href: "/#home" },
    { name: "ABOUT US", href: "/#about" },
    { name: "PRODUCTS", href: "/#products", isDropdown: true },
    { name: "FARMER NETWORK", href: "/#farmer-network" },
    { name: "EXPORT & QUALITY", href: "/#why-us" },
    { name: "CONTACT US", href: "/#contact" },
  ];

  const productCategories = [
    { name: "VEGETABLES", href: "/vegetables" },
    { name: "GRAINS", href: "/grains" },
    { name: "SPICES", href: "/spices" },
  ];

  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/WhatsApp%20Image%202026-03-01%20at%2010.37.55%20AM.jpeg?alt=media&token=22012649-933c-4e4e-9775-dc1f1198cfe0";

  return (
    <>
      <div className="bg-primary text-white py-2 hidden md:block border-b border-secondary/30">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm font-medium">
          <div className="flex gap-6 items-center">
            <Facebook className="w-4 h-4 hover:text-secondary cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 hover:text-secondary cursor-pointer transition-colors" />
            <Linkedin className="w-4 h-4 hover:text-secondary cursor-pointer transition-colors" />
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Phone className="w-4 h-4 text-secondary" />
              <span className="group-hover:text-secondary transition-colors text-xs md:text-sm font-bold">+91 9550696255</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <Mail className="w-4 h-4 text-secondary" />
              <span className="group-hover:text-secondary transition-colors text-xs md:text-sm font-bold">info@sbnbglobal.com</span>
            </div>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-white/95 shadow-lg py-2 top-0" 
            : "bg-white md:top-[41px] py-3"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative h-10 w-40 md:h-12 md:w-56">
            <Image src={logoUrl} alt="SBNB Logo" fill className="object-contain object-left" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="text-[11px] font-black text-primary hover:text-secondary transition-colors tracking-widest flex items-center gap-1 outline-none">
                    {link.name} <ChevronDown className="w-3 h-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border-primary/10 rounded-none min-w-[200px] p-2">
                    {productCategories.map((cat) => (
                      <DropdownMenuItem key={cat.name} asChild>
                        <Link href={cat.href} className="text-xs font-bold text-primary hover:bg-primary/5 hover:text-secondary p-3 block cursor-pointer uppercase tracking-widest">
                          {cat.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-black text-primary hover:text-secondary transition-colors nav-link-underline tracking-widest"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          <button className="lg:hidden text-primary p-2" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-primary flex flex-col transition-transform duration-500 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between border-b border-white/10">
          <Link href="/" onClick={() => setIsOpen(false)} className="relative h-8 w-32 bg-white p-1 rounded">
            <Image src={logoUrl} alt="SBNB Logo" fill className="object-contain" />
          </Link>
          <button className="text-white p-2" onClick={() => setIsOpen(false)}>
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-start pt-12 gap-6 overflow-y-auto px-6">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col items-center gap-4 w-full">
              <Link
                href={link.href}
                className="text-xl font-bold text-white/90 hover:text-secondary transition-colors uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.isDropdown && (
                <div className="flex flex-col items-center gap-3 bg-white/5 w-full py-4 rounded-2xl">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className="text-sm font-semibold text-secondary hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
