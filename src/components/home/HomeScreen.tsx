import React from 'react';
import { Card } from '../common/Card';
import { useAppStore } from '../../store/appStore';

export const HomeScreen: React.FC = () => {
  const { userName, tone } = useAppStore();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '☀️ Buenos días';
    if (hour < 20) return '🌤️ Buenas tardes';
    return '🌙 Buenas noches';
  };

  const greeting = userName ? `${getGreeting()}, ${userName}` : getGreeting();

  return (
    <div className="min-h-screen bg-flow-cream p-4">
      <div className="max-w-2xl mx-auto">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-flow-charcoal mb-2">
            FLOW
          </h1>
          <p className="text-flow-charcoal opacity-75">
            A tu lado, a tu ritmo
          </p>
        </div>

        <Card className="mb-6">
          <h2 className="text-xl font-medium text-flow-charcoal mb-2">
            {greeting}
          </h2>
          <p className="text-flow-charcoal opacity-75">
            Hoy es {new Date().toLocaleDateString('es-ES', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long' 
            })}
          </p>
        </Card>

        <Card>
          <p className="text-flow-charcoal mb-4">
            ✨ <strong>Onboarding completado</strong>
          </p>
          <p className="text-sm text-flow-charcoal opacity-75">
            Configuración guardada:
          </p>
          <ul className="text-sm text-flow-charcoal mt-2 space-y-1">
            <li>• Nombre: {userName || 'No especificado'}</li>
            <li>• Tono: {tone}</li>
          </ul>
          <p className="text-sm text-flow-charcoal opacity-75 mt-4">
            Próximo paso: Registro de actividades (próximamente)
          </p>
        </Card>
      </div>
    </div>
  );
};