import { useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Input } from './Input';
import { Slider } from './Slider';

export const ComponentDemo = () => {
  const [inputValue, setInputValue] = useState('');
  const [mood, setMood] = useState(0);

  return (
    <div className="min-h-screen bg-flow-cream p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-flow-charcoal mb-2">
            Sistema de Diseño Flow
          </h1>
          <p className="text-flow-charcoal opacity-75">
            Componentes básicos reutilizables
          </p>
        </div>

        <div className="space-y-8">
          {/* Buttons */}
          <Card>
            <h2 className="text-xl font-bold text-flow-charcoal mb-4">
              Botones
            </h2>
            <div className="space-y-3">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="primary" fullWidth>Full Width Button</Button>
            </div>
          </Card>

          {/* Inputs */}
          <Card>
            <h2 className="text-xl font-bold text-flow-charcoal mb-4">
              Inputs
            </h2>
            <div className="space-y-4">
              <Input
                value={inputValue}
                onChange={setInputValue}
                label="Input de texto"
                placeholder="Escribe algo..."
                maxLength={50}
              />
              <Input
                value={inputValue}
                onChange={setInputValue}
                label="Textarea"
                placeholder="Escribe algo más largo..."
                multiline
                rows={4}
                maxLength={280}
              />
            </div>
          </Card>

          {/* Slider */}
          <Card>
            <h2 className="text-xl font-bold text-flow-charcoal mb-4">
              Slider de Mood
            </h2>
            <Slider
              value={mood}
              onChange={setMood}
              label="¿Cómo te sientes?"
              labels={{
                left: 'Peor',
                center: 'Neutral',
                right: 'Mejor'
              }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};