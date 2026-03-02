import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ExportExpress } from "@/components/ExportExpress";
import { About, WhyChooseUs, Certifications } from "@/components/About";
import { Products } from "@/components/Products";
import { FarmerNetwork } from "@/components/FarmerNetwork";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <ExportExpress />
      <About />
      <Products />
      <FarmerNetwork />
      <Certifications />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}