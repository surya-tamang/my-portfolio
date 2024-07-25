import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import PreLoad from "./PreLoad";

const Animation = () => {
  const text = useRef(null);
  const div = useRef(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2500);
    return () => clearTimeout();
  }, []);

  useEffect(() => {
    if (!load) {
      const timeline = gsap.timeline();

      timeline.add(<PreLoad />).fromTo(
        text.current,
        {
          opacity: 0,
          x: -80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.5,
        }
      );

      timeline.to(text.current, {
        opacity: 0,
        duration: 1,
        delay: 1,
      });
      timeline.to(div.current, {
        opacity: 0,
        duration: 1,
        delay: 1,
      });
    }
  }, [load]);

  return (
    <div ref={div} className="w-full max-h-screen min-h-screen">
      {load ? (
        <PreLoad />
      ) : (
        <div className="flex items-center justify-center h-screen w-full p-2">
          <h1
            ref={text}
            className="uppercase tracking-widest text-green font-bold sm:text-2xl text-xl text-center"
          >
            Welcome to my Portfolio
          </h1>
        </div>
      )}
    </div>
  );
};

export default Animation;
