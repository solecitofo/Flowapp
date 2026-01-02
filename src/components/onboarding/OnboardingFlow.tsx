import React, { useState } from 'react';
import { Welcome } from './Welcome';
import { Settings } from './Settings';
import { Disclaimer } from './Disclaimer';
import { db } from '../../services/db';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [settings, setSettings] = useState<any>({});
  
  const handleSettingsComplete = async (newSettings: any) => {
    setSettings(newSettings);
    setStep(2);
  };
  
  const handleComplete = async () => {
    // Guardar settings en la base de datos
    await db.settings.add({
      ...settings,
      onboardingCompleted: true,
      notifications: false
    });
    
    onComplete();
  };
  
  return (
    <>
      {step === 0 && <Welcome onNext={() => setStep(1)} />}
      {step === 1 && <Settings onNext={handleSettingsComplete} onBack={() => setStep(0)} />}
      {step === 2 && <Disclaimer onComplete={handleComplete} onBack={() => setStep(1)} />}
    </>
  );
};