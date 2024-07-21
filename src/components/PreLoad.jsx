import gsap from "gsap";
import "../styling/PreLoad.css";
import { useEffect, useRef } from "react";

const PreLoad = () => {
  const div = useRef(null);
  useEffect(() => {
    gsap.to(div.current, {
      opacity: 0,
      duration: 1,
      delay: 2,
    });
  });
  return (
    <div
      ref={div}
      className=" w-full h-screen absolute bg-black z-50 flex items-center justify-center gap-5"
    >
      <h1 className="uppercase tracking-widest text-green font-bold sm:text-2xl text-xl">
        Loading
      </h1>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PreLoad;
