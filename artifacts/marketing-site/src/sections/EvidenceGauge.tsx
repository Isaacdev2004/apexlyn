import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Gauge from "../illustrations/Gauge";

const metrics = [
  { value: 87, label: "Threat Detection Score", description: "Industry-leading accuracy across all threat vectors" },
  { value: 96, label: "False Positive Reduction", description: "AI precision cuts noise so analysts focus on real threats" },
  { value: 99, label: "SLA Compliance", description: "Consistent uptime and response guarantees, contractually backed" },
];

const awards = [
  { name: "Gartner Leader", year: "2024" },
  { name: "Forrester Wave™", year: "2024" },
  { name: "SC Awards", year: "Best EDR" },
  { name: "NSS Labs", year: "Recommended" },
];

export default function EvidenceGauge() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section id="gauge" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] to-[#0d1629]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3"
          >
            Proven Performance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Numbers that tell the story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto"
          >
            Independent testing and real-world deployments validate our performance claims.
            See how we score against the toughest benchmarks.
          </motion.p>
        </div>

        {/* Gauges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center p-8 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm"
            >
              <Gauge value={metric.value} label={metric.label} />
              <p className="text-slate-500 text-sm text-center mt-3 max-w-xs">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Award badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {awards.map((award) => (
            <div
              key={award.name}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/4"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <div>
                <div className="text-white text-sm font-semibold">{award.name}</div>
                <div className="text-slate-500 text-xs">{award.year}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
