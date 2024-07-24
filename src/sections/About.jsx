import Heading from "../components/Heading";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import ConnectIcons from "../icons/ConnectIcons";

const About = () => {
  const [textToCopy] = useState(""); // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 1000); // Reset status after 1 seconds
  };
  return (
    <section className="w-11/12 md:px-10 px-5 md:my-10 my-16 ">
      <Heading title="About me" />

      <article className="flex md:gap-20 md:flex-row flex-col items-center gap-10 ">
        <figure className="md:w-10/12 w-auto">
          <img
            src="IMG_20240523_172015.jpg"
            alt="A portrait of Surya Tamang"
            className="rounded-full max-w-xs md:max-w-md my-20"
          />
        </figure>
        <div className="text-center md:text-left">
          <p className="text-lg leading-relaxed">
            Welcome! I&apos;m <b className="text-green">Surya Tamang</b>, a
            passionate web developer dedicated to creating impactful digital
            experiences. Explore my portfolio to see how I turn ideas into
            reality. Thank you for
            <br className="md:hidden" /> visiting.
          </p>
        </div>
      </article>

      {/* feel free to connect */}
      <div>
        <p className="flex items-center justify-center text-pretty text-xl md:text-3xl mt-32 md:mt-15 ">
          Feel free to&nbsp;
          <b className="text-green font-extrabold ">connect</b>.
        </p>
        <ConnectIcons />

        {/* npx surjey */}
        <div className=" mt-[-10px] flex items-center mx-auto justify-center">
          <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
            <button
              value={textToCopy}
              onClick={() => navigator.clipboard.writeText("npx surya-dev")}
              className=" py-2 px-5 sm:py-4 md:py-6 mt-10 sm:px-7 md:px-9 flex text-xl md:text-2xl justify-center rounded-md border border-slate-700 bg-[length:200%_100%] font-medium text-slate-400 hover:border-green"
            >
              <pre className="flex items-center justify-center gap-2">
                npx surya-dev
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="lucide lucide-clipboard-copy "
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                  <path d="M16 4h2a2 2 0 0 1 2 2v4"></path>
                  <path d="M21 14H11"></path>
                  <path d="m15 10-4 4 4 4"></path>
                </svg>
              </pre>
            </button>
          </CopyToClipboard>
        </div>
        {copyStatus && (
          <p className="text-green font-semibold   text-center">Copied!</p>
        )}
      </div>
    </section>
  );
};

export default About;
