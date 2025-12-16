"use client";
import { LiaBrainSolid } from "react-icons/lia";
import { FaInfinity, FaRocket } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "@/components/header";
import InfoCard from "@/components/info-card";
import ListView from "@/components/stack-list";
import Slider from "@/components/swiper";
import { stackInfo } from "@/utils/stack-info";

const selectedTechStackOnMainPage = ["angular", "react", "cypress", "jenkins"];

export default function Home() {
  return (
    <section className="min-h-screen">
      <Head>
        <title>Mohsin Farooq</title>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <meta property="og:title" content="Mohsin Farooq" />
        <meta
          property="og:description"
          content="Frontend Developer Portfolio"
        />
        <meta property="og:image" content="/images/profile.jpeg" />
        <meta property="og:url" content="https://mohsinfarooq.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohsin Farooq" />
        <meta
          name="twitter:description"
          content="Frontend Developer Portfolio"
        />
        <meta name="twitter:image" content="/images/profile.jpeg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="M." />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="flex flex-col min-h-fit w-full gap-4">
        <motion.div
          className="min-h-fit bg-dark-cards_200 shadow-sm rounded-3xl flex items-start justify-center lg:justify-start lg:items-center lg:flex-row flex-col gap-8 p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.5, 1], x: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: 0.22,
            type: "spring",
          }}
        >
          {/* Header */}
          <div className=" flex flex-col gap-4 w-full">
            <Header
              title="Hello! I'm Mohsin."
              description={
                <>
                  I&apos;m a Frontend Developer with{" "}
                  <span className="text-green-400">3+ years of experience</span>
                  , specializing in creating seamless, responsive user
                  interfaces. Skilled in Angular and Nx monorepos, I excel at
                  building polished UI designs and integrating APIs with
                  front-end components. With a focus on detail and quality, I
                  have hands-on experience in both end-to-end and unit testing,
                  and I&apos;m building my expertise in CI/CD practices using
                  Jenkins. Outside of work, I&apos;m passionate about football,
                  a dedicated reader, and enjoy writing as a creative outlet.
                </>
              }
            />

            <Link
              className="btn btn-sm py-2 text-md md:ml-0 xl:ml-8 md:mt-0 font-bold lg:w-36 flex items-center justify-center w-full my-2 hover:bg-hover_btn rounded-3xl self-start  bg-green-700 text-gray-100"
              href={
                "https://drive.google.com/file/d/1wrv0co-OyxsHfj9q99O3xTpQ3DGNmwYF/view?usp=drive_link"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        {/* Second Section */}
        <div className="flex xl:flex-row flex-col w-full min-h-fit gap-5">
          {/* About */}
          <motion.div
            className="flex flex-col xl:w-[60%] w-full min-h-fit"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: [0, 0.9, 1], x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.2,
              type: "spring",
            }}
          >
            <h1 className="pl-2 py-3 text-2xl uppercase font-bold text-white">
              About
            </h1>
            <div className="grid grid-cols-4 gap-4">
              <motion.div
                className="lg:col-span-2 col-span-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.2,
                  type: "spring",
                }}
              >
                <InfoCard
                  title={"Problem Solver"}
                  description={
                    "Fresh perspective, passionate about innovative solutions."
                  }
                  icon={LiaBrainSolid}
                />
              </motion.div>
              <motion.div
                className="lg:col-span-2 col-span-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3,
                  type: "spring",
                }}
              >
                <InfoCard
                  title={"Adaptable"}
                  description={
                    "Quick to adapt in fast-changing environments, always ready to take on new challenges and learn from experiences."
                  }
                  icon={FaInfinity}
                />
              </motion.div>
              <motion.div
                className="col-span-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.4,
                  type: "spring",
                }}
              >
                <InfoCard
                  title={"Self Motivated"}
                  icon={FaRocket}
                  description={
                    "Highly driven, with a proactive attitude to constantly improve skills, learn independently, and achieve excellence in every project."
                  }
                />
              </motion.div>
            </div>
          </motion.div>
          {/* Stack */}
          <motion.div
            className="flex flex-col xl:w-[40%] w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
              delay: 0.2,
              type: "spring",
            }}
          >
            <div className="pl-2 py-3 flex justify-between items-center">
              <h1 className="text-2xl w-full uppercase font-bold text-white">
                Stack
              </h1>
              <Link
                className="btn btn-sm p-1 text-md font-bold lg:w-30 flex items-center justify-center w-28 my-2 hover:bg-hover_btn rounded-3xl bg-green-700 text-gray-100"
                href={"/stack"}
              >
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-5 h-full w-full">
              {selectedTechStackOnMainPage.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: 70 }}
                  animate={{ opacity: [0, 0.7, 1], x: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                  }}
                >
                  <ListView
                    title={stackInfo[tech]?.title}
                    image={stackInfo[tech]?.icon}
                    isTechList={true}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Projects Section */}
        <motion.div
          className="w-full min-h-fit mb-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.7, 1], x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.25,
            type: "spring",
          }}
        >
          <div className="flex items-center justify-between w-full min-h-fit">
            <h1 className="pl-2 py-3 text-2xl uppercase text-white font-bold mb-2 lg:mt-0 mt-2">
              Recent Projects
            </h1>
            <Link
              className="btn btn-sm p-1 text-md font-bold lg:w-30 flex items-center justify-center w-24 my-2 hover:bg-hover_btn rounded-3xl bg-green-700 text-gray-100"
              href={"/project"}
            >
              View All
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row w-full min-h-fit gap-5 items-center justify-center rounded-2xl bg-dark-cards_200">
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
        {/* Testimonials */}
        <motion.div
          className="min-h-fit w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.7, 1], x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.25,
            type: "spring",
          }}
        >
          <h1 className="text-2xl text-white font-bold uppercase pl-2 py-3 mb-2">
            Testimonials
          </h1>
          <Slider />
        </motion.div>
      </div>
    </section>
  );
}
