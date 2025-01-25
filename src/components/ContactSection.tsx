import React from "react";
import TitleSection from "./TitleSection";
import LinkdinLogo from "../assets/linkedin.png";
import EmailLogo from "../assets/email.png";
import SocialNetwork from "./SocialNetwork";

const ContactSection: React.FC = () => {
  const socialNetworks = [
    {
      imageUrl: EmailLogo,
      name: "Email",
      href: "mailto:xavitanjonilaina2@gmail.com",
    },
    {
      imageUrl: LinkdinLogo,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/r%C3%A9mi-xavier-tanjonilaina-0958a42b5/",
    },
  ];
  return (
    <section id="contact" className="container w-full py-4 mx-auto bg-gray-50">
      <div className="items-center w-[92%] sm:w-4/5 mx-auto text-center md:w-3/4">
        <TitleSection lowerText="Contact me" upperText="Get in touch" />
        <div className="flex flex-col w-full gap-3 p-4 my-4 bg-gray-100 border border-gray-300 rounded-lg shadow-lg sm:flex-row sm:justify-around sm:items-center sm:gap-6">
          {socialNetworks.map((socialNetwork, index) => (
            <SocialNetwork
              key={index}
              href={socialNetwork.href}
              imageUrl={socialNetwork.imageUrl}
              name={socialNetwork.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
