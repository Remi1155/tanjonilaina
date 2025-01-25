import React from "react";
import TitleSection from "./TitleSection";
import SkillCard from "./SkillCard";

const ExperienceSection: React.FC = () => {
  const data = [
    {
      title: "Frontend Development",
      technologies: [
        "ReactJs",
        "Redux",
        "TailwindCss",
        "TypeScript",
        "Material UI",
        "JavaScript",
      ],
      levels: [
        "Intermediate",
        "Basic",
        "Intermediate",
        "Basic",
        "Intermediate",
        "Intermediate",
      ],
    },
    {
      title: "Backend Development",
      technologies: ["Nest JS", "PostgreSQL", "PHP", "MySQL", "Node JS"],
      levels: [
        "Intermediate",
        "Basic",
        "Intermediate",
        "Intermediate",
        "Intermediate",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="container w-full py-4 mx-auto bg-gray-50"
    >
      <div className="items-center w-[92%] sm:w-4/5 mx-auto text-center lg:w-3/4">
        <TitleSection lowerText="Experience" upperText="Explore my" />
        <div className="flex flex-col justify-between gap-4 mt-4 text-lg md:text-xl md:flex-row">
          {data.map((i, index) => (
            <SkillCard
              key={index}
              title={i.title}
              technologies={i.technologies}
              levels={i.levels}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
