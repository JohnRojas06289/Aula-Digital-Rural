import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import RaspberryScrollytelling from "@/components/RaspberryScrollytelling";
import TechSpecs from "@/components/TechSpecs";
import WhatsInTheBox from "@/components/WhatsInTheBox";
import PricingPlans from "@/components/PricingPlans";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <RaspberryScrollytelling />
      <PricingPlans />
      <TechSpecs />
      <WhatsInTheBox />
      <ImpactSection />
      <CTASection />

      <footer className="py-12 px-4 bg-gray-900 text-gray-400 text-center text-sm">
        <div className="max-w-7xl mx-auto">
          <p className="mb-4">&copy; 2024 Aula Digital Rural. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Soporte</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
