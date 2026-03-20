import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const trustBadges = ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "Data Sovereignty"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        animate={{ x: [-10, 14, -10], y: [0, 10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"
        animate={{ x: [12, -10, 12], y: [0, -10, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative container-cf py-24 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp(0, 16)}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-7 tracking-wide"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Enterprise Cybersecurity Platform
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          </motion.div>

          <motion.h1
            variants={fadeUp(0.08, 20)}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.08] tracking-tight mb-6 text-slate-900"
          >
            Protect your data.
            <br />
            Prove your compliance.
            <br />
            <span className="gradient-text-brand">Stay ahead of threats.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.16, 20)}
            initial="hidden"
            animate="show"
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            APEXLyn delivers enterprise-grade cybersecurity through two powerful platforms —{" "}
            <span className="text-slate-800 font-medium">One Evidence</span> for compliance intelligence
            and <span className="text-slate-800 font-medium">AI DLP</span> for data loss prevention.
            Built for organizations that can&apos;t afford to fail.
          </motion.p>

          <motion.div
            variants={fadeUp(0.24, 20)}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-cf group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-md shadow-sm hover:opacity-90 text-sm"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </motion.a>
            <motion.a
              href="#platforms"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-cf group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-medium rounded-md bg-white hover:bg-slate-50 text-sm"
            >
              Explore Platforms
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp(0.4, 16)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center items-center gap-3"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 bg-slate-50/80 text-xs text-slate-600"
              >
                <ShieldCheck className="w-3 h-3 text-green-600" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto"
        >
          <a
            href="/platforms#track"
            className="card-cf group p-6 rounded-xl border border-slate-200 bg-slate-50/80 text-left block"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg font-bold">OE</span>
              </div>
              <span className="text-xs text-primary border border-primary/20 rounded px-2 py-0.5 font-medium">Track</span>
            </div>
            <h3 className="text-slate-900 font-semibold text-base mb-2">One Evidence</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Centralized compliance intelligence. Aggregate, verify, and present security evidence across all your frameworks from one unified platform.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-primary text-xs font-medium group-hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="w-3 h-3" />
            </div>
          </a>

          <a
            href="/platforms#lens"
            className="card-cf group p-6 rounded-xl border border-slate-200 bg-slate-50/80 text-left block"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-600 text-sm font-bold">DLP</span>
              </div>
              <span className="text-xs text-cyan-600 border border-cyan-500/20 rounded px-2 py-0.5 font-medium">Lens</span>
            </div>
            <h3 className="text-slate-900 font-semibold text-base mb-2">AI DLP</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              AI-powered data loss prevention. Detect, classify, and prevent sensitive data exfiltration across cloud, endpoint, and network in real time.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-cyan-600 text-xs font-medium group-hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="w-3 h-3" />
            </div>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
