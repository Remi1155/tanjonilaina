import React from "react";
import CustomLinkButton from "./CustomLinkButton";

interface ProjectCardProps {
  imageUrl: string;
  projectName: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  projectName,
  description,
  githubLink,
  liveDemoLink,
}) => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-lg md:w-full">
      <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={projectName}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{projectName}</h3>
      <p className="mb-4 text-sm text-center text-gray-600">{description}</p>
      <div className="flex space-x-4">
        <CustomLinkButton href={githubLink} text="Github" />
        <CustomLinkButton href={liveDemoLink} text="Live Demo" />
      </div>
    </div>
  );
};

export default ProjectCard;
