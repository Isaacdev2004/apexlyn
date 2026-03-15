import Layout from "@/components/Layout";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import EvidenceGauge from "@/sections/EvidenceGauge";
import LensOrbit from "@/sections/LensOrbit";
import Benefits from "@/sections/Benefits";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <EvidenceGauge />
      <LensOrbit />
      <Benefits />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
