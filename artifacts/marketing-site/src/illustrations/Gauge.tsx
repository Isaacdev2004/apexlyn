import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface GaugeProps {
  value?: number; // 0–100
  label?: string;
}

export default function Gauge({ value = 87, label = "Threat Detection Score" }: GaugeProps) {
  const controls = useAnimation();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Map 0-100 to -180deg to 0deg rotation (pointer starts at left)
  const targetRotation = -180 + (value / 100) * 180;

  useEffect(() => {
    if (!inView) return;

    controls.start({
      rotate: targetRotation,
      transition: { duration: 4.5, ease: [0.25, 0.46, 0.45, 0.94] },
    });

    // Animate the numeric counter
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

  // Build arc segments for the gauge
  const cx = 160;
  const cy = 160;
  const R = 120;
  const strokeWidth = 16;

  // Helper: polar to cartesian
  const polar = (angle: number) => ({
    x: cx + R * Math.cos((angle * Math.PI) / 180),
    y: cy + R * Math.sin((angle * Math.PI) / 180),
  });

  // Arc from 180° to 360° (bottom semicircle reversed)
  // We draw left-to-right from 180° (left) to 0° (right) going through the top
  const arcPath = (startDeg: number, endDeg: number) => {
    const s = polar(startDeg);
    const e = polar(endDeg);
    const largeArc = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${R} ${R} 0 ${largeArc} 1 ${e.x} ${e.y}`;
  };

  // Segments: red(180-220), yellow(220-270), green(270-360)
  const segments = [
    { start: 180, end: 215, color: "#ef4444" },
    { start: 215, end: 260, color: "#f59e0b" },
    { start: 260, end: 270, color: "#84cc16" },
    { start: 270, end: 360, color: "#22c55e" },
  ];

  // Tick marks
  const ticks = Array.from({ length: 11 }, (_, i) => {
    const angle = 180 + i * 18;
    const inner = polar(angle);
    const outerR = R + (i % 5 === 0 ? 12 : 7);
    const outerPt = {
      x: cx + outerR * Math.cos((angle * Math.PI) / 180),
      y: cy + outerR * Math.sin((angle * Math.PI) / 180),
    };
    return { inner, outer: outerPt, major: i % 5 === 0 };
  });

  // Labels
  const gaugeLabels = [
    { label: "0", angle: 180 },
    { label: "25", angle: 225 },
    { label: "50", angle: 270 },
    { label: "75", angle: 315 },
    { label: "100", angle: 360 },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        ref={ref}
        width="320"
        height="190"
        viewBox="0 0 320 190"
        className="overflow-visible"
        aria-label={`${label}: ${displayValue} out of 100`}
      >
        {/* Background track */}
        <path
          d={arcPath(180, 360)}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />

        {/* Colored arc segments */}
        {segments.map((seg, i) => (
          <path
            key={i}
            d={arcPath(seg.start, seg.end)}
            fill="none"
            stroke={seg.color}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            opacity="0.85"
          />
        ))}

        {/* Tick marks */}
        {ticks.map((tick, i) => (
          <line
            key={i}
            x1={tick.inner.x}
            y1={tick.inner.y}
            x2={tick.outer.x}
            y2={tick.outer.y}
            stroke={tick.major ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
            strokeWidth={tick.major ? 1.5 : 1}
          />
        ))}

        {/* Labels */}
        {gaugeLabels.map((l, i) => {
          const labelR = R + 28;
          const pt = {
            x: cx + labelR * Math.cos((l.angle * Math.PI) / 180),
            y: cy + labelR * Math.sin((l.angle * Math.PI) / 180),
          };
          return (
            <text
              key={i}
              x={pt.x}
              y={pt.y + 4}
              textAnchor="middle"
              fill="rgba(255,255,255,0.4)"
              fontSize="10"
              fontFamily="Inter, sans-serif"
            >
              {l.label}
            </text>
          );
        })}

        {/* Pointer needle — pivots from (cx, cy) */}
        <motion.g
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          animate={controls}
          initial={{ rotate: -180 }}
        >
          {/* Needle shaft */}
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={cy - R + strokeWidth / 2 + 4}
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Needle tip glow */}
          <circle
            cx={cx}
            cy={cy - R + strokeWidth / 2 + 4}
            r="3"
            fill="#3b82f6"
          />
        </motion.g>

        {/* Center hub */}
        <circle cx={cx} cy={cy} r="10" fill="#1e293b" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r="5" fill="#3b82f6" />

        {/* Score display */}
        <text
          x={cx}
          y={cy + 38}
          textAnchor="middle"
          fill="white"
          fontSize="36"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          {displayValue}
        </text>
        <text
          x={cx}
          y={cy + 56}
          textAnchor="middle"
          fill="rgba(255,255,255,0.4)"
          fontSize="11"
          fontFamily="Inter, sans-serif"
        >
          / 100
        </text>
      </svg>

      <p className="text-slate-400 text-sm font-medium">{label}</p>

      {/* Status badges */}
      <div className="flex gap-3 flex-wrap justify-center">
        {[
          { color: "#ef4444", label: "Critical" },
          { color: "#f59e0b", label: "Medium" },
          { color: "#22c55e", label: "Protected" },
        ].map((badge) => (
          <div key={badge.label} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: badge.color }}
            />
            <span className="text-xs text-slate-500">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
