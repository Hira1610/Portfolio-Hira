import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiBootstrap, SiFigma, SiNextdotjs, SiReact } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [" Software Engineer.", "ReactJS Developer.","UI/UX Developer."],
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
        Hi, I'm <span className="bg-gradient-to-r from-[#ce4257] to-[#4c7cf5] bg-clip-text text-transparent">HIRA </span>
      </h1>

  
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white"> {/* Responsive text */}
          a <span className="bg-gradient-to-r from-[#ce4257] to-[#4c7cf5] bg-clip-text text-transparent">
  {text}
</span>

          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont font-normal leading-7 tracking-wide">
  Junior MERN Stack Developer with 3 Months of Hands-On Experience in building scalable, high-performance web applications. Skilled in utilizing MongoDB, React.js, and Node.js to create engaging user interfaces and reliable back-end systems. Demonstrated ability to learn quickly, adapt to new technologies, and collaborate effectively within a team to achieve project goals. Eager to continue growing expertise in best practices for coding, testing, and deployment.
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
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
          </div>
        </div>
      </div>
  );
};

export default LeftBanner;
