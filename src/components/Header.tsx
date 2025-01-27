import React, { useState } from "react";
import Logo from "../assets/logo_4.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full mx-auto bg-white">
      <div className="container mx-auto bg-gray-100 backdrop-blur bg-opacity-80">
        <div className="container z-50 flex items-center justify-between w-3/4 py-4 mx-auto md:py-5">
          <div className="">
            <img src={Logo} alt="logo" className="w-28" />
          </div>
          <nav className="container flex items-center justify-between w-fit ">
            <div>
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 focus:outline-none"
                >
                  {isOpen ? (
                    <svg
                      className="w-8 h-8 text-gray-800"
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
                      className="w-8 h-8 text-gray-800"
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
                className={`absolute lg:relative top-16 lg:top-0 right-14 min-[400px]:right-20 sm:right-28 md:right-32 lg:right-0 w-auto rounded-md bg-gray-50 p-3 border border-t-gray-100 lg:border-none text-center  lg:w-auto lg:bg-transparent lg:flex lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300 ease-in-out ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {navLinks.map((navLink, index) => (
                  <li key={index}>
                    <a
                      href={navLink.href}
                      className="text-2xl font-medium hover:text-gray-500 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gray-500 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
                      onClick={toggleMenu}
                    >
                      {navLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
