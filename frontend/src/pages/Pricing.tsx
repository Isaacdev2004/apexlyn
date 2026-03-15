import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

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
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <div className="mb-16">
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
              center
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-2xl border bg-white shadow-sm ${
                  plan.featured ? "border-blue-300 ring-2 ring-blue-100" : "border-slate-200"
                }`}
              >
                {plan.featured && (
                  <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
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
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-md font-medium text-sm transition-colors ${
                    plan.featured
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl border border-slate-200 bg-slate-50 text-center"
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
