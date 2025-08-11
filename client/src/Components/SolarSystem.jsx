import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Hooks
import { useBreakpoint } from "../Hooks/useBreakpoint";

const outerOrbitIcons = [
  ["html", "https://img.icons8.com/color/48/html-5.png"],
  ["css", "https://img.icons8.com/color/48/css3.png"],
  ["javascript", "https://img.icons8.com/color/48/javascript.png"],
  ["react", "https://img.icons8.com/color/48/react-native.png"],
  ["tailwind", "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"],
  ["framer-motion", "/Icons/framer-motion.png"],
  ["mongodb", "https://img.icons8.com/color/48/mongodb.png"],
];

const innerOrbitIcons = [
  ["github", "https://img.icons8.com/color/48/github.png"],
  ["figma", "https://img.icons8.com/color/48/figma.png"],
];

const Orbit = ({ icons, className }) => {
  const orbitRef = useRef(null);
  const { breakpoint } = useBreakpoint();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!orbitRef.current) return;

    const updateSize = () => {
      const rect = orbitRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    updateSize();

    // Optional: listen for resize
    const observer = new ResizeObserver(updateSize);
    observer.observe(orbitRef.current);

    return () => observer.disconnect();
  }, []);

  const { width, height } = dimensions;

  const radius = width / 2; // Assuming width === height
  const center = radius;
  const iconSize = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 56,
    "2xl": 64,
  }[breakpoint];

  return (
    <div
      ref={orbitRef}
      className={`aspect-square border-2 border-secondary/50 border-dashed rounded-full absolute ${className}`}
    >
      {icons &&
        icons.length > 0 &&
        width &&
        icons.map(([name, iconSrc], index) => {
          const total = icons.length;
          const angleInRadians = (index / total) * 2 * Math.PI;

          const x = center + radius * Math.cos(angleInRadians) - iconSize / 2;
          const y = center + radius * Math.sin(angleInRadians) - iconSize / 2;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                top: y,
                left: x,
                width: iconSize,
                height: iconSize,
              }}
            >
              <img src={iconSrc} alt={name} className={`size-[${iconSize}]`} />
            </div>
          );
        })}
    </div>
  );
};

export const SolarSystem = ({ children }) => {
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          y: 50,
        },
        animate: {
          opacity: 0.5,
          y: 0,
          transition: {
            delay: 2,
            duration: 1,
            ease: "easeIn",
          },
        },
      }}
      initial="initial"
      animate="animate"
      className="absolute left-1/2 -z-20 pointer-events-none"
      style={{
        top: `calc(100svh + 40px)`,
      }}
    >
      {/* <div className="absolute">{children}</div> */}

      {/* Orbit Group */}
      <div className="absolute grid place-items-center">
        {/* Middle Orbit */}
        {
          <Orbit
            icons={outerOrbitIcons}
            className="w-[500px] sm:w-[700px] md:w-[800px] lg:w-[900px] orbit"
          />
        }

        {/* Inner Orbit */}
        {
          <Orbit
            icons={innerOrbitIcons}
            className="w-[350px] sm:w-[500px] md:w-[600px] lg:w-[650px] orbit-reverse"
          />
        }

        {<Orbit className="w-[200px] sm:w-[300px] md:w-[400px] orbit" />}
      </div>
    </motion.div>
  );
};
