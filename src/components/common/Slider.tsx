import React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  labels?: { left: string; center: string; right: string };
}

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min = -5,
  max = 5,
  step = 1,
  labels
}) => {
  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-flow-pearl rounded-lg appearance-none cursor-pointer slider-thumb"
      />
      
      {labels && (
        <div className="flex justify-between mt-2 text-sm text-flow-charcoal">
          <span>{labels.left}</span>
          <span>{labels.center}</span>
          <span>{labels.right}</span>
        </div>
      )}
      
      <div className="text-center mt-2 text-lg font-medium text-flow-sage">
        {value > 0 ? '+' : ''}{value}
      </div>
    </div>
  );
};