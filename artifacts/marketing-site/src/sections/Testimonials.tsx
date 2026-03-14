import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SentinelAI caught a sophisticated supply chain attack that our previous tools missed entirely. The AI-powered behavioral analysis is genuinely years ahead of anything else on the market.",
    name: "Sarah Chen",
    title: "CISO, Global Financial Services Firm",
    initials: "SC",
    color: "blue",
  },
  {
    quote:
      "We went from 6-hour mean time to respond down to 8 minutes. That difference isn't incremental—it's the difference between a contained incident and a front-page story.",
    name: "Marcus Rodriguez",
    title: "VP Security Operations, Fortune 500 Retailer",
    initials: "MR",
    color: "green",
  },
  {
    quote:
      "The single-agent approach finally gave us the unified visibility we needed. We decommissioned four separate tools and actually improved our security posture.",
    name: "Priya Patel",
    title: "Director of Infrastructure Security, Healthcare SaaS",
    initials: "PP",
    color: "purple",
  },
];

const colorMap: Record<string, { ring: string; bg: string; text: string }> = {
  blue: { ring: "ring-blue-500/30", bg: "bg-blue-600", text: "text-blue-400" },
  green: { ring: "ring-green-500/30", bg: "bg-green-600", text: "text-green-400" },
  purple: { ring: "ring-purple-500/30", bg: "bg-purple-600", text: "text-purple-400" },
};

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] to-[#0d1629]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3"
          >
            Customer Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Trusted by the world's most{" "}
            <span className="gradient-text-blue">security-conscious teams</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const colors = colorMap[t.color];
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group p-7 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-white/15 flex flex-col gap-5"
              >
                <Quote className={`w-6 h-6 ${colors.text} opacity-60`} />
                <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                  <div className={`w-9 h-9 rounded-full ${colors.bg} ring-2 ${colors.ring} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.title}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-wrap justify-center items-center gap-8"
        >
          {["Acme Corp", "TechGiant", "SecureBank", "MedSys", "CloudCo", "RetailMax"].map((name) => (
            <div key={name} className="text-slate-600 text-sm font-semibold tracking-wide uppercase opacity-60 hover:opacity-100 transition-opacity cursor-default">
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
