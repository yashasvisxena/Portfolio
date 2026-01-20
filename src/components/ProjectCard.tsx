import type { ProjectConfig } from '@/config/projectConfig';
import { cn } from '@/lib/utils';
import { Github, Link } from 'lucide-react';

import { Badge } from './ui/badge';
import { Button } from './ui/button';

export const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof ProjectConfig)[0];
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-8 w-full justify-between items-center md:gap-10 py-4',
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      <div className='w-full md:w-5/12 shrink-0 border rounded-2xl overflow-hidden shadow-lg group'>
        <img
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
          src={project.image}
          alt={project.name}
        />
      </div>
      <div
        className={cn(
          'flex flex-col gap-4 md:w-6/12',
          index % 2 === 0
            ? 'md:items-end md:text-right text-center items-center'
            : 'md:items-start md:text-left text-center items-center'
        )}
      >
        <h1 className='text-3xl md:text-4xl font-bold tracking-tight'>
          {project.name}
        </h1>
        <p className='font-light leading-relaxed text-foreground/80 md:text-lg'>
          {project.description}
        </p>
        <div
          className={cn(
            'flex flex-wrap gap-2 justify-center',
            index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
          )}
        >
          {project.techStack.map((tech, index) => (
            <Badge
              className='text-xs md:text-sm py-1 px-3 bg-foreground/10 text-foreground hover:bg-foreground/20 border-none'
              key={index}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div
          className={cn(
            'flex gap-3 mt-2',
            index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
          )}
        >
          <Button
            variant='outline'
            size='sm'
            onClick={() => window.open(project.live, '_blank')}
            className='rounded-full'
          >
            <Link className='w-4 h-4 mr-2' />
            Live
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => window.open(project.github, '_blank')}
            className='rounded-full'
          >
            <Github className='w-4 h-4 mr-2' />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};
