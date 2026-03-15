import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

interface ProductSectionProps {
  id: string;
  platform: string;
  tagline: string;
  description: string;
  features: string[];
  colorClasses: {
    text: string;
    check: string;
    border: string;
    button: string;
    layerBg: string;
  };
  reversed: boolean;
  inView: boolean;
  delay: number;
}

function ProductSection({
  id,
  platform,
  tagline,
  description,
  features,
  colorClasses,
  reversed,
  inView,
  delay,
}: ProductSectionProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${reversed ? "" : ""}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 30 : -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
        className={reversed ? "lg:order-2" : ""}
      >
        <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${colorClasses.text}`}>
          {platform}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">{tagline}</h3>
        <p className="text-slate-600 text-base leading-relaxed mb-7">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((f: string) => (
            <li key={f} className="flex items-start gap-3 text-slate-700 text-sm">
              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colorClasses.check}`} />
              {f}
            </li>
          ))}
        </ul>
        <motion.a
          href={`#${id}`}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className={`inline-flex items-center gap-2 px-5 py-2.5 ${colorClasses.button} text-white font-medium rounded-md text-sm transition-all duration-200`}
        >
          Learn about {platform} <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>

      {/* Architecture diagram */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.75, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`${reversed ? "lg:order-1" : ""} p-8 rounded-2xl border ${colorClasses.border} bg-white shadow-sm`}
      >
        <div className={`text-xs font-semibold tracking-widest uppercase mb-5 ${colorClasses.text}`}>
          {platform} Architecture
        </div>
        <div className="space-y-3">
          {platform === "One Evidence" ? (
            <>
              <ArchLayer label="Evidence Sources" items={["Cloud", "SaaS", "On-Prem", "APIs"]} color={colorClasses.layerBg} />
              <ArchArrow />
              <ArchLayer label="Collection Engine" items={["Auto-collect", "Normalize", "Tag", "Store"]} color={colorClasses.layerBg} />
              <ArchArrow />
              <ArchLayer label="Compliance Mapping" items={["ISO 27001", "SOC 2", "GDPR", "HIPAA"]} color={colorClasses.layerBg} />
              <ArchArrow />
              <ArchLayer label="Audit Portal" items={["Reports", "Dashboard", "Export"]} color={colorClasses.layerBg} />
            </>
          ) : (
            <>
              <ArchLayer label="Data Sources" items={["Email", "Cloud Storage", "Endpoints", "Network"]} color={colorClasses.layerBg} />
              <ArchArrow />
              <ArchLayer label="AI Classification" items={["Detect", "Classify", "Score Risk", "Label"]} color={colorClasses.layerBg} />
              <ArchArrow />
              <ArchLayer label="Policy Engine" items={["Block", "Alert", "Quarantine", "Audit"]} color={colorClasses.layerBg} />
              <ArchArrow />
              <ArchLayer label="Incident Response" items={["Investigate", "Remediate", "Report"]} color={colorClasses.layerBg} />
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function ArchLayer({ label, items, color }: { label: string; items: string[]; color: string }) {
  return (
    <div className={`${color} rounded-lg p-3`}>
      <div className="text-xs text-slate-500 mb-2 font-medium">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="text-xs text-slate-700 bg-slate-100 rounded px-2 py-0.5">{item}</span>
        ))}
      </div>
    </div>
  );
}

function ArchArrow() {
  return (
    <div className="flex justify-center">
      <div className="w-px h-4 bg-slate-200" />
    </div>
  );
}

export default function LensOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <section id="platforms" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
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
          <ProductSection
            id="one-evidence"
            platform="One Evidence"
            tagline="Your single source of compliance truth"
            description="One Evidence aggregates security evidence from across your entire technology stack, maps it to compliance frameworks automatically, and gives auditors exactly what they need — reducing assessment time by up to 80%."
            features={oneEvidenceFeatures}
            reversed={false}
            inView={inView}
            delay={0.2}
            colorClasses={{
              text: "text-blue-600",
              check: "text-blue-600",
              border: "border-blue-200",
              button: "bg-blue-600 hover:bg-blue-500",
              layerBg: "bg-blue-50",
            }}
          />
          <ProductSection
            id="ai-dlp"
            platform="AI DLP"
            tagline="Stop data loss before it happens"
            description="AI DLP uses machine learning to classify, monitor, and protect sensitive data wherever it lives or moves — cloud, email, endpoint, or network — enforcing policies in real time without disrupting legitimate workflows."
            features={aiDlpFeatures}
            reversed={true}
            inView={inView}
            delay={0.25}
            colorClasses={{
              text: "text-orange-600",
              check: "text-orange-600",
              border: "border-orange-200",
              button: "bg-orange-600 hover:bg-orange-500",
              layerBg: "bg-orange-50",
            }}
          />
        </div>
      </div>
    </section>
  );
}
