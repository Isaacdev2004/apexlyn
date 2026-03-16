import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Building2, Cpu } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Layout>
      <section className="section-pad pt-28">
        <div className="container-cf" ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title={
                  <>
                    Get in touch with{" "}
                    <span className="gradient-text-blue">APEXLyn</span>
                  </>
                }
                description="Request a demo, ask about pricing, or reach out for security and compliance inquiries. We respond within one business day."
                inView={inView}
                descriptionClassName="mb-8"
              />
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {[
                  { icon: Building2, text: "Customized for your industry and regulatory requirements" },
                  { icon: Cpu, text: "Architecture review tailored to your existing tech stack" },
                  { icon: Mail, text: "Secure, encrypted communications only." },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.8} />
                    </div>
                    <span className="text-slate-600 text-sm">{text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="card-cf p-7 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
            >
              <h3 className="text-slate-900 font-semibold text-base mb-6">Request a Demo</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1.5">Full Name</label>
                    <input type="text" placeholder="Jane Smith" className="w-full px-3 py-2.5 rounded-md border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-1.5">Company</label>
                    <input type="text" placeholder="Acme Corp" className="w-full px-3 py-2.5 rounded-md border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1.5">Work Email</label>
                  <input type="email" placeholder="jane@company.com" className="w-full px-3 py-2.5 rounded-md border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-slate-600 mb-1.5">Message</label>
                  <textarea placeholder="Tell us about your needs" rows={3} className="w-full px-3 py-2.5 rounded-md border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-cf w-full py-3 bg-primary hover:opacity-90 text-primary-foreground font-medium rounded-md text-sm flex items-center justify-center gap-2 shadow-sm">
                  Send message <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
