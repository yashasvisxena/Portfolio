import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { NavbarConfig } from '../../config/basicConfig';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
  const { pathname } = useLocation();
  const isAboutPage = pathname === '/';

  return (
    <nav className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
      <div className='flex justify-between items-center p-4 px-4 md:px-8 max-w-7xl mx-auto'>
        <div className='flex items-center gap-2'>
          {NavbarConfig.image && (
            <img src={NavbarConfig.image} alt='' className='w-12 h-12' />
          )}
          <h1 className='text-base md:text-3xl font-normal tracking-tight'>
            {NavbarConfig.name}
          </h1>
        </div>
        <div className='flex items-center gap-1 md:gap-4'>
          {NavbarConfig.links.map((link) => {
            const targetId =
              link.href === '/' ? 'about' : link.href.replace('#', '');
            const href = link.href;

            return (
              <Link
                key={link.label}
                to={href}
                onClick={(e: React.MouseEvent) => {
                  if (isAboutPage) {
                    e.preventDefault();
                    const element = document.getElementById(targetId);
                    if (element) {
                      if (targetId === 'about') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        const yOffset = -80;
                        const y =
                          element.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                      window.history.pushState(null, '', href);
                    }
                  }
                }}
                className='group relative flex items-center gap-0.5 text-xs md:text-base font-medium transition-colors hover:text-foreground/80 text-foreground'
              >
                <span>{link.label}</span>
                <ArrowUpRight className='h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100' />
                <span className='absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full' />
              </Link>
            );
          })}
        </div>
        {NavbarConfig.themeModeEnabled && <ModeToggle />}
      </div>
    </nav>
  );
};

export default Navbar;
