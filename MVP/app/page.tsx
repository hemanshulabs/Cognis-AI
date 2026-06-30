import { AboutSection } from "./components/AboutSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f1ece8] text-[#322c2b]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CapabilitiesSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
