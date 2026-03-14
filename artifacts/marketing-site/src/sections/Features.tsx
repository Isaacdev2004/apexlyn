import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileCheck2, Search, ShieldAlert, Cloud, FolderLock, Network, Scale, Database } from "lucide-react";

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
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", icon: "text-blue-400" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", icon: "text-orange-400" },
  red: { bg: "bg-red-500/10", border: "border-red-500/20", icon: "text-red-400" },
  green: { bg: "bg-green-600/10", border: "border-green-600/20", icon: "text-green-400" },
  gold: { bg: "bg-yellow-500/10", border: "border-yellow-500/20", icon: "text-yellow-400" },
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
      className="group p-6 rounded-xl border border-white/7 bg-white/2 card-hover cursor-default"
    >
      <div className={`w-9 h-9 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
        <Icon className={`w-4.5 h-4.5 ${colors.icon}`} strokeWidth={1.8} />
      </div>
      <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{feature.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef as React.RefObject<Element>, { once: true });

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a] via-[#0a1120] to-[#080d1a]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="max-w-2xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3"
          >
            Platform Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Security and compliance,{" "}
            <span className="gradient-text-blue">engineered together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            APEXLyn's platform is purpose-built for enterprise organizations that face
            complex regulatory environments and sophisticated threats simultaneously.
          </motion.p>
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
