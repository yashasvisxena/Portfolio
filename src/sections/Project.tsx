import { ProjectCard } from '@/components/ProjectCard';
import { ProjectConfig } from '@/config/projectConfig';

const Project = () => {
  return (
    <section id='project' className='flex items-center'>
      <div className='w-full flex flex-col items-start gap-4'>
        <p className='text-2xl border border-foreground/20 rounded-full font-semibold text-start px-3 py-1'>
          Project
        </p>
        <div className='w-full space-y-4 px-2'>
          {ProjectConfig.map((project, index) => (
            <>
              <ProjectCard key={project.name} project={project} index={index} />
              {index !== ProjectConfig.length - 1 && (
                <div className='w-full h-px bg-foreground/10' />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
