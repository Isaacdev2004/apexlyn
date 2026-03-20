import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const STROKE = 2;
const LOOP_DURATION = 4;

/** Contact: comms panel motif (envelope + signal bus). */
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
          d="M32 42 L168 42 L168 156 L32 156 Z"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.16}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.5, ease }}
        />
        <motion.path
          d="M48 64 L100 100 L152 64 L152 136 L48 136 Z"
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
          d="M48 64 L100 100 L152 64"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.2, ease }}
        />

        <motion.line
          x1="28"
          y1="170"
          x2="172"
          y2="170"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          opacity={0.3}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, ease }}
        />

        <motion.path
          d="M30 182 Q100 164 170 182"
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
          d="M44 194 Q100 180 156 194"
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

        {[60, 100, 140].map((x, i) => (
          <motion.circle
            key={`bus-dot-${i}`}
            cx={x}
            cy="170"
            r="3"
            stroke="currentColor"
            strokeWidth={STROKE}
            fill="none"
            opacity={0.62}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.62 } : {}}
            transition={{ duration: 0.3, delay: 0.36 + i * 0.05, ease }}
          />
        ))}
      </motion.g>
    </motion.svg>
  );
}
