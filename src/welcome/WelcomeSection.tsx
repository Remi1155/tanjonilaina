import React, { useEffect, useState } from "react";
import WelcomeImage from "./WelcomeImage";
import WelcomeText from "./WelcomeText";

const WelcomeSection: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      localStorage.getItem("theme") === null
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
      {/* <div className="container fixed z-40 flex justify-end mx-auto bg-transparent bg-gray-200 rounded top-20 lg:top-24 p-fit">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 mr-2 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div> */}
      <div className="container fixed z-40 flex justify-end w-3/4 mx-auto bg-transparent rounded top-20 lg:top-24">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="relative w-12 h-6 bg-gray-600 rounded-full before:absolute before:top-0.5 before:left-0.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-all before:transform dark:before:translate-x-6"
        >
          <span className="sr-only">Toggle Dark Mode</span>
        </button>
      </div>

      <section className="flex flex-col items-center justify-center gap-3 pt-20 md:gap-5 md:pt-24 md:flex-row md:justify-between 2xl:justify-around lg:pt-32 md:w-4/5 xl:w-2/3 md:my-10 xl:gap-16">
        <WelcomeImage />
        <WelcomeText />
      </section>
    </div>
  );
};

export default WelcomeSection;
