import React from 'react';

// ============================================
// INTERFACE
// ============================================
interface SliderProps {
  value: number;                    // Valor actual
  onChange: (value: number) => void; // Función cuando cambia
  min?: number;                     // Valor mínimo
  max?: number;                     // Valor máximo
  step?: number;                    // Incremento
  labels?: {                        // Labels opcionales
    left: string;
    center: string;
    right: string;
  };
  showValue?: boolean;              // Mostrar el número actual
  label?: string;                   // Label del slider
}

// ============================================
// COMPONENTE
// ============================================
export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = -5,
  max = 5,
  step = 1,
  labels,
  showValue = true,
  label
}) => {
  
  // Calcular el color del slider según el valor
  const getColor = () => {
    if (value < -2) return 'bg-red-400';
    if (value < 0) return 'bg-orange-400';
    if (value === 0) return 'bg-flow-pearl';
    if (value <= 2) return 'bg-green-400';
    return 'bg-flow-sage';
  };
  
  // Calcular el emoji según el valor
  const getEmoji = () => {
    if (value <= -4) return '😰';
    if (value <= -2) return '😔';
    if (value < 0) return '😕';
    if (value === 0) return '😐';
    if (value <= 2) return '🙂';
    if (value <= 4) return '😊';
    return '😄';
  };
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-flow-charcoal mb-3">
          {label}
        </label>
      )}
      
      <div className="relative">
        {/* El slider HTML5 */}
          <input         
           type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label || 'Slider input'}
          className="w-full h-2 bg-flow-pearl rounded-lg appearance-none cursor-pointer slider-thumb"
        />
        
        {/* Labels debajo */}
        {labels && (
          <div className="flex justify-between mt-3 text-xs text-flow-pearl">
            <span>{labels.left}</span>
            <span>{labels.center}</span>
            <span>{labels.right}</span>
          </div>
        )}
      </div>
      
      {/* Mostrar valor actual */}
      {showValue && (
        <div className="text-center mt-4">
          <div className="text-4xl mb-2">{getEmoji()}</div>
          <div className={`inline-block px-4 py-2 rounded-lg ${getColor()} bg-opacity-20`}>
            <span className="text-2xl font-bold text-flow-charcoal">
              {value > 0 ? '+' : ''}{value}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};