import { useState, useEffect, useRef } from "react";

export const useScrollRotation = () => {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      const scrollSpeed = Math.abs(scrollDelta);
      const direction = scrollDelta > 0 ? 1 : -1;

      setRotation((pre) => pre + direction * scrollSpeed);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return rotation;
};
