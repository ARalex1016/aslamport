import { motion } from "framer-motion";

// Components
import { TypingEffect } from "../TypingEffect ";
import SocialMedia from "../SocialMedia";
import { NavLink } from "../Header/Navbar";
import { ToolTip } from "../TootTip";
import AboutMe from "../AboutMe/AboutMe";
import { Bubble3D } from "../Shape3D";
import ScrollIndicator from "../ScrollIndicator";
import { SolarSystem } from "../SolarSystem";

// Store
import useAboutMeStore from "../../Store/UseAboutMeStore";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`sm:text-sm md:text-base text-primary font-medium text-nowrap bg-secondary rounded-md px-3 py-1 hoverBtn ${className}`}
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

const Hero = () => {
  const { isOpenAboutMe, openAboutMe, closeAboutMe } = useAboutMeStore();

  return (
    <section
      id="hero"
      className="w-screen h-screen bg-transparent flex flex-col sm:flex-row-reverse items-center gap-y-12 pt-menuHeight fixed top-0 z-10"
      style={{
        paddingLeft: `calc(var(--sidePadding) * 2)`,
        paddingRight: `calc(var(--sidePadding) * 2)`,
      }}
    >
      <AboutMe isOpenAboutMe={isOpenAboutMe} close={closeAboutMe} />

      {/* Image Container */}
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
        transition={{
          delay: 1,
          duration: 0.5,
          ease: "easeIn",
        }}
        className="relative size-60 sm:size-64 md:size-80 lg:size-96 aspect-square"
      >
        <div className="absolute inset-0 -z-10 bg-primary">
          <Bubble3D />
        </div>

        <ToolTip title={"Aslam"}>
          <img
            src="/Images/profile1.png"
            alt="Image"
            loading="lazy"
            // srcset=""
            className="size-full rounded-full object-fill"
          />
        </ToolTip>
      </motion.div>

      <SolarSystem />

      {/* Text */}
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="w-full text-white flex flex-col gap-y-2 sm:gap-y-2 md:gap-y-4"
      >
        <motion.p
          variants={textVariants}
          className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-merriweather"
        >
          Hi It's <span className="text-secondary">Aslam</span>
        </motion.p>

        <TypingEffect className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-merriweather" />

        {/* <motion.p variants={textVariants} className="text-white/50">
          I help business owners and busy web developers to design & develop
          creative websites that fits their vision and attracts the visitors to
          stay for ever.
        </motion.p> */}

        {/* Action Buttons */}
        <motion.div variants={textVariants} className="flex flex-row gap-x-5">
          <Button onClick={openAboutMe}>About Me</Button>

          <Button>
            <NavLink sectionId={"contact"}>Contact Me</NavLink>
          </Button>
        </motion.div>

        <SocialMedia className="my-2 sm:invisible mt-10" />
      </motion.div>

      <motion.div
        variants={{
          initial: {
            opacity: 0,
            x: 100,
          },
          animate: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="initial"
        animate="animate"
        transition={{
          delay: 1.5,
          type: "spring",
          stiffness: 100,
          damping: 8,
        }}
        className="invisible sm:visible sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2"
      >
        <SocialMedia />
      </motion.div>

      {/* Scroll */}
      {/* <motion.div
        onClick={handleScrollClick}
        variants={{
          initial: {
            y: 50,
            opacity: 0,
            scale: 0,
          },
          animate: {
            y: 0,
            opacity: 1,
            scale: 1,
          },
        }}
        initial="initial"
        animate="animate"
        transition={{
          delay: 2,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        onAnimationComplete={() => setIsScrollBouncing(true)}
        className={`text-white absolute top-[100svh] right-1/2 translate-x-1/2 flex flex-col justify-center items-center cursor-pointer ${
          isScrollBouncing && "animate-bounce"
        }`}
        style={{
          top: `calc(100svh - 36px)`,
        }}
      >
        <span className="text-xs ">Scroll</span>
        <ArrowDownIcon size={16} />
      </motion.div> */}

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
