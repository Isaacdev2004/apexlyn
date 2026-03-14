import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Gauge from "../illustrations/Gauge";

const metrics = [
  {
    value: 94,
    label: "Compliance Coverage Score",
    description: "Across all supported regulatory frameworks, measured independently.",
  },
  {
    value: 99,
    label: "Evidence Integrity Rate",
    description: "Tamper-proof records with cryptographic verification and full audit trail.",
  },
  {
    value: 88,
    label: "DLP Detection Accuracy",
    description: "AI classification precision across structured and unstructured data types.",
  },
];

const certifications = [
  { name: "ISO 27001", desc: "Certified" },
  { name: "SOC 2 Type II", desc: "Audited" },
  { name: "GDPR", desc: "Compliant" },
  { name: "HIPAA", desc: "Ready" },
  { name: "Data Sovereignty", desc: "AWS Sydney" },
];

export default function EvidenceGauge() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section id="trust" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080d1a]" />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3"
            >
              Trust Center
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
            >
              Enterprise-grade security,{" "}
              <span className="gradient-text-blue">independently verified</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              We don't ask clients to take our word for it. Every claim is backed by
              third-party audits, independent testing, and verifiable compliance reports
              accessible through our Trust Center.
            </motion.p>

            {/* Certification grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 rounded-lg border border-white/8 bg-white/3 flex flex-col gap-1"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-white text-xs font-semibold">{cert.name}</span>
                  </div>
                  <span className="text-slate-500 text-xs">{cert.desc}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ scale: 1.03 }}
              className="mt-8 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Visit Trust Center →
            </motion.a>
          </div>

          {/* Right — gauges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.12 }}
                className="p-6 rounded-xl border border-white/8 bg-white/3 flex items-center gap-6"
              >
                <div className="flex-shrink-0">
                  <Gauge value={m.value} label="" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{m.label}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
