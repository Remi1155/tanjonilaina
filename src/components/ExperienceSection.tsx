import React from "react";
import TitleSection from "./TitleSection";
import SkillCard from "./SkillCard";

const ExperienceSection: React.FC = () => {
  const frontendTechnologies = [
    "ReactJs",
    "Redux",
    "TailwindCss",
    "TypeScript",
    "Material UI",
    "JavaScript",
  ];
  const frontendLevels = [
    "Intermediate",
    "Basic",
    "Intermediate",
    "Basic",
    "Intermediate",
    "Intermediate",
  ];

  const backendTechnologies = [
    "Nest JS",
    "PostgreSQL",
    "PHP",
    "MySQL",
    "Node JS",
  ];
  const backendLevels = [
    "Intermediate",
    "Basic",
    "Intermediate",
    "Intermediate",
    "Intermediate",
  ];

  return (
    <section id="experience" className="container w-full py-4 mx-auto bg-gray-50">
      <div className="items-center w-[92%] sm:w-4/5 mx-auto text-center lg:w-3/4">
        <TitleSection lowerText="Experience" upperText="Explore my" />
        <div className="flex flex-col justify-between gap-4 mt-4 text-lg md:text-xl md:flex-row">
          <SkillCard
            title="Frontend Development"
            technologies={frontendTechnologies}
            levels={frontendLevels}
          />
          <SkillCard
            title="Backend Development"
            technologies={backendTechnologies}
            levels={backendLevels}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
