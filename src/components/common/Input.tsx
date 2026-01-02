import React from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  type?: 'text' | 'email' | 'password';
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = '',
  maxLength,
  type = 'text',
  disabled = false
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      className="w-full px-4 py-3 rounded-lg border-2 border-flow-pearl focus:border-flow-sage focus:outline-none transition-colors bg-white text-flow-charcoal placeholder-flow-pearl"
    />
  );
};
