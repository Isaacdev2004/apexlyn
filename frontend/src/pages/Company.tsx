import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Users, Handshake, Newspaper } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const companyLinks = [
  { icon: Users, title: "About APEXLyn", description: "Mission, team, and our approach to enterprise security and compliance." },
  { icon: Users, title: "Careers", description: "Join us. We're hiring across engineering, product, and customer success." },
  { icon: Handshake, title: "Partners", description: "Technology and channel partners. Integrations and go-to-market." },
  { icon: Mail, title: "Contact", description: "Sales, support, and security inquiries. We respond within one business day." },
  { icon: Newspaper, title: "Press", description: "News, press releases, and media kit." },
];

export default function Company() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Layout>
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Company"
              title={
                <>
                  Building the future of{" "}
                  <span className="gradient-text-blue">enterprise security</span>
                </>
              }
              description="APEXLyn is headquartered in Sydney, Australia. We serve regulated organizations globally with compliance intelligence and AI-powered data loss prevention."
              inView={inView}
              center
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {companyLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-cf p-6 rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  <a href={item.title === "Contact" ? "/#contact" : "#"} className="text-blue-600 text-sm font-medium hover:underline">
                    Learn more →
                  </a>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <MapPin className="w-6 h-6 text-slate-500 flex-shrink-0" />
            <div>
              <h3 className="text-slate-900 font-semibold mb-1">APEXLyn Pty Ltd</h3>
              <p className="text-slate-600 text-sm">Sydney, Australia</p>
              <p className="text-slate-500 text-xs mt-2">Built on AWS · Deployed globally · SOC 2 Type II · ISO 27001</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
