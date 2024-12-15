import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <div className="overflow-x-hidden top-0 h-screen w-screen text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-950">
      <div className="h-full w-full fixed top-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container px-10 mx-auto">
        <Navbar />
        <Hero />
        <About />
        <div className="flex flex-wrap align-middle justify-evenly">
          <Education />
          <Technologies />
        </div>
        <Projects />
        <ContactMe />
        <Contact />
      </div>
    </div>
  );
};

export default App;
