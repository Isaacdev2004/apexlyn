import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const trustBadges = ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "Data Sovereignty"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-blue-300/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow badge */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-medium mb-7 tracking-wide"
          >
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            Enterprise Cybersecurity Platform
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.08] tracking-tight mb-6"
          >
            <span className="text-slate-900">Protect your data.</span>
            <br />
            <span className="text-slate-900">Prove your compliance.</span>
            <br />
            <span className="gradient-text-brand">Stay ahead of threats.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="show"
            className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            APEXLyn delivers enterprise-grade cybersecurity through two powerful platforms —{" "}
            <span className="text-slate-800 font-medium">One Evidence</span> for compliance intelligence
            and{" "}
            <span className="text-slate-800 font-medium">AI DLP</span> for data loss prevention.
            Built for organizations that can't afford to fail.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.3)] text-sm"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </motion.a>

            <motion.a
              href="#platforms"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-medium rounded-md bg-slate-50 hover:bg-slate-100 transition-all duration-200 text-sm"
            >
              Explore Platforms
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp(0.45)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center items-center gap-3"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 bg-slate-50 text-xs text-slate-600"
              >
                <ShieldCheck className="w-3 h-3 text-green-600" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Platform cards preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto"
        >
          <div className="group p-6 rounded-xl border border-slate-200 bg-slate-50/80 hover:border-blue-300 transition-all duration-300 text-left">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center">
                <span className="text-blue-600 text-lg font-bold">OE</span>
              </div>
              <span className="text-xs text-blue-600 border border-blue-200 rounded px-2 py-0.5 font-medium">Platform 01</span>
            </div>
            <h3 className="text-slate-900 font-semibold text-base mb-2">One Evidence</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Centralized compliance intelligence. Aggregate, verify, and present security evidence across all your frameworks from one unified platform.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-blue-600 text-xs font-medium group-hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          <div className="group p-6 rounded-xl border border-slate-200 bg-slate-50/80 hover:border-orange-300 transition-all duration-300 text-left">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center">
                <span className="text-orange-600 text-sm font-bold">DLP</span>
              </div>
              <span className="text-xs text-orange-600 border border-orange-200 rounded px-2 py-0.5 font-medium">Platform 02</span>
            </div>
            <h3 className="text-slate-900 font-semibold text-base mb-2">AI DLP</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              AI-powered data loss prevention. Detect, classify, and prevent sensitive data exfiltration across cloud, endpoint, and network in real time.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-orange-600 text-xs font-medium group-hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
