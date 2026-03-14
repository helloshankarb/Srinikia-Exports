"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
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
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state based on scroll position
      setScrolled(currentScrollY > 50);
      
      // Smart hide: hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setHidden(true);
      } else {
        // Scrolling up - show navbar
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
      console.log('[Navbar] Scroll:', currentScrollY, 'hidden:', currentScrollY > lastScrollY.current && currentScrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/#products", isDropdown: true },
    { name: "Export & Quality", href: "/#why-choose-us" },
    { name: "Contact", href: "/#contact" },
    { name: "Company Profile", href: "/company-profile" },
  ];

  const productCategories = [
    { name: "Vegetables", href: "/vegetables" },
    { name: "Grains", href: "/grains" },
    { name: "Spices", href: "/spices" },
    { name: "Fruits", href: "/fruits" },
  ];

  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/studio-2215204146-270ef.firebasestorage.app/o/WhatsApp%20Image%202026-03-01%20at%2010.37.55%20AM.jpeg?alt=media&token=22012649-933c-4e4e-9775-dc1f1198cfe0";

  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-border/50" style={{ zIndex: 100 }} />
    );
  }

  return (
    <>
      {/* Top Bar */}
      <div 
        className={cn(
          "bg-primary text-white py-2 hidden md:block transition-all duration-300",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
        style={{ zIndex: 49 }}
      >
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+919550696255" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 9550696255</span>
            </a>
            <a href="mailto:ShreebhumiNaturesbest@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@sbnbglobal.com</span>
            </a>
          </div>
          <div className="text-sm text-white/70">
            Trusted Global Export Partner Since 2018
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-white/98 shadow-md py-2 top-0" 
            : "bg-white py-4 top-0",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
        style={{ zIndex: 50 }}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="relative h-12 w-40">
            <Image src={logoUrl} alt="Shree bhumi Nature's best Pvt Ltd" fill className="object-contain object-left" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary transition-colors outline-none">
                    {link.name} <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border-border rounded-lg shadow-lg p-2 min-w-[180px]">
                    {productCategories.map((cat) => (
                      <DropdownMenuItem key={cat.name} asChild>
                        <Link 
                          href={cat.href} 
                          className="text-sm font-medium text-primary hover:text-secondary hover:bg-secondary/5 px-3 py-2 rounded-md cursor-pointer"
                        >
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
                  className="text-sm font-medium text-primary hover:text-secondary transition-colors link-underline"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              href="/#contact"
              className="btn-primary text-sm"
            >
              Get Quote
            </Link>
          </nav>

          <button className="lg:hidden text-primary p-2" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-primary flex flex-col transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container-custom py-4 flex items-center justify-between border-b border-white/10">
          <Link href="/" onClick={() => setIsOpen(false)} className="relative h-10 w-36 bg-white p-1 rounded">
            <Image src={logoUrl} alt="Shree bhumi Nature's best Pvt Ltd" fill className="object-contain" />
          </Link>
          <button className="text-white p-2" onClick={() => setIsOpen(false)}>
            <X className="w-7 h-7" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-start justify-start pt-8 gap-2 overflow-y-auto px-6">
          {navLinks.map((link) => (
            <div key={link.name} className="w-full">
              <Link
                href={link.href}
                className="text-lg font-medium text-white/90 hover:text-secondary transition-colors block py-3"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.isDropdown && (
                <div className="flex flex-col gap-1 pl-4 py-2 border-l border-white/20">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className="text-base font-normal text-secondary hover:text-white transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      → {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/#contact"
            className="mt-6 btn-secondary w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
