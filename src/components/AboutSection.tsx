import React from "react";
import TitleSection from "./TitleSection";
import AboutMeCard from "./AboutMeCard";
import AboutPic from "../assets/sary_tapaka_bg_gray_200.jpg";
import ExperienceLogo from "../assets/experience.png";
import EducationLogo from "../assets/education.png";

const AboutSection: React.FC = () => {
  const data = [
    {
      title: "Experience",
      logo: ExperienceLogo,
      items: [
        "2 years of Frontend Development",
        "1 year of Backend Development",
      ],
    },
    {
      title: "Education",
      logo: EducationLogo,
      items: [
        "B.Sc. Mathematics",
        "B.Sc. Computer Science",
        "M.Sc. Computer Science (1st year)",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="container flex flex-col justify-center w-full min-h-screen py-4 mx-auto bg-gray-50"
    >
      <TitleSection lowerText="About me" upperText="Get to know more" />
      <div className="flex flex-col items-center w-[92%] md:w-4/5 mx-auto mt-10 lg:w-3/4 lg:flex-row lg:justify-between">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={AboutPic}
            alt="Image 2"
            className="object-cover w-36 h-36 min-[400px]:w-48 min-[400px]:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 min-[1300px]::w-96 min-[1300px]::h-96 max-w-full"
          />
        </div>
        <div className="mt-4 lg:w-1/2">
          <div className="flex flex-col items-center justify-center gap-4 mt-8 mb-4 lg:mt-0 md:flex-row md:gap-8 md:h-60">
            {data.map((i, index) => (
              <AboutMeCard
                key={index}
                title={i.title}
                imageUrl={i.logo}
                items={i.items}
              />
            ))}
          </div>
          <p className="text-justify">
            I am a passionate web developer currently in my 4th year of Computer
            Science. As a junior full-stack developer, I enjoy creating
            efficient and user-friendly solutions, blending creativity with
            technical expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
