// Speedometer.js
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Speedometer = ({
  value = 80, // percentage 0-100
  totalTicks = 100, // number of ticks
  glowColor = "#00ffcc",
  defaultColor = "#1f2937", // Tailwind gray-800
  size = 200, // SVG size in px
  duration = 2, // animation duration in seconds
  children,
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const ticks = useMemo(
    () => Array.from({ length: totalTicks }, (_, i) => i),
    [totalTicks]
  );

  const activeTicks = Math.round((value / 100) * totalTicks);

  return (
    <div ref={containerRef} className="flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        <g transform={`translate(${size / 2}, ${size / 2})`}>
          {ticks.map((tick, index) => {
            const angle = (index / totalTicks) * 360;
            const lineLength = size * 0.08;
            const lineOffset = size / 2 - lineLength - 10;

            const isActive = index < activeTicks;

            return (
              <motion.line
                key={index}
                x1="0"
                y1={-lineOffset}
                x2="0"
                y2={-lineOffset - lineLength}
                stroke={isActive ? glowColor : defaultColor}
                strokeWidth="2"
                strokeLinecap="round"
                filter={
                  isActive ? "drop-shadow(0 0 4px rgba(0,188,251,0.8))" : "none"
                }
                transform={`rotate(${angle})`}
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        stroke: index < activeTicks ? glowColor : defaultColor,
                      }
                    : {}
                }
                transition={{
                  delay: isInView ? (index * duration) / totalTicks : 0,
                  duration: 0.1,
                }}
              />
            );
          })}
        </g>
      </svg>

      {/* Centered content */}
      <div className="absolute flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Speedometer;
