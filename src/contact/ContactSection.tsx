import React from "react";
import TitleSection from "../components/TitleSection";
import SocialNetwork from "../components/SocialNetwork";
import { ContactForm } from "./ContactForm";
import { data } from "../data/data";

const ContactSection: React.FC = () => {
  const socialNetworks = data.socialNetworks;

  return (
    <section
      id="contact"
      className="container w-full py-4 pt-7 mx-auto min-[400px]:pt-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="items-center w-[92%] sm:w-4/5 mx-auto text-center md:w-3/4">
        <TitleSection lowerText="Contact me" upperText="Get in touch" />
        <div className="flex flex-col lg:flex-row justify-between w-full gap-3 p-4 my-4 bg-gray-100 border border-gray-300 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700">
          <ContactForm />
          <div className="flex justify-around lg:flex-col lg:justify-start lg:items-start px-6 lg:py-16 lg:gap-5 lg:w-1/3">
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
      </div>
    </section>
  );
};

export default ContactSection;
