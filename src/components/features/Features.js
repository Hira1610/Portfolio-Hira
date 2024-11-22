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
  FaDocker,
  FaHtml5,
  FaCss3,
  FaAws,
} from "react-icons/fa";
// import { SiJira } from "react-icons/si";
import { SiTypescript, SiMongodb, SiExpress ,SiMysql,SiKubernetes,SiNextdotjs} from "react-icons/si";

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
        <Card title="HTML" icon={<FaHtml5 />} />
        <Card title="CSS" icon={<FaCss3 />} />

        <Card title="JavaScript" icon={<FaJs />} />
        <Card title="React Js" icon={<FaReact />} />
        <Card title="TypeScript" icon={<SiTypescript />} />
        <Card title="Nods Js" icon={<FaNodeJs />} />
        {/* <Card title="Trello" icon={<SiTrello />} /> */}

        <Card title="MongoDB" icon={<SiMongodb />} />
        <Card title="Kubernetes" icon={<SiKubernetes />} />
        <Card title="Next.JS" icon={<SiNextdotjs />} />

        <Card title="Express JS" icon={<SiExpress />} />
        <Card title="My Sql" icon={<SiMysql />} />
        <Card title="GitHub" icon={<FaGithub />} />
        <Card title="Docker" icon={<FaDocker />} />

        <Card title="AWS" icon={<FaAws />} />
        {/* <Card title="Jira" icon={<SiJira />} /> */}

      </div>
    </section>
  );
};

export default Features;
