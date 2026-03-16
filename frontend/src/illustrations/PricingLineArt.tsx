import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/** Pricing: tier bars / scale. Calm line-art, primary only. */
export default function PricingLineArt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });

  const bars = [
    { y: 80, w: 50 },
    { y: 110, w: 90 },
    { y: 140, w: 130 },
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
      <motion.rect
        x="35"
        y="50"
        width="130"
        height="120"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity={0.25}
        initial={{ pathLength: 0 }}
        animate={inView ? { opacity: 0.25 } : {}}
        transition={{ duration: 0.4 }}
      />
      {bars.map((b, i) => (
        <motion.rect
          key={i}
          x="50"
          y={b.y}
          width={b.w}
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </motion.svg>
  );
}
