import React, { useState } from 'react';
import { Welcome } from './Welcome';
import { Settings } from './Settings';
import { Disclaimer } from './Disclaimer';
import { useAppStore } from '../../store/appStore';

export const OnboardingFlow: React.FC = () => {
  const [step, setStep] = useState(0);
  const [userSettings, setUserSettings] = useState<{
    name?: string;
    tone: 'warm' | 'neutral' | 'gentle';
  }>({ tone: 'warm' });

  const completeOnboarding = useAppStore(state => state.completeOnboarding);

  const handleSettingsComplete = (settings: typeof userSettings) => {
    setUserSettings(settings);
    setStep(2);
  };

  const handleOnboardingComplete = async () => {
    await completeOnboarding(userSettings);
    // El store automáticamente cambiará isOnboarded a true
    // y App.tsx mostrará el HomeScreen
  };

  return (
    <>
      {step === 0 && <Welcome onNext={() => setStep(1)} />}
      {step === 1 && (
        <Settings 
          onNext={handleSettingsComplete} 
          onBack={() => setStep(0)} 
        />
      )}
      {step === 2 && (
        <Disclaimer 
          onComplete={handleOnboardingComplete}
          onBack={() => setStep(1)} 
        />
      )}
    </>
  );
};