import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = false,
  size = 'md',
}) => {
  const imageSizes = {
    sm: 'h-8 sm:h-9 max-w-[140px]',
    md: 'h-10 sm:h-12 max-w-[180px]',
    lg: 'h-12 sm:h-16 max-w-[240px]',
  }[size];

  return (
    <div className={`flex items-center gap-3 group text-left ${className}`}>
      
      <img
        src="/logo.png"
        alt="Earth Sukham Logo"
        className={`${imageSizes} object-contain group-hover:scale-105 transition-transform`}
      />

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-serif font-bold text-[#1F1914] tracking-tight leading-none">
            Earth Sukham
          </span>

          <span className="text-[9px] uppercase tracking-widest font-sans font-bold text-[#8C734B] mt-1">
            Realty Private Limited
          </span>
        </div>
      )}

    </div>
  );
};