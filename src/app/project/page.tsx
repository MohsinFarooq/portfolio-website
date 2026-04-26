"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";
import ProjectsGrid from "@/components/project-grid/project-grid";

export default function Project() {
  return (
    <>
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
          title="Projects"
          description="A curated collection of my development projects, demonstrating my expertise and creativity in crafting efficient and user-centric solutions. Each project showcases my journey of turning ideas into functional applications, reflecting my passion for innovation and attention to detail."
          isHome={false}
        />
      </motion.div>

      <motion.div
        className="flex flex-col flex-grow w-full"
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
            Projects
          </h1>
        </div>

        {/* Main Content */}
        <div className="w-full p-6">
          <ProjectsGrid />
        </div>
      </motion.div>
    </>
  );
}
