import React from "react";
import CheckMark from "../assets/checkmark.png";

interface SkillCardProps {
  title: string;
  contenu: {
    tech: string;
    level: string;
  }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, contenu }) => {
  return (
    <div className="w-full dark:bg-gray-800 px-2 min-[350px]:px-4 py-4 bg-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md md:w-1/2">
      <h2 className="mb-4 min-[400px]:text-xl font-bold text-gray-800 dark:text-gray-100 sm:text-2xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-y-4 gap-x-1 min-[320px]:grid-cols-2 sm:gap-x-10">
        {contenu.map((c, index) => (
          <div key={index} className="flex items-center mr-2">
            <img
              src={CheckMark}
              alt="Icon"
              className="w-6 h-6 ml-9 mr-3 min-[320px]:ml-0 min-[350px]:mr-1 min-[400px]:mr-3 dark:invert"
            />
            <div className="text-left">
              <p className="font-semibold text-sm min-[400px]:text-base text-gray-800 dark:invert">
                {c.tech}
              </p>
              <p className="text-sm text-gray-600 dark:invert">{c.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
