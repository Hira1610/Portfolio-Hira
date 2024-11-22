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
            title="Senior Software Engineer"
            subTitle="Bain & Company - 07-2016 "
            des="Designed and implemented 5+ scalable, high-performance web
applications using JavaScript, React, Node.js, Express, and MongoDB
Delivered seamless integration between frontend and backend
components, ensuring data flow efficiency across 100% of applications
Migrated applications from React to Next.js, increasing load speed by
20%
Developed 10+ serverless backend APIs using AWS Lambda and
GraphQL, improving scalability and cost-efficiency
Leveraged AWS services like EC2, S3, and CloudFront for
infrastructure, ensuring rapid deployment and efficient content
delivery for 20+ projects
Built and deployed 5+ microservices using Node.js, Express, and
Docker, orchestrated with Kubernetes
Automated deployment workflows using Jenkins and
GitLab CI/CD pipelines, ensuring smooth integration and faster release
cycles by 30%
Established continuous monitoring and logging with Datadog,
improving response time to incidents by 40%
Optimized database performance by designing scalable PostgreSQL's
schemas and implementing advanced indexing and partitioning
strategies for 10+ databases
Enhanced query efficiency, reducing latency by 35%
Developed RESTful and GraphQL API endpoints using Node.js,
ensuring efficient communication with front-end applications
Connected 20 cryptocurrency exchange APIs for real-time data
processing using Axios
Containerized applications using Docker for consistent development
environments across 5+ teams
Set up performance dashboards using Datadog and AWS
CloudWatch, reducing performance bottlenecks and optimizing
server-side processing times by 25%
Ensured high test coverage with comprehensive unit and integration
tests using Jest and Cypress, achieving over 90% coverage
"
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
