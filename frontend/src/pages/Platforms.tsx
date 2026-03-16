import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const oneEvidenceFeatures = [
  "Single pane of glass for all compliance evidence",
  "Automated evidence collection from 50+ connectors",
  "AI-assisted gap analysis and remediation guidance",
  "Auditor-ready reporting in days, not months",
  "Continuous monitoring with real-time compliance posture",
];

const aiDlpFeatures = [
  "Deep content inspection across 200+ file types",
  "Behavioral analytics to detect insider threats",
  "Policy enforcement across cloud, endpoint, and email",
  "Zero-trust data classification and labeling",
  "Forensic-grade incident investigation and reporting",
];

const platforms = [
  {
    id: "track",
    name: "One Evidence",
    tagline: "Your single source of compliance truth",
    description:
      "One Evidence aggregates security evidence from across your entire technology stack, maps it to compliance frameworks automatically, and gives auditors exactly what they need — reducing assessment time by up to 80%.",
    features: oneEvidenceFeatures,
    accent: "blue",
    architecture: [
      { label: "Evidence Sources", items: ["Cloud", "SaaS", "On-Prem", "APIs"] },
      { label: "Collection Engine", items: ["Auto-collect", "Normalize", "Tag", "Store"] },
      { label: "Compliance Mapping", items: ["ISO 27001", "SOC 2", "GDPR", "HIPAA"] },
      { label: "Audit Portal", items: ["Reports", "Dashboard", "Export"] },
    ],
  },
  {
    id: "lens",
    name: "AI DLP",
    tagline: "Stop data loss before it happens",
    description:
      "AI DLP uses machine learning to classify, monitor, and protect sensitive data wherever it lives or moves — cloud, email, endpoint, or network — enforcing policies in real time without disrupting legitimate workflows.",
    features: aiDlpFeatures,
    accent: "cyan",
    architecture: [
      { label: "Data Sources", items: ["Email", "Cloud Storage", "Endpoints", "Network"] },
      { label: "AI Classification", items: ["Detect", "Classify", "Score Risk", "Label"] },
      { label: "Policy Engine", items: ["Block", "Alert", "Quarantine", "Audit"] },
      { label: "Incident Response", items: ["Investigate", "Remediate", "Report"] },
    ],
  },
];

export default function Platforms() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Layout>
      <section className="section-pad pt-28">
        <div className="container-cf" ref={ref}>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Our Platforms"
              title={
                <>
                  Two platforms. <span className="gradient-text-blue">One security posture.</span>
                </>
              }
              description="Whether you need to prove compliance or prevent data loss, APEXLyn has a purpose-built platform that integrates seamlessly with your existing stack."
              inView={inView}
              center
            />
          </div>

          <div className="space-y-24">
            {platforms.map((platform, idx) => (
              <motion.div
                key={platform.id}
                id={platform.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center scroll-mt-24"
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <span
                    className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${
                      platform.accent === "blue" ? "text-blue-600" : "text-cyan-600"
                    }`}
                  >
                    {platform.name}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {platform.tagline}
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed mb-7">{platform.description}</p>
                  <ul className="space-y-3 mb-8">
                    {platform.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-slate-700 text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            platform.accent === "blue" ? "text-blue-600" : "text-cyan-600"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contact"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-white font-medium rounded-md text-sm transition-all ${
                      platform.accent === "blue"
                        ? "bg-blue-600 hover:bg-blue-500"
                        : "bg-cyan-600 hover:bg-cyan-500"
                    }`}
                  >
                    Request a Demo <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div
                  className={`card-cf p-8 rounded-2xl border bg-white shadow-sm ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  } ${
                    platform.accent === "blue" ? "border-blue-200" : "border-cyan-200"
                  }`}
                >
                  <div
                    className={`text-xs font-semibold tracking-widest uppercase mb-5 ${
                      platform.accent === "blue" ? "text-blue-600" : "text-cyan-600"
                    }`}
                  >
                    {platform.name} Architecture
                  </div>
                  <div className="space-y-3">
                    {platform.architecture.map((layer, i) => (
                      <div key={layer.label}>
                        <div
                          className={`rounded-lg p-3 ${
                            platform.accent === "blue" ? "bg-blue-50" : "bg-cyan-50"
                          }`}
                        >
                          <div className="text-xs text-slate-500 mb-2 font-medium">{layer.label}</div>
                          <div className="flex flex-wrap gap-1.5">
                            {layer.items.map((item) => (
                              <span
                                key={item}
                                className="text-xs text-slate-700 bg-slate-100 rounded px-2 py-0.5"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        {i < platform.architecture.length - 1 && (
                          <div className="flex justify-center py-1">
                            <div className="w-px h-4 bg-slate-200" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

          <motion.div
            id="architecture"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="scroll-mt-24 pt-16 border-t border-slate-200"
          >
            <h3 className="text-slate-900 font-bold text-xl mb-6">Architecture Overview</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-8">
              Both platforms are cloud-native, built on AWS, and designed for data sovereignty. One Evidence focuses on evidence aggregation and compliance mapping; AI DLP on classification and policy enforcement. They can be deployed independently or together for a unified security posture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-cf p-6 rounded-xl border border-blue-200 bg-blue-50/50">
                <div className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">Track (One Evidence)</div>
                <p className="text-slate-700 text-sm">Evidence → Collection → Mapping → Audit. Single pipeline for compliance intelligence.</p>
              </div>
              <div className="card-cf p-6 rounded-xl border border-cyan-200 bg-cyan-50/50">
                <div className="text-cyan-600 text-xs font-semibold tracking-widest uppercase mb-2">Lens (AI DLP)</div>
                <p className="text-slate-700 text-sm">Data → Classification → Policy → Response. Real-time data loss prevention.</p>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
