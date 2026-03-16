import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface OrbitLabel {
  label: string;
  icon: string;
  orbitRadius: number;
  speed: number;
  startAngle: number;
}

const orbitLabels: OrbitLabel[] = [
  { label: "Threat Intel", icon: "🔍", orbitRadius: 110, speed: 12, startAngle: 0 },
  { label: "AI Engine", icon: "⚡", orbitRadius: 110, speed: 12, startAngle: 90 },
  { label: "Zero Trust", icon: "🛡️", orbitRadius: 110, speed: 12, startAngle: 180 },
  { label: "SIEM", icon: "📊", orbitRadius: 110, speed: 12, startAngle: 270 },
  { label: "EDR", icon: "💻", orbitRadius: 160, speed: 8, startAngle: 45 },
  { label: "Cloud Sec", icon: "☁️", orbitRadius: 160, speed: 8, startAngle: 165 },
  { label: "Identity", icon: "🔑", orbitRadius: 160, speed: 8, startAngle: 285 },
];

export default function LensOrbitGlobe() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef as React.RefObject<Element>, { once: false });
  const [baseTime, setBaseTime] = useState<number | null>(null);
  const rafRef = useRef<number>(0);

  const cx = 200;
  const cy = 200;

  useEffect(() => {
    if (inView && baseTime === null) setBaseTime(performance.now());
    if (!inView) setBaseTime(null);
  }, [inView, baseTime]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || baseTime === null) return;

    const labelGroups = orbitLabels.map((_, i) =>
      svg.querySelector(`[data-orbit="${i}"]`) as SVGGElement | null
    );

    const animate = (time: number) => {
      const elapsed = (time - baseTime) / 1000;

      orbitLabels.forEach((orb, i) => {
        const angle = (orb.startAngle + orb.speed * elapsed) % 360;
        const rad = (angle * Math.PI) / 180;
        const x = cx + orb.orbitRadius * Math.cos(rad);
        const y = cy + orb.orbitRadius * Math.sin(rad);
        const g = labelGroups[i];
        if (g) g.setAttribute("transform", `translate(${x}, ${y})`);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [baseTime]);

  const cyan = "rgba(6, 182, 212, 0.4)";
  const cyanLight = "rgba(6, 182, 212, 0.15)";
  const cyanBorder = "rgba(6, 182, 212, 0.3)";

  return (
    <div ref={containerRef} className="flex items-center justify-center">
      <svg
        ref={svgRef}
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="w-full max-w-sm overflow-visible"
        aria-label="Security platform visualization"
      >
        <circle cx={cx} cy={cy} r="110" fill="none" stroke={cyanLight} strokeWidth="1" strokeDasharray="4 6" />
        <circle cx={cx} cy={cy} r="160" fill="none" stroke={cyanLight} strokeWidth="1" strokeDasharray="4 8" />

        <radialGradient id="globeGlowLens" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.35)" />
          <stop offset="70%" stopColor="rgba(6, 182, 212, 0.08)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
        </radialGradient>
        <circle cx={cx} cy={cy} r="80" fill="url(#globeGlowLens)" />

        {[1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="60"
            fill="none"
            stroke={cyan}
            strokeWidth="1"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1 + i * 0.25, opacity: 0 }}
            transition={{
              duration: 3,
              delay: i * 1,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}

        <defs>
          <radialGradient id="globeGradLens" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          <clipPath id="globeClipLens">
            <circle cx={cx} cy={cy} r="58" />
          </clipPath>
        </defs>
        <circle cx={cx} cy={cy} r="58" fill="url(#globeGradLens)" stroke={cyanBorder} strokeWidth="1.5" />

        <g clipPath="url(#globeClipLens)" opacity="0.4">
          {[-40, -20, 0, 20, 40].map((lat) => {
            const y = cy + lat;
            const halfWidth = Math.sqrt(Math.max(0, 58 * 58 - lat * lat));
            return <line key={lat} x1={cx - halfWidth} y1={y} x2={cx + halfWidth} y2={y} stroke={cyan} strokeWidth="0.7" />;
          })}
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx={(i * 58) / 2.5}
              ry="58"
              fill="none"
              stroke={cyan}
              strokeWidth="0.7"
            />
          ))}
        </g>

        <g clipPath="url(#globeClipLens)" opacity="0.6">
          <ellipse cx={cx - 15} cy={cy - 10} rx="18" ry="14" fill="rgba(6, 182, 212, 0.2)" />
          <ellipse cx={cx + 20} cy={cy + 5} rx="14" ry="10" fill="rgba(6, 182, 212, 0.15)" />
          <ellipse cx={cx - 5} cy={cy + 20} rx="20" ry="8" fill="rgba(6, 182, 212, 0.1)" />
        </g>

        {orbitLabels.map((orb, i) => {
          const rad = (orb.startAngle * Math.PI) / 180;
          const x = cx + orb.orbitRadius * Math.cos(rad);
          const y = cy + orb.orbitRadius * Math.sin(rad);
          return (
            <g key={i} data-orbit={i} transform={`translate(${x}, ${y})`}>
              <line x1="0" y1="0" x2={-(x - cx) * 0.85} y2={-(y - cy) * 0.85} stroke={cyanLight} strokeWidth="1" />
              <g transform="translate(-42, -14)">
                <rect
                  x="0"
                  y="0"
                  width="84"
                  height="28"
                  rx="14"
                  fill="rgba(15,23,42,0.9)"
                  stroke={cyanBorder}
                  strokeWidth="1"
                />
                <text x="42" y="18" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">
                  {orb.icon} {orb.label}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
