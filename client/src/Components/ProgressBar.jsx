import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const CircularProgress = ({
  percentage = 75,
  size = 100,
  strokeWidth = 2,
  strokeColor,
  isInView,
  children,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = useMotionValue(0);

  // For stroke dash offset
  const dashOffset = useTransform(
    progress,
    (p) => circumference - (p / 100) * circumference
  );

  // For dot position
  const angle = useTransform(progress, (p) => (p / 100) * 360);
  const dotX = useTransform(
    angle,
    (a) => size / 2 + radius * Math.cos((a - 90) * (Math.PI / 180))
  );
  const dotY = useTransform(
    angle,
    (a) => size / 2 + radius * Math.sin((a - 90) * (Math.PI / 180))
  );

  useEffect(() => {
    if (isInView) {
      animate(progress, percentage, { duration: 2, ease: "easeInOut" });
    }
  }, [isInView, percentage]);

  return (
    <div className="flex items-center justify-center relative">
      <svg width={size} height={size} className="overflow-visible">
        {/* Neon Glow Filter */}
        <defs>
          <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(var(--primary))"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor ?? "rgba(var(--secondary))"}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: dashOffset,
            // filter: "url(#neon)",
          }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />

        {/* Moving dot */}
        <motion.circle
          r={strokeWidth * 2}
          fill={strokeColor ?? "rgba(var(--secondary))"}
          style={{
            cx: dotX,
            cy: dotY,
            filter: "url(#neon)",
          }}
        />
      </svg>

      <div className="absolute flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default CircularProgress;
