
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About, WhyChooseUs } from "@/components/About";
import { Products } from "@/components/Products";
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
      <About />
      <WhyChooseUs />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
