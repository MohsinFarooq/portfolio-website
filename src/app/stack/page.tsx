"use client";
import Header from "@/components/header";
import StackCard from "@/components/stack-card";
import { motion } from "framer-motion";
import { stackInfo, stackCategoryOrder } from "@/utils/stack-info";

export default function Stack() {
  const entries = Object.entries(stackInfo);

  return (
    <motion.div className="min-h-screen w-full">
      <motion.div className="flex flex-col gap-10 min-h-fit mb-6">
        <motion.div
          className="bg-dark-200 rounded-3xl p-6"
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

        <div className="flex flex-col gap-10">
          {stackCategoryOrder.map((category, sectionIndex) => {
            const items = entries.filter(
              ([, info]) => info.category === category
            );
            if (items.length === 0) return null;

            return (
              <section key={category} className="flex flex-col gap-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  {category}
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {items.map(([key, { title, icon }], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                        delay: Math.min(
                          0.04 * index + 0.08 * sectionIndex,
                          0.4
                        ),
                      }}
                    >
                      <StackCard title={title} imageUrl={icon} />
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
