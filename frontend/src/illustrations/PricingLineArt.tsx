import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const STROKE = 2;
const LOOP_DURATION = 4;

/** Pricing: tiered bars + guide rail motif (Cloudflare-style line system). */
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
        <motion.rect
          x="24"
          y="24"
          width="152"
          height="152"
          rx="12"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.16}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.55, ease }}
        />

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

        <motion.polyline
          points="58,120 100,85 142,50"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.52}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.18, ease }}
        />

        {[{ x: 58, y: 120 }, { x: 100, y: 85 }, { x: 142, y: 50 }].map((p, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={p.x}
            cy={p.y}
            r="3"
            stroke="currentColor"
            strokeWidth={STROKE}
            fill="none"
            opacity={0.74}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.74 } : {}}
            transition={{ duration: 0.32, delay: 0.34 + i * 0.08, ease }}
          />
        ))}

        {[58, 100, 142].map((x, i) => (
          <motion.line
            key={`guide-${i}`}
            x1={x}
            y1="170"
            x2={x}
            y2={i === 0 ? 120 : i === 1 ? 85 : 50}
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            opacity={0.2}
            strokeDasharray="4 6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.2 } : {}}
            transition={{ duration: 0.35, delay: 0.26 + i * 0.08, ease }}
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
