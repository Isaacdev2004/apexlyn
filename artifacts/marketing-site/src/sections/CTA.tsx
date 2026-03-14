import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Building2, Cpu } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080d1a]" />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3"
            >
              Get Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
            >
              Ready to secure your<br />
              <span className="gradient-text-brand">organization's future?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.16 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              See how APEXLyn's platforms fit your environment in a personalized
              30-minute demo. Our enterprise architects will assess your current security state
              and show you exactly where we can add value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.24 }}
              className="space-y-4 mb-8"
            >
              {[
                { icon: Building2, text: "Customized for your industry and regulatory requirements" },
                { icon: Cpu, text: "Architecture review tailored to your existing tech stack" },
                { icon: Mail, text: "No spam. Secure, encrypted communications only." },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-blue-400" strokeWidth={1.8} />
                  </div>
                  <span className="text-slate-400 text-sm">{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
              className="text-slate-600 text-xs"
            >
              APEXLyn · Built on AWS · Sydney, Australia · SOC 2 Type II · ISO 27001
            </motion.p>
          </div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="p-7 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm"
          >
            <h3 className="text-white font-semibold text-base mb-6">Request a Demo</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full px-3 py-2.5 rounded-md border border-white/10 bg-white/5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className="w-full px-3 py-2.5 rounded-md border border-white/10 bg-white/5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Work Email</label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full px-3 py-2.5 rounded-md border border-white/10 bg-white/5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <p className="text-xs text-slate-600 mt-1">Corporate emails only — we prioritize verified organizations.</p>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Industry</label>
                <select className="w-full px-3 py-2.5 rounded-md border border-white/10 bg-[#0d1629] text-slate-300 text-sm focus:outline-none focus:border-blue-500/50 transition-colors">
                  <option value="">Select industry</option>
                  <option>Healthcare</option>
                  <option>Legal & Compliance</option>
                  <option>Financial Services</option>
                  <option>Insurance</option>
                  <option>Government</option>
                  <option>Technology</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Platform of Interest</label>
                <select className="w-full px-3 py-2.5 rounded-md border border-white/10 bg-[#0d1629] text-slate-300 text-sm focus:outline-none focus:border-blue-500/50 transition-colors">
                  <option value="">Select platform</option>
                  <option>One Evidence</option>
                  <option>AI DLP</option>
                  <option>Both platforms</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md transition-all duration-200 text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
