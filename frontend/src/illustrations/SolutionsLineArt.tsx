import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STROKE = 2;

/** Solutions: architecture pipeline motif (Cloudflare-style system lines). */
export default function SolutionsLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: false, margin: "-40px" });

  const blocks = [
    { x: 28, y: 78, w: 44, h: 44 },
    { x: 78, y: 60, w: 44, h: 80 },
    { x: 128, y: 42, w: 44, h: 116 },
  ];

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary ${className}`}
    >
        <rect
          x="20"
          y="24"
          width="160"
          height="152"
          rx="12"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.16}
        />

        {blocks.map((b, i) => (
          <rect
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
            opacity={0.32 + i * 0.18}
          />
        ))}

        <motion.polyline
          points="50,78 100,60 150,42"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.5}
          strokeDasharray="10 10"
          animate={inView ? { strokeDashoffset: [0, -28] } : {}}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />

        <line
          x1="28"
          y1="158"
          x2="172"
          y2="158"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          opacity={0.26}
        />

        {[50, 100, 150].map((x, i) => (
          <circle
            key={`node-${i}`}
            cx={x}
            cy={i === 0 ? 78 : i === 1 ? 60 : 42}
            r="3"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.72}
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
            animate={inView ? { strokeDashoffset: [0, -18] } : {}}
            transition={{ duration: 1.1 + i * 0.2, repeat: Infinity, ease: "linear" }}
          />
        ))}

        <path
          d="M36 92 L64 92 M36 104 L64 104 M36 116 L64 116"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.5}
        />
        <motion.circle
          r="3"
          stroke="currentColor"
          strokeWidth={STROKE}
          fill="none"
          opacity={0.8}
          animate={inView ? { cx: [50, 100, 150, 50], cy: [78, 60, 42, 78] } : {}}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        />
    </svg>
  );
}
