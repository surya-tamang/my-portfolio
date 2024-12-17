import Heading from "../components/Heading";
import projectData from "../project.json";

const Project = () => {
  const project = projectData.projects;
  return (
    <section className="w-11/12 md:px-10 px-5 md:my-10 my-16">
      <Heading title="projects" />
      <div className="space-y-4">
        {project.map((project, index) => {
          const { name, image, live, preview, des } = project;
          return (
            <details
              key={index}
              className="group border-s-4 border-green-500 p-6 [&_summary::-webkit-details-marker]:hidden"
              close
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-white">{name}</h2>

                <span className="shrink-0 rounded-full p-1.5 text-green sm:p-3">
                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>

              <article className="mt-4 leading-relaxed text-gray-700">
                <p>{des}</p>
                <div className="flex gap-4 mt-4">
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      className="bg-accent p-2 text-green"
                    >
                      Live preview
                    </a>
                  )}

                  <a
                    href={preview}
                    target="_blank"
                    className="bg-accent p-2 text-red-500"
                  >
                    Code
                  </a>
                </div>
              </article>
            </details>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
