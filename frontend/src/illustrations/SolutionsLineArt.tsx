import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const STROKE = 2;
const LOOP_DURATION = 4;

/** Solutions: core node + radiating connections. Locked: 2px, round, calm loop, primary only. */
export default function SolutionsLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });

  const rays = [
    { x2: 100, y2: 35 },
    { x2: 145, y2: 75 },
    { x2: 145, y2: 125 },
    { x2: 100, y2: 165 },
    { x2: 55, y2: 125 },
    { x2: 55, y2: 75 },
  ];

  const nodes = [
    { cx: 100, cy: 35 },
    { cx: 145, cy: 75 },
    { cx: 145, cy: 125 },
    { cx: 100, cy: 165 },
    { cx: 55, cy: 125 },
    { cx: 55, cy: 75 },
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
        {rays.map((r, i) => (
          <motion.line
            key={i}
            x1="100"
            y1="100"
            x2={r.x2}
            y2={r.y2}
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            opacity={0.4}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.4 } : {}}
            transition={{ duration: 0.35, delay: 0.05 + i * 0.04, ease }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r="10"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.25 + i * 0.05, ease }}
          />
        ))}
        <motion.circle
          cx="100"
          cy="100"
          r="18"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.15, ease }}
        />
      </motion.g>
    </motion.svg>
  );
}
