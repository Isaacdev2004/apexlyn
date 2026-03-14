import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "One Evidence transformed our SOC 2 audit process. What used to take our team three months to prepare now takes under two weeks. The evidence mapping is genuinely impressive.",
    name: "Chief Compliance Officer",
    title: "ASX-listed Financial Services Firm",
    initials: "CCO",
    color: "blue",
  },
  {
    quote:
      "The AI DLP platform caught a credential-stuffing attack that was slowly exfiltrating customer records. Our existing tools saw nothing. APEXLyn flagged it within minutes.",
    name: "Head of Information Security",
    title: "National Healthcare Provider",
    initials: "CISO",
    color: "orange",
  },
  {
    quote:
      "Data sovereignty was a hard requirement for us given Australian privacy law. APEXLyn's AWS Sydney deployment and transparent audit trail gave us exactly the assurance we needed.",
    name: "VP Technology & Risk",
    title: "Legal Technology Platform",
    initials: "VPT",
    color: "green",
  },
];

const colorMap: Record<string, { ring: string; bg: string; text: string; accent: string }> = {
  blue: { ring: "ring-blue-500/25", bg: "bg-blue-700", text: "text-blue-400", accent: "border-blue-500/15" },
  orange: { ring: "ring-orange-500/25", bg: "bg-orange-700", text: "text-orange-400", accent: "border-orange-500/15" },
  green: { ring: "ring-green-500/25", bg: "bg-green-700", text: "text-green-400", accent: "border-green-600/15" },
};

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a] to-[#0a1120]" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="max-w-2xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3"
          >
            Client Outcomes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl font-bold text-white leading-tight"
          >
            Outcomes from organizations{" "}
            <span className="gradient-text-blue">like yours</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const colors = colorMap[t.color];
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`p-7 rounded-xl border ${colors.accent} bg-white/2 transition-all duration-300 hover:bg-white/3 flex flex-col gap-5`}
              >
                <Quote className={`w-5 h-5 ${colors.text} opacity-50`} />
                <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/7">
                  <div className={`w-9 h-9 rounded-full ${colors.bg} ring-2 ${colors.ring} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
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
      </div>
    </section>
  );
}
