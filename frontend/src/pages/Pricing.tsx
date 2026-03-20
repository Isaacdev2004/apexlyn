import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import PricingLineArt from "@/illustrations/PricingLineArt";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { easeSmooth } from "@/lib/animations";

const plans = [
  {
    name: "One Evidence",
    description: "Compliance intelligence and evidence automation",
    highlights: [
      "Unlimited frameworks (ISO 27001, SOC 2, GDPR, HIPAA, etc.)",
      "50+ evidence connectors",
      "Auditor-ready reports and dashboards",
      "Dedicated success manager",
    ],
    cta: "Request a quote",
  },
  {
    name: "AI DLP",
    description: "Data loss prevention and classification",
    highlights: [
      "200+ file types and content inspection",
      "Cloud, endpoint, email coverage",
      "Policy engine and incident response",
      "Custom classification models",
    ],
    cta: "Request a quote",
  },
  {
    name: "Platform Bundle",
    description: "One Evidence + AI DLP",
    highlights: [
      "Everything in both platforms",
      "Unified compliance and DLP posture",
      "Volume and term discounts",
      "Preferred support and SLA",
    ],
    cta: "Contact sales",
    featured: true,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Layout>
      {/* Intro + illustration */}
      <section className="section-pad pt-28 pb-12 bg-white">
        <div className="container-cf" ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                eyebrow="Pricing"
                title={
                  <>
                    Enterprise pricing.{" "}
                    <span className="gradient-text-blue">Tailored to your scale.</span>
                  </>
                }
                description="Pricing is based on users, data sources, and scope. We'll work with you to design a plan that fits your compliance and DLP requirements."
                inView={inView}
              />
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="motif-panel">
                <PricingLineArt className="w-44 h-44 lg:w-52 lg:h-52" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare strip: distinct layout */}
      <section className="section-pad section-grid bg-white">
        <div className="container-cf">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeSmooth }}
            className="text-slate-600 text-sm font-medium mb-6 text-center"
          >
            Compare at a glance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: easeSmooth }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
            {["One Evidence", "AI DLP", "Platform Bundle"].map((name, i) => (
              <div key={name} className="p-4 rounded-xl border border-slate-200 bg-white/80 text-center">
                <div className="text-slate-900 font-semibold text-sm mb-2">{name}</div>
                <div className="text-slate-500 text-xs">
                  {i === 0 && "Frameworks · Connectors · Audit"}
                  {i === 1 && "Classification · Policy · Response"}
                  {i === 2 && "Unified · Volume discounts · SLA"}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-pad section-alt">
        <div className="container-cf">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeSmooth }}
                className={`card-cf p-8 rounded-2xl border bg-white shadow-sm ${
                  plan.featured ? "border-primary/40 ring-2 ring-primary/10" : "border-slate-200"
                }`}
              >
                {plan.featured && (
                  <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                    Recommended
                  </span>
                )}
                <h3 className="text-slate-900 font-bold text-xl mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-slate-700 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className={`btn-cf inline-flex items-center justify-center gap-2 w-full py-3 rounded-md font-medium text-sm ${
                    plan.featured
                      ? "bg-primary hover:opacity-90 text-primary-foreground shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5, ease: easeSmooth }}
            className="card-cf p-8 rounded-2xl border border-slate-200 bg-white text-center shadow-sm"
          >
            <p className="text-slate-700 text-sm mb-2">
              All plans include: Data sovereignty (AWS Sydney or your region), SSO, encryption, and 24/7 support options.
            </p>
            <p className="text-slate-600 text-xs">
              No long-term lock-in. Volume and multi-year discounts available.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
