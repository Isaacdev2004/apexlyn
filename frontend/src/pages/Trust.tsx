import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Gauge from "@/illustrations/Gauge";
import TrustCenterLineArt from "@/illustrations/TrustCenterLineArt";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { easeSmooth } from "@/lib/animations";

const metrics = [
  { value: 94, label: "Compliance Coverage Score", description: "Across all supported regulatory frameworks." },
  { value: 99, label: "Evidence Integrity Rate", description: "Tamper-proof records with full audit trail." },
  { value: 88, label: "DLP Detection Accuracy", description: "AI classification across data types." },
];

const certifications = [
  { name: "ISO 27001", status: "Certified", summary: "Information security management system certification." },
  { name: "SOC 2 Type II", status: "Audited", summary: "Annual third-party audit of security controls." },
  { name: "GDPR", status: "Compliant", summary: "Data protection and privacy by design." },
  { name: "HIPAA", status: "Ready", summary: "Safeguards for protected health information." },
  { name: "Data Sovereignty", status: "AWS Sydney", summary: "Data residency in your chosen region." },
];

export default function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <Layout>
      {/* Intro: distinct block, white */}
      <section className="section-pad pt-28 pb-12 bg-white">
        <div className="container-cf" ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                eyebrow="Trust Center"
                title={
                  <>
                    Enterprise-grade security,{" "}
                    <span className="gradient-text-blue">independently verified</span>
                  </>
                }
                description="We don't ask clients to take our word for it. Every claim is backed by third-party audits, independent testing, and verifiable compliance reports."
                inView={inView}
              />
            </div>
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: easeSmooth }}
            >
              <TrustCenterLineArt className="w-48 h-48 lg:w-56 lg:h-56" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications + Metrics: alternating section */}
      <section className="section-pad section-alt">
        <div className="container-cf">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h3 className="text-slate-900 font-semibold text-lg mb-6">Certifications & Compliance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: easeSmooth }}
                    className="card-cf p-4 rounded-lg border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-slate-900 font-semibold text-sm">{cert.name}</span>
                    </div>
                    <p className="text-primary text-xs font-medium mb-1">{cert.status}</p>
                    <p className="text-slate-600 text-xs">{cert.summary}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold text-lg mb-6">Key Metrics</h3>
              <div className="space-y-6">
                {metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: easeSmooth }}
                    className="card-cf p-6 rounded-xl border border-slate-200 bg-white shadow-sm flex items-center gap-6"
                  >
                    <div className="flex-shrink-0">
                      <Gauge value={m.value} label="" />
                    </div>
                    <div>
                      <div className="text-slate-900 font-semibold text-sm mb-1">{m.label}</div>
                      <p className="text-slate-600 text-xs leading-relaxed">{m.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5, ease: easeSmooth }}
            className="card-cf p-8 rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <h3 className="text-slate-900 font-semibold text-lg mb-4">Security & Privacy</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
              <li>• Role-based access control and SSO (SAML 2.0, OIDC)</li>
              <li>• No customer data used for model training</li>
              <li>• Incident response and breach notification procedures</li>
              <li>• Transparent status and uptime reporting</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
