import Heading from "./Heading";

const GetInTouch = () => {
  const contact = [
    {
      name: "email",
      icon: "fa-solid fa-envelope",
      link: "mailto:tmgsurya055@gmail.com",
    },
    {
      name: "Whats app",
      icon: "fa-solid fa-phone",
      link: "tel:9861325664",
    },
    {
      name: "Linked in",
      icon: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/surya-tamang-022b64269/",
    },
    // {
    //   name: "address",
    //   icon: "fa-solid fa-location-dot",
    //   link: "https://maps.app.goo.gl/T1cyw54BeGwD3bwV9",
    // },
  ];

  return (
    <section className="w-full md:px-10 px-5 md:my-10 my-16 pb-10 rounded-xl">
      <Heading title="Get In Touch" />
      <div className="w-full flex gap-6 mt-20 flex-wrap">
        {contact.map((item, index) => {
          const { name, icon, link } = item;
          return (
            <article key={index} className="sm:w-auto w-full">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:p-5 p-3 border-green border flex gap-5 items-center text-green hover:bg-green hover:text-black rounded-xl"
              >
                <i className={icon}></i>
                <span className="capitalize">{name}</span>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default GetInTouch;
