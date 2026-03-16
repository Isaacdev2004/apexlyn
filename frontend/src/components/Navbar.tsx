import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { easeSmooth, durationFast } from "@/lib/animations";

const platformsDropdown = [
  { label: "APEXLyn Track Platform", href: "/platforms#track" },
  { label: "APEXLyn Lens Platform", href: "/platforms#lens" },
  { label: "Architecture Overview", href: "/platforms#architecture" },
];

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Trust Center", href: "/trust" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPlatformsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (hoveredNavIndex === null) return;
    const el = navLinksRef.current[hoveredNavIndex];
    if (el) {
      setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [hoveredNavIndex]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: easeSmooth }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-cf">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="/"
            className="flex items-center gap-0 flex-shrink-0 btn-cf"
            whileHover={{ opacity: 0.85 }}
            transition={{ duration: durationFast }}
          >
            <img
              src="/apexlyn-logo.png"
              alt="APEXLyn"
              className="h-14 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setPlatformsOpen((o) => !o)}
                onMouseEnter={() => setPlatformsOpen(true)}
                className="flex items-center gap-1 px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200 link-cf"
              >
                Platforms
                <motion.span
                  animate={{ rotate: platformsOpen ? 180 : 0 }}
                  transition={{ duration: durationFast, ease: easeSmooth }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {platformsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: durationFast, ease: easeSmooth }}
                    className="absolute top-full left-0 pt-1 min-w-[220px]"
                    onMouseLeave={() => setPlatformsOpen(false)}
                  >
                    <div className="rounded-lg border border-slate-200 bg-white shadow-lg py-1">
                      {platformsDropdown.map((item, i) => (
                        <motion.a
                          key={item.label}
                          href={item.href}
                          onClick={() => setPlatformsOpen(false)}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.03, ease: easeSmooth }}
                          className="link-cf block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-150"
                        >
                          {item.label}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative flex items-center">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  ref={(el) => { navLinksRef.current[i] = el; }}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  onMouseEnter={() => setHoveredNavIndex(i)}
                  onMouseLeave={() => setHoveredNavIndex(null)}
                  className="link-cf px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  opacity: hoveredNavIndex !== null ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute bottom-0 h-0.5 bg-primary rounded-full pointer-events-none"
              />
            </div>
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/contact"
              className="link-cf text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Sign in
            </a>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: durationFast }}
              className="btn-cf px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md shadow-sm hover:opacity-90"
            >
              Request Demo
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-600 hover:text-slate-900 transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: easeSmooth }}
            className="md:hidden bg-white border-b border-slate-200 shadow-sm overflow-hidden"
          >
            <div className="container-cf py-4 flex flex-col gap-0">
              <div className="py-2 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Platforms</span>
                {platformsDropdown.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="link-cf block py-2.5 px-2 text-slate-700 hover:text-slate-900 text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="link-cf py-2.5 px-2 text-slate-600 hover:text-slate-900 text-sm border-b border-slate-100 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <a href="/contact" className="link-cf text-sm text-slate-600 py-2 px-2">Sign in</a>
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-cf py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md text-center"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
