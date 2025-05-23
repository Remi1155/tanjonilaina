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
  const isDisabled = href === "#";

  return (
    <a
      href={isDisabled ? undefined : href} // Ne définit pas href si le lien est désactivé
      onClick={(e) => {
        if (isDisabled) {
          e.preventDefault(); // Empêche le comportement par défaut si désactivé
        }
      }}
      target={isDisabled ? undefined : "_blank"} // Empêche l'ouverture dans un nouvel onglet si désactivé
      rel={isDisabled ? undefined : "noopener noreferrer"} // Même chose ici
      className={`px-3 py-2 min-[400px]:px-4 min-[400px]:py-3 md:px-3 md:py-2 lg:px-4 lg:py-3 my-1 text-[0.7em] border rounded-full  dark:invert ${bgColor} ${textColor} ${hoverStyle} transition hover:opacity-80 mx-2 min-[400px]:text-sm font-semibold dark:border-gray-700 ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {text}
    </a>
  );
};

export default CustomLinkButton;
