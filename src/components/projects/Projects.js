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
          title="Nike Landing Page"
          des=" I created a Nike landing page using React and Tailwind CSS. The project features a fully responsive layout that adjusts perfectly to all screen sizes. "
          src={projectOne}
        />
        <ProjectsCard
          title="Tour & Travel"
          des="I built a Tour and Travels website using React and Tailwind CSS. The website features destination listings, package details, and booking options. "
          src={projectThree}
        />
        <ProjectsCard
          title="Hotel Management"
          des="I designed a Hotel Website using React and Tailwind CSS. The site includes sections for room listings, pricing details, and a booking form. "
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
