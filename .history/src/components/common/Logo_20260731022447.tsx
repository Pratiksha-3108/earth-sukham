import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = false, size = 'md' }) => {
  const [imgError, setImgError] = useState(false);

  const imageSizes = {
    sm: 'h-8 sm:h-9 max-w-[140px]',
    md: 'h-10 sm:h-12 max-w-[180px]',
    lg: 'h-12 sm:h-16 max-w-[240px]',
  }[size];

  const placeholderSizes = {
    sm: 'w-24 h-8',
    md: 'w-32 h-10',
    lg: 'w-40 h-12',
  }[size];

  return (
    <div className={`flex items-center gap-3 group text-left ${className}`}>
      {/* Image tag pointing to assets/logo.png from device */}
      {!imgError ? (
        <img
          src="/src/assets/logo.png"
          alt="Logo"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes('/src/assets/logo.png')) {
              target.src = '/assets/logo.png';
            } else if (!target.src.includes('logo.png')) {
              target.src = 'logo.png';
            } else {
              setImgError(true);
            }
          }}
          className={`${imageSizes} object-contain group-hover:scale-105 transition-transform`}
        />
      ) : (
        /* Image placeholder when logo.png is missing from device */
        <div className={`${placeholderSizes} rounded-lg bg-[#FAF7F2] border border-[#CA932B]/30 flex items-center justify-center text-[#CA932B] text-xs font-bold tracking-wider uppercase px-3 shadow-xs`}>
          Logo Image
        </div>
      )}

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
