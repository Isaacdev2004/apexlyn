import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Scale, Heart, Landmark, Shield, Cpu } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const industries = [
  { icon: Heart, name: "Healthcare", description: "HIPAA, clinical data, and patient privacy. One Evidence and AI DLP for healthcare providers and payers." },
  { icon: Scale, name: "Legal & Compliance", description: "Client matter confidentiality, e-discovery, and regulatory obligations. Built for law firms and legal ops." },
  { icon: Building2, name: "Financial Services", description: "PCI-DSS, PII, and cross-border data. Compliance intelligence and DLP for banks, insurers, and fintechs." },
  { icon: Landmark, name: "Government", description: "Classified and sensitive government data. Data sovereignty and audit-ready evidence for public sector." },
  { icon: Shield, name: "Insurance", description: "Claims data, underwriting, and regulatory reporting. Evidence aggregation and data protection at scale." },
  { icon: Cpu, name: "Technology", description: "IP protection, SaaS security, and vendor compliance. For product and security teams in high-growth tech." },
];

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Layout>
      <section className="section-pad pt-28">
        <div className="container-cf" ref={ref}>
          <div className="max-w-2xl mb-16">
            <SectionHeading
              eyebrow="Industries"
              title={
                <>
                  Built for regulated{" "}
                  <span className="gradient-text-blue">industries</span>
                </>
              }
              description="APEXLyn serves organizations that must prove compliance and protect sensitive data. Our platforms are designed for the regulatory and operational realities of your industry."
              inView={inView}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="card-cf p-6 rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-base mb-2">{ind.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{ind.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
