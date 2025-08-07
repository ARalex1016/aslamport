import { useRef, useState, useEffect } from "react";
import { animate, motion } from "framer-motion";
import { init } from "@emailjs/browser";

const outerOrbitIcons = [
  "https://img.icons8.com/color/48/html-5.png",
  "https://img.icons8.com/color/48/css3.png",
  "https://img.icons8.com/color/48/javascript.png",
  "https://img.icons8.com/color/48/react-native.png",
  "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  "/Images/framer-motion.png",
  "https://img.icons8.com/color/48/mongodb.png",
];

const innerOrbitIcons = [
  "https://img.icons8.com/color/48/github.png",
  "https://img.icons8.com/color/48/figma.png",
];

const Orbit = ({ icons, className }) => {
  const orbitRef = useRef(null);
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
  const iconSize = 24; // px

  return (
    <div
      ref={orbitRef}
      className={`border-2 border-secondary/50 border-dashed rounded-full aspect-square absolute ${className}`}
    >
      {icons &&
        icons.length > 0 &&
        width &&
        icons.map((iconSrc, index) => {
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
              <img src={iconSrc} alt="" className={`size-[${iconSize}]`} />
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
            className="w-[500px] sm:w-[700px] md:w-[800px] lg:w-[900px] aspect-square orbit"
          />
        }

        {/* Inner Orbit */}
        {
          <Orbit
            icons={innerOrbitIcons}
            className="w-[350px] sm:w-[500px] md:w-[600px] lg:w-[650px] aspect-square orbit-reverse"
          />
        }

        {
          <Orbit className="w-[200px] sm:w-[300px] md:w-[400px] aspect-square orbit" />
        }
      </div>
    </motion.div>
  );
};
