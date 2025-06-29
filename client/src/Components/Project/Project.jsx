// data
import projectsOBj from "../../data/projects.json";

// Utils
import { formatDate } from "../../Utils/DataManager";

const Project = () => {
  return (
    <section id="projects" className="w-full">
      <h2 className="text-2xl text-white text-center mb-2">Projects</h2>

      {/* Project Container */}
      <div className="w-full flex flex-row flex-wrap justify-around items-center gap-5">
        {projectsOBj.projects.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-[400px] bg-gray rounded-xl flex flex-col justify-center items-center gap-y-2 px-5 py-5"
            >
              {/* Thumbnail */}
              <img
                src={project.thumbnail}
                alt={`${project.title}-image`}
                className="rounded-inherit w-full aspect-video bg-white/70 object-cover"
              />

              {/* Technologies */}
              <div
                className="rounded-inherit w-full flex flex-row flex-wrap gap-x-2 gap-y-1 overflow-hidden"
                style={{
                  maxHeight: "calc(2 * (var(--item-height) + var(--gap-y)))",
                }}
              >
                {project.technologies.map((technology, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded-inherit text-secondary text-sm bg-secondary/15 px-2 py-1 inline-block"
                    >
                      {technology}
                    </div>
                  );
                })}
              </div>

              {/* Title */}
              <p className="text-white/60 text-xl font-medium text-left w-full line-clamp-1">
                {project.title}
              </p>

              {/* Date */}
              <p className="text-white/40 text-xs text-left w-full">
                {formatDate(project.completionDate)}
              </p>

              {/* Summary */}
              <p className="text-white/50 text-sm text-left w-full line-clamp-3">
                {project.summary}
              </p>

              {/* Live Demo */}
              <button className="rounded-inherit text-white/70 text-md font-medium bg-secondary/70 inline-block px-5 py-1 mt-1">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  title={project.liveDemoUrl}
                >
                  Live Demo
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
