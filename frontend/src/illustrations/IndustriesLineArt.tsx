import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STROKE = 2;

/** Industries motif: sector lanes converging into shared compliance core. */
export default function IndustriesLineArt({ className = "" }: { className?: string }) {
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
      <rect
        x="22"
        y="24"
        width="156"
        height="152"
        rx="12"
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.16}
      />

      {[56, 82, 108, 134].map((y, i) => (
        <motion.path
          key={`lane-${i}`}
          d={`M36 ${y} L92 ${y} Q108 ${y} 116 ${y + (i - 1.5) * 8} L164 100`}
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.4}
          strokeDasharray="9 8"
          animate={inView ? { strokeDashoffset: [0, -26] } : {}}
          transition={{ duration: 1.4 + i * 0.2, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <circle cx="164" cy="100" r="12" stroke="currentColor" strokeWidth={STROKE} opacity={0.72} />
      <circle cx="164" cy="100" r="5" stroke="currentColor" strokeWidth={STROKE} opacity={0.72} />

      {[56, 82, 108, 134].map((y, i) => (
        <circle key={`src-${i}`} cx="36" cy={y} r="3.5" stroke="currentColor" strokeWidth={STROKE} opacity={0.58} />
      ))}

      <motion.circle
        r="3"
        stroke="currentColor"
        strokeWidth={STROKE}
        fill="none"
        opacity={0.84}
        animate={inView ? { cx: [36, 96, 132, 164, 36], cy: [56, 56, 70, 100, 82] } : {}}
        transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
