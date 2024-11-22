/* eslint-disable react/jsx-no-undef */
import React from "react";
// import { AiFillAppstore } from "react-icons/ai";
// import { FaMobile, FaGlobe } from "react-icons/fa";
// import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";
// import { SiJira } from "react-icons/si";
import { SiMongodb, SiMysql,SiNextdotjs,SiCss3} from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import {figma} from "../../assets/index";


// import { SiPhotoshop, SiFigma, SiAdobe } from 'react-icons/si';
// import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaAdobe } from 'react-icons/fa';

import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Skills" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <Card title="HTML" icon={<FaHtml5 className="text-red-600" />} />
      <Card title="CSS3" icon={<SiCss3 className="text-blue-600" />} />
<Card title="JavaScript" icon={<FaJs className="text-yellow-500" />} />
<Card title="React Js" icon={<FaReact className="text-blue-500" />} />
<Card title="Node Js" icon={<FaNodeJs className="text-green-600" />} />
<Card title="Next.JS" icon={<SiNextdotjs className="text-white" />} />
<Card title="Figma" icon={<img src={figma} alt="Figma" className=" h-20 w-20" />} />
<Card title="My Sql" icon={<SiMysql className="text-[#00618C]" />} />
<Card title="MongoDB" icon={<SiMongodb className="text-green-700" />} />
<Card title="GitHub" icon={<FaGithub className="text-white" />} />

        {/* <Card title="Jira" icon={<SiJira />} /> */}

      </div>
    </section>
  );
};

export default Features;
