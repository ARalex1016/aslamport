import { motion } from "framer-motion";

// Components
import { TypingEffect } from "../TypingEffect ";
import SocialMedia from "../SocialMedia";
import { NavLink } from "../Header/Navbar";
import { ToolTip } from "../TootTip";

// Hooks
import { useScreenWidth } from "../../Hooks/useScreenWidth";

// Icons
import { ArrowDownIcon } from "../Icons";

const Button = ({ children, className }) => {
  return (
    <button
      className={`font-medium rounded-md px-3 py-1 border-2 border-secondary transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      // staggerChildren: 0.1,
    },
  },
};

const handleScrollClick = () => {
  window.scrollTo({
    top: window.innerHeight - 60,
    behavior: "smooth",
  });
};

const Hero = () => {
  const { screenWidth } = useScreenWidth();

  return (
    <section
      id="hero"
      className="w-screen h-screen bg-transparent flex flex-col items-center gap-y-10 pt-menuHeight fixed top-0 z-10"
      style={{
        paddingLeft: `calc(var(--sidePadding) * 2)`,
        paddingRight: `calc(var(--sidePadding) * 2)`,
      }}
    >
      <ToolTip title={"Aslam"}>
        <img
          src="/Svgs/as-logo-lightblue.svg"
          alt="Image"
          loading="lazy"
          // srcset=""
          className="size-56 rounded-full object-fill"
        />
      </ToolTip>

      {/* Text */}
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="w-full text-white flex flex-col gap-y-1"
      >
        <motion.p variants={textVariants} className="text-2xl">
          Hi It's <span className="text-secondary">Aslam</span>
        </motion.p>

        <TypingEffect className="text-2xl" />

        <motion.p variants={textVariants} className="text-white/50">
          I help business owners and busy web developers to design & develop
          creative websites that fits their vision and attracts the visitors to
          stay for ever.
        </motion.p>

        {screenWidth <= 640 ? (
          <SocialMedia className="my-2" />
        ) : (
          <SocialMedia className="flex !flex-col gap-y-4 absolute right-4 top-1/2 -translate-y-1/2" />
        )}

        {/* Action Buttons */}
        <motion.div variants={textVariants} className="flex flex-row gap-x-5">
          <Button className="text-primary bg-secondary hover:text-secondary hover:bg-primary">
            <NavLink sectionId={"projects"}>Latest Projects</NavLink>
          </Button>

          <Button className="text-secondary hover:text-primary hover:bg-secondary">
            <NavLink sectionId={"contact"}>Contact Me</NavLink>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        onClick={handleScrollClick}
        variants={{
          initial: {
            y: 0,
          },
          final: {
            y: 10,
          },
        }}
        initial="initial"
        animate="final"
        transition={{
          duration: 1,
        }}
        className="text-white absolute top-[100svh] flex flex-col justify-center items-center animate-bounce"
        style={{
          top: `calc(100svh - 36px)`,
        }}
      >
        <span className="text-xs ">Scroll</span>
        <ArrowDownIcon size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
