import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface GaugeProps {
  value?: number;
  label?: string;
}

export default function Gauge({ value = 87, label = "" }: GaugeProps) {
  const controls = useAnimation();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  const targetRotation = -180 + (value / 100) * 180;

  useEffect(() => {
    if (!inView) return;
    controls.start({
      rotate: targetRotation,
      transition: { duration: 4.5, ease: [0.25, 0.46, 0.45, 0.94] },
    });
    let start = 0;
    const end = value;
    const duration = 4200;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * end);
      setDisplayValue(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, controls, targetRotation, value]);

  const cx = 80;
  const cy = 80;
  const R = 56;
  const strokeWidth = 9;

  const polar = (angle: number) => ({
    x: cx + R * Math.cos((angle * Math.PI) / 180),
    y: cy + R * Math.sin((angle * Math.PI) / 180),
  });

  const arcPath = (startDeg: number, endDeg: number) => {
    const s = polar(startDeg);
    const e = polar(endDeg);
    const largeArc = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${R} ${R} 0 ${largeArc} 1 ${e.x} ${e.y}`;
  };

  const segments = [
    { start: 180, end: 210, color: "#ef4444" },
    { start: 210, end: 255, color: "#f59e0b" },
    { start: 255, end: 270, color: "#86efac" },
    { start: 270, end: 360, color: "#22c55e" },
  ];

  const trackColor = "rgba(15, 23, 42, 0.08)";
  const needleColor = "#0f172a";
  const hubStroke = "rgba(15, 23, 42, 0.12)";
  const scoreColor = "#0f172a";
  const scoreSubtle = "rgba(15, 23, 42, 0.45)";

  return (
    <div className="flex flex-col items-center">
      <svg
        ref={ref}
        width="160"
        height="96"
        viewBox="0 0 160 96"
        className="overflow-visible"
        aria-label={`Score: ${displayValue}`}
      >
        {/* Track */}
        <path d={arcPath(180, 360)} fill="none" stroke={trackColor} strokeWidth={strokeWidth} strokeLinecap="butt" />
        {/* Segments */}
        {segments.map((seg, i) => (
          <path key={i} d={arcPath(seg.start, seg.end)} fill="none" stroke={seg.color} strokeWidth={strokeWidth} strokeLinecap="butt" opacity="0.8" />
        ))}
        {/* Needle */}
        <motion.g
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          animate={controls}
          initial={{ rotate: -180 }}
        >
          <line x1={cx} y1={cy} x2={cx} y2={cy - R + strokeWidth / 2 + 2} stroke={needleColor} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx={cx} cy={cy - R + strokeWidth / 2 + 2} r="2" fill="#3b82f6" />
        </motion.g>
        {/* Hub */}
        <circle cx={cx} cy={cy} r="6" fill="#ffffff" stroke={hubStroke} strokeWidth="1" />
        <circle cx={cx} cy={cy} r="3" fill="#3b82f6" />
        {/* Score */}
        <text x={cx} y={cy + 22} textAnchor="middle" fill={scoreColor} fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif">
          {displayValue}
        </text>
        <text x={cx} y={cy + 33} textAnchor="middle" fill={scoreSubtle} fontSize="8" fontFamily="Inter, sans-serif">
          / 100
        </text>
      </svg>
      {label && <p className="text-slate-500 text-xs mt-1 text-center">{label}</p>}
    </div>
  );
}
