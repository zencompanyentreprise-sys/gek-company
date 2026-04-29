import { AboutSection } from "@/components/home/AboutSection";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f4]">
      <div className="p-2 sm:p-6 lg:p-9">
        <Hero />
      </div>
      <ServicesSection />
      <AboutSection />
    </main>
  );
}
