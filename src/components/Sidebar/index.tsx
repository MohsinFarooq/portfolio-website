"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiBrain } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const links = ["Home", "Project", "Experience", "Stack", "Contact"];
  const [activeUrl, setActiveUrl] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isActive = (path: string) => isMounted && pathName === path;

  const handleUrlClick = (url: string) => {
    setActiveUrl(url);
  };

  return (
    <div className="rounded-2xl px-2 h-[100%] bg-dark-cards_200 py-7">
      <div className="flex flex-col justify-around min-h-full items-center">
        <div className="w-full min-h-fit mb-8">
          <div className="flex w-full bg-white h-0 justify-center mb-16">
            <span className="w-44 py-3 badge rounded-xl bg-gray-200 text-green-700 text-sm border-opacity-5 mb-8 flex items-center justify-center gap-1">
              <motion.div
                className="rounded-full"
                initial={{
                  scale: 1,
                  boxShadow: "0 0 0 0 #00a86b",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 #00a86b",
                    "0 0 0 10px rgba(51, 217, 178, 0)",
                    "0 0 0 0 rgba(51, 217, 178, 0)",
                  ],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                }}
              >
                <GiBrain />
              </motion.div>
              <span className="ml-2 font-semibold">Fixing bugs</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <motion.div
              key={link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => handleUrlClick(link)}
                className={`text-3xl uppercase font-bold ${
                  activeUrl &&
                  isActive(link === "Home" ? "/" : `/${link.toLowerCase()}`)
                    ? "text-green-400"
                    : "text-white"
                }`}
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex lg:flex-col gap-2 items-center py-10">
          <figure className="w-16 h-16">
            <Image
              src="/images/mohsin.jpeg"
              alt="profile picture"
              priority
              height={500}
              width={500}
              className="w-full h-full object-cover rounded-full"
              style={{ objectPosition: "50% 85%" }}
            />
          </figure>
          <div className="flex flex-col text-center">
            <p className="text-lg text-white font-bold">Mohsin Farooq</p>
            <p className="text-xs font-light">Front-End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
