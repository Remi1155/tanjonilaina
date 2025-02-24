import React from "react";
import TitleSection from "../components/TitleSection";
import ProjectCard from "../components/ProjectCard";
import { data } from "../data/data";

const ProjectsSection: React.FC = () => {
  const projects = data.projects;

  return (
    <section id="projects" className="container w-full py-4 pt-7 mx-auto bg-gray-50 min-[400px]:pt-20 dark:bg-gray-900">
      <div className="text-center ">
        <TitleSection lowerText="Projects" upperText="Browse my" />
        <div className="flex flex-col justify-center items-center w-[92%] md:grid md:grid-cols-2  sm:w-4/5 gap-3 mx-auto mt-7 lg:w-3/4 lg:grid lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageUrl={project.imageUrl}
              projectName={project.projectName}
              description={project.description}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
