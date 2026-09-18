import { useEffect, useState } from "react";

import "./Theme.css";

import Navbar from "./components/Navbar";
import MotionEffects from "./components/MotionEffects";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Lab from "./components/Lab";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className={`portfolio ${theme}-theme`}>
      <MotionEffects />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Lab />
        <Interests />
        <Contact />
      </main>
    </div>
  );
}

export default App;