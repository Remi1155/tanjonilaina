import React from "react";

interface TitleSectionProps {
  upperText: string;
  lowerText: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  upperText,
  lowerText,
}) => {
  return (
    <div className="text-center mt-10 min-[400px]:mt-0 min-[400px]:my-10 2xl:my-14">
      <p className="text-gray-600 text-sm min-[400px]:text-base dark:invert ">{upperText}</p>
      <h2 className="mt-1 text-2xl min-[400px]:text-4xl font-bold text-black dark:invert">{lowerText}</h2>
    </div>
  );
};

export default TitleSection;
