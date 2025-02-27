import ReactDOM from "react-dom/client";
import "./index.css";
import WelcomeSection from "./welcome/WelcomeSection";
import AboutSection from "./aboutMe/AboutSection";
import ProjectsSection from "./projects/ProjectsSection";
import ContactSection from "./contact/ContactSection";
import Footer from "./footer/Footer";
import React from "react";
import { Toaster } from "react-hot-toast";
import Skills from "./skills/Skills";
import Header from "./header/Header";
import Certification from "./certification/Certification";

export default function App() {
  return (
    <div className="w-screen font-sans text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <Toaster />
      <Header />
      <main className="w-full">
        <WelcomeSection />
        <AboutSection />
        <Skills />
        <ProjectsSection />
        <Certification />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
