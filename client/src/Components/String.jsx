import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const MainTitle = ({ children, className }) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, {
    once: true,
    amount: "all",
  });

  return (
    <motion.h2
      ref={titleRef}
      variants={{
        initial: { opacity: 0, y: 20 },
        final: { opacity: 1, y: 0 },
      }}
      initial="initial"
      animate={isInView ? "final" : "initial"}
      transition={{
        duration: isInView ? 1 : 0,
        ease: "easeInOut",
      }}
      className={`text-2xl text-white text-nowrap text-center font-bold ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export const SubTitle = ({ children, className }) => {
  const subTitleRef = useRef(null);
  const isInView = useInView(subTitleRef, {
    once: true,
    amount: "all",
  });

  return (
    <motion.h3
      ref={subTitleRef}
      variants={{
        initial: { opacity: 0, y: 20 },
        final: { opacity: 1, y: 0 },
      }}
      initial="initial"
      animate={isInView ? "final" : "initial"}
      transition={{
        duration: isInView ? 1 : 0,
        ease: "easeInOut",
      }}
      className={`text-lg sm:text-xl text-white text-nowrap text-center font-medium ${className}`}
    >
      {children}
    </motion.h3>
  );
};
