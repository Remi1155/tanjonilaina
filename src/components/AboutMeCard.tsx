import React from "react";

interface AboutMeCardProps {
  imageUrl: string;
  title: string;
  items: string[];
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ imageUrl, title, items }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-2 bg-gray-100 border border-gray-300 shadow-md rounded-3xl md:h-full">
      <img src={imageUrl} alt={title} className="w-10 h-10 mb-4" />
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <ul className="space-y-1 text-lg text-center text-gray-600 list-none">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMeCard;
