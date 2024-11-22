import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiMongodb, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Senior Software Engineer.", "MERN Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 pl-6 md:pl-12">
    <div className="flex flex-col gap-5 sm:mt-6"> {/* Added sm:mt-6 for small screens */}
      <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
      <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold text-white">
        Hi, I'm <span className="text-designColor capitalize">BAHATI BASESELA</span>
      </h1>

  
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white"> {/* Responsive text */}
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont font-normal leading-7 tracking-wide">
          Seasoned MERN stack expert with an impressive 8-year track record of developing scalable, high-performance web applications. Proficient in leveraging MongoDB, Express.js, React.js, and Node.js to deliver seamless user experiences and robust back-end solutions. Proven ability to collaborate cross-functionally and drive project success while employing best practices in coding, testing, and deployment.
        </p>

      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between -mt-20">
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
   
  );
};

export default LeftBanner;
