import Heading from "./Heading";

const Techs = () => {
  const techStacks = [
    { name: "HTML-5", image: "tech stack/html-5.png" },
    { name: "css-3", image: "tech stack/css-3.png" },
    { name: "java script", image: "tech stack/java-script.png" },
    { name: "react js", image: "tech stack/atom.png" },
    { name: "tailwind css", image: "tech stack/tailwind.png" },
    { name: "java", image: "tech stack/java.png" },
  ];
  return (
    <section className="techs w-11/12 md:px-10 px-5 rounded-lg bg-accent md:mt-5 mt-10">
      <Heading title="tech stacks" />
      <article className="flex flex-wrap justify-evenly md:gap-2 items-center md:my-20 ">
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
      </article>
    </section>
  );
};

export default Techs;
