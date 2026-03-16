import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/** Solutions: network nodes / building blocks. Calm line-art, primary only. */
export default function SolutionsLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });

  const nodes = [
    { cx: 100, cy: 50 },
    { cx: 60, cy: 100 },
    { cx: 140, cy: 100 },
    { cx: 50, cy: 150 },
    { cx: 100, cy: 150 },
    { cx: 150, cy: 150 },
  ];

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary ${className}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Connecting lines */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <line x1="100" y1="50" x2="60" y2="100" stroke="currentColor" strokeWidth="1.5" opacity={0.5} />
        <line x1="100" y1="50" x2="140" y2="100" stroke="currentColor" strokeWidth="1.5" opacity={0.5} />
        <line x1="60" y1="100" x2="50" y2="150" stroke="currentColor" strokeWidth="1.5" opacity={0.4} />
        <line x1="60" y1="100" x2="100" y2="150" stroke="currentColor" strokeWidth="1.5" opacity={0.4} />
        <line x1="140" y1="100" x2="100" y2="150" stroke="currentColor" strokeWidth="1.5" opacity={0.4} />
        <line x1="140" y1="100" x2="150" y2="150" stroke="currentColor" strokeWidth="1.5" opacity={0.4} />
      </motion.g>
      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r="8"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </motion.svg>
  );
}
