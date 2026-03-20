import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const STROKE = 2;
const LOOP_DURATION = 4;

/** Trust Center: shield core + control rails (Cloudflare-style trust motif). */
export default function TrustCenterLineArt({ className = "" }: { className?: string }) {
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
      animate={
        inView
          ? {
              opacity: 1,
              transition: { duration: 0.5, ease },
            }
          : {}
      }
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
          x="28"
          y="24"
          width="144"
          height="152"
          rx="12"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.2}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.6, ease }}
        />

        <motion.rect
          x="44"
          y="40"
          width="112"
          height="120"
          rx="10"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.18}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.05, ease }}
        />

        <motion.path
          d="M100 52 L150 70 L150 102 Q150 136 100 160 Q50 136 50 102 L50 70 Z"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        />

        <motion.circle
          cx="100"
          cy="100"
          r="14"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.42}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.42 } : {}}
          transition={{ duration: 0.35, delay: 0.2, ease }}
        />

        <motion.path
          d="M76 100 L90 114 L122 82"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.4, ease }}
        />
        <motion.path
          d="M76 120 L90 134 L122 102"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.85}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.5, ease }}
        />

        {[64, 136].map((x, i) => (
          <motion.g key={`rail-${i}`}>
            <motion.line
              x1={x}
              y1="78"
              x2={x}
              y2="136"
              stroke="currentColor"
              strokeWidth={STROKE}
              strokeLinecap="round"
              opacity={0.22}
              strokeDasharray="5 6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.22 } : {}}
              transition={{ duration: 0.3, delay: 0.28 + i * 0.08, ease }}
            />
            <motion.circle
              cx={x}
              cy="78"
              r="3"
              stroke="currentColor"
              strokeWidth={STROKE}
              fill="none"
              opacity={0.45}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.45 } : {}}
              transition={{ duration: 0.3, delay: 0.33 + i * 0.08, ease }}
            />
            <motion.circle
              cx={x}
              cy="136"
              r="3"
              stroke="currentColor"
              strokeWidth={STROKE}
              fill="none"
              opacity={0.45}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.45 } : {}}
              transition={{ duration: 0.3, delay: 0.37 + i * 0.08, ease }}
            />
          </motion.g>
        ))}
      </motion.g>
    </motion.svg>
  );
}
