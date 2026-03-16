import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, FileText, Code, Activity, Search } from "lucide-react";
import ResourcesLineArt from "@/illustrations/ResourcesLineArt";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { easeSmooth } from "@/lib/animations";

const categories = ["All", "Documentation", "Research", "API", "Operations"] as const;

const resources = [
  {
    icon: BookOpen,
    category: "Documentation" as const,
    title: "Documentation",
    description: "Setup guides, API reference, and best practices for One Evidence and AI DLP.",
    link: "#",
  },
  {
    icon: FileText,
    category: "Documentation" as const,
    title: "Whitepapers",
    description: "Deep dives on compliance automation, DLP architecture, and regulatory mapping.",
    link: "#",
  },
  {
    icon: Search,
    category: "Research" as const,
    title: "Security Research",
    description: "Threat intelligence, vulnerability disclosures, and security advisories.",
    link: "#",
  },
  {
    icon: Code,
    category: "API" as const,
    title: "API Reference",
    description: "REST and SDK documentation for integration and automation.",
    link: "#",
  },
  {
    icon: Activity,
    category: "Operations" as const,
    title: "Status Page",
    description: "Real-time service health, incidents, and scheduled maintenance.",
    link: "#",
  },
];

export default function Resources() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const filtered = activeCategory === "All" ? resources : resources.filter((r) => r.category === activeCategory);

  return (
    <Layout>
      {/* Intro + illustration */}
      <section className="section-pad pt-28 pb-12 bg-white">
        <div className="container-cf" ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
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
              />
            </div>
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: easeSmooth }}
            >
              <ResourcesLineArt className="w-48 h-48 lg:w-56 lg:h-56" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resource hub: category tabs + cards */}
      <section className="section-pad section-alt">
        <div className="container-cf">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeSmooth }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`btn-cf px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <motion.a
                  key={resource.title}
                  href={resource.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: easeSmooth }}
                  className="card-cf link-cf block p-6 rounded-xl border border-slate-200 bg-white shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{resource.description}</p>
                  <span className="inline-block mt-3 text-primary text-sm font-medium">
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
