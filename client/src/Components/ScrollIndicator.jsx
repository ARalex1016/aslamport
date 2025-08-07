import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ArrowDownIcon } from "lucide-react";

export default function ScrollIndicator() {
  const controls = useAnimation();

  const handleScrollClick = () => {
    const rootStyles = getComputedStyle(document.documentElement);
    const menuHeightStr = rootStyles.getPropertyValue("--menuHeight").trim();

    // Convert to number of pixels
    const menuHeight = parseInt(menuHeightStr.replace("px", ""), 10) || 0;

    window.scrollTo({
      top: window.innerHeight - menuHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const startBounce = async () => {
      await controls.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          delay: 2,
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      });

      // Start bouncing after the initial animation
      controls.start({
        y: [0, -10, 0],
        transition: {
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        },
      });
    };

    startBounce();
  }, [controls]);

  return (
    <motion.div
      onClick={handleScrollClick}
      initial={{
        y: 50,
        opacity: 0,
        scale: 0,
      }}
      animate={controls}
      className="text-white absolute right-1/2 translate-x-1/2 flex flex-col justify-center items-center cursor-pointer"
      style={{
        top: `calc(100svh - 36px)`,
      }}
    >
      <span className="text-xs">Scroll</span>
      <ArrowDownIcon size={16} />
    </motion.div>
  );
}
