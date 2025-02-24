import React from "react";

interface SocialNetworkProps {
  imageUrl: string;
  name: string;
  href: string;
}

const SocialNetwork: React.FC<SocialNetworkProps> = ({
  imageUrl,
  name,
  href,
}) => {
  return (
    <div className="p-0 m-0">
      <a href={href} className="flex items-center justify-center gap-2 text-lg">
        <img src={imageUrl} alt="Social Network" className="w-8 min-[400px]:w-10 dark:invert" />
        <p className="hover:text-gray-500 hidden lg:block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-500 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full">
          {name}
        </p>
      </a>
    </div>
  );
};

export default SocialNetwork;
