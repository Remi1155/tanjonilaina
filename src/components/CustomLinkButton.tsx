import React from "react";

interface LinkButtonProps {
  text: string;
  href: string;
  bgColor?: string;
  textColor?: string;
  hoverStyle?: string;
}

const CustomLinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  bgColor = "bg-gray-200",
  textColor = "text-black",
  hoverStyle = "hover:bg-gray-800 hover:text-white",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-3 my-1 border rounded-full ${bgColor} ${textColor} ${hoverStyle} transition hover:opacity-80 mx-2 text-sm font-semibold`}
    >
      {text}
    </a>
  );
};

export default CustomLinkButton;
