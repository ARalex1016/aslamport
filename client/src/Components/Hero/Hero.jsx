import { motion } from "framer-motion";

// Components
import { TypingEffect } from "../TypingEffect ";
import SocialMedia from "../SocialMedia";
import { NavLink } from "../Header/Navbar";
import { ToolTip } from "../TootTip";
import AboutMe from "../AboutMe/AboutMe";

// Hooks
import { useScreenWidth } from "../../Hooks/useScreenWidth";
import { useAboutMeToggle } from "../../Hooks/useAboutMeToggle";

// Icons
import { ArrowDownIcon } from "../Icons";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`sm:text-sm md:text-base font-medium text-nowrap rounded-md px-3 py-1 border-2 border-secondary transition-all duration-300 ${className}`}
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
  const { isOpenAboutMe, openAboutMe, closeAboutMe } = useAboutMeToggle();

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

      {/* Image */}
      <ToolTip title={"Aslam"}>
        <motion.img
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
            // delay: 1,
            duration: 0.5,
            ease: "easeIn",
          }}
          src="/Images/profile1.png"
          alt="Image"
          loading="lazy"
          // srcset=""
          className="size-60 sm:size-64 md:size-80 lg:size-96 rounded-full object-fill"
        />
      </ToolTip>

      {/* Text */}
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="w-full text-white flex flex-col gap-y-2 sm:gap-y-2 md:gap-y-4"
      >
        <motion.p
          variants={textVariants}
          className="text-2xl lg:text-4xl xl:text-5xl"
        >
          Hi It's <span className="text-secondary">Aslam</span>
        </motion.p>

        <TypingEffect className="text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-['Merriweather']" />

        {/* <motion.p variants={textVariants} className="text-white/50">
          I help business owners and busy web developers to design & develop
          creative websites that fits their vision and attracts the visitors to
          stay for ever.
        </motion.p> */}

        {screenWidth < 640 && <SocialMedia className="my-2" />}

        {/* Action Buttons */}
        <motion.div variants={textVariants} className="flex flex-row gap-x-5">
          <Button
            onClick={openAboutMe}
            className="text-primary bg-secondary hover:text-secondary hover:bg-primary"
          >
            About Me
          </Button>

          <Button className="text-secondary hover:text-primary hover:bg-secondary">
            <NavLink sectionId={"contact"}>Contact Me</NavLink>
          </Button>
        </motion.div>
      </motion.div>

      {screenWidth >= 640 && <SocialMedia />}

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
        className="text-white absolute top-[100svh] right-1/2 translate-x-1/2 flex flex-col justify-center items-center animate-bounce"
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
