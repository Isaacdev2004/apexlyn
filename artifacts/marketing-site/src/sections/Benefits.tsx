import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingDown, Clock, DollarSign, Trophy } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    stat: "95%",
    label: "Reduction in dwell time",
    description:
      "Identify and contain breaches in minutes, not months. Our AI responds faster than any human team.",
    color: "blue",
  },
  {
    icon: Clock,
    stat: "8 min",
    label: "Mean time to respond",
    description:
      "Automated response playbooks act instantly, then our analysts validate and escalate as needed.",
    color: "green",
  },
  {
    icon: DollarSign,
    stat: "$4.2M",
    label: "Average breach cost avoided",
    description:
      "Customers report significant reduction in total breach costs thanks to early detection.",
    color: "yellow",
  },
  {
    icon: Trophy,
    stat: "#1",
    label: "Rated by Gartner & Forrester",
    description:
      "Consistently recognized as a leader in endpoint security and extended detection & response.",
    color: "purple",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
  yellow: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
};

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1e]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3"
          >
            Business Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Security outcomes that{" "}
            <span className="gradient-text-blue">move the needle</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const colors = colorMap[b.color];
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="group p-6 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-white/15"
              >
                <div className={`w-11 h-11 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <div className={`text-4xl font-bold ${colors.text} mb-1`}>{b.stat}</div>
                <div className="text-white font-semibold text-sm mb-3">{b.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
