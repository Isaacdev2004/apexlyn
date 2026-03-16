import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  scrollReveal,
  scrollRevealTransition,
  scrollRevealStagger,
  scrollRevealStaggerItem,
  REVEAL_MARGIN,
} from "@/lib/animations";

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
  margin = REVEAL_MARGIN,
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

/** Stagger grid: same cadence sitewide. Children get scrollRevealStaggerItem. */
export function ScrollRevealStagger({
  children,
  className = "",
  once = true,
  margin = REVEAL_MARGIN,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  margin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once, margin });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={scrollRevealStagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItemVariants = scrollRevealStaggerItem;
