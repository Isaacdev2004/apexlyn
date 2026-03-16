import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Contact: envelope + subtle signal lines. Calm, primary only. */
export default function ContactLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary ${className}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, ease }}
    >
      {/* Envelope body */}
      <motion.path
        d="M40 58 L100 98 L160 58 L160 142 L40 142 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.55, ease }}
      />
      <motion.path
        d="M40 58 L100 98 L160 58"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.35, delay: 0.2, ease }}
      />
      {/* Signal arcs (communication) */}
      <motion.path
        d="M30 175 Q100 158 170 175"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity={0.4}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.35, ease }}
      />
      <motion.path
        d="M45 188 Q100 174 155 188"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity={0.25}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.45, ease }}
      />
    </motion.svg>
  );
}
