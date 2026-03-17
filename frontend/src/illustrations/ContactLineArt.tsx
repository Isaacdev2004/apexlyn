import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const STROKE = 2;
const LOOP_DURATION = 4;

/** Contact: envelope + signal arcs. Locked: 2px, round, calm loop, primary only. */
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
      animate={inView ? { opacity: 1, transition: { duration: 0.5, ease } } : {}}
    >
      <motion.g
        animate={
          inView
            ? {
                opacity: [0.97, 1, 0.97],
                transition: { duration: LOOP_DURATION, repeat: Infinity, ease: "easeInOut" },
              }
            : {}
        }
      >
        <motion.path
          d="M40 58 L100 98 L160 58 L160 142 L40 142 Z"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.55, ease }}
        />
        <motion.path
          d="M40 58 L100 98 L160 58"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.2, ease }}
        />
        <motion.path
          d="M30 175 Q100 158 170 175"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.4}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease }}
        />
        <motion.path
          d="M45 188 Q100 174 155 188"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.25}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45, ease }}
        />
      </motion.g>
    </motion.svg>
  );
}
