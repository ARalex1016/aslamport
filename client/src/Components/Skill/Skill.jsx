import React, { useState, useRef, forwardRef } from "react";
import { hover, motion, useInView } from "framer-motion";
import CountUp from "react-countup";

// Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Components
import { MainTitle, SubTitle } from "../String";
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";
import Image from "../Image";
import { LinearProgress, CircularProgress } from "../ProgressBar";
import { ToolTip } from "../TootTip";

// Data
import skillsObj from "../../data/skills.json";

const Slides = ({ skills }) => {
  const counterRefs = useRef(skills.map(() => React.createRef()));
  const animationDuration = 1.5;

  return (
    <div className="w-full flex flex-col gap-y-5">
      {skills.map((skill, index) => {
        const ref = counterRefs.current[index];

        // Only call useInView if the ref exists
        const isInView = useInView(ref, {
          once: true,
          margin: "-50px",
        });

        return (
          <div ref={ref} key={index} className="flex flex-col gap-y-[2px]">
            <ToolTip title={skill.name}>
              <div className="w-full flex flex-row justify-between items-center">
                <p className="w-[12ch] text-white/80 text-xs text-nowrap">
                  {skill.name}
                </p>

                <Image
                  src={skill.icon}
                  alt={`${skill.name}-icon`}
                  className="size-8"
                />

                <p className="text-xs w-[5ch] text-right">
                  {isInView && (
                    <CountUp
                      start={0}
                      end={skill.knowledgeLevel}
                      duration={animationDuration + index * 0.1}
                      delay={0}
                      useEasing={true}
                    />
                  )}
                  %
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-secondary/30 rounded-md">
                <motion.div
                  variants={{
                    initial: {
                      width: 0,
                    },
                    final: {
                      width: `${skill.knowledgeLevel}%`,
                    },
                  }}
                  initial="initial"
                  animate={isInView ? "final" : "initial"}
                  transition={{
                    duration: isInView ? animationDuration + index * 0.1 : 0,
                    ease: "linear",
                  }}
                  className={`h-full bg-secondary shadow-xs shadow-secondary`}
                  style={{
                    borderRadius: "inherit",
                  }}
                ></motion.div>
              </div>
            </ToolTip>
          </div>
        );
      })}
    </div>
  );
};

const Slider = ({ slides }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={false}
      autoplay={false}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="w-full max-w-[400px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="flex justify-center items-center px-10"
        >
          <div className="w-full flex flex-col gap-y-2 rounded-md">
            <h3 className="text-secondary/60 text-lg font-medium">
              {slide.category}
            </h3>

            <Slides skills={slide.skills} />
          </div>
        </SwiperSlide>
      ))}

      {/* Custom Navigation Buttons */}
      <div className="custom-prev text-white bg-primary/40 rounded-full p-2 absolute left-1 top-1/2 z-10 transform -translate-y-1/2 hover:bg-primary">
        <ChevronLeftIcon size={20} className="w-6 h-6" />
      </div>

      <div className="custom-next text-white bg-primary/40 rounded-full p-2 absolute right-1 top-1/2 z-10 transform -translate-y-1/2 hover:bg-primary">
        <ChevronRightIcon size={20} className="w-6 h-6" />
      </div>

      {/* Indicator */}
      <div className="w-full flex flex-row justify-center gap-x-2 mt-4">
        {slides.map((_, index) => {
          return (
            <div
              key={index}
              onClick={() => swiperRef.current.swiper.slideToLoop(index)}
              className={`size-2 border-[1px] rounded-full transition-all duration-500 cursor-pointer ${
                activeIndex === index
                  ? "bg-secondary border-secondary"
                  : "bg-transparent border-white/60"
              }`}
            ></div>
          );
        })}
      </div>
    </Swiper>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="text-xl text-white/75 font-medium text-left sm:text-center">
      {children}
    </h3>
  );
};

const CounterNumber = ({ number, isInView, className }) => {
  return (
    <p className={`${className}`}>
      {isInView ? (
        <CountUp
          start={0}
          end={number}
          duration={isInView ? 2 : 0}
          delay={0}
          useEasing={true}
        />
      ) : (
        0
      )}
    </p>
  );
};

