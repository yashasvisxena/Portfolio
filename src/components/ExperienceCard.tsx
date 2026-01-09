import type { ExperienceConfig } from "@/config/config";

export const ExperienceCard = ({
  title,
  company,
  duration,
  location,
  description,
}: (typeof ExperienceConfig)[0]) => {
  return (
    <div className="flex items-center justify-between px-2 w-full">
      <div className="flex flex-col gap-2">
        <p className="text-xl md:text-2xl font-semibold">
          {title} at {company}
        </p>
        <p className="text-lg md:text-xl font-normal px-2">{location}</p>
        <div className="w-full">
          {description.map((desc, index) => (
            <p
              key={index}
              className="text-sm md:text-base font-normal text-foreground/60 px-2 mb-2"
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
      <span className="w-1/3 text-end text-xl md:text-2xl font-semibold">
        {duration}
      </span>
    </div>
  );
};
