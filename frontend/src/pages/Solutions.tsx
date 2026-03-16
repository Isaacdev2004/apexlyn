import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Scale, Heart, Landmark, Shield } from "lucide-react";
import SolutionsLineArt from "@/illustrations/SolutionsLineArt";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { easeSmooth } from "@/lib/animations";

const industries = [
  {
    icon: Building2,
    name: "Financial Services",
    description:
      "Meet ASIC, APRA, and PCI-DSS requirements with automated evidence collection and real-time compliance posture. One Evidence and AI DLP help banks and fintechs prove control effectiveness and prevent data exfiltration.",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description:
      "HIPAA-ready and TGA-aligned. Protect PHI with AI DLP across EHRs, email, and endpoints. One Evidence streamlines accreditation and audit readiness for hospitals and health tech.",
  },
  {
    icon: Scale,
    name: "Legal & Compliance",
    description:
      "Client matter confidentiality and regulatory obligations in one place. Data classification, matter-based policies, and auditor-ready evidence for law firms and legal ops.",
  },
  {
    icon: Landmark,
    name: "Government",
    description:
      "IRAP and government security requirements with data sovereignty. Deploy in your region, maintain full control, and demonstrate compliance to oversight bodies.",
  },
  {
    icon: Shield,
    name: "Insurance",
    description:
      "Protect policyholder data and meet ICA and privacy regulations. Compliance automation and DLP for claims, underwriting, and distribution channels.",
  },
];

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Layout>
      {/* Intro + illustration: distinct block */}
      <section className="section-pad pt-28 pb-12 bg-white">
        <div className="container-cf" ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                eyebrow="Solutions"
                title={
                  <>
                    Built for enterprises that{" "}
                    <span className="gradient-text-blue">can't afford to get it wrong</span>
                  </>
                }
                description="APEXLyn's platforms are purpose-built for regulated industries. Compliance intelligence and AI-powered data loss prevention, tailored to your sector."
                inView={inView}
              />
            </div>
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: easeSmooth }}
            >
              <SolutionsLineArt className="w-48 h-48 lg:w-56 lg:h-56" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry cards: alternating section */}
      <section className="section-pad section-alt">
        <div className="container-cf">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: easeSmooth }}
                  className="card-cf p-6 rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{industry.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{industry.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: easeSmooth }}
            className="mt-16 p-8 rounded-2xl border border-slate-200 bg-white text-center card-cf shadow-sm"
          >
            <p className="text-slate-700 text-base mb-4">
              Don't see your industry? We work with technology, retail, energy, and more.
            </p>
            <a
              href="/#contact"
              className="btn-cf link-cf inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md text-sm shadow-sm"
            >
              Talk to our team
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
