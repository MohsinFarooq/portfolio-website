"use client";
import Header from "@/components/header";
import StackCard from "@/components/stack-card";
import { motion } from "framer-motion";
import { stackInfo } from "@/utils/stack-info";

export default function Stack() {
  return (
    <motion.div className="min-h-screen w-full">
      <motion.div className="flex flex-col gap-6 min-h-fit mb-6">
        <motion.div
          className="h-80 bg-dark-200 rounded-3xl p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.22,
            type: "spring",
          }}
        >
          <Header
            title="Stack"
            description="Technologies I Use to Build and Innovate"
            isHome={false}
          />
        </motion.div>
        <motion.div className="w-full min-h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {Object.entries(stackInfo).map(
            ([key, { title, description, icon }], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.8, 1], x: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                }}
              >
                <StackCard
                  title={title}
                  description={description}
                  imageUrl={icon}
                />
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
