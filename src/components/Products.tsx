"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Info, MessageSquare } from "lucide-react";
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
import { PlaceHolderImages } from "@/lib/placeholder-images";

const categories = ["All", "Spices", "Pickles", "Vegetables", "Masala Powders"];

const products = [
  {
    name: "Red Chili Powder",
    category: "Spices",
    image: PlaceHolderImages.find(i => i.id === 'product-chili-powder')?.imageUrl || "",
    description: "Premium sun-dried red chili ground to perfection for rich color and heat.",
    hint: "chili powder"
  },
  {
    name: "Curcumin Turmeric",
    category: "Spices",
    image: PlaceHolderImages.find(i => i.id === 'product-turmeric')?.imageUrl || "",
    description: "High-curcumin turmeric powder sourced directly from organic farms.",
    hint: "turmeric powder"
  },
  {
    name: "Mango Pickle",
    category: "Pickles",
    image: PlaceHolderImages.find(i => i.id === 'product-pickles')?.imageUrl || "",
    description: "Authentic grandma's recipe with premium oil and selected spices.",
    hint: "mango pickle"
  },
  {
    name: "Fresh Ginger",
    category: "Vegetables",
    image: PlaceHolderImages.find(i => i.id === 'product-ginger')?.imageUrl || "",
    description: "Export-grade fresh ginger roots, cleaned and graded for quality.",
    hint: "fresh ginger"
  },
  {
    name: "Garam Masala",
    category: "Masala Powders",
    image: "https://picsum.photos/seed/garam/600/600",
    description: "A signature blend of 12 secret spices for authentic Indian taste.",
    hint: "garam masala"
  },
  {
    name: "Sambar Powder",
    category: "Masala Powders",
    image: "https://picsum.photos/seed/sambar/600/600",
    description: "Traditional South Indian blend for perfect sambar every time.",
    hint: "spices blend"
  }
];

export function Products() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Catalog</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Exquisite Product Range</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive selection of high-quality Indian foods, meticulously processed and packed to retain their natural freshness and aroma.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted p-1 rounded-none h-auto flex-wrap">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat} 
                  className="rounded-none px-8 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((product, idx) => (
                <div key={idx} className="group bg-background rounded-none overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  <div className="relative h-72 overflow-hidden">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={product.hint}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-primary hover:bg-secondary rounded-none">{product.category}</Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-3">{product.name}</h3>
                    <p className="text-muted-foreground mb-8 line-clamp-2">{product.description}</p>
                    
                    <div className="flex gap-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-none">
                            Enquire Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] rounded-none">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-primary">Product Enquiry</DialogTitle>
                            <DialogDescription>
                              Send us an enquiry for <span className="font-bold text-secondary">{product.name}</span>. We will get back to you with pricing and details.
                            </DialogDescription>
                          </DialogHeader>
                          <form className="space-y-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <Input className="rounded-none" placeholder="John Doe" />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input className="rounded-none" type="email" placeholder="john@example.com" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Estimated Quantity (KG/Ton)</label>
                              <Input className="rounded-none" placeholder="e.g. 500 KG" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Special Requirements</label>
                              <Textarea className="rounded-none" placeholder="Any specific packing or shipping needs?" rows={4} />
                            </div>
                            <DialogFooter>
                              <Button type="submit" className="w-full bg-secondary text-primary hover:bg-primary hover:text-white rounded-none">
                                Send Enquiry
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                      
                      <Button variant="outline" size="icon" className="border-primary/20 text-primary hover:bg-primary hover:text-white rounded-none">
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
