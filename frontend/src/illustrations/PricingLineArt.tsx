import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Pricing: three tiers with base line and ascending steps. Primary only. */
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
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, ease }}
    >
      {/* Base line */}
      <motion.line
        x1="35"
        y1="170"
        x2="165"
        y2="170"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity={0.35}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.4, ease }}
      />
      {/* Tier blocks */}
      {tiers.map((t, i) => (
        <motion.rect
          key={i}
          x={t.x}
          y={t.y}
          width={t.w}
          height={t.h}
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity={0.5 + i * 0.2}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.5 + i * 0.2 } : {}}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease }}
        />
      ))}
      {/* Cap/arrow on top tier */}
      <motion.path
        d="M142 50 L158 50 L150 38 L142 50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity={0.7}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.7 } : {}}
        transition={{ duration: 0.3, delay: 0.5, ease }}
      />
    </motion.svg>
  );
}
