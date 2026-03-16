const footerLinks = {
  Platforms: [
    { label: "APEXLyn Track", href: "/platforms#track" },
    { label: "APEXLyn Lens", href: "/platforms#lens" },
    { label: "Architecture", href: "/platforms#architecture" },
    { label: "Pricing", href: "/pricing" },
  ],
  Solutions: [
    { label: "Healthcare", href: "/solutions" },
    { label: "Legal & Compliance", href: "/solutions" },
    { label: "Financial Services", href: "/solutions" },
    { label: "Insurance", href: "/solutions" },
    { label: "Government", href: "/solutions" },
  ],
  Resources: [
    { label: "Documentation", href: "/resources" },
    { label: "Whitepapers", href: "/resources" },
    { label: "Security Research", href: "/resources" },
    { label: "API Reference", href: "/resources" },
    { label: "Status Page", href: "/resources" },
  ],
  Company: [
    { label: "About APEXLyn", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Careers", href: "/company" },
    { label: "Partners", href: "/company" },
    { label: "Contact", href: "/contact" },
    { label: "Press", href: "/company" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200">
      <div className="container-cf py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <a href="/" className="block mb-5">
              <img
                src="/apexlyn-logo.png"
                alt="APEXLyn"
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-xs">
              Enterprise cybersecurity for the modern threat landscape.
              Compliance intelligence and AI-powered data loss prevention,
              built on AWS and delivered globally.
            </p>
            <div className="flex flex-col gap-1 text-xs text-slate-500">
              <span>🌏 Deployed in AWS Sydney (ap-southeast-2)</span>
              <span>🔒 ISO 27001 · SOC 2 Type II · GDPR</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-slate-900 text-xs font-semibold tracking-wide uppercase mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="link-cf text-slate-600 hover:text-slate-900 text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} APEXLyn Pty Ltd. All rights reserved. ABN XX XXX XXX XXX
          </p>
          <div className="flex gap-5">
            {[
              { label: "Privacy Policy", href: "/company" },
              { label: "Terms of Service", href: "/company" },
              { label: "Trust Center", href: "/trust" },
              { label: "Cookie Policy", href: "/company" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="link-cf text-slate-500 hover:text-slate-700 text-xs transition-colors duration-200">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
