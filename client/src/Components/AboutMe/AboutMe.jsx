import { motion, AnimatePresence, color } from "framer-motion";

import { PopUpFullScreen } from "../Popup";

// Components
import { XIcon } from "./../Icons";
import Image from "../Image";
import { ToolTip } from "../TootTip";

// Data
import technologiesObj from "./../../data/technologies.json";

// Utils
import { getCapitalFirstLetter } from "../../Utils/StringManager";

const mernData = [
  {
    name: "MongoDB",
    src: "Svgs/mongodb.svg",
    baseColor: "#47A248",
  },
  {
    name: "Express",
    src: "Svgs/express.svg",
    baseColor: "#ffff",
  },
  {
    name: "React Js",
    src: "Svgs/react.svg",
    baseColor: "#61DAFB",
  },
  {
    name: "Node Js",
    src: "Svgs/node.svg",
    baseColor: "#8CC84B",
  },
];

const MernLogoItem = ({ data }) => {
  return (
    <>
      <img
        src={data.src}
        alt={data.name}
        className="size-8 md:size-10 lg:size-12 object-fill"
      />

      <h2 style={{ color: data.baseColor }} className="text-sm font-medium">
        {getCapitalFirstLetter(data.name)}
      </h2>
    </>
  );
};

const MernLogo = () => {
  return (
    <div className="sm:w-full flex flex-row gap-x-5">
      {mernData.map((data, index) => {
        return (
          <div key={index} className="flex flex-col items-center gap-y-2">
            <ToolTip title={data.name}>
              <MernLogoItem data={data} />
            </ToolTip>
          </div>
        );
      })}
    </div>
  );
};

const Title = ({ className, children }) => {
  return (
    <h2
      className={`text-secondary/80 w-full font-medium text-center sm:text-left text-xl sm:text-xl md:mb-2 ${className}`}
    >
      {children}
    </h2>
  );
};

const InnerContainer = ({ className, children }) => {
  return (
    <div
      className={`w-full flex flex-col items-center gap-y-2 md:gap-y-2 ${className}`}
    >
      {children}
    </div>
  );
};

const AboutMe = ({ isOpenAboutMe, close, className, children }) => {
  return (
    <AnimatePresence>
      {isOpenAboutMe && (
        <PopUpFullScreen onClose={close}>
          <motion.section
            variants={{
              initial: {
                height: 0,
                opacity: 0,
              },
              animate: {
                height: "100%",
                opacity: 1,
              },
              exit: {
                opacity: 0,
              },
            }}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{
              duration: 0.5,
              ease: "anticipate",
            }}
            className="bg-gray rounded-md relative shadow-md shadow-gray overflow-hidden flex flex-col sm:flex-row-reverse gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-6 justify-center items-center px-5 py-4 sm:px-12 sm:py-6"
            style={{
              width: "calc(100vw - 2 * var(--sidePadding))",
            }}
          >
            {/* X Button */}
            <motion.button
              onClick={close}
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{
                duration: 0.5,
                ease: "anticipate",
              }}
              className="text-white bg-white/10 hover:bg-white/15 rounded-full shadow shadow-black p-1 absolute top-4 right-4"
            >
              <XIcon size={16} />
            </motion.button>

            {/* Image */}
            <Image
              src="/Images/profile2.png"
              alt="Profile"
              className="size-40 sm:size-52 md:size-60 lg:size-80 rounded-full object-fill"
            />

            {/* Outer Container */}
            <div className="w-full flex flex-col gap-y-6 sm:gap-y-4">
              {/* About */}
              <InnerContainer>
                <Title>ABOUT ME</Title>

                <p className="text-white/60 text-xs sm:text-base line-clamp-4 md:line-clamp-6">
                  Hi, I’m Aslam — a self-driven full-stack web developer with a
                  strong focus on React and Node.js. I love turning ideas into
                  functional, user-friendly websites that solve real problems.
                  Whether it's building engaging front-end interfaces or
                  architecting back-end systems, I enjoy every step of the
                  process. Technologies and tools that I use to create such
                  awesome websites.
                </p>

                {/* Technologies */}

                <div className="flex flex-row flex-wrap gap-2">
                  {technologiesObj.technologies.map((technology, index) => {
                    return (
                      <div
                        key={index}
                        className="text-white/80 text-xs border-[1px] border-white/20 rounded-xl px-2 py-[2px]"
                      >
                        #{technology.name}
                      </div>
                    );
                  })}
                </div>
              </InnerContainer>

              {/* MERN STACK */}
              <InnerContainer>
                <Title className="font-['Merriweather']">MERN STACK</Title>

                <MernLogo />
              </InnerContainer>
            </div>
          </motion.section>
        </PopUpFullScreen>
      )}
    </AnimatePresence>
  );
};

export default AboutMe;
