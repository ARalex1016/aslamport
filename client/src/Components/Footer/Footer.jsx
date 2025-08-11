import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Components
import SocialMedia from "../SocialMedia";
import { ToolTip } from "../TootTip";

// Utils
import { backToTop } from "../../Utils/BackToTop";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, {
    once: true,
  });

  const currentYear = new Date().getFullYear();

  return (
    <motion.section
      ref={footerRef}
      variants={{
        initial: {
          // x: -300,
          opacity: 0,
        },
        animate: {
          // x: 0,
          opacity: 1,
        },
      }}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{
        duration: 0.5,
        ease: "linear",
      }}
      className="w-full flex flex-col justify-center items-center gap-y-2 pb-2"
    >
      <p className="text-white/60 text-sm font-medium">
        Aslam © <span>{currentYear}</span>
      </p>

      <ToolTip title="Back to top">
        <img
          src="/Svgs/as-logo-lightblue.svg"
          alt="Logo"
          onClick={backToTop}
          className="size-10"
        />
      </ToolTip>

      <SocialMedia className="gap-x-4 !flex-row" />
    </motion.section>
  );
};

export default Footer;
