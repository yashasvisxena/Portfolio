import { Spinner } from '@/components/ui/spinner';
import { showHighlights } from '@/config/highlightsSkillConfig';
import Project from '@/sections/Project';
import { Suspense, lazy } from 'react';

const About = lazy(() => import('@/sections/About'));
const Experience = lazy(() => import('@/sections/Experience'));
const Highlights = lazy(() =>
  import('@/sections/Highlights').then((m) => ({ default: m.Highlights }))
);
const Skills = lazy(() =>
  import('@/sections/Skills').then((m) => ({ default: m.Skills }))
);

export default function LandingPage() {
  return (
    <main className='w-full max-w-7xl mx-auto p-4 px-4 md:px-8 space-y-12 md:space-y-16'>
      <Suspense
        fallback={
          <div className='h-[50vh] w-full flex items-center justify-center'>
            <Spinner className='size-8 text-primary' />
          </div>
        }
      >
        <About />
        <Skills />
        {showHighlights && <Highlights />}
        <Project />
        <Experience />
      </Suspense>
    </main>
  );
}
