import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2022 - 2016</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>

        {/* Container for the Line and the Cards */}
        <div className="relative mb-20 mt-6 lgl:mt-1 w-full flex flex-col gap-10">
          {/* Responsive Vertical Line */}
          <div className="absolute left-0 top-0 w-[6px] bg-black opacity-30 h-full"></div>
          {/* Vertical line now spans the full height dynamically */}

          {/* Resume Cards */}
          <div className="pl-1 mt-10">
            <ResumeCard
              title="B.S. in Software Engineering"
              subTitle="National College of Business & Economics (2022 -2026)"
              result="3.78/4"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />

            {/* Additional Cards (adjust the line height accordingly) */}
            <div className="relative mt-10 w-full flex flex-col gap-10">
              <ResumeCard
                title="Data Science with Python"
                subTitle="University of Engineering & Technology (2022 - 2022)"
                result="A Grade"
                des="Comprehensive certification covering Analyzing,Testing,Python,Data Mining principles."
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
