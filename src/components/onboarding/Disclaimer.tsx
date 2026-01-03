import React from 'react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

interface DisclaimerProps {
  onComplete: () => void;
  onBack: () => void;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ onComplete, onBack }) => {
  return (
    <div className="min-h-screen bg-flow-cream flex items-center justify-center p-4">
      <Card className="max-w-md w-full" padding="lg">
        
        {/* Icono de advertencia */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">⚠️</div>
          <h2 className="text-2xl font-bold text-flow-charcoal">
            Una cosa importante
          </h2>
        </div>

        {/* Lo que NO es */}
        <div className="bg-flow-pearl bg-opacity-30 rounded-lg p-4 mb-6">
          <p className="text-flow-charcoal font-medium mb-3">
            Flow NO es:
          </p>
          <ul className="space-y-2 text-flow-charcoal">
            <li className="flex items-start">
              <span className="mr-2 mt-1">•</span>
              <span>Un diagnóstico médico</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1">•</span>
              <span>Un tratamiento psicológico</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1">•</span>
              <span>Un sustituto de ayuda profesional</span>
            </li>
          </ul>
        </div>

        {/* Lo que SÍ es */}
        <p className="text-flow-charcoal mb-4">
          Flow es una <strong>herramienta complementaria</strong> para cultivar 
          hábitos de bienestar.
        </p>

        <p className="text-flow-charcoal mb-6">
          Si estás pasando por algo difícil, considera hablar con un profesional 
          de salud mental.
        </p>

        {/* Recursos de ayuda */}
        <div className="bg-flow-sky bg-opacity-20 rounded-lg p-4 mb-6">
          <p className="text-sm text-flow-charcoal">
            <strong>📞 Si estás en crisis:</strong>
            <br />
            Teléfono 024 (España, 24h gratuito)
            <br />
            Emergencias: 112
          </p>
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <Button onClick={onBack} variant="ghost">
            Atrás
          </Button>
          <Button onClick={onComplete} variant="primary" fullWidth>
            Entendido, comenzar
          </Button>
        </div>
      </Card>
    </div>
  );
};