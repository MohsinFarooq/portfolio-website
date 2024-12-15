import { IconType } from "react-icons";
type IconComponent = IconType;
type InfoCardTypeProps = {
  icon: IconComponent;
  title: string;
  description: string;
};
export default function InfoCard({
  icon: IconComponent,
  title,
  description,
}: InfoCardTypeProps) {
  return (
    <div className="w-full min-h-full bg-dark-cards_200 rounded-3xl shadow-sm p-5">
      <div className="flex flex-col gap-2 w-full min-h-fit">
        <span className="self-start text-3xl text-white">
          <IconComponent className="text-green-400" />
        </span>
        <div className="flex flex-col w-full p-1">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-md text-gray-300 font-light w-[95%] p-0 mt-2 min-h-fit">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
