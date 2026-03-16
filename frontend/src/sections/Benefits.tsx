import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Clock, Server, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const benefits = [
  {
    icon: Shield,
    stat: "80%",
    label: "Faster compliance audits",
    description: "Automated evidence collection and mapping cuts audit preparation from months to days.",
    color: "blue",
  },
  {
    icon: Clock,
    stat: "< 30 min",
    label: "Deployment time",
    description: "Cloud-native architecture. No hardware. No professional services required to get started.",
    color: "green",
  },
  {
    icon: Server,
    stat: "100%",
    label: "Data sovereignty",
    description: "Your data never leaves your chosen AWS region. Full cryptographic assurance and audit trail.",
    color: "orange",
  },
  {
    icon: Award,
    stat: "99.9%",
    label: "Platform uptime SLA",
    description: "Enterprise-grade reliability with contractually backed SLAs and 24/7 support.",
    color: "gold",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  green: { bg: "bg-green-600/10", text: "text-green-400", border: "border-green-600/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
  gold: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
};

const industries = [
  "Healthcare", "Legal & Compliance", "Financial Services",
  "Insurance", "Government", "Technology",
];

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <section id="solutions" className="section-pad section-gradient relative overflow-hidden">
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative container-cf" ref={ref}>
        <div className="max-w-2xl mb-14">
          <SectionHeading
            eyebrow="Why APEXLyn"
            title={
              <>
                Built for enterprises that{" "}
                <span className="gradient-text-blue">can't afford to get it wrong</span>
              </>
            }
            description="Our architecture decisions are guided by one principle: enterprise security and compliance teams need tools that are reliable, auditable, and fast."
            inView={inView}
          />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((b, i) => {
            const colors = colorMap[b.color];
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="card-cf p-6 rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-4.5 h-4.5 ${colors.text}`} strokeWidth={1.8} />
                </div>
                <div className={`text-3xl font-bold ${colors.text} mb-1`}>{b.stat}</div>
                <div className="text-slate-900 font-semibold text-sm mb-2">{b.label}</div>
                <p className="text-slate-600 text-xs leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border border-slate-200 rounded-xl p-7 bg-slate-50"
        >
          <p className="text-slate-600 text-sm mb-5 font-medium">Trusted across regulated industries</p>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
