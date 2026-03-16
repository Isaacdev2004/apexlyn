import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { scrollRevealStagger, scrollRevealStaggerItem } from "@/lib/animations";

const pillars = [
  {
    step: "01",
    title: "Mission",
    body: "Make compliance and data protection predictable, auditable, and automated for every regulated organization.",
  },
  {
    step: "02",
    title: "Approach",
    body: "We combine evidence aggregation, AI classification, and policy enforcement so security teams spend less time on manual work and more on strategy.",
  },
  {
    step: "03",
    title: "Trust",
    body: "SOC 2 Type II, ISO 27001, and GDPR-aligned. Your data stays in your chosen region with full cryptographic assurance.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Layout>
      <section className="section-pad pt-28 bg-white">
        <div className="container-cf" ref={ref}>
          <div className="max-w-3xl mx-auto text-center mb-20">
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

      {/* Narrative timeline: distinct structure */}
      <section className="section-pad section-alt">
        <div className="container-cf max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" aria-hidden />

            <motion.ul
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={scrollRevealStagger}
              className="space-y-0"
            >
              {pillars.map((item, i) => (
                <motion.li
                  key={item.title}
                  variants={scrollRevealStaggerItem}
                  className="relative flex gap-10 pb-16 last:pb-0"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary bg-white flex items-center justify-center text-primary text-xs font-bold z-10">
                    {item.step}
                  </div>
                  <div className="card-cf flex-1 pt-0.5 p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
                    <h3 className="text-slate-900 font-semibold text-lg mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
