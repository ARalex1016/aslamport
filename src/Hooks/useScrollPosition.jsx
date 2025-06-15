import { useState, useEffect, useRef } from "react";

export const useScrollPosition = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(null);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const scrollDelta = currentScrollY - lastScrollY.current;
      setDirection(scrollDelta > 0 ? 1 : -1);

      setPosition(currentScrollY);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { position, direction };
};
