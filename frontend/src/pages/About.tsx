import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { easeSmooth } from "@/lib/animations";

const pillars = [
  { title: "Mission", body: "Make compliance and data protection predictable, auditable, and automated for every regulated organization." },
  { title: "Approach", body: "We combine evidence aggregation, AI classification, and policy enforcement so security teams spend less time on manual work and more on strategy." },
  { title: "Trust", body: "SOC 2 Type II, ISO 27001, and GDPR-aligned. Your data stays in your chosen region with full cryptographic assurance." },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Layout>
      <section className="section-pad pt-28 bg-white">
        <div className="container-cf" ref={ref}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionHeading
              eyebrow="About APEXLyn"
              title={
                <>
                  Enterprise cybersecurity,{" "}
                  <span className="gradient-text-blue">built for compliance and control</span>
                </>
              }
              description="We help regulated organizations prove compliance and prevent data loss with two purpose-built platforms: One Evidence for compliance intelligence and AI DLP for data loss prevention. Headquartered in Sydney, Australia, we deploy globally on AWS."
              inView={inView}
              center
            />
          </div>
        </div>
      </section>

      <section className="section-pad section-alt">
        <div className="container-cf">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: easeSmooth }}
                className="card-cf p-6 rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <h3 className="text-slate-900 font-semibold text-base mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
