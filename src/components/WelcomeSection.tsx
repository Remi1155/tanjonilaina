import React from "react";
import WelcomeImage from "./WelcomeImage";
import WelcomeText from "./WelcomeText";

const WelcomeSection: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center w-full py-4 mx-auto bg-gray-50">
      <section className="flex flex-col items-center justify-center gap-3 md:gap-5 md:flex-row md:justify-between md:w-2/3 md:my-10 xl:gap-16">
        <WelcomeImage />
        <WelcomeText />
      </section>
    </div>
  );
};

export default WelcomeSection;
