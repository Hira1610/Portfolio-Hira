import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="relative mt-6 lgl:mt-14 w-full flex flex-col gap-10">
          {/* Vertical Line with Auto Height */}
          <div className="absolute left-[-5px] top-0 w-[6px] min-h-full bg-black opacity-30"></div>
          {/* Changed height to 'min-h-full' to make it responsive */}

          {/* Resume Cards */}
          <ResumeCard
            title="Junior Software Engineer"
            subTitle="Devinity Solutions | 2024 "
            result="Completed"
            des={
              <ul className="list-disc pl-5 space-y-2">
                <li>I worked on their Management System Project and contributed to multiple other projects. My primary responsibilities included developing and maintaining user-friendly interfaces, ensuring responsive designs, and implementing real-time functionalities.</li>
                <li>Built dynamic and reusable components to create scalable user interfaces.</li>
                <li>Designed modern, accessible, and responsive layouts.</li>
                <li>Ensured type safety and maintainability in the codebase.</li>
                <li>Integrated real-time communication features for enhanced user interaction.</li>
                <li>Applied utility-first styling to create consistent and elegant designs.</li>
                <li>Enhanced interactivity and implemented core application logic.</li>
                <li>Managed global state for seamless data flow across components.</li>
                <li>Developed core features for the management system, including user dashboards, analytics, and notifications.</li>
                <li>Collaborated with backend engineers to integrate WebSockets (Socket.io) for realtime features like chat and notifications.</li>
                <li>Improved project performance and responsiveness by optimizing components and layouts.</li>
                <li>Collaborated with the team to troubleshoot and resolve issues, ensuring timely project delivery.</li>
                <li>Implemented role-based access control and real-time updates to enhance system functionality.</li>
              </ul>
            }
            
          />
          {/* Add more ResumeCards as needed */}
        </div>
      </div>
      {/* Optional Additional Section */}
      {/* 
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      */}
    </motion.div>
  );
};

export default Experience;
