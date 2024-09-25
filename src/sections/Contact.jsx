import React, { useState, useRef } from "react";
import GetInTouch from "../components/GetInTouch";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [processMsg, setProcessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setProcessMsg("");
    setErrorMsg("");

    if (!name || !email || !message) {
      setErrorMsg("All fields required !!");
    } else if (name.length < 3) {
      setErrorMsg("Enter real name !!");
    } else if (!emailRegex.test(email)) {
      setErrorMsg("Invalid email !!");
    } else if (message.length < 5) {
      setErrorMsg("Leave a message !!");
    } else {
      emailjs
        .sendForm(
          "service_6v6oz8r",
          "template_hjb1b6d",
          form.current,
          "WUGRDkN04Vd_L-SN_"
        )
        .then(
          () => {
            setProcessMsg("Message sent successfully!");
            setEmail("");
            setName("");
            setMessage("");
            setTimeout(() => {
              setProcessMsg("");
            }, 1500);
          },
          (error) => {
            setErrorMsg("Failed to send message. Please try again.");
            console.error("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section className="w-11/12 flex items-center justify-center bg-accent md:flex-row flex-col rounded-lg md:py-8 pb-8">
      <div className="md:w-6/12 w-full">
        <GetInTouch />
      </div>
      <div className="w-full md:w-6/12">
        <form
          ref={form}
          className="flex flex-col gap-5 px-10"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setErrorMsg("");
              setProcessMsg("");
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setErrorMsg("");
              setProcessMsg("");
              setEmail(e.target.value);
            }}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setErrorMsg("");
              setProcessMsg("");
              setMessage(e.target.value);
            }}
          />
          <span className="h-5 text-center text-green">{processMsg}</span>
          <span className="h-5 text-center text-red-500">{errorMsg}</span>
          <button
            type="submit"
            value="send"
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
