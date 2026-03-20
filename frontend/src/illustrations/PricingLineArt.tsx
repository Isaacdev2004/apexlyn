import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STROKE = 2;

export default function PricingLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: false, margin: "-40px" });

  const tiers = [
    { x: 40, y: 120, w: 36, h: 50 },
    { x: 82, y: 85, w: 36, h: 85 },
    { x: 124, y: 50, w: 36, h: 120 },
  ];

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary ${className}`}
    >
      <rect x="24" y="24" width="152" height="152" rx="12" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" opacity={0.16} />
      <line x1="35" y1="170" x2="165" y2="170" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" opacity={0.35} />

      {tiers.map((t, i) => (
        <rect
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
          opacity={0.5 + i * 0.2}
        />
      ))}

      <motion.polyline
        points="58,120 100,85 142,50"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.56}
        strokeDasharray="10 10"
        animate={inView ? { strokeDashoffset: [0, -28] } : {}}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
      />

      {[58, 100, 142].map((x, i) => (
        <motion.line
          key={i}
          x1={x}
          y1="170"
          x2={x}
          y2={i === 0 ? 120 : i === 1 ? 85 : 50}
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          opacity={0.22}
          strokeDasharray="4 6"
          animate={inView ? { strokeDashoffset: [0, -18] } : {}}
          transition={{ duration: 1.2 + i * 0.2, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <motion.circle
        r="3"
        stroke="currentColor"
        strokeWidth={STROKE}
        fill="none"
        opacity={0.8}
        animate={inView ? { cx: [58, 100, 142, 58], cy: [120, 85, 50, 120] } : {}}
        transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
