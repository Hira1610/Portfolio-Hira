import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Spearheaded a $12M software project"
          des=" From design to distribution as a senior software engineer in a 12people team."
          src={projectOne}
        />
        <ProjectsCard
          title="30% improved query efficiency"
          des="By designing and fully revising a large MySQL database"
          src={projectThree}
        />
        <ProjectsCard
          title="Coordinated a year-long release of a six-part platform
project"
          des="With PM's, marketing, BA, QA, and sales department."
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
