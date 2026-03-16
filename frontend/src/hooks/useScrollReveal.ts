import { useRef } from "react";
import { useInView } from "framer-motion";
import { REVEAL_MARGIN } from "@/lib/animations";

/**
 * Single scroll-reveal system: same margin, once, for sections.
 * Returns { ref, inView } so sections use one cadence.
 */
export function useScrollReveal(opts?: { once?: boolean; margin?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, {
    once: opts?.once ?? true,
    margin: opts?.margin ?? REVEAL_MARGIN,
  });
  return { ref, inView };
}
