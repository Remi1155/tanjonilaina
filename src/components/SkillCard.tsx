import React from "react";
import CheckMark from "../assets/checkmark.png";

interface SkillCardProps {
  title: string;
  technologies: string[];
  levels: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  technologies,
  levels,
}) => {
  return (
    <div className="w-full px-2 min-[350px]:px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md md:w-1/2">
      <h2 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">{title}</h2>
      <div className="grid grid-cols-1 gap-y-4 gap-x-1 min-[315px]:grid-cols-2 sm:gap-x-10">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center mr-2">
            <img src={CheckMark} alt="Icon" className="w-6 h-6 mr-0 min-[350px]:mr-1 min-[400px]:mr-3" />
            <div className="text-left">
              <p className="font-semibold text-gray-800">{tech}</p>
              <p className="text-sm text-gray-600">{levels[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
