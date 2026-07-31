import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }[size];

  const variantClasses = {
    primary: 'bg-[#B88E3A] hover:bg-[#A37B2E] text-white shadow-sm',
    secondary: 'bg-[#FAF7F2] hover:bg-[#F2EBDC] text-[#1F1914] border border-[#E3DDD1]',
    outline: 'border border-[#B88E3A] text-[#B88E3A] hover:bg-[#B88E3A] hover:text-white',
    ghost: 'text-gray-700 hover:bg-gray-100',
  }[variant];

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
