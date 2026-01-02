import { useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';

function App() {
  const { isLoading, isOnboarded, checkOnboarding } = useAppStore();

  useEffect(() => {
    checkOnboarding();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-flow-charcoal">
        <h1 className="text-4xl font-bold">🌊 Flow</h1>
        <p className="mt-2 text-lg">Cargando...</p>
      </div>
    );
  }

  // Mostrar onboarding si no está completado
  if (!isOnboarded) {
    return <OnboardingFlow onComplete={() => checkOnboarding()} />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-flow-charcoal">
      <h1 className="text-4xl font-bold">🌊 Flow</h1>
      <p className="text-lg mt-1">A tu lado, a tu ritmo</p>

      <div className="mt-6 space-y-2 text-center">
        <p className="font-medium">
          ✅ Setup completo - Onboarding ya completado
        </p>

        <p>✅ React + TypeScript + Vite</p>
        <p>✅ TailwindCSS configurado</p>
        <p>✅ Dexie (IndexedDB) funcionando</p>
        <p>✅ Zustand store creado</p>
        <p>✅ PWA configurado</p>
      </div>
    </div>
  );
}

export default App;
