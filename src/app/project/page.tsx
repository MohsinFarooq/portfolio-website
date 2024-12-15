"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";

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
        <div className="flex flex-grow items-center justify-center w-full h-screen p-6">
          {/* Coming Soon Section */}
          <div className="bg-dark-300 rounded-xl p-10 text-center w-full max-w-2xl bg-dark-cards_200">
            <h2 className="text-green-400 text-2xl font-semibold">
              Coming Soon!
            </h2>
            <p className="text-gray-300 mt-4">
              Stay tuned! Exciting projects are on their way.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
