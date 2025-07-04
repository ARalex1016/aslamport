import React, { useState, useRef, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

// Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Components
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";
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
                <p className="w-[12ch] text-xs text-nowrap">{skill.name}</p>

                <img
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
          <div className="w-full flex flex-col rounded-md">
            <h3 className="text-secondary/60 text-xl font-medium">
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

const Skill = () => {
  return (
    <section
      id="skills"
      className="w-full text-white bg-gray rounded-2xl flex flex-col gap-y-2 py-8"
    >
      <h2 className="text-2xl text-white text-center">Skills</h2>

      <Slider slides={skillsObj.skills} />
    </section>
  );
};

export default Skill;
