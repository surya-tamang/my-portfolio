import { useEffect, useRef } from "react";
import Button from "../components/Button";

import gsap from "gsap";
import TypedText from "../components/TypedText";

const Hero = () => {
  let heroBox = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      heroBox.current,
      { opacity: 0, y: 80 },
      { duration: 2, opacity: 1, y: 0, ease: "power3.out" }
    );
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "cv/surya_tamang.pdf";
    link.download = "surya_tamang.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <img
        src="heropage/IMG_20240711_175318.png"
        alt="orbit"
        id="orbit"
        className="w-full md:hidden absolute drop-shadow-md -z-10 pointer-events-none top-36 opacity-50"
      />
      <article
        ref={heroBox}
        className="main-background flex flex-col items-center justify-center  text-center md:mt-2 bg-none md:my-10  w-11/12"
      >
        <header>
          <h1 className="sm:text-5xl text-3xl font-semibold tracking-widest uppercase font-kodeMono">
            I&apos;m Surya Tamang
          </h1>
          <h2 className="sm:text-2xl text-1xl py-3 tracking-widest font-semibold text-green">
            A web developer
          </h2>
        </header>
        <section>
          <TypedText />
        </section>
      </article>

      <Button onClick={downloadCV} first="Down" second="load" third="CV" />
    </>
  );
};

export default Hero;
