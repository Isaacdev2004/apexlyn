const footerLinks = {
  Platforms: ["One Evidence", "AI DLP", "Track", "Lens", "Pricing"],
  Solutions: ["Healthcare", "Legal & Compliance", "Financial Services", "Insurance", "Government"],
  Resources: ["Documentation", "Whitepapers", "Security Research", "API Reference", "Status Page"],
  Company: ["About APEXLyn", "Careers", "Partners", "Contact", "Press"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050a14] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Brand col */}
          <div className="md:col-span-2">
            <img
              src="/apexlyn-logo.png"
              alt="APEXLyn"
              className="h-7 w-auto object-contain mb-5 opacity-90"
            />
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              Enterprise cybersecurity for the modern threat landscape.
              Compliance intelligence and AI-powered data loss prevention,
              built on AWS and delivered globally.
            </p>
            <div className="flex flex-col gap-1 text-xs text-slate-600">
              <span>🌏 Deployed in AWS Sydney (ap-southeast-2)</span>
              <span>🔒 ISO 27001 · SOC 2 Type II · GDPR</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs font-semibold tracking-wide uppercase mb-4">{category}</h4>
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

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} APEXLyn Pty Ltd. All rights reserved. ABN XX XXX XXX XXX
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Trust Center", "Cookie Policy"].map((link) => (
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
