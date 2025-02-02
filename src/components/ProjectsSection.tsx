import React from "react";
import TitleSection from "./TitleSection";
import Project2Img from "../assets/project-2.png";
import Project3Img from "../assets/project-3.png";
import ProjectCard from "./ProjectCard";
import ProjectManageImg from "../assets/projet_manage.png";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      imageUrl: ProjectManageImg,
      projectName: "Manage-landing-page",
      description: "A fully responsive landing page template created with React and TypeScript.",
      githubLink: "https://github.com/Remi1155/Manage-landing-page",
      liveDemoLink: "#",
    },
    {
      imageUrl: Project2Img,
      projectName: "Project Two",
      description: "Stay focused with smart reminders.",
      githubLink: "#",
      liveDemoLink: "#",
    },
    {
      imageUrl: Project3Img,
      projectName: "Project Three",
      description: "Discover and order your favorite meals.",
      githubLink: "#",
      liveDemoLink: "#",
    },
  ];

  return (
    <section id="projects" className="container w-full py-4 pt-20 mx-auto bg-gray-50 md:pt-24 dark:bg-gray-900">
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
