import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STROKE = 2;

/** Contact: comms panel motif (envelope + signal bus). */
export default function ContactLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: false, margin: "-40px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary ${className}`}
    >
        <path
          d="M32 42 L168 42 L168 156 L32 156 Z"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.16}
        />
        <path
          d="M48 64 L100 100 L152 64 L152 136 L48 136 Z"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 64 L100 100 L152 64"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <line
          x1="28"
          y1="170"
          x2="172"
          y2="170"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          opacity={0.3}
        />

        <motion.path
          d="M30 182 Q100 164 170 182"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.4}
          strokeDasharray="8 8"
          animate={inView ? { strokeDashoffset: [0, -26] } : {}}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M44 194 Q100 180 156 194"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.25}
          strokeDasharray="8 8"
          animate={inView ? { strokeDashoffset: [0, -18] } : {}}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        />

        {[60, 100, 140].map((x, i) => (
          <circle
            key={`bus-dot-${i}`}
            cx={x}
            cy="170"
            r="3"
            stroke="currentColor"
            strokeWidth={STROKE}
            opacity={0.62}
          />
        ))}

        <motion.circle
          r="3"
          stroke="currentColor"
          strokeWidth={STROKE}
          fill="none"
          opacity={0.8}
          animate={inView ? { cx: [60, 100, 140, 60], cy: [170, 170, 170, 170] } : {}}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
    </svg>
  );
}
