import React, { useEffect, useState } from "react";
import Logo from "../assets/logo_4.png";
import { data } from "../data/data";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = data.navLinks;

  return (
    <header className="fixed z-50 w-full">
      {/* Le conteneur global */}
      <div className="relative">
        {/* Contexte de flou uniquement pour le fond */}
        <div className="container absolute inset-0 mx-auto bg-gray-100 dark:bg-gray-950 dark:bg-opacity-20 bg-opacity-20 dark:backdrop-blur-md backdrop-blur-md"></div>
        {/* Contenu net au-dessus du fond */}
        <div className="relative z-10 flex items-center justify-between w-3/4 py-4 mx-auto">
          <div>
            <img
              src={Logo}
              alt="logo"
              className="w-20 min-[400px]:w-24 sm:w-28 dark:invert"
            />
          </div>
          <nav className="flex items-center space-x-6">
            <div>
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 focus:outline-none dark:invert relative z-50"
                >
                  {isOpen ? (
                    <svg
                      className="w-6 h-6 min-[400px]:w-8 min-[400px]:h-8 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 min-[400px]:w-8 min-[400px]:h-8 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>

              <ul
                className={`absolute lg:relative z-50 top-16 lg:top-0 right-3 lg:right-0 w-auto rounded-md bg-gray-200 p-3 border border-t-gray-100 lg:border-none text-center lg:w-auto lg:bg-transparent lg:flex lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "block dark:bg-gray-700 dark:border-gray-500"
                    : "hidden"
                }`}
              >
                {navLinks.map((navLink, index) => (
                  <li key={index}>
                    <a
                      href={navLink.href}
                      className="min-[400px]:text-xl font-medium lg:font-normal hover:text-gray-500 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-500 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full dark:text-gray-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {navLink.label}
                    </a>
                  </li>
                ))}
              </ul>
              {isOpen && (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"></div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
