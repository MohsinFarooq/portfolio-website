"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Link from "next/link";
import EducationCard from "@/components/education-card";

export default function Education() {
  return (
    <>
      {/* Header Section */}
      <motion.div
        className="bg-dark-200 rounded-3xl p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.2,
          type: "spring",
        }}
      >
        <Header
          title="Education & Experience"
          description="An overview of my academic achievements and professional journey, highlighting the skills and experiences that have shaped my path as a developer. From foundational studies to real-world applications, this section captures my continuous growth and dedication to the tech field."
          isHome={false}
        />
      </motion.div>

      {/* Experience Title */}
      <motion.div
        className="w-full min-h-fit mb-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.7, 1], x: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.3,
          type: "spring",
        }}
      >
        <div className="flex items-center justify-between w-full min-h-fit pl-8">
          <h1 className="pl-2 py-3 text-2xl uppercase text-white font-bold lg:mt-0 mt-2">
            Experience
          </h1>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        className="w-full min-h-fit mb-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.7, 1], x: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.4,
          type: "spring",
        }}
      >
        <ul className="timeline bg-dark-cards_200 rounded-3xl p-6 m-6 timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 hidden md:block w-5 text-green-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2022 December - Present</time>
              <div className="text-lg font-black">
                Junior Frontend Developer (Angular),{" "}
                <Link
                  href="https://www.cyberspark.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="italic font-light text-sm text-green-400">
                    Cyberspark
                  </span>
                </Link>
              </div>
              <p>
                In my current role, I work on integrating APIs from the backend
                into the frontend to enable efficient data fetching and user
                interactions. I am responsible for end-to-end testing using
                Cypress, maintaining build processes on Jenkins, troubleshooting
                UI bugs, and managing GitLab pipelines and webhooks. This
                position has strengthened my skills in Angular development,
                testing, and CI/CD practices
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 hidden md:block w-5 text-green-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 mt-4 md:mt-0">
              <time className="font-mono italic">
                2022 September - 2022 December
              </time>
              <div className="text-lg font-black">
                Frontend Developer Intern,{" "}
                <Link
                  href="https://www.cyberspark.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="italic font-light text-sm text-green-400">
                    Cyberspark
                  </span>
                </Link>
              </div>
              <p>
                During my internship, I gained hands-on experience with Nx
                monorepos, focusing on optimizing and maintaining shared code
                across projects. My responsibilities included fixing UI bugs,
                writing and refining unit tests, and building reusable
                components for our shared component library from scratch. This
                role significantly enhanced my skills in collaborative coding,
                testing, and component-driven development.
              </p>
            </div>
          </li>
        </ul>
      </motion.div>

      {/* Education & Certification Section */}
      <motion.div
        className="w-full flex flex-wrap mb-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.7, 1], x: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.5,
          type: "spring",
        }}
      >
        <div className="flex items-center justify-between w-full min-h-fit pl-8">
          <h1 className="pl-2 py-3 text-2xl uppercase text-white font-bold lg:mt-0 mt-2">
            Education
          </h1>
        </div>
        {/* Education Section */}
        <div className="w-full p-6">
          <EducationCard
            title="Bachelor's of Computer Applications (BCA)"
            year="2020 - 2023"
            occupation="Computer Science"
            organization="Cluster University Srinagar"
            descriptionList={[
              "Achieved a CGPA of 8.24",
              "Strengthened foundational skills in programming languages such as C and C++.",
              "Gained knowledge in Data Structures and Algorithms (DSA) and Database Management.",
              "Focused on web development, including front-end and back-end technologies.",
            ]}
          />
        </div>
      </motion.div>
    </>
  );
}
