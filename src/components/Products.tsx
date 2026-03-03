
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

const categories = ["Vegetables", "Grains", "Spices"];

const products = [
  // Vegetables
  {
    name: "Fresh Tomatoes",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1546470427-227c736c2841?q=80&w=800",
    description: "Premium sun-ripened tomatoes, hand-picked for global standards.",
    origin: "Southern India",
    grade: "Export Grade A"
  },
  {
    name: "Red & Pink Onions",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800",
    description: "Firm onions with excellent pungency and shelf life.",
    origin: "Nashik, Maharashtra",
    grade: "Premium Export"
  },
  {
    name: "White Garlic",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=800",
    description: "Bold cloves with strong aroma and natural nourishment.",
    origin: "Madhya Pradesh",
    grade: "Superior"
  },
  {
    name: "Natural Potatoes",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?q=80&w=800",
    description: "Multi-purpose export quality potatoes with minimal moisture.",
    origin: "Uttar Pradesh",
    grade: "Grade A"
  },
  {
    name: "Mixed Peppers",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1592924357228-91a4bcadcfea?q=80&w=800",
    description: "Crisp and colorful peppers grown under natural sunlight.",
    origin: "Karnataka",
    grade: "Top Selection"
  },
  {
    name: "Fresh Carrots",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=800",
    description: "Sweet and crunchy carrots, cleaned and graded for export.",
    origin: "Ooty, Tamil Nadu",
    grade: "Premium"
  },

  // Grains
  {
    name: "Aromatic Rice",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800",
    description: "Premium aged rice varieties with exquisite aroma and length.",
    origin: "North India",
    grade: "Supreme"
  },
  {
    name: "Premium Wheat",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800",
    description: "High-protein wheat grains sourced directly from farm clusters.",
    origin: "Central India",
    grade: "Sharbati"
  },
  {
    name: "Golden Corn",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=800",
    description: "Cleaned and dried yellow maize for food and feed industries.",
    origin: "Andhra Pradesh",
    grade: "Standard Export"
  },
  {
    name: "Pearl Barley",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1601314112185-334be10878ca?q=80&w=800",
    description: "Nutritious barley grains processed to preserve natural goodness.",
    origin: "Rajasthan",
    grade: "Export Ready"
  },
  {
    name: "Finger Millets",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=800",
    description: "Traditional superfood grains for the health-conscious global market.",
    origin: "Maharashtra",
    grade: "Premium"
  },
  {
    name: "Sorghum Grains",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800",
    description: "Naturally grown white and yellow sorghum, rich in minerals.",
    origin: "Telangana",
    grade: "High Quality"
  },

  // Spices
  {
    name: "Black Pepper",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1532431110031-15b565780598?q=80&w=800",
    description: "Bold and pungent black peppercorns from the Western Ghats.",
    origin: "Kerala",
    grade: "Bold 550GL"
  },
  {
    name: "Turmeric Powder",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1698556735172-1b5b3cd9d2ce?q=80&w=800",
    description: "High-curcumin turmeric, sun-dried and finely polished.",
    origin: "Salem/Erode",
    grade: "Export A-Grade"
  },
  {
    name: "Cumin Seeds",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1530588625438-7c5504971c2a?q=80&w=800",
    description: "Aromatic and machine-cleaned cumin seeds with high oil content.",
    origin: "Gujarat",
    grade: "Premium Eagle"
  },
  {
    name: "Green Cardamom",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1599307734173-03027b872b53?q=80&w=800",
    description: "Exquisite green cardamom pods with intense natural fragrance.",
    origin: "Idukki, Kerala",
    grade: "8mm+ Bold"
  },
  {
    name: "Cinnamon Bark",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1614734892376-74e6f6630044?q=80&w=800",
    description: "Pure and sweet cinnamon sticks, perfect for gourmet exports.",
    origin: "Southern India",
    grade: "Penta/Alba"
  },
  {
    name: "Dried Red Chili",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=800",
    description: "Fiery red chilies with natural color and heat levels.",
    origin: "Guntur, Andhra Pradesh",
    grade: "Premium Teja"
  },
  {
    name: "Natural Cloves",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1590401819777-628f8059868e?q=80&w=800",
    description: "Hand-picked cloves, rich in eugenol and natural aroma.",
    origin: "Southern India",
    grade: "Hand Picked"
  }
];

export function Products() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("Vegetables");

  useEffect(() => {
    const handleTabChange = (event: any) => {
      setActiveTab(event.detail);
    };
    window.addEventListener('changeProductTab', handleTabChange);
    return () => window.removeEventListener('changeProductTab', handleTabChange);
  }, []);

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
            Direct from Indian farm clusters to global markets—pure, traceable, and premium quality agricultural exports.
          </p>
        </div>

        <Tabs value={activeTab} className="w-full" onValueChange={setActiveTab}>
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
                    <div className="flex flex-col gap-1 mb-6">
                       <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Origin: {product.origin}</p>
                       <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Grade: {product.grade}</p>
                    </div>
                    
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
