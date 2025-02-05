import GithubPng from "../assets/github.png";
import LinkedinPng from "../assets/linkedin.png";
import CustomLinkButton from "./CustomLinkButton";
import WatsappPng from "../assets/icons8-whatsapp-30.png"

function WelcomeText() {
  return (
    <div className="flex flex-col items-center gap-2 p-4 text-center rounded-full dark:bg-gray-900 bg-gray-50">
      <div className="text-center">
        <p className="text-gray-600 min-[1400px]:text-2xl dark:invert">Hello, I'm</p>
        <h2 className="mt-1 text-3xl min-[400px]:text-4xl font-bold text-black min-[1400px]:text-5xl dark:invert">
          Tanjonilaina Rémi
        </h2>
      </div>
      <p className="text-2xl font-bold text-gray-700 min-[1400px]:text-4xl dark:invert">
        Developer
      </p>
      <div className="flex my-3">
        <CustomLinkButton href="#" text="Download CV" />
        <CustomLinkButton
          href="mailto:xavitanjonilaina2@gmail.com"
          text="Contact Me"
          bgColor="bg-gray-700"
          textColor="text-white"
        />
      </div>
      <div className="flex justify-center gap-4">
        <a href="https://www.linkedin.com/in/r%C3%A9mi-xavier-tanjonilaina-0958a42b5/">
          <img src={LinkedinPng} alt="Linkedin png" className="w-10 dark:invert" />
        </a>
        <a href="https://github.com/Remi1155">
          <img src={GithubPng} alt="Github png" className="w-10 dark:invert" />
        </a>
        <a href="https://wa.me/+261337196003">
          <img src={WatsappPng} alt="Watsapp png" className="w-10 dark:invert" />
        </a>
      </div>
    </div>
  );
}

export default WelcomeText;
