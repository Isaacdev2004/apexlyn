import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const STROKE = 2;
const LOOP_DURATION = 4;

/** Solutions: architecture pipeline motif (Cloudflare-style system lines). */
export default function SolutionsLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });

  const blocks = [
    { x: 28, y: 78, w: 44, h: 44 },
    { x: 78, y: 60, w: 44, h: 80 },
    { x: 128, y: 42, w: 44, h: 116 },
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
          x="20"
          y="24"
          width="160"
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

        {blocks.map((b, i) => (
          <motion.rect
            key={`block-${i}`}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx="8"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={0.32 + i * 0.18}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.32 + i * 0.18 } : {}}
            transition={{ duration: 0.42, delay: 0.1 + i * 0.1, ease }}
          />
        ))}

        <motion.polyline
          points="50,78 100,60 150,42"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.5}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        />

        <motion.line
          x1="28"
          y1="158"
          x2="172"
          y2="158"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          opacity={0.26}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.16, ease }}
        />

        {[50, 100, 150].map((x, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={x}
            cy={i === 0 ? 78 : i === 1 ? 60 : 42}
            r="3"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={0.72}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.72 } : {}}
            transition={{ duration: 0.32, delay: 0.3 + i * 0.06, ease }}
          />
        ))}

        {[50, 100, 150].map((x, i) => (
          <motion.line
            key={`guide-${i}`}
            x1={x}
            y1="158"
            x2={x}
            y2={i === 0 ? 78 : i === 1 ? 60 : 42}
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            opacity={0.18}
            strokeDasharray="4 6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.18 } : {}}
            transition={{ duration: 0.3, delay: 0.26 + i * 0.06, ease }}
          />
        ))}

        <motion.path
          d="M36 92 L64 92 M36 104 L64 104 M36 116 L64 116"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.5}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.35, ease }}
        />
      </motion.g>
    </motion.svg>
  );
}
