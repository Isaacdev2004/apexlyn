import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STROKE = 2;

/** Company motif: org nodes + governance rails with continuous data-flow. */
export default function CompanyLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: false, margin: "-40px" });

  const nodes = [
    { x: 54, y: 70 },
    { x: 100, y: 52 },
    { x: 146, y: 70 },
    { x: 74, y: 120 },
    { x: 126, y: 120 },
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
        x="24"
        y="24"
        width="152"
        height="152"
        rx="12"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.16}
      />

      <motion.path
        d="M54 70 L100 52 L146 70 M54 70 L74 120 L126 120 L146 70 M74 120 L100 148 L126 120"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.44}
        strokeDasharray="10 8"
        animate={inView ? { strokeDashoffset: [0, -30] } : {}}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
      />

      {nodes.map((n, i) => (
        <circle
          key={`node-${i}`}
          cx={n.x}
          cy={n.y}
          r="4"
          stroke="currentColor"
          strokeWidth={STROKE}
          fill="none"
          opacity={0.72}
        />
      ))}

      <motion.line
        x1="36"
        y1="162"
        x2="164"
        y2="162"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        opacity={0.28}
        strokeDasharray="6 7"
        animate={inView ? { strokeDashoffset: [0, -22] } : {}}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      />

      <motion.circle
        r="3"
        stroke="currentColor"
        strokeWidth={STROKE}
        fill="none"
        opacity={0.82}
        animate={inView ? { cx: [54, 100, 146, 126, 74, 54], cy: [70, 52, 70, 120, 120, 70] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
