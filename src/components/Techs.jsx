import Heading from "./Heading";
import reactjs from "../assets/atom.png";
import java from "../assets/java.png";
import redux from "../assets/Redux.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/nodejs.png";
import mongo from "../assets/mongodb_standard.png";
import express from "../assets/express-js.png";
import js from "../assets/java-script.png";

const Techs = () => {
  const techStacks = [
    { name: "js", image: js },
    { name: "react js", image: reactjs },
    { name: "tailwind css", image: tailwind },
    { name: "redux", image: redux },
    { name: "nodejs", image: node },
    { name: "express.js", image: express },
    { name: "mongoDb", image: mongo },
    { name: "java", image: java },
  ];
  return (
    <section className="techs w-11/12 px-5 rounded-lg md:mt-32 mt-10">
      <Heading title="languages and tools" />

      <div className="flex items-center flex-col md:flex-row gap-6">
        <div className="flex mt-6 w-full">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=surya-tamang&theme=shadow_blue&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
            alt=""
            className="w-96 h-52"
          />
        </div>
        <marquee behavior="scroll" direction="left">
          <div className="flex gap-10">
            {techStacks.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-contain"
                />
              );
            })}
          </div>
        </marquee>
      </div>

      {/*  <article className="flex flex-wrap justify-evenly md:gap-2 items-center md:my-20 ">
        {techStacks.map((stacks, index) => {
          const { name, image } = stacks;
          return (
            <div
              className="group flex flex-col items-center h-20 md:h-32 md:gap-8 gap-4 "
              key={index}
            >
              <img src={image} alt={name} className="md:w-32 sm:w-20 w-16" />
              <h3 className="uppercase group-hover:block hidden md:text-1xl">
                {name}
              </h3>
            </div>
          );
        })}
      </article> */}
    </section>
  );
};

export default Techs;
