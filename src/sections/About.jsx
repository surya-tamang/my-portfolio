import Heading from "../components/Heading";

const About = () => {
  return (
    <section className="w-11/12 md:px-10 px-5 md:my-10 my-16">
      <Heading title="About me" />

      <article className="flex md:gap-20 md:flex-row flex-col items-center gap-10">
        <figure className="md:w-10/12 w-full rounded-3xl">
          <img
            src="IMG_20240523_172015.jpg"
            alt="Surya Tamang"
            className="rounded-3xl"
          />
        </figure>
        <p>
          Hello and welcome! I'm <b className="text-green">Surya Tamang</b>, a
          web developer with a passion for creating digital experiences that
          inspire and delight. Thank you for taking the time to explore my
          portfolio as I begin this exciting journey into the world of web
          development.
        </p>
      </article>
    </section>
  );
};

export default About;
