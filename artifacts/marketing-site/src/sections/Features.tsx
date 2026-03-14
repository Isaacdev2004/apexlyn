import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Eye, Globe, Lock, BarChart3, Cpu, Users } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Detection",
    description: "Machine learning models trained on trillions of signals detect threats no human could see.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Automated playbooks respond to threats in milliseconds, containing breaches before they spread.",
    color: "yellow",
  },
  {
    icon: Eye,
    title: "Full Visibility",
    description: "Unified view across endpoints, network, cloud, and identity—no blind spots.",
    color: "purple",
  },
  {
    icon: Globe,
    title: "Global Threat Intel",
    description: "Real-time intelligence from 500M+ devices worldwide feeds your defenses continuously.",
    color: "green",
  },
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Never trust, always verify. Every access request is authenticated and authorized.",
    color: "red",
  },
  {
    icon: BarChart3,
    title: "Risk Analytics",
    description: "Quantify cyber risk in business terms. Prioritize what matters most to your organization.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description: "Automate evidence collection for SOC 2, ISO 27001, HIPAA, and more with one click.",
    color: "green",
  },
  {
    icon: Users,
    title: "Managed Detection",
    description: "Our SOC team monitors your environment 24/7/365, so your team can focus on what matters.",
    color: "purple",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: "text-blue-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
  yellow: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    icon: "text-amber-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    icon: "text-purple-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    icon: "text-green-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
  },
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    icon: "text-red-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
  },
};

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });
  const colors = colorMap[feature.color];
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`group relative p-6 rounded-xl border border-white/8 bg-white/3 backdrop-blur-sm cursor-default transition-all duration-300 ${colors.glow}`}
    >
      <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
        <Icon className={`w-5 h-5 ${colors.icon}`} />
      </div>
      <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/10 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef as React.RefObject<Element>, { once: true });

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1a2d] to-[#0a0f1e]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3"
          >
            Platform Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Everything you need to{" "}
            <span className="gradient-text-blue">defend your organization</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            A unified security platform that brings together detection, investigation,
            and response—powered by AI and backed by world-class threat intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
