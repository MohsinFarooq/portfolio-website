import { ReactNode } from "react";
type HeaderProps = {
  title: string;
  description: ReactNode;
  isHome?: boolean;
};
export default function Header({ title, description, isHome }: HeaderProps) {
  return (
    <div
      className={`flex flex-col h-full gap-3 w-full rounded-3xl ${
        isHome ? "lg:w-[90%]" : ""
      }
        ${!isHome ? "p-8 gap-3" : ""} bg-dark-cards_200 justify-end`}
    >
      <h1 className="text-4xl capitalize font-bold text-white">{title}</h1>
      <p className="text-md text-gray-300 font-light">{description}</p>
    </div>
  );
}
