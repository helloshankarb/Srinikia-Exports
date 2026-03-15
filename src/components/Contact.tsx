"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const whatsappMessage = encodeURIComponent(
      `*New Inquiry*\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919550696255?text=${whatsappMessage}`, "_blank");
      setLoading(false);
      toast({ title: "Redirecting to WhatsApp..." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Info */}
            <div className="lg:w-2/5 bg-primary p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-white/70 mb-8 text-sm">
                Get in touch with our export team for inquiries and quotes.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-1">Address</p>
                    <p className="text-sm text-white/80">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-1">Phone</p>
                    <a href="tel:+919550696255" className="text-sm text-white/80 hover:text-secondary">
                      +91 9550696255
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-1">Email</p>
                    <a href="mailto:info@shreebhuminaturesbest.com" className="text-sm text-white/80 hover:text-secondary">
                      info@shreebhuminaturesbest.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-3/5 p-8">
              <h3 className="text-lg font-bold text-primary mb-1">Send us a Message</h3>
              <p className="text-muted-foreground text-sm mb-6">Fill out the form below and we'll get back to you.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Name *</label>
                    <Input name="name" required placeholder="Your name" className="h-10 border-border" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Email *</label>
                    <Input name="email" required type="email" placeholder="email@company.com" className="h-10 border-border" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Phone</label>
                    <Input name="phone" placeholder="+91 9550696255" className="h-10 border-border" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Product Interest</label>
                    <Input name="product" placeholder="e.g., Spices, Vegetables" className="h-10 border-border" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea name="message" required placeholder="Tell us about your requirements..." className="min-h-[100px] border-border" />
                </div>
                <Button type="submit" disabled={loading} size="lg" className="w-full bg-secondary hover:bg-secondary/90 h-11 font-medium">
                  {loading ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
