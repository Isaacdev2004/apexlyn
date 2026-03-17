import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const STROKE = 2;
const LOOP_DURATION = 4;

/** Resources: stacked docs + book spine. Locked: 2px, round, calm loop, primary only. */
export default function ResourcesLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });

  const docs = [
    { y: 72, w: 88 },
    { y: 94, w: 98 },
    { y: 116, w: 92 },
    { y: 138, w: 102 },
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
        {docs.map((d, i) => (
          <motion.rect
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
            fill="none"
            opacity={0.35 + i * 0.18}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.35 + i * 0.18 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08, ease }}
          />
        ))}
        <motion.path
          d="M52 70 L52 130 M52 70 Q68 70 68 100 Q68 130 52 130 M68 100 L84 100"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.7}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25, ease }}
        />
      </motion.g>
    </motion.svg>
  );
}
