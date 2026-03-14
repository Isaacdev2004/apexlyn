import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1629] to-[#0a0f1e]" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="p-10 sm:p-16 rounded-3xl border border-white/10 bg-white/4 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-6"
            >
              <Sparkles className="w-3 h-3" />
              No credit card required · 14-day free trial
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            >
              Start protecting your<br />
              <span className="gradient-text">organization today</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg mb-10 max-w-lg mx-auto"
            >
              Deploy in under 30 minutes. See results immediately. Join thousands
              of security teams who sleep better with SentinelAI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-200 text-base"
              >
                Start free trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 hover:border-white/25 text-slate-300 hover:text-white font-semibold rounded-xl bg-white/5 hover:bg-white/8 transition-all duration-200 text-base"
              >
                Talk to sales
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-slate-600 text-sm mt-6"
            >
              SOC 2 Type II · ISO 27001 · GDPR Compliant · FedRAMP In Progress
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
