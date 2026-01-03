import { useEffect } from 'react';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';
import { HomeScreen } from './components/home/HomeScreen';
import { useAppStore } from './store/appStore';

function App() {
  const { isLoading, isOnboarded, checkOnboarding } = useAppStore();

  useEffect(() => {
    checkOnboarding();
  }, [checkOnboarding]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-flow-cream flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌊</div>
          <div className="text-xl text-flow-charcoal font-medium">Flow</div>
          <div className="text-sm text-flow-sage mt-2">Cargando...</div>
        </div>
      </div>
    );
  }

  return isOnboarded ? <HomeScreen /> : <OnboardingFlow />;
}

export default App;