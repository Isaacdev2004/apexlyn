import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Layout>
      <section className="section-pad pt-28">
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
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" delay={0.1}>
            {[
              { title: "Mission", body: "Make compliance and data protection predictable, auditable, and automated for every regulated organization." },
              { title: "Approach", body: "We combine evidence aggregation, AI classification, and policy enforcement so security teams spend less time on manual work and more on strategy." },
              { title: "Trust", body: "SOC 2 Type II, ISO 27001, and GDPR-aligned. Your data stays in your chosen region with full cryptographic assurance." },
            ].map((item) => (
              <div key={item.title} className="card-cf p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                <h3 className="text-slate-900 font-semibold text-base mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
