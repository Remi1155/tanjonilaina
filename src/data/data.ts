import ExperienceLogo from "../assets/experience.png";
import EducationLogo from "../assets/education.png";
import TitanicImg from "../assets/titanic.jpg";
import AuthImg from "../assets/authImg.jpg";
import ProjectManageImg from "../assets/projet_manage.jpg";
import EmailLogo from "../assets/email.png";
import LinkdinLogo from "../assets/linkedin-2.png";
import WatsappLogo from "../assets/icons8-whatsapp-30.png";
import cerIntroToJS from "../assets/cer_into_to_javascript.jpg";
import cerIntroToSQL from "../assets/cer_intro_to_sql.jpg";
import cerIntermediateJava from "../assets/cer_java_intermediate.jpg";
import cerIntroToJava from "../assets/cer_intro_to_java.jpg";
import cerIntroToSQLHackerRank from "../assets/cer_sql_basique_hackerrank.jpg";

export const data = {
  navLinks: [
    { href: "#about", label: "About me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#certifications", label: "Certifications" },
  ],

  aboutMe: [
    {
      title: "Experience",
      logo: ExperienceLogo,
      items: [
        "1 year of Frontend Development",
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
  ],

  mySkills: [
    {
      title: "Frontend Development",
      contenu: [
        {
          tech: "ReactJs",
          level: "Intermediate",
        },
        {
          tech: "Redux",
          level: "Basic",
        },
        {
          tech: "Angular",
          level: "Basic",
        },
        {
          tech: "TailwindCss",
          level: "Intermediate",
        },
        {
          tech: "TypeScript",
          level: "Basic",
        },
        {
          tech: "MaterialUI",
          level: "Intermediate",
        },
        {
          tech: "JavaScript",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Backend Development",
      contenu: [
        {
          tech: "NodeJS",
          level: "Intermediate",
        },
        {
          tech: "NestJS",
          level: "Intermediate",
        },
        {
          tech: "PostgreSQL",
          level: "Basic",
        },
        {
          tech: "PHP",
          level: "Intermediate",
        },
        {
          tech: "MySQL",
          level: "Intermediate",
        },
        {
          tech: "PostgreSQL",
          level: "Intermediate",
        },
      ],
    },
  ],

  projects: [
    {
      imageUrl: TitanicImg,
      projectName: "Titanic Dashboard",
      description:
        "An interactive data visualization dashboard built with React and Rechart.js, offering dynamic charts and insights based on the Titanic dataset.",
      githubLink: "https://github.com/Remi1155/titanic-dashboard.git",
      liveDemoLink: "#",
    },
    {
      imageUrl: AuthImg,
      projectName: "NestJs Authentification",
      description: "Authentification with NestJs and Json Web Token",
      githubLink: "https://github.com/Remi1155/nest-js-authentification.git",
      liveDemoLink: "#",
    },
    {
      imageUrl: ProjectManageImg,
      projectName: "Manage-landing-page",
      description:
        "A fully responsive landing page template created with React and TypeScript.",
      githubLink: "https://github.com/Remi1155/Manage-landing-page",
      liveDemoLink: "#",
    },
  ],

  socialNetworks: [
    {
      imageUrl: EmailLogo,
      name: "Email",
      href: "mailto:xavitanjonilaina2@gmail.com",
    },
    {
      imageUrl: WatsappLogo,
      name: "Watsapp",
      href: "https://wa.me/+261337196003",
    },

    {
      imageUrl: LinkdinLogo,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/r%C3%A9mi-xavier-tanjonilaina-0958a42b5/",
    },
  ],

  certifications: [
    {
      title: "Introduction to Java",
      issuer: "Sololearn.com",
      linkTo: "https://www.sololearn.com/certificates/CC-BK3YRESN",
      image: cerIntroToJava,
    },
    {
      title: "Java intermediate",
      issuer: "Sololearn.com",
      linkTo: "https://www.sololearn.com/certificates/CC-G9MFXTET",
      image: cerIntermediateJava,
    },
    {
      title: "SQL Basic",
      issuer: "Hackerrank.com",
      linkTo: "https://www.hackerrank.com/certificates/8b78fef50e55",
      image: cerIntroToSQLHackerRank,
    },
    {
      title: "Introduction to Javascript",
      issuer: "Sololearn.com",
      linkTo: "https://www.sololearn.com/certificates/CC-6GFMREDU",
      image: cerIntroToJS,
    },
    {
      title: "Introduction to SQL",
      issuer: "Sololearn.com",
      linkTo: "https://www.sololearn.com/certificates/CC-WHVJYVSB",
      image: cerIntroToSQL,
    },
  ],
};
