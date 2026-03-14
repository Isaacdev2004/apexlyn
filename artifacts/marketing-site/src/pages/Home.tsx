import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import EvidenceGauge from "../sections/EvidenceGauge";
import LensOrbit from "../sections/LensOrbit";
import Benefits from "../sections/Benefits";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <EvidenceGauge />
        <LensOrbit />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
