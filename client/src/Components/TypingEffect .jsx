import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const TypingEffect = ({ className }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `I'm a <span class="text-secondary">Full Stack Developer.</span>`,
        `I'm a <span class="text-secondary">UI/UX Designer.</span>`,
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={`${className}`}>
      <span ref={typedRef}></span>
    </div>
  );
};
