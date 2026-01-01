import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  disabled = false
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-flow-terra text-white hover:bg-opacity-90 active:scale-95',
    secondary: 'bg-flow-sage text-white hover:bg-opacity-90 active:scale-95',
    ghost: 'bg-transparent text-flow-charcoal hover:bg-flow-cream'
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${disabledStyle}`}
    >
      {children}
    </button>
  );
};