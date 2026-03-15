"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const spices = [
  {
    name: "Black Pepper",
    image: "/spices/Black Pepper.jpg",
    description: "Bold and pungent black peppercorns from the Western Ghats.",
    origin: "Kerala",
    grade: "Bold 550GL"
  },
  {
    name: "Turmeric",
    image: "/spices/Turmeric Powder.jpg",
    description: "High-curcumin turmeric, sun-dried and finely polished.",
    origin: "Nizamabad, Telangana",
    grade: "Export A-Grade"
  },
  {
    name: "Cumin Seeds",
    image: "/spices/Cumin Seeds.jpg",
    description: "Aromatic and machine-cleaned cumin seeds with high oil content.",
    origin: "Gujarat",
    grade: "Premium Eagle"
  },
  {
    name: "Green Cardamom",
    image: "/spices/Green Cardamom.png",
    description: "Exquisite green cardamom pods with intense natural fragrance.",
    origin: "Idukki, Kerala",
    grade: "8mm+ Bold"
  },
  {
    name: "Cinnamon Bark",
    image: "/spices/Cinnamon Bark.jpg",
    description: "Pure and sweet cinnamon sticks, perfect for gourmet exports.",
    origin: "Southern India",
    grade: "Penta/Alba"
  },
  {
    name: "Dried Red Chili",
    image: "/spices/Dried Red Chili.jpg",
    description: "Fiery red chilies with natural color and heat levels.",
    origin: "Guntur, Andhra Pradesh",
    grade: "Premium Teja"
  },
  {
    name: "Natural Cloves",
    image: "/spices/Natural Cloves.jpg",
    description: "Hand-picked cloves, rich in eugenol and natural aroma.",
    origin: "Southern India",
    grade: "Hand Picked"
  },
  {
    name: "Coriander",
    image: "/spices/Coriander.jpg",
    description: "Fresh and aromatic coriander seeds, carefully sourced and processed.",
    origin: "Rajasthan/Gujarat",
    grade: "Premium Quality"
  }
];

export default function SpicesPage() {
  const { toast } = useToast();

  const handleQuoteClick = (productName: string) => {
    const whatsappMessage = encodeURIComponent(
      `*Spice Export Inquiry: ${productName}*\n\n` +
      `I am looking for a reliable Indian spice partner. Please send the latest lab reports and export pricing.`
    );
    window.open(`https://wa.me/919550696255?text=${whatsappMessage}`, "_blank");
    toast({ title: "Connecting to WhatsApp..." });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary text-sm font-semibold rounded-full mb-6">
              Export Category
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Premium Indian Spices Exporter
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Leading exporter of authentic Indian spices including Black Pepper, Turmeric, Cardamom, and more to global markets worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleQuoteClick("General Spice Inquiry")}
                className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8 font-semibold"
              >
                Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/#contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8 font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Premium Spice Export from India
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                India is known as the land of spices, producing some of the world's finest aromatic and flavoring ingredients. At <strong>Shree bhumi Nature's best Pvt Ltd</strong>, we source premium spices directly from the best growing regions, ensuring authentic flavor and high potency.
              </p>
              <p>
                Our spices undergo rigorous quality testing including moisture content, volatile oil analysis, and contamination screening to meet international food safety standards. We export to leading food manufacturers, restaurants, and retailers worldwide.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {["ISO Certified", "Lab Tested", "Direct Sourcing"].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="font-medium text-primary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Spice Products</h2>
            <p className="text-muted-foreground">Premium quality spices sourced directly from Indian farms</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {spices.map((product, idx) => (
              <div key={idx} className="card-corporate group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-white font-medium text-xs">
                      Premium
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-secondary" />
                      {product.origin}
                    </span>
                    <span className="font-medium">{product.grade}</span>
                  </div>
                  <Button 
                    onClick={() => handleQuoteClick(product.name)}
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Import Indian Spices?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us today for competitive pricing and reliable delivery of premium Indian spices to your market.
          </p>
          <Button 
            onClick={() => handleQuoteClick("General Inquiry")}
            className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8 font-semibold"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
