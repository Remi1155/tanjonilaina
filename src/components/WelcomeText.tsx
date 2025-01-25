import GithubPng from "../assets/github.png";
import LinkedinPng from "../assets/linkedin.png";
import CustomLinkButton from "./CustomLinkButton";
import Cv from "../assets/CV.pdf"

function WelcomeText() {
  return (
    <div className="flex flex-col items-center gap-2 p-4 text-center rounded-full bg-gray-50">
      <div className="text-center">
        <p className="text-gray-600 min-[1400px]:text-2xl">Hello, I'm</p>
        <h2 className="mt-1 text-3xl min-[400px]:text-4xl font-bold text-black min-[1400px]:text-5xl">
          Tanjonilaina Rémi
        </h2>
      </div>
      <p className="text-2xl font-bold text-gray-700 min-[1400px]:text-4xl">
        Fullstack Developer
      </p>
      <div className="flex my-3">
        <CustomLinkButton href={Cv} text="Download CV" />
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
