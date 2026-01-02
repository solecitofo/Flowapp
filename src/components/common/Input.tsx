import React from 'react';

// ============================================
// INTERFACE
// ============================================
interface InputProps {
  value: string;                      // El valor actual del input
  onChange: (value: string) => void;  // Función que se llama cuando cambia
  placeholder?: string;               // Texto placeholder
  maxLength?: number;                 // Máximo de caracteres
  multiline?: boolean;                // ¿Es textarea?
  rows?: number;                      // Número de filas (solo para textarea)
  label?: string;                     // Label opcional
  helperText?: string;                // Texto de ayuda debajo
  disabled?: boolean;
}

// ============================================
// COMPONENTE
// ============================================
export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
  multiline = false,
  rows = 3,
  label,
  helperText,
  disabled = false
}) => {
  
  // Estilos comunes para input y textarea
  const baseStyles = 'w-full px-4 py-3 rounded-lg border border-flow-pearl bg-white text-flow-charcoal placeholder-flow-pearl focus:border-flow-sage focus:outline-none focus:ring-2 focus:ring-flow-sage focus:ring-opacity-20 transition-all disabled:bg-gray-50 disabled:cursor-not-allowed';
  
  return (
    <div className="w-full">
      {/* Label opcional */}
      {label && (
        <label className="block text-sm font-medium text-flow-charcoal mb-2">
          {label}
        </label>
      )}
      
      {/* Input o Textarea según multiline */}
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={rows}
          disabled={disabled}
          className={`${baseStyles} resize-none`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          className={baseStyles}
        />
      )}
      
      {/* Contador de caracteres y helper text */}
      <div className="flex justify-between items-center mt-1">
        <div className="text-xs text-flow-pearl">
          {helperText}
        </div>
        {maxLength && (
          <div className="text-xs text-flow-pearl">
            {value.length} / {maxLength}
          </div>
        )}
      </div>
    </div>
  );
};
