import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { SkillsConfig } from '@/config/config';

export const Skills = () => {
  return (
    <section id='skills' className='flex items-center'>
      <div className='w-full flex flex-col items-start gap-4'>
        <p className='text-xl md:text-2xl border border-foreground/20 rounded-full font-semibold text-start px-4 py-1'>
          Skills
        </p>
        <div className='grid grid-cols-1 gap-3 w-full'>
          {SkillsConfig.map((skill, index) => (
            <>
              <SkillCard key={index} {...skill} />
              {index !== SkillsConfig.length - 1 && (
                <Separator className='w-full bg-foreground/20' />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills }: (typeof SkillsConfig)[0]) => {
  return (
    <div className='flex flex-col gap-4 p-4 py-2 rounded-lg'>
      <h3 className='text-xl md:text-2xl font-semibold'>{title}</h3>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <Badge
            className='text-sm md:text-base bg-accent-foreground md:px-4 px-3 md:py-1 py-1'
            key={index}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};
