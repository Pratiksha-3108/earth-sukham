import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[alignment];

  return (
    <div className={`max-w-3xl mb-10 ${alignClass} ${className}`}>
      {subtitle && (
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B88E3A] mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
        {title}
      </h2>
      <div className={`h-1 w-16 bg-[#B88E3A] rounded-full mt-3 ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};
