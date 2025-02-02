import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-2 pt-10">
      <h2 className="text-center text-4xl font-bold">Projects</h2>
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-8">
        {PROJECTS && PROJECTS.length > 0 &&
          PROJECTS.map((project, index) => (
            <div key={index} className="bg-neutral-800 p-4 rounded-xl shadow-md flex flex-col justify-between">
              <img
                src={project.image}
                className="rounded-lg w-full h-32 object-cover mb-4" 
                alt={`project_${index}`}
              />
              <div className="flex items-center justify-between mb-3">
                <h6 className="text-xl font-semibold text-white">{project.title}</h6>
                <a href={project.link} className="text-sm text-purple-400 hover:text-purple-300">
                  Link
                </a>
              </div>
              <p className="text-neutral-400 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies && project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-neutral-700 text-purple-300 px-2 py-1 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
