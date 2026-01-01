import React from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  multiline?: boolean;
  rows?: number;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
  multiline = false,
  rows = 3
}) => {
  const baseStyles = 'w-full px-4 py-3 rounded-lg border border-flow-pearl focus:border-flow-sage focus:outline-none focus:ring-2 focus:ring-flow-sage focus:ring-opacity-20 transition-all';
  
  if (multiline) {
    return (
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={rows}
          className={`${baseStyles} resize-none`}
        />
        {maxLength && (
          <div className="text-xs text-flow-pearl mt-1 text-right">
            {value.length} / {maxLength}
          </div>
        )}
      </div>
    );
  }
  
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      className={baseStyles}
    />
  );
};