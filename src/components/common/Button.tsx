import React from 'react';

// ============================================
// INTERFACE: Define qué "props" acepta el botón
// ============================================
interface ButtonProps {
  children: React.ReactNode;     // El texto/contenido del botón
  onClick?: () => void;           // Función que se ejecuta al hacer click (opcional)
  variant?: 'primary' | 'secondary' | 'ghost';  // Tipo de botón
  fullWidth?: boolean;            // ¿Ocupa todo el ancho?
  disabled?: boolean;             // ¿Está deshabilitado?
  type?: 'button' | 'submit';     // Tipo HTML (por defecto button)
}

// ============================================
// COMPONENTE: El botón en sí
// ============================================
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',    // Por defecto es primary
  fullWidth = false,
  disabled = false,
  type = 'button'
}) => {
  
  // Estilos base que TODOS los botones tienen
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Estilos según el variant (tipo de botón)
  const variantStyles = {
    primary: 'bg-flow-terra text-white hover:bg-opacity-90 focus:ring-flow-terra active:scale-95',
    secondary: 'bg-flow-sage text-white hover:bg-opacity-90 focus:ring-flow-sage active:scale-95',
    ghost: 'bg-transparent text-flow-charcoal hover:bg-flow-cream focus:ring-flow-sage'
  };
  
  // Estilo de ancho
  const widthStyle = fullWidth ? 'w-full' : '';
  
  // Estilo de disabled
  const disabledStyle = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';
  
  // Juntamos todos los estilos
  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${widthStyle} ${disabledStyle}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
    >
      {children}
    </button>
  );
};