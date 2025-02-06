import React, { useEffect, useState } from "react";
import WelcomeImage from "./WelcomeImage";
import WelcomeText from "./WelcomeText";

const WelcomeSection: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === null
  );
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="container relative flex flex-col items-center justify-center w-full mx-auto bg-gray-50 dark:bg-gray-900">
      <div className="container fixed flex justify-end mx-auto bg-transparent bg-gray-200 rounded top-20 lg:top-24 p-fit">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 mr-2 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      </div>
      
      <section className="flex flex-col items-center justify-center gap-3 pt-20 md:gap-5 md:pt-24 md:flex-row md:justify-between lg:pt-32 md:w-2/3 md:my-10 xl:gap-16">
        <WelcomeImage />
        <WelcomeText />
      </section>
    </div>
  );
};

export default WelcomeSection;
