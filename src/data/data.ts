import ExperienceLogo from "../assets/experience.png";
import EducationLogo from "../assets/education.png";
import Project2Img from "../assets/project-2.png";
import Project3Img from "../assets/project-3.png";
import ProjectManageImg from "../assets/projet_manage.png";
import EmailLogo from "../assets/email.png";
import LinkdinLogo from "../assets/linkedin-2.png";
import WatsappLogo from "../assets/icons8-whatsapp-30.png";
import cerIntroToJS from "../assets/cer_into_to_javascript.jpg";
import cerIntroToSQL from "../assets/cer_intro_to_sql.jpg";
import cerIntermediateJava from "../assets/cer_java_intermediate.jpg";
import cerIntroToJava from "../assets/cer_intro_to_java.png";


export const data = {
  navLinks: [
    { href: "#about", label: "About" },
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
      technologies: [
        "ReactJs",
        "Redux",
        "TailwindCss",
        "TypeScript",
        "MaterialUI",
        "JavaScript",
      ],
      levels: [
        "Intermediate",
        "Basic",
        "Intermediate",
        "Basic",
        "Intermediate",
        "Intermediate",
      ],
    },
    {
      title: "Backend Development",
      technologies: ["NestJS", "PostgreSQL", "PHP", "MySQL", "NodeJS"],
      levels: [
        "Intermediate",
        "Basic",
        "Intermediate",
        "Intermediate",
        "Intermediate",
      ],
    },
  ],

  projects: [
    {
      imageUrl: ProjectManageImg,
      projectName: "Manage-landing-page",
      description: "A fully responsive landing page template created with React and TypeScript.",
      githubLink: "https://github.com/Remi1155/Manage-landing-page",
      liveDemoLink: "#",
    },
    {
      imageUrl: Project2Img,
      projectName: "Project Two",
      description: "Stay focused with smart reminders.",
      githubLink: "#",
      liveDemoLink: "#",
    },
    {
      imageUrl: Project3Img,
      projectName: "Project Three",
      description: "Discover and order your favorite meals.",
      githubLink: "#",
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
