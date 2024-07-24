import React, { useState } from "react";
import GetInTouch from "../components/GetInTouch";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [processMsg, setProcessMsg] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    const validation =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validation)) {
      setProcessMsg("Enter a valid email");
    }

    // if (name == "" || name.length < 3) {
    //   setProcessMsg("Please enter a valid name");

    // }
  };

  return (
    <section className="w-11/12 flex items-centeryj justify-center bg-accent md:flex-row flex-col rounded-lg md:py-8 pb-8">
      <div className="md:w-6/12 w-full">
        <GetInTouch />
      </div>
      <div className="w-full md:w-6/12">
        <form
          // action="https://api.web3forms.com/submit"
          action=""
          method="post"
          className="flex flex-col gap-5 px-10"
          onSubmit={validateForm}
        >
          {/* <input
            type="hidden"
            name="590394bb-0bfe-4fd6-9727-9af82518b0ec"
            value="590394bb-0bfe-4fd6-9727-9af82518b0ec"
          ></input> */}
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.value)}
            value={email}
          />
          <textarea
            name="message"
            placeholder="Enter message"
            onChange={(e) => setMessage(e.value)}
            value={message}
          />

          <span className="h-5 text-center">{processMsg}</span>

          <button
            type="submit"
            className="border-green border py-3 rounded-lg hover:bg-green hover:text-black font-medium"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
