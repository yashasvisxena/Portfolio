import { ExperienceCard } from '@/components/ExperienceCard';
import { ExperienceConfig } from '@/config/experienceConfig';

const Experience = () => {
  return (
    <section id='experience' className='flex items-center'>
      <div className='w-full flex flex-col items-start gap-4'>
        <p className='text-2xl border border-foreground/20 rounded-full font-semibold text-start px-3 py-1'>
          Experience
        </p>
        <div className='w-full px-2'>
          {ExperienceConfig.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
