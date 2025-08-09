import { useState, useEffect } from "react";

const getBreakpoint = (width) => {
  if (width < 640) return "xs";
  if (width < 768) return "sm";
  if (width < 1024) return "md";
  if (width < 1280) return "lg";
  if (width < 1536) return "xl";
  return "2xl";
};

export const useBreakpoint = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState(() =>
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setScreenWidth(currentWidth);
      setBreakpoint(getBreakpoint(currentWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { breakpoint, screenWidth }; // returns 'xs', 'sm', 'md', 'lg', 'xl', '2xl'
};
