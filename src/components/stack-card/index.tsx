import Image from "next/image";
import { motion } from "framer-motion";

type StackCardTypeProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function StackCard({
  title,
  description,
  imageUrl,
}: StackCardTypeProps) {
  return (
    <motion.div
      className="h-72 w-full p-6 bg-dark-200 rounded-3xl transition duration-500 cursor-pointer"
      whileHover={{
        scale: 1.05,
        rotate: -2,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#2C2C2E",
      }}
      transition={{ type: "spring", stiffness: 600, damping: 35 }}
    >
      <div className="h-full w-full flex flex-col justify-between">
        <figure className="w-16 h-16">
          <Image
            src={imageUrl}
            alt={`${title} icon`}
            height={500}
            width={500}
            className={`w-full h-full ${
              title === "Cypress" ? "object-contain" : "object-cover"
            }`}
          />
        </figure>
        <div className="flex flex-col gap-3 w-full px-4">
          <h1 className="text-2xl text-white font-bold">{title}</h1>
          <p className="text-md font-light text-gray-200">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
