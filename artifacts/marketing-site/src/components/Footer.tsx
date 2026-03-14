import { Shield } from "lucide-react";

const footerLinks = {
  Product: ["Platform Overview", "Endpoint Security", "Cloud Security", "Identity Protection", "Threat Intelligence", "SIEM"],
  Resources: ["Documentation", "API Reference", "Blog", "Case Studies", "Security Research", "Status Page"],
  Company: ["About", "Careers", "Press", "Partners", "Contact", "Investors"],
};

const socialLinks = [
  { name: "X / Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#060c18] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Shield className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Sentinel<span className="text-blue-400">AI</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise-grade AI-powered cybersecurity. Protecting organizations
              from threats that matter, at the speed of business.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="text-slate-600 hover:text-slate-300 transition-colors text-xs"
                  aria-label={s.name}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-150 underline-animate"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} SentinelAI, Inc. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((link) => (
              <a key={link} href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
