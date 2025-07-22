import { useEffect } from "react";
import { motion } from "framer-motion";

export const PopUpFullScreen = ({ onClose, className, children }) => {
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scroll when unmounted
      document.body.style.overflow = "";
    };
  }, []);

  const handleBackgroundClick = (e) => {
    // Close only if clicked directly on the background (not children)
    if (e.target === e.currentTarget && typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
      initial="initial"
      animate="animate"
      exit="initial"
      transition={{
        duration: 0.5,
        ease: "anticipate",
      }}
      onClick={handleBackgroundClick}
      className={`w-screen h-[100svh] bg-black/60 absolute z-20 inset-0 flex flex-row justify-center items-center pt-menuHeight pb-[calc(var(--menuHeight)/2)] ${className}`}
    >
      {children}
    </motion.div>
  );
};
