import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STROKE = 2;

export default function TrustCenterLineArt({ className = "" }: { className?: string }) {
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
      <rect x="28" y="24" width="144" height="152" rx="12" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" opacity={0.2} />
      <rect x="44" y="40" width="112" height="120" rx="10" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" opacity={0.18} />

      <path d="M100 52 L150 70 L150 102 Q150 136 100 160 Q50 136 50 102 L50 70 Z" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="100" cy="100" r="14" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" opacity={0.45} />
      <path d="M76 100 L90 114 L122 82" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M76 120 L90 134 L122 102" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" opacity={0.85} />

      {[64, 136].map((x, i) => (
        <g key={i}>
          <motion.line
            x1={x}
            y1="78"
            x2={x}
            y2="136"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray="5 6"
            opacity={0.24}
            animate={inView ? { strokeDashoffset: [0, -24] } : {}}
            transition={{ duration: 1.3 + i * 0.2, repeat: Infinity, ease: "linear" }}
          />
          <circle cx={x} cy="78" r="3" stroke="currentColor" strokeWidth={STROKE} opacity={0.45} />
          <circle cx={x} cy="136" r="3" stroke="currentColor" strokeWidth={STROKE} opacity={0.45} />
        </g>
      ))}

      <motion.rect
        x="58"
        y="88"
        width="84"
        height="4"
        rx="2"
        fill="currentColor"
        opacity={0.2}
        animate={inView ? { y: [88, 126, 88] } : {}}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}