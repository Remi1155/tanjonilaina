import React from "react";

interface AboutMeCardProps {
  imageUrl: string;
  title: string;
  items: string[];
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ imageUrl, title, items }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-2 bg-gray-100 border border-gray-300 shadow-md dark:border-gray-700 dark:bg-gray-800 rounded-lg sm:rounded-3xl sm:h-full">
      <img src={imageUrl} alt={title} className="lg:w-7 lg:h-7 xl:w-10 xl:h-10 w-7 h-7 min-[400px]:w-10 min-[400px]:h-10 min-[400px]:mb-3 dark:invert" />
      <h3 className="mb-4 text-base min-[400px]:text-xl lg:text-base xl:text-xl font-bold">{title}</h3>
      <ul className="space-y-1 text-sm min-[400px]:text-base md:text-lg lg:text-base xl:text-lg text-left text-gray-600 list-none dark:text-gray-300">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMeCard;
