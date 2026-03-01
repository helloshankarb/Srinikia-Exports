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

const categories = ["Spices", "Pickles", "Vegetables", "Masala Powders"];

const products = [
  // Spices
  {
    name: "Premium Red Chili",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=600",
    description: "Hand-picked, sun-dried red chilies known for vibrant color and balanced heat.",
    hint: "red chili"
  },
  {
    name: "Curcumin Turmeric",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600",
    description: "Pure turmeric fingers with high curcumin content, processed naturally.",
    hint: "turmeric"
  },
  {
    name: "Black Pepper",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1599940824399-b87987cb972d?q=80&w=600",
    description: "Bold and aromatic black pepper corn sourced from the Western Ghats.",
    hint: "black pepper"
  },
  {
    name: "Coriander Seeds",
    category: "Spices",
    image: "https://images.unsplash.com/photo-1609102041953-7c03b1453873?q=80&w=600",
    description: "Freshly harvested coriander seeds with a citrusy, nutty profile.",
    hint: "coriander"
  },

  // Pickles
  {
    name: "Classic Mango",
    category: "Pickles",
    image: "https://images.unsplash.com/photo-1663136618135-d11b4dbd22c7?q=80&w=600",
    description: "Traditional spicy mango pickle made with mustard oil and authentic spices.",
    hint: "mango pickle"
  },
  {
    name: "Spicy Lime",
    category: "Pickles",
    image: "https://picsum.photos/seed/lime/600/600",
    description: "Tangy and hot lime pickle, aged naturally for deep flavor development.",
    hint: "lemon pickle"
  },
  {
    name: "Garlic Pickle",
    category: "Pickles",
    image: "https://picsum.photos/seed/garlic/600/600",
    description: "Robust garlic cloves infused with a secret blend of aromatic Indian spices.",
    hint: "garlic pickle"
  },
  {
    name: "Mixed Vegetable",
    category: "Pickles",
    image: "https://picsum.photos/seed/mixed/600/600",
    description: "A colorful assortment of seasonal vegetables in a rich, spicy oil base.",
    hint: "mixed pickle"
  },

  // Vegetables
  {
    name: "Fresh Ginger",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=600",
    description: "Grade-A fresh ginger roots, cleaned and sorted for global export standards.",
    hint: "fresh ginger"
  },
  {
    name: "Red Onions",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1508747703725-7197771375a0?q=80&w=600",
    description: "Firm and pungent red onions, perfect for retail and commercial kitchens.",
    hint: "red onion"
  },
  {
    name: "Green Chilies",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=600",
    description: "Crisp and fiery green chilies, packed to maintain moisture and heat.",
    hint: "green chili"
  },
  {
    name: "Fresh Garlic",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=600",
    description: "Large, white garlic bulbs with strong aroma and high essential oil content.",
    hint: "fresh garlic"
  },

  // Masala Powders
  {
    name: "Garam Masala",
    category: "Masala Powders",
    image: "https://picsum.photos/seed/masala1/600/600",
    description: "A warming blend of elite spices for an authentic Indian finishing touch.",
    hint: "garam masala"
  },
  {
    name: "Sambar Powder",
    category: "Masala Powders",
    image: "https://picsum.photos/seed/masala2/600/600",
    description: "Traditional South Indian recipe for the perfect aromatic sambar broth.",
    hint: "curry powder"
  },
  {
    name: "Kitchen King",
    category: "Masala Powders",
    image: "https://picsum.photos/seed/masala3/600/600",
    description: "The ultimate versatile blend for vegetarian curries and gravies.",
    hint: "spice blend"
  },
  {
    name: "Biryani Masala",
    category: "Masala Powders",
    image: "https://picsum.photos/seed/masala4/600/600",
    description: "Exotic and fragrant spice mix for world-class Indian Biryani rice.",
    hint: "biryani spice"
  }
];

export function Products() {
  const [activeTab, setActiveTab] = useState("Spices");

  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 rounded-none">Our Catalog</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Exquisite Product Range</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive selection of high-quality Indian foods, meticulously processed and packed to retain their natural freshness and aroma.
          </p>
        </div>

        <Tabs defaultValue="Spices" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted p-1 rounded-none h-auto flex-wrap">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat} 
                  className="rounded-none px-8 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold uppercase tracking-tight text-xs"
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
                  <div className="relative h-60 overflow-hidden">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={product.hint}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-primary hover:bg-secondary rounded-none font-bold uppercase text-[10px] tracking-widest">{product.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 uppercase tracking-tight">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
                    
                    <div className="flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-none h-11 font-bold uppercase tracking-widest text-[10px]">
                            Enquire Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] rounded-none border-none">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-primary font-bold">Product Enquiry</DialogTitle>
                            <DialogDescription>
                              Send us an enquiry for <span className="font-bold text-secondary">{product.name}</span>. We will get back to you with pricing and details.
                            </DialogDescription>
                          </DialogHeader>
                          <form className="space-y-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-primary uppercase">Full Name</label>
                                <Input className="rounded-none h-12 bg-muted/50 border-none" placeholder="John Doe" />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-bold text-primary uppercase">Email</label>
                                <Input className="rounded-none h-12 bg-muted/50 border-none" type="email" placeholder="john@example.com" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-bold text-primary uppercase">Estimated Quantity</label>
                              <Input className="rounded-none h-12 bg-muted/50 border-none" placeholder="e.g. 500 KG" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-bold text-primary uppercase">Special Requirements</label>
                              <Textarea className="rounded-none bg-muted/50 border-none" placeholder="Any specific packing or shipping needs?" rows={4} />
                            </div>
                            <DialogFooter>
                              <Button type="submit" className="w-full bg-secondary text-primary hover:bg-primary hover:text-white rounded-none h-14 font-bold uppercase tracking-widest">
                                Send Enquiry
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                      
                      <Button variant="outline" size="icon" className="border-primary/20 text-primary hover:bg-primary hover:text-white rounded-none h-11 w-11 shrink-0">
                        <Info className="w-4 h-4" />
                      </Button>
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
