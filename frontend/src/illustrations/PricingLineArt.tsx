import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const STROKE = 2;
const LOOP_DURATION = 4;

/** Pricing: three tiers + base line. Locked: 2px, round, calm loop, primary only. */
export default function PricingLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });

  const tiers = [
    { x: 40, y: 120, w: 36, h: 50 },
    { x: 82, y: 85, w: 36, h: 85 },
    { x: 124, y: 50, w: 36, h: 120 },
  ];

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
        <motion.line
          x1="35"
          y1="170"
          x2="165"
          y2="170"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          opacity={0.35}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.4, ease }}
        />
        {tiers.map((t, i) => (
          <motion.rect
            key={i}
            x={t.x}
            y={t.y}
            width={t.w}
            height={t.h}
            rx="4"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={0.5 + i * 0.2}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.5 + i * 0.2 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease }}
          />
        ))}
        <motion.path
          d="M142 50 L158 50 L150 38 L142 50"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.7}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.7 } : {}}
          transition={{ duration: 0.3, delay: 0.5, ease }}
        />
      </motion.g>
    </motion.svg>
  );
}
