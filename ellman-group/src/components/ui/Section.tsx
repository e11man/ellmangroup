import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  container?: boolean;
  id?: string;
}

export const Section = ({ 
  children, 
  className, 
  background = 'default',
  padding = 'lg',
  container = true,
  id
}: SectionProps) => {
  const backgrounds = {
    default: 'bg-white',
    muted: 'bg-neutral-50',
    dark: 'bg-neutral-900 text-white',
    gradient: 'bg-gradient-hero text-white'
  };

  const paddings = {
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32'
  };

  const content = container ? (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  ) : children;

  return (
    <section 
      id={id}
      className={cn(
        'w-full',
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      {content}
    </section>
  );
};