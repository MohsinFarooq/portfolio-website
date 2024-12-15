type EducationTypeProp = {
  title: string;
  year: string;
  occupation: string;
  organization: string;
  subtitle?: string;
  descriptionList: string[];
};

export default function EducationCard({
  title,
  year,
  occupation,
  organization,
  subtitle,
  descriptionList,
}: EducationTypeProp) {
  return (
    <div className="w-full min-h-fit p-6 bg-dark-cards_200 rounded-3xl shadow-lg">
      <div className="flex flex-col p-4 gap-6">
        <div className="flex flex-col gap-1 w-full">
          <h1 className="md:text-3xl text-2xl text-white font-bold capitalize">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-400 font-semibold">{subtitle}</p>
          )}
          <p className="text-md text-gray-200 font-semibold">{occupation}</p>
          <p className="text-md text-gray-300 font-light">{organization}</p>
        </div>
        <ul className="w-full list-disc px-4 flex flex-col gap-2 font-light">
          {descriptionList.map((desc, index) => (
            <li key={index} className="text-md text-gray-200">
              {desc}
            </li>
          ))}
        </ul>
        <div className="px-4">
          <p className="text-sm text-gray-400">{year}</p>
        </div>
      </div>
    </div>
  );
}
