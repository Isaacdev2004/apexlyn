import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/** Resources: stacked docs / layers. Calm line-art, primary only. */
export default function ResourcesLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });

  const docs = [
    { y: 70, w: 100 },
    { y: 90, w: 110 },
    { y: 110, w: 95 },
    { y: 130, w: 105 },
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
      {docs.map((d, i) => (
        <motion.rect
          key={i}
          x={120 - d.w / 2}
          y={d.y}
          width={d.w}
          height="22"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity={0.4 + (i * 0.15)}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.4 + (i * 0.15) } : {}}
          transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      <motion.path
        d="M60 75 L60 145 M75 85 L95 85 M75 95 L90 95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity={0.6}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.svg>
  );
}
