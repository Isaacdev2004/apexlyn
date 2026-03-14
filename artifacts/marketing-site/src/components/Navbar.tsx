import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Evidence", href: "#gauge" },
  { label: "Pricing", href: "#cta" },
  { label: "Docs", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-200">
              <Shield className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              Sentinel<span className="text-blue-400">AI</span>
            </span>
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 underline-animate"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Sign in
            </a>
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Get started free
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
                <a href="#" className="text-sm text-slate-400">Sign in</a>
                <a
                  href="#cta"
                  className="py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg text-center"
                >
                  Get started free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
