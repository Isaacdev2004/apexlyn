import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, FileText, Code, Activity, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const resources = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Setup guides, API reference, and best practices for One Evidence and AI DLP.",
    link: "#",
  },
  {
    icon: FileText,
    title: "Whitepapers",
    description: "Deep dives on compliance automation, DLP architecture, and regulatory mapping.",
    link: "#",
  },
  {
    icon: Search,
    title: "Security Research",
    description: "Threat intelligence, vulnerability disclosures, and security advisories.",
    link: "#",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "REST and SDK documentation for integration and automation.",
    link: "#",
  },
  {
    icon: Activity,
    title: "Status Page",
    description: "Real-time service health, incidents, and scheduled maintenance.",
    link: "#",
  },
];

export default function Resources() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Layout>
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Resources"
              title={
                <>
                  Documentation, research, and{" "}
                  <span className="gradient-text-blue">developer tools</span>
                </>
              }
              description="Everything you need to integrate, evaluate, and operate APEXLyn's platforms."
              inView={inView}
              center
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <motion.a
                  key={resource.title}
                  href={resource.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="block p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{resource.description}</p>
                  <span className="inline-block mt-3 text-blue-600 text-sm font-medium group-hover:underline">
                    Learn more →
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
