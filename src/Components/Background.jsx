import React, { useState, useEffect } from "react";

export const Background = ({ children, className }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      className={`w-full bg-primary/40 backdrop-blur-md relative z-20 px-sidePadding flex flex-col gap-y-5 ${className}`}
      style={{
        marginTop: `calc(${windowHeight}px - 10px)`,
      }}
    >
      {children}
    </main>
  );
};
