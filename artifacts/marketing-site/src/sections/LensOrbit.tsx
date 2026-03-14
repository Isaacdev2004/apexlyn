import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LensOrbitGlobe from "../illustrations/LensOrbitGlobe";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Real-time threat correlation across all data sources",
  "Automated investigation and root cause analysis",
  "Built-in playbooks for 200+ threat scenarios",
  "Bi-directional integrations with 300+ tools",
  "Single agent, single console — no tool sprawl",
];

export default function LensOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1629] to-[#0a0f1e]" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Globe viz */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <LensOrbitGlobe />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
              Unified Security Fabric
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              One platform.<br />
              <span className="gradient-text-blue">Every threat vector.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              SentinelAI weaves together endpoint, network, cloud, identity,
              and application security into a single mesh. No gaps. No silos.
              Just comprehensive visibility and control.
            </p>

            <ul className="space-y-3.5 mb-10">
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 text-slate-300 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  {b}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-200"
            >
              See full platform →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
