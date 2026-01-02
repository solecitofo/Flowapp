<<<<<<< HEAD
import React from 'react';

// ============================================
// INTERFACE
// ============================================
interface CardProps {
  children: React.ReactNode;  // Contenido dentro de la card
  className?: string;          // Clases CSS adicionales (opcional)
  padding?: 'sm' | 'md' | 'lg'; // Tamaño del padding interno
  onClick?: () => void;         // Hacer la card clickeable (opcional)
}

// ============================================
// COMPONENTE
// ============================================
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  padding = 'md',
  onClick
}) => {
  
  // Estilos base de la card
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-flow-pearl transition-all';
  
  // Padding según el tamaño
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  // Si es clickeable, añadir hover effect
  const clickableStyles = onClick 
    ? 'cursor-pointer hover:shadow-md hover:border-flow-sage' 
    : '';
  
  // Clase final
  const finalClassName = `${baseStyles} ${paddingStyles[padding]} ${clickableStyles} ${className}`;
  
  return (
    <div 
      className={finalClassName}
      onClick={onClick}
    >
      {children}
    </div>
  );
=======
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  padding = 'md' 
}) => {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-flow-pearl ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
>>>>>>> 4d59d2a16b7324ee1d8b7b114d2574b2193e2677
};