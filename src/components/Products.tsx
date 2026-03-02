
"use client";

import { useState } from "react";
import Image from "next/image";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const categories = ["Spices", "Grains", "Vegetables", "Fruits"];

const products = [
  // Spices
  {
    name: "Turmeric Powder",
    category: "Spices",
    image: "https://i.ibb.co/6cGv78nT/Whats-App-Image-2026-02-23-at-9-21-02-AM.jpg",
    description: "High-curcumin turmeric from sustainable Indian farms.",
    origin: "Erode, Tamil Nadu",
    grade: "Export Grade A"
  },
  {
    name: "Armoor Mirchi Powder",
    category: "Spices",
    image: "https://i.ibb.co/Xx7GcTQQ/Whats-App-Image-2026-02-23-at-10-40-03-AM.jpg",
    description: "Premium sun-dried red chilies with balanced heat and vibrant color.",
    origin: "Guntur, Andhra Pradesh",
    grade: "Premium"
  },
  {
    name: "Coriander Powder",
    category: "Spices",
    image: "https://i.ibb.co/hRJCqzkr/Whats-App-Image-2026-02-18-at-8-57-55-AM-1.jpg",
    description: "Aromatic coriander seeds cleaned and graded for global standards.",
    origin: "Gujarat/Rajasthan",
    grade: "Eagle"
  },
  {
    name: "Biryani Masala",
    category: "Spices",
    image: "https://i.ibb.co/0R7hNBMg/Whats-App-Image-2026-02-23-at-9-21-04-AM.jpg",
    description: "Authentic spice blend for the perfect aromatic biryani.",
    origin: "Hyderabad, India",
    grade: "Premium Blend"
  },

  // Grains
  {
    name: "Basmati Rice",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600",
    description: "Extra long grain aromatic Basmati rice, aged to perfection.",
    origin: "Himalayan Foothills",
    grade: "Super Fine"
  },
  {
    name: "Premium Wheat",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600",
    description: "High protein durum wheat sourced directly from contract farmers.",
    origin: "Madhya Pradesh",
    grade: "Sharbati"
  },
  {
    name: "Millets",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=600",
    description: "Nutritious and organic ancient grains for the health-conscious global market.",
    origin: "Maharashtra",
    grade: "Organic Certified"
  },

  // Vegetables
  {
    name: "Onion",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=600",
    description: "Fresh red and pink onions with excellent shelf life and pungency.",
    origin: "Nashik, Maharashtra",
    grade: "Top Quality"
  },
  {
    name: "Potato",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?q=80&w=600",
    description: "Firm and fresh potatoes suitable for retail and industrial use.",
    origin: "Uttar Pradesh",
    grade: "Grade A"
  },
  {
    name: "Garlic",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=600",
    description: "Bold white garlic cloves with strong aroma and long shelf life.",
    origin: "Gujarat",
    grade: "Export Size"
  },

  // Fruits
  {
    name: "Mango",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600",
    description: "Premium Alphonso and Kesar mangoes from GI-tagged farms.",
    origin: "Ratnagiri/Gujarat",
    grade: "Premium Export"
  },
  {
    name: "Pomegranate",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=600",
    description: "Bhagwa variety pomegranates known for deep red arils and sweetness.",
    origin: "Solapur, Maharashtra",
    grade: "A-Grade"
  },
  {
    name: "Banana",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=600",
    description: "Cavendish bananas carefully harvested and packed for global sea transit.",
    origin: "Andhra Pradesh",
    grade: "Export Standard"
  }
];

export function Products() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("Spices");
  const filteredProducts = products.filter(p => p.category === activeTab);

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>, productName: string) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const company = formData.get("company");
    const country = formData.get("country");
    const quantity = formData.get("quantity");
    const packaging = formData.get("packaging");

    const whatsappMessage = encodeURIComponent(
      `*Export Quote Request (SBNB Global)*\n\n` +
      `*Product:* ${productName}\n` +
      `*Company:* ${company}\n` +
      `*Country:* ${country}\n` +
      `*Est. Quantity:* ${quantity} MT\n` +
      `*Packaging:* ${packaging}`
    );

    window.open(`https://wa.me/919550696255?text=${whatsappMessage}`, "_blank");
    toast({
      title: "Opening WhatsApp...",
      description: `Requesting quote for ${productName}.`,
    });
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 rounded-none bg-secondary text-white">Our Product Categories</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 uppercase">Nature's Best Produce</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From Indian Farms to Global Tables—pure, traceable, and premium quality agricultural exports.
          </p>
        </div>

        <Tabs defaultValue="Spices" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted p-1 rounded-none h-auto flex-wrap">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat} 
                  className="rounded-none px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold uppercase tracking-tight text-xs"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0 focus-visible:ring-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, idx) => (
                <div key={idx} className="group bg-background rounded-none overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-white rounded-none font-bold uppercase text-[10px] tracking-widest">{product.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 uppercase tracking-tight">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-none h-11 font-bold uppercase tracking-widest text-[10px]">
                            Export Inquiry
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] rounded-none">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-primary font-bold">Export Quote Inquiry</DialogTitle>
                            <DialogDescription>
                              Get current pricing and capacity for <span className="font-bold text-secondary">{product.name}</span>.
                            </DialogDescription>
                          </DialogHeader>
                          <form 
                            className="space-y-4 py-4" 
                            onSubmit={(e) => handleQuoteSubmit(e, product.name)}
                          >
                            <div className="grid grid-cols-2 gap-4">
                              <Input name="company" required className="rounded-none h-12" placeholder="Company Name" />
                              <Input name="country" required className="rounded-none h-12" placeholder="Country" />
                            </div>
                            <Input name="quantity" required className="rounded-none h-12" placeholder="Est. Quantity (MT)" />
                            <Textarea name="packaging" className="rounded-none" placeholder="Packaging requirements?" rows={4} />
                            <DialogFooter>
                              <Button type="submit" className="w-full bg-secondary text-white hover:bg-primary rounded-none h-14 font-bold uppercase tracking-widest">
                                Submit Quote Request
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
