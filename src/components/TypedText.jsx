import { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedElement = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["tech-savvy", "creative", "adaptable"],
      typeSpeed: 200,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <p className="font-light tracking-widest capitalize">
      <span ref={typedElement} />
    </p>
  );
};

export default TypedText;
