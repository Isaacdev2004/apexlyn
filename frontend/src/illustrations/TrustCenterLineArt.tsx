import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const STROKE = 2;
const LOOP_DURATION = 4;

/** Trust Center: shield + badge frame + checkmarks. Locked: 2px, round, calm loop, primary only. */
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
        <motion.path
          d="M100 44 L168 68 L168 102 Q168 148 100 176 Q32 148 32 102 L32 68 Z"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        />
        <motion.path
          d="M72 98 L88 114 L128 74"
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
          d="M72 122 L88 138 L128 98"
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
      </motion.g>
    </motion.svg>
  );
}
