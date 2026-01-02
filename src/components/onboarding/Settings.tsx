import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Input } from '../common/Input';

interface SettingsProps {
  onNext: (settings: { name?: string; tone: 'warm' | 'neutral' | 'gentle' }) => void;
  onBack: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onNext, onBack }) => {
  const [name, setName] = useState('');
  const [tone, setTone] = useState<'warm' | 'neutral' | 'gentle'>('warm');
  
  return (
    <div className="min-h-screen bg-flow-cream flex items-center justify-center p-4">
      <Card className="max-w-md w-full" padding="lg">
        <h2 className="text-2xl font-bold text-flow-charcoal mb-6">
          Algunos ajustes rápidos
        </h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-flow-charcoal mb-2">
            ¿Cómo te llamas? (opcional)
          </label>
          <Input
            value={name}
            onChange={setName}
            placeholder="Tu nombre"
            maxLength={30}
          />
          <p className="text-xs text-flow-pearl mt-1">
            Solo para personalizar los mensajes
          </p>
        </div>
        
        <div className="mb-8">
          <label className="block text-sm font-medium text-flow-charcoal mb-3">
            ¿Cómo prefieres que nos comuniquemos?
          </label>
          
          <div className="space-y-3">
            {[
              { value: 'warm', label: 'Cálido y motivador', desc: '"¡Qué bien! Sigue así"' },
              { value: 'neutral', label: 'Neutral y directo', desc: '"Actividad registrada"' },
              { value: 'gentle', label: 'Muy suave y discreto', desc: '"Entendido. Aquí estoy"' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setTone(option.value as any)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  tone === option.value
                    ? 'border-flow-sage bg-flow-sage bg-opacity-10'
                    : 'border-flow-pearl hover:border-flow-sage hover:border-opacity-50'
                }`}
              >
                <div className="font-medium text-flow-charcoal">{option.label}</div>
                <div className="text-sm text-flow-pearl mt-1">{option.desc}</div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button onClick={onBack} variant="ghost">
            Atrás
          </Button>
          <Button onClick={() => onNext({ name: name || undefined, tone })} fullWidth>
            Siguiente
          </Button>
        </div>
      </Card>
    </div>
  );
};
