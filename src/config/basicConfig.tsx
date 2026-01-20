export const NavbarConfig = {
  image: null,
  name: 'yashasvisxena',
  links: [
    { label: 'About', href: '/' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ],
  themeModeEnabled: import.meta.env.VITE_ThemeModeEnabled === 'true',
  defaultTheme: import.meta.env.VITE_DefaultTheme || 'dark',
};

export const HomeConfig = {
  description: (
    <div className='max-w-3xl leading-relaxed tracking-tight'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-light mb-6'>
        I'm <span className='font-normal'>Yashasvi Saxena</span>,
      </h2>

      <p className='text-lg sm:text-xl md:text-2xl font-light'>
        A <span className='font-semibold'>full stack developer</span>, formerly
        SDE Intern at{' '}
        <a
          target='_blank'
          href='https://datachecks.io/'
          className="relative z-10 font-medium no-underline transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
        >
          Datachecks
        </a>{' '}
        &{' '}
        <a
          target='_blank'
          href='https://swyftin.com/'
          className="relative z-10 font-medium no-underline transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
        >
          Swyftin
        </a>
        .
      </p>

      <p className='mt-8 text-base sm:text-lg max-w-2xl border-l-2 border-primary/30 pl-4 italic font-normal'>
        I focus on building scalable systems using sound system design
        principles, high performance, and clean architecture within the{' '}
        <span className='font-medium'>MERN stack</span>.
      </p>
    </div>
  ),
  role: `Full-Stack \nDeveloper`,
  image: '/image.png',
  cardBgChange: true,
};
