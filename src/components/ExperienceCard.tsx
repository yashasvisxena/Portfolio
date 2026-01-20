import type { ExperienceConfig } from '@/config/experienceConfig';

import { Badge } from './ui/badge';

export const ExperienceCard = ({
  title,
  company,
  duration,
  location,
  description,
  techStack,
}: (typeof ExperienceConfig)[0]) => {
  return (
    <div className='flex flex-col md:flex-row md:items-start justify-between w-full py-6 gap-4 border-b border-foreground/10 last:border-0 px-1'>
      <div className='flex flex-col gap-2 flex-1'>
        <div className='flex flex-col gap-0.5'>
          <h3 className='text-xl md:text-2xl font-bold leading-tight'>
            {title}{' '}
            <span className='font-normal text-foreground/60 text-lg md:text-xl'>
              at
            </span>{' '}
            {company}
          </h3>
          <p className='text-base md:text-lg font-medium text-foreground/70'>
            {location}
          </p>
          <div className='flex flex-wrap gap-2 mt-2'>
            {techStack.map((tech, index) => (
              <Badge
                className='text-xs md:text-sm py-1 px-3 bg-foreground/10 text-foreground hover:bg-foreground/20 border-none'
                key={index}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-2 mt-2'>
          {description.map(
            (desc, index) =>
              desc && (
                <div key={index} className='flex gap-2'>
                  <span className='mt-2 h-1.5 w-1.5 rounded-full bg-foreground/30 shrink-0' />
                  <p className='text-sm md:text-base font-normal text-foreground/60 leading-relaxed'>
                    {desc}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
      <div className='md:text-right shrink-0'>
        <span className='text-xl md:text-2xl font-semibold'>{duration}</span>
      </div>
    </div>
  );
};
