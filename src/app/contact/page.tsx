"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";
import ListView from "@/components/stack-list";
import { FiGithub, FiInstagram } from "react-icons/fi";
import ContactForm from "@/components/contact-form";
import { LuPhone } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
export default function Contact() {
  return (
    <>
      <motion.div className="min-h-screen w-full">
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
            title="Contact Me"
            description={
              <>
                Ready to debug, brainstorm, or collaborate?{" "}
                <span className="text-green-400">Let’s connect</span> & make
                awesome things happen! Whether it&apos;s code or conversation,
                I&apos;m just a message away.
              </>
            }
            isHome={false}
          />
        </motion.div>
        <motion.div
          className="min-h-fit w-full flex lg:flex-row flex-col gap-4 mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.3,
            type: "spring",
          }}
        >
          <div className="lg:w-[60%] w-full h-full flex flex-col gap-3 pl-0 md:pl-8">
            <h1 className="text-2xl uppercase text-white py-3 font-bold pl-8 md:pl-0">
              Reach Out
            </h1>
            <ContactForm />
          </div>
          <motion.div
            className="lg:w-[40%] flex flex-col w-full gap-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <div className="lg:w-[60%] w-full flex flex-col gap-3 pl-8 md:pl-0">
              <h1 className="text-2xl uppercase text-white py-3 font-bold">
                Socials
              </h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.5,
                type: "spring",
              }}
            >
              <ListView
                title="+916006713403"
                isTechList={false}
                icon={<LuPhone />}
                url={"tel:+916006713403"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.6,
                type: "spring",
              }}
            >
              <ListView
                title="LinkedIn"
                isTechList={false}
                icon={<CiLinkedin />}
                url={"https://www.linkedin.com/in/mohsin-farooq-352a98215/"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.7,
                type: "spring",
              }}
            >
              <ListView
                title="Github"
                isTechList={false}
                icon={<FiGithub />}
                url={"https://github.com/MohsinFarooq"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.7,
                type: "spring",
              }}
            >
              <ListView
                title="Instagram"
                isTechList={false}
                icon={<FiInstagram />}
                url={"https://www.instagram.com/mohsinfarooq.x/"}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
