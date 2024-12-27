import { useState } from "react";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Techs from "../components/Techs";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Project from "../sections/Project";
import Squares from "../components/Squares";

const Home = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);

    !menu
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} menu={menu} />
      <main className="w-full min-h-screen flex items-center flex-col relative">
        {/* Hero Section with Squares in the background */}
        <section
          className="w-full flex flex-col items-center justify-center py-10 relative"
          id="hero"
        >
          {/* Squares background */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <Squares />
          </div>

          {/* Hero Content */}
          <Hero />
        </section>

        {/* Tech Stack Section */}
        <section
          className="w-full flex items-center justify-center my-10"
          id="techs"
        >
          <Techs />
        </section>

        {/* Project Section */}
        <section
          className="w-full flex items-center justify-center my-10"
          id="project"
        >
          <Project />
        </section>

        {/* About Me Section */}
        <section
          className="w-full flex items-center justify-center my-10"
          id="about"
        >
          <About />
        </section>

        {/* Contact Section */}
        <section
          className="w-full flex items-center justify-center my-10"
          id="contact"
        >
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
