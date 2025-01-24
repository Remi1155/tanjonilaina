import GithubPng from "../assets/github.png";
import LinkedinPng from "../assets/linkedin.png";
import TitleSection from "./TitleSection";
import CustomLinkButton from "./CustomLinkButton";

function WelcomeText() {
  return (
    <div className="flex flex-col items-center gap-2 p-4 text-center rounded-full bg-gray-50">
      <TitleSection upperText="Hello, I'm" lowerText="Tanjonilaina Rémi" />
      <p className="text-2xl font-bold text-gray-700">Fullstack Developer</p>
      <div className="my-3">
        <CustomLinkButton href="#" text="Download CV" />
        <CustomLinkButton
          href="#"
          text="Contact Me"
          bgColor="bg-gray-700"
          textColor="text-white"
        />
      </div>
      <div className="flex justify-center gap-4">
        <a href="https://www.linkedin.com/in/r%C3%A9mi-xavier-tanjonilaina-0958a42b5/">
          <img src={LinkedinPng} alt="Linkedin png" className="w-10" />
        </a>
        <a href="https://github.com/Remi1155">
          <img src={GithubPng} alt="Github png" className="w-10" />
        </a>
      </div>
    </div>
  );
}

export default WelcomeText;
