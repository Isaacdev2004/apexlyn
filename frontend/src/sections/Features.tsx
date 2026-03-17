import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileCheck2, Search, ShieldAlert, Cloud, FolderLock, Network, Scale, Database } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    icon: FileCheck2,
    title: "Compliance Automation",
    description: "Automate evidence collection for ISO 27001, SOC 2, GDPR, HIPAA and 20+ frameworks with a single platform.",
    color: "blue",
  },
  {
    icon: Search,
    title: "AI-Powered Classification",
    description: "Machine learning classifies sensitive data across structured and unstructured sources with high accuracy.",
    color: "orange",
  },
  {
    icon: ShieldAlert,
    title: "Real-Time DLP Enforcement",
    description: "Prevent data exfiltration across email, cloud storage, endpoints, and SaaS applications instantly.",
    color: "red",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Built for AWS. Scalable, resilient, and deployed in your chosen region for data sovereignty compliance.",
    color: "blue",
  },
  {
    icon: FolderLock,
    title: "Evidence Vault",
    description: "Tamper-proof audit trails and evidence storage that satisfies even the most rigorous regulatory reviews.",
    color: "green",
  },
  {
    icon: Network,
    title: "Cross-Platform Visibility",
    description: "Unified view across endpoint, network, cloud, and identity—no silos, no blind spots.",
    color: "blue",
  },
  {
    icon: Scale,
    title: "Regulatory Mapping",
    description: "Automatically map security controls to regulatory requirements, reducing manual assessment effort by 80%.",
    color: "gold",
  },
  {
    icon: Database,
    title: "Data Sovereignty",
    description: "Your data stays where you need it. Region-locked storage with full audit visibility and cryptographic assurance.",
    color: "green",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  blue: { bg: "bg-primary/10", border: "border-primary/20", icon: "text-primary" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", icon: "text-orange-600" },
  red: { bg: "bg-red-500/10", border: "border-red-500/20", icon: "text-red-600" },
  green: { bg: "bg-green-600/10", border: "border-green-600/20", icon: "text-green-600" },
  gold: { bg: "bg-amber-500/10", border: "border-amber-500/20", icon: "text-amber-600" },
};

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-50px" });
  const colors = colorMap[feature.color];
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="card-cf group p-6 rounded-xl border border-slate-200 bg-white cursor-default shadow-sm"
    >
      <div className={`w-9 h-9 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
        <Icon className={`w-4.5 h-4.5 ${colors.icon}`} strokeWidth={1.8} />
      </div>
      <h3 className="text-slate-900 font-semibold text-sm mb-2 leading-snug">{feature.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef as React.RefObject<Element>, { once: true });

  return (
    <section id="features" className="section-pad section-alt relative">
      <div className="relative container-cf">
        <div ref={titleRef} className="max-w-2xl mb-14">
          <SectionHeading
            eyebrow="Platform Capabilities"
            title={
              <>
                Security and compliance,{" "}
                <span className="gradient-text-blue">engineered together</span>
              </>
            }
            description="APEXLyn's platform is purpose-built for enterprise organizations that face complex regulatory environments and sophisticated threats simultaneously."
            inView={titleInView}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