const TechnicalSkillCards = () => {
  const technicalSkill = skillsObj.skills.find(
    (skill) => skill.category === "Technical Skills"
  );

  const skillsRef = useRef(technicalSkill.skills.map(() => React.createRef()));

  return (
    <>
      <div className="w-full sm:flex-1/2 flex flex-col gap-y-4">
        <CardTitle>{technicalSkill.category}</CardTitle>

        <div className="w-full h-full flex flex-col gap-y-4 justify-between">
          {technicalSkill.skills.length > 0 &&
            technicalSkill.skills.map((skill, index) => {
              const ref = skillsRef.current[index];

              const isInView = useInView(ref, {
                once: true,
                amount: "all",
              });

              return (
                <div
                  key={index}
                  ref={ref}
                  className="w-full grid grid-cols-2 gap-y-1"
                >
                  <p className="col-span-1 text-sm text-white/75">
                    {skill.name}
                  </p>

                  <div className="col-span-1 text-right flex flex-row justify-end text-sm text-white/75">
                    <CounterNumber
                      number={skill.knowlegeLevel}
                      isInView={isInView}
                      className="text-white font-medium"
                    />
                    <span>%</span>
                  </div>

                  <LinearProgress
                    value={skill.knowlegeLevel}
                    isInView={isInView}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

const ProfessionalSkillCard = () => {
  const professionalSkill = skillsObj.skills.find(
    (skill) => skill.category === "Professional Skills"
  );

  const skillsRef = useRef(
    professionalSkill.skills.map(() => React.createRef())
  );

  return (
    <div className="w-full sm:flex-1/2 flex flex-col gap-y-4">
      <CardTitle>{professionalSkill.category}</CardTitle>

      <div className="w-full grid grid-cols-2 gap-y-4">
        {professionalSkill.skills.length > 0 &&
          professionalSkill.skills.map((skill, index) => {
            const ref = skillsRef.current[index];

            const isInView = useInView(ref, {
              once: true,
              amount: "all",
            });

            return (
              <div
                key={index}
                ref={ref}
                className="w-full flex flex-col items-center gap-y-1"
              >
                <CircularProgress
                  percentage={skill.knowlegeLevel}
                  isInView={isInView}
                >
                  <div className="flex items-center justify-center text-white/80">
                    <CounterNumber
                      number={skill.knowlegeLevel}
                      isInView={isInView}
                      className="text-white text-2xl sm:text-3xl font-bold"
                    />
                    %
                  </div>
                </CircularProgress>

                <p className="text-white font-medium text-xs">{skill.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const Technologies = () => {
  const technologiesRef = useRef(
    skillsObj.technologies.map(() => React.createRef())
  );

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {skillsObj.technologies.length > 0 &&
        skillsObj.technologies.map((tech, index) => {
          const ref = technologiesRef.current[index];

          const isInView = useInView(ref, {
            once: true,
            amount: 0.8,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={{
                initial: { opacity: 0, y: 20 },
                final: { opacity: 1, y: 0 },
                hover: {
                  scale: 1.07,
                  transition: {
                    duration: 0.1,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="initial"
              animate={isInView ? "final" : "initial"}
              whileHover="hover"
              transition={{
                duration: isInView ? 0.5 + index * 0.1 : 0,
                ease: "easeInOut",
              }}
              className="w-full h-full aspect-square border border-secondary/20 rounded-lg flex flex-col justify-center items-center gap-y-2"
            >
              <img src={tech.icon} alt="Img" className="size-2/5" />

              <p className="text-sm text-white/80 font-bold">{tech.name}</p>
            </motion.div>
          );
        })}
    </div>
  );
};

const Skill = () => {
  const skillcardsRef = useRef(null);
  const skillcardsInView = useInView(skillcardsRef, {
    once: true,
    amount: 0.4,
  });

  return (
    <section
      id="skills"
      className="w-full text-white bg-gray rounded-2xl flex flex-col gap-y-6 px-8 sm:px-10 md:px-14 lg:px-16 py-8"
    >
      <MainTitle>My Skills</MainTitle>

      {/* Skill Cards */}
      <motion.div
        ref={skillcardsRef}
        variants={{
          initial: { opacity: 0, y: 50 },
          final: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate={skillcardsInView ? "final" : "initial"}
        transition={{
          duration: skillcardsInView ? 1 : 0,
          ease: "easeInOut",
        }}
        className="w-full flex flex-col sm:flex-row sm:gap-x-10 lg:gap-x-12 xl:gap-x-14 gap-y-6"
      >
        <TechnicalSkillCards />

        <ProfessionalSkillCard />
      </motion.div>

      {/* Tools & Technologies */}
      <div className="w-full flex flex-col gap-y-4 mt-2">
        <SubTitle>Tools & Technologies</SubTitle>

        <Technologies />
      </div>
    </section>
  );
};

export default Skill;
