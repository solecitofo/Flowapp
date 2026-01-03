import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Input } from '../common/Input';

interface SettingsProps {
  onNext: (settings: { name?: string; tone: 'warm' | 'neutral' | 'gentle' }) => void;
  onBack: () => void;
}

const TONE_OPTIONS = [
  {
    value: 'warm' as const,
    label: 'Cálido y motivador',
    description: '"¡Qué bien! Estás avanzando"',
    emoji: '🌟'
  },
  {
    value: 'neutral' as const,
    label: 'Neutral y directo',
    description: '"Actividad registrada correctamente"',
    emoji: '📋'
  },
  {
    value: 'gentle' as const,
    label: 'Muy suave y discreto',
    description: '"Entendido. Aquí estoy si me necesitas"',
    emoji: '🌿'
  }
];

export const Settings: React.FC<SettingsProps> = ({ onNext, onBack }) => {
  const [name, setName] = useState('');
  const [tone, setTone] = useState<'warm' | 'neutral' | 'gentle'>('warm');

  const handleContinue = () => {
    onNext({
      name: name.trim() || undefined,
      tone
    });
  };

  return (
    <div className="min-h-screen bg-flow-cream flex items-center justify-center p-4">
      <Card className="max-w-md w-full" padding="lg">
        <h2 className="text-2xl font-bold text-flow-charcoal mb-6">
          Algunos ajustes rápidos
        </h2>

        {/* Nombre opcional */}
        <div className="mb-8">
          <Input
            value={name}
            onChange={setName}
            label="¿Cómo te llamas? (opcional)"
            placeholder="Tu nombre"
            maxLength={30}
            helperText="Solo para personalizar los mensajes"
          />
        </div>

        {/* Tono de comunicación */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-flow-charcoal mb-3">
            ¿Cómo prefieres que nos comuniquemos?
          </label>

          <div className="space-y-3">
            {TONE_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => setTone(option.value)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  tone === option.value
                    ? 'border-flow-sage bg-flow-sage bg-opacity-10 shadow-sm'
                    : 'border-flow-pearl hover:border-flow-sage hover:border-opacity-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{option.emoji}</span>
                  <div className="flex-1">
                    <div className="font-medium text-flow-charcoal mb-1">
                      {option.label}
                    </div>
                    <div className="text-sm text-flow-pearl">
                      {option.description}
                    </div>
                  </div>
                  {tone === option.value && (
                    <span className="text-flow-sage">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex gap-3">
          <Button onClick={onBack} variant="ghost">
            Atrás
          </Button>
          <Button onClick={handleContinue} variant="primary" fullWidth>
            Siguiente
          </Button>
        </div>
      </Card>
    </div>
  );
};