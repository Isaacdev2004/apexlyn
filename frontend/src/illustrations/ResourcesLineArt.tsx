import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STROKE = 2;

/** Resources: indexed document stack motif (Cloudflare-style technical docs). */
export default function ResourcesLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: false, margin: "-40px" });

  const docs = [
    { y: 72, w: 88 },
    { y: 94, w: 98 },
    { y: 116, w: 92 },
    { y: 138, w: 102 },
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

        {docs.map((d, i) => (
          <rect
            key={i}
            x={106 - d.w / 2}
            y={d.y}
            width={d.w}
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.35 + i * 0.18}
          />
        ))}

        <path
          d="M52 70 L52 130 M52 70 Q68 70 68 100 Q68 130 52 130 M68 100 L84 100"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.7}
        />

        <motion.path
          d="M82 82 L132 82 M82 102 L142 102 M82 122 L138 122 M82 142 L146 142"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.38}
          strokeDasharray="12 8"
          animate={inView ? { strokeDashoffset: [0, -30] } : {}}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />

        {[132, 142, 138, 146].map((x, i) => (
          <circle
            key={`idx-${i}`}
            cx={x}
            cy={82 + i * 20}
            r="2.5"
            stroke="currentColor"
            strokeWidth={STROKE}
            opacity={0.55}
          />
        ))}

        <motion.rect
          x="80"
          y="78"
          width="72"
          height="6"
          rx="3"
          fill="currentColor"
          opacity={0.18}
          animate={inView ? { y: [78, 138, 78] } : {}}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />
    </svg>
  );
}
