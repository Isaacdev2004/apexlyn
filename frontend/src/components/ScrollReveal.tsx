import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollReveal, scrollRevealTransition } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  margin?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  margin = "-60px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once, margin });

  return (
    <motion.div
      ref={ref}
      initial={scrollReveal.hidden}
      animate={inView ? { ...scrollReveal.visible, transition: { ...scrollRevealTransition, delay } } : scrollReveal.hidden}
      className={className}
    >
      {children}
    </motion.div>
  );
}
