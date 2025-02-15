import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="w-screen font-sans text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <Toaster />
      <Header />
      <main className="w-full">
        <WelcomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
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
