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
    <div className="text-center">
      <p className="text-gray-600 ">{upperText}</p>
      <h2 className="mt-1 text-3xl min-[400px]:text-4xl font-bold text-black">{lowerText}</h2>
    </div>
  );
};

export default TitleSection;
