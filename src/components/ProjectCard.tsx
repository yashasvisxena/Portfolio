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
        index % 2 === 0 ? 'flex-row text-right' : 'flex-row-reverse text-left',
        'flex gap-4 w-full justify-between items-center'
      )}
    >
      <div className='w-5/12 shrink-0 border rounded-md'>
        <img className='object-cover' src={project.image} alt={project.name} />
      </div>
      <div
        className={cn(
          index % 2 === 0 ? 'items-end' : 'items-start',
          'flex flex-col gap-3'
        )}
      >
        <h1 className='text-3xl font-semibold'>{project.name}</h1>
        <p className='font-light leading-relaxed'>{project.description}</p>
        <div className='flex flex-wrap gap-2'>
          {project.techStack.map((tech, index) => (
            <Badge
              className='text-xs md:text-sm bg-accent-foreground'
              key={index}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div
          className={cn(
            index % 2 === 0 ? 'justify-end' : 'justify-start',
            'flex gap-2'
          )}
        >
          <Button
            variant='outline'
            size='sm'
            onClick={() => window.open(project.live, '_blank')}
            className='rounded-full'
          >
            <Link />
            Live
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => window.open(project.github, '_blank')}
            className='rounded-full'
          >
            <Github />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};
