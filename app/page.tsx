import { AboutSection } from "@/components/home/AboutSection";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { ProductsSection } from "@/components/home/ProductsSection";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f4]">
      <div className="p-2 sm:p-6 lg:p-9">
        <Hero />
      </div>
      <ProductsSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
