import Image from "next/image";
import { motion } from "framer-motion";

type StackCardTypeProps = {
  title: string;
  imageUrl: string;
};

export default function StackCard({ title, imageUrl }: StackCardTypeProps) {
  return (
    <motion.div
      className="flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-[#1e2329] p-3 transition-colors duration-200 hover:border-green-500/40 hover:bg-[#252b32]"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <figure className="h-9 w-9 shrink-0">
        <Image
          src={imageUrl}
          alt={`${title} icon`}
          height={72}
          width={72}
          className="h-full w-full object-contain"
        />
      </figure>
      <span className="text-center text-sm font-semibold text-gray-200">
        {title}
      </span>
    </motion.div>
  );
}
