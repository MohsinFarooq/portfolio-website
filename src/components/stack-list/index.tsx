import Image from "next/image";
import { ReactNode } from "react";

type StackListTypeProps = {
  title: string;
  image?: string;
  icon?: ReactNode;
  isTechList: boolean; // to determine whether the listView is used for tech stack or not
  url?: string; // used for non-tech list
};

export default function ListView({
  title,
  image,
  icon: Icon,
  isTechList,
  url,
}: StackListTypeProps) {
  return (
    <div className={`${isTechList ? "" : "md:pr-9"} w-full min-h-fit`}>
      {/* Conditional anchor tag if it's a social/contact link */}
      {isTechList ? (
        <div className="flex items-center justify-center gap-4 w-full shadow-md bg-dark-cards_200 rounded-2xl p-3 cursor-pointer">
          <figure className="w-12 h-12">
            {image && (
              <Image
                src={image}
                alt={`${title} logo`}
                height={500}
                width={500}
                priority
                className="w-full h-full object-contain"
              />
            )}
          </figure>
          <p className="text-xl capitalize font-bold text-white w-full">
            {title}
          </p>
        </div>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 w-full shadow-md hover:scale-105 transition duration-500  bg-dark-cards_200 rounded-2xl p-3 cursor-pointer"
        >
          <span className="text-3xl text-white">{Icon}</span>
          <p className="text-xl capitalize font-medium text-white w-full">
            {title}
          </p>
        </a>
      )}
    </div>
  );
}
