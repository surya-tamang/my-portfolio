import Heading from "../components/Heading";

const Hobby = () => {
  return (
    <section className="w-11/12 md:px-10 px-5 md:my-10 my-16">
      <Heading title="Hobbies" />
      <section className="flex w-full items-center">
        <div className="max-w-screen-xl">
          <header>
            <h2 className="text-xl capitalize">mobile Photography</h2>
          </header>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-96 w-96 object-cover transition duration-500 group-hover:scale-105"
              />
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-96 w-96 object-cover transition duration-500 group-hover:scale-105"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="flex w-full items-center mt-16">
        <div className="max-w-screen-xl">
          <header>
            <h2 className="text-xl capitalize">mobile videography</h2>
          </header>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-44 w-96 object-cover transition duration-500 group-hover:scale-105"
              />
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Hobby;
