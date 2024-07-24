import { useState } from "react";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Techs from "../components/Techs";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Project from "../sections/Project";

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
        <section
          className="w-full flex flex-col items-center justify-center"
          id="hero"
        >
          <Hero />
        </section>

        {/* tech stack section */}

        <section
          className="w-full flex items-center justify-center my-10"
          id="techs"
        >
          <Techs />
        </section>

        {/* about me section */}

        <section
          className="w-full flex items-center justify-center my-10"
          id="about"
        >
          <About />
        </section>

        {/* project section  */}

        <section
          className="w-full flex items-center justify-center my-10"
          id="project"
        >
          <Project />
        </section>

        {/* hobbies section  */}

        {/* <section className="w-full flex items-center justify-center my-10" id="hobby">
          <Hobby />
        </section> */}

        {/* contact section */}

        <section
          className="w-full flex items-center justify-center my-10"
          id="contact"
        >
          <Contact />
        </section>
      </main>

      {/* footer */}

      <Footer />
    </>
  );
};

export default Home;
