import { PopUpFullScreen } from "../Popup";

// Components
import { XIcon } from "./../Icons";

// Data
import technologiesObj from "./../../data/technologies.json";

const AboutMe = ({ close, className, children }) => {
  return (
    <PopUpFullScreen onClose={close}>
      <section className="w-4/5 h-full bg-gray rounded-md relative shadow-md shadow-gray flex flex-col sm:flex-row-reverse gap-y-4 justify-center items-center px-5 py-4 sm:px-12 sm:py-6">
        <button
          onClick={close}
          className="text-white bg-white/10 hover:bg-white/15 rounded-full p-1 absolute top-4 right-4"
        >
          <XIcon size={16} />
        </button>

        <img
          src="/Images/profile1.png"
          alt="Profile"
          className="size-40 sm:size-52 md:size-60 lg:size-80 rounded-full object-fill"
        />

        <div className="w-full flex flex-col gap-y-2 sm:gap-y-4">
          <h2 className="text-secondary text-lg sm:text-xl">About Me</h2>

          <p className="text-white/60 text-xs sm:text-base line-clamp-4 md:line-clamp-6">
            Hi, I’m Aslam — a self-driven full-stack web developer with a strong
            focus on React and Node.js. I love turning ideas into functional,
            user-friendly websites that solve real problems. Whether it's
            building engaging front-end interfaces or architecting back-end
            systems, I enjoy every step of the process. Technologies and tools
            that I use to create such awesome websites.
          </p>

          <div className="flex flex-row flex-wrap gap-2">
            {technologiesObj.technologies.map((technology, index) => {
              return (
                <div
                  key={index}
                  className="text-white/80 text-xs border-2 border-white/20 rounded-xl px-2 py-[2px]"
                >
                  #{technology.name}
                </div>
              );
            })}
          </div>

          {/* <h2 className="text-secondary text-lg sm:text-xl">MERN STACK</h2>

          <div className="w-full text-white flex gap-x-2">
            <h2>M</h2>
            <h2>E</h2>
            <h2>R</h2>
            <h2>N</h2>
          </div> */}
        </div>
      </section>
    </PopUpFullScreen>
  );
};

export default AboutMe;
