import React from "react";

interface AboutMeCardProps {
  imageUrl: string;
  title: string;
  items: string[];
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ imageUrl, title, items }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-2 bg-gray-100 border border-gray-300 shadow-md dark:border-gray-700 dark:bg-gray-800 rounded-3xl md:h-full">
      <img src={imageUrl} alt={title} className="w-10 h-10 mb-4 dark:invert" />
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <ul className="space-y-1 text-lg text-left text-gray-600 list-none dark:text-gray-300">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMeCard;
