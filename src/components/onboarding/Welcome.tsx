import React from 'react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

interface WelcomeProps {
  onNext: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-flow-sage to-flow-sky flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center" padding="lg">
        {/* Logo placeholder - tu hijo puede añadir SVG después */}
        <div className="w-24 h-24 bg-flow-sage rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl">🌊</span>
        </div>
        
        <h1 className="text-3xl font-bold text-flow-charcoal mb-4">
          Bienvenido a Flow
        </h1>
        
        <p className="text-flow-charcoal text-lg mb-2">
          Esta app te ayuda a identificar y mantener hábitos que te hacen sentir bien.
        </p>
        
        <p className="text-flow-charcoal opacity-75 mb-8">
          Sin plazos. Sin objetivos obligatorios. Solo pequeños pasos que eliges tú.
        </p>
        
        <Button onClick={onNext} fullWidth variant="primary">
          Empezar
        </Button>
      </Card>
    </div>
  );
};