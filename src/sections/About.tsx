import { HomeConfig } from '@/config/basicConfig';
import { ContactConfig } from '@/config/contactConfig';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function About() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleContactClick = (
    e: React.MouseEvent,
    key: string,
    value: (typeof ContactConfig)[keyof typeof ContactConfig]
  ) => {
    if (value.type === 'copy') {
      e.preventDefault();
      navigator.clipboard.writeText(value.link);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
      toast.success('Copied to clipboard');
    }
  };

  return (
    <section id='about' className='flex items-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 w-full'>
        <div className='md:col-span-2 md:row-span-1 p-6 rounded-2xl bg-card border border-border/50 flex items-center'>
          <span className='text-lg md:text-2xl font-medium leading-relaxed text-foreground'>
            {HomeConfig.description}
          </span>
        </div>

        <div className='md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden bg-muted h-[250px] sm:h-[350px] md:h-full border border-border/50'>
          <img
            src={HomeConfig.image}
            alt='Yashasvi Saxena - Full-Stack Developer'
            className='h-full w-full object-cover'
            loading='eager'
            fetchPriority='high'
          />
        </div>

        <div
          className={cn(
            'md:col-span-2 md:row-span-1 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 md:gap-4 p-6 rounded-2xl border border-border/50',
            HomeConfig.cardBgChange
              ? 'bg-foreground text-background'
              : 'bg-card text-foreground'
          )}
        >
          <h2 className='flex-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono tracking-tighter leading-[1.1] md:leading-tight'>
            {HomeConfig.role}
          </h2>
          <div className='flex flex-wrap md:flex-col items-start gap-4 md:gap-2 md:pl-6 md:border-l md:border-current/20'>
            {Object.entries(ContactConfig).map(([key, value]) => {
              const href =
                value.type === 'mailto'
                  ? `mailto:${value.link}`
                  : value.type === 'tel'
                    ? `tel:${value.link}`
                    : value.link;

              const isCopied = copiedKey === key;

              return (
                <a
                  key={key}
                  href={value.type === 'copy' ? '#' : href}
                  onClick={(e) => handleContactClick(e, key, value)}
                  target={value.type === 'open' ? '_blank' : undefined}
                  rel='noopener noreferrer'
                  className={cn(
                    'group relative flex items-center gap-2 text-sm md:text-base font-medium transition-colors w-fit',
                    HomeConfig.cardBgChange
                      ? 'text-background/80 hover:text-background'
                      : 'text-foreground/70 hover:text-foreground'
                  )}
                >
                  <div className='flex items-center gap-2'>
                    <span className='shrink-0'>
                      {isCopied ? (
                        <Check className='h-4 w-4 text-green-500' />
                      ) : (
                        value.icon
                      )}
                    </span>
                    <span className='capitalize whitespace-nowrap'>
                      {isCopied ? 'Copied!' : key}
                    </span>
                  </div>

                  {!isCopied && (
                    <ArrowUpRight className='h-3.5 w-3.5 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100' />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
