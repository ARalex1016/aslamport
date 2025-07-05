import { useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

// Components
import SocialMedia from "../SocialMedia";
import BackToTop from "../BackToTop";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, {
    once: true,
  });

  const name = import.meta.env.VITE_API_NAME;
  const currentYear = new Date().getFullYear();

  return (
    <motion.section
      ref={footerRef}
      variants={{
        initial: {
          x: -300,
        },
        animate: {
          x: 0,
        },
      }}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{
        duration: 1,
        ease: "linear",
      }}
      className="w-full flex flex-col justify-center items-center gap-y-2 pb-2"
    >
      <p className="text-white/60 text-sm font-medium">
        Aslam © <span>{currentYear}</span>
      </p>

      <img src="/Svgs/as-logo.svg" alt="Logo" className="size-10" />

      <SocialMedia />

      <BackToTop className="rounded-full bg-secondary/30 hover:bg-secondary/50 p-1 absolute right-sidePadding bottom-2 animate-bounce" />
    </motion.section>
  );
};

export default Footer;
