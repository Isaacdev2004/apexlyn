import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronRight } from "lucide-react";
import LensOrbitGlobe from "../illustrations/LensOrbitGlobe";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: "99.9%", label: "Detection Rate" },
  { value: "< 1ms", label: "Response Time" },
  { value: "500M+", label: "Events/day" },
  { value: "150+", label: "Countries" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1629] to-[#0a0f1e]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Trusted by 5,000+ security teams worldwide
              <ChevronRight className="w-3 h-3" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
            >
              <span className="text-white">Stop threats</span>
              <br />
              <span className="gradient-text">before they start</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg"
            >
              SentinelAI delivers AI-powered threat detection and response at enterprise scale.
              Protect every endpoint, cloud workload, and identity across your entire organization.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4 mb-14"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.04, x: 0 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-200"
              >
                Start free trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="#features"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium rounded-lg bg-white/5 hover:bg-white/8 transition-all duration-200"
              >
                <Play className="w-4 h-4 text-blue-400" />
                Watch demo
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Globe illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center"
          >
            <LensOrbitGlobe />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1e] to-transparent pointer-events-none" />
    </section>
  );
}
