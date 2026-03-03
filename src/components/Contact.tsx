
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
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
    const company = formData.get("company");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const whatsappMessage = encodeURIComponent(
      `*New Inquiry (SBNB Global Website)*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Company:* ${company}\n` +
      `*Phone:* ${phone}\n` +
      `*Message:* ${message}`
    );

    // Simulate small delay before redirect
    setTimeout(() => {
      window.open(`https://wa.me/919550696255?text=${whatsappMessage}`, "_blank");
      setLoading(false);
      toast({
        title: "Redirecting to WhatsApp...",
        description: "Our export team is ready to assist you.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden border border-border/50">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-primary p-8 md:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Get in Touch</h2>
              <p className="text-white/60 mb-10 md:mb-12 text-base md:text-lg">
                Ready to take the finest Indian flavors to your market? Contact us today for wholesale enquiries.
              </p>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-secondary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] md:text-sm uppercase tracking-widest font-bold">Email Us</p>
                    <p className="text-sm md:text-lg font-medium">info@sbnbglobal.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-secondary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] md:text-sm uppercase tracking-widest font-bold">Call Us</p>
                    <p className="text-sm md:text-lg font-medium">+91 9550696255</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] md:text-sm uppercase tracking-widest font-bold">Global Headquarters</p>
                    <p className="text-xs md:text-lg font-medium leading-tight">48/48 papaiah Yadav Nagar colony chintal Hyderabad Telangana 500055</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/10 flex gap-4 md:gap-6">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <button key={i} className="p-2 md:p-3 bg-white/5 rounded-full hover:bg-secondary hover:text-primary transition-all">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-3/5 p-8 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">Full Name</label>
                    <Input name="name" required placeholder="Enter your name" className="bg-background border-border h-12 md:h-14 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">Email Address</label>
                    <Input name="email" required type="email" placeholder="email@company.com" className="bg-background border-border h-12 md:h-14 rounded-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">Company Name</label>
                    <Input name="company" placeholder="Your Business Name" className="bg-background border-border h-12 md:h-14 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">Phone Number</label>
                    <Input name="phone" placeholder="+91 9550696255" className="bg-background border-border h-12 md:h-14 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">Message</label>
                  <Textarea name="message" required placeholder="Tell us about your requirements..." className="bg-background border-border min-h-[140px] md:min-h-[160px] rounded-xl" />
                </div>
                <Button type="submit" disabled={loading} size="lg" className="w-full md:w-auto px-12 h-12 md:h-14 bg-secondary text-primary hover:bg-primary hover:text-white rounded-xl font-bold uppercase tracking-widest text-xs">
                  {loading ? "Connecting..." : "Send via WhatsApp"} <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
