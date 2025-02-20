import React from "react";
import TitleSection from "../components/TitleSection";
import SkillCard from "../components/SkillCard";
import { data } from "../data/data";

const Skills: React.FC = () => {
  const mySkills = data.mySkills;

  return (
    <section
      id="skills"
      className="container w-full py-4 pt-20 mx-auto bg-gray-50 md:pt-24 dark:bg-gray-900"
    >
      <div className="items-center w-[92%] sm:w-4/5 mx-auto text-center lg:w-3/4">
        <TitleSection lowerText="Skills" upperText="My Technical" />
        <div className="flex flex-col justify-between gap-4 mt-4 text-lg md:text-xl md:flex-row">
          {mySkills.map((i, index) => (
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

export default Skills;
