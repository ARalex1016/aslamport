import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// data
import projectsOBj from "../../data/projects.json";

// Utils
import { formatDate } from "../../Utils/DataManager";

// Components
import { ToolTip } from "../TootTip";

const Project = () => {
  const projectsRef = useRef(projectsOBj.projects.map(() => React.createRef()));

  return (
    <section id="projects" className="w-full">
      <h2 className="text-2xl text-white text-center mb-2">
        Featured Projects
      </h2>

      {/* Project Container */}
      <div className="w-full flex flex-row flex-wrap justify-around items-center gap-5">
        {projectsOBj.projects.map((project, index) => {
          const ref = projectsRef.current[index];

          const isInView = useInView(ref, {
            once: true,
          });

          /* Projects */
          return (
            <motion.div
              ref={ref}
              key={index}
              variants={{
                initial: {
                  // x: -300,
                  y: 80,
                  opacity: 0,
                },
                animate: {
                  // x: 0,
                  y: 0,
                  opacity: 1,
                },
              }}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{
                duration: 1,
                ease: "linear",
              }}
              className="w-full max-w-[400px] bg-gray rounded-xl [--parent-radius:theme(borderRadius.xl)] group"
            >
              <ToolTip title={project.title}>
                {/* Thumbnail */}
                <div className="overflow-hidden rounded-t-[var(--parent-radius)]">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title}-image`}
                    className="w-full aspect-video bg-white/40 object-contain group-hover:scale-125 transition-all duration-500 rounded-top-inherit"
                  />
                </div>
              </ToolTip>

              <div className="w-full flex flex-col justify-center rounded-inherit gap-y-2 p-5">
                {/* Title */}
                <p className="text-white/60 text-lg font-medium text-left w-full line-clamp-1 transition-all duration-300 group-hover:text-secondary">
                  {project.title}
                </p>

                {/* Date */}
                {/* <p className="text-white/40 text-xs text-left w-full">
                  {formatDate(project.completionDate)}
                </p> */}

                {/* Summary */}
                <p className="text-white/50 text-sm text-left w-full line-clamp-3">
                  {project.summary}
                </p>

                {/* Technologies */}
                <div
                  className="rounded-inherit w-full flex flex-row flex-wrap gap-x-2 gap-y-2 overflow-hidden"
                  style={{
                    maxHeight: "calc(2 * (var(--item-height) + var(--gap-y)))",
                  }}
                >
                  {project.technologies.map((technology, index) => {
                    return (
                      <div
                        key={index}
                        className="rounded-inherit text-secondary text-xs bg-secondary/15 px-2 py-1 inline-block"
                      >
                        {technology}
                      </div>
                    );
                  })}
                </div>

                {/* Visit Button */}
                <button
                  title={project.liveDemoUrl}
                  className="rounded-inherit text-white/70 text-sm font-medium bg-secondary/30 px-5 py-1 mt-1"
                >
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    title={project.liveDemoUrl}
                  >
                    Visit
                  </a>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
