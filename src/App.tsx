<<<<<<< HEAD
import { Welcome } from './components/onboarding/Welcome';

function App() {
  return <Welcome onNext={() => alert('¡Siguiente pantalla!')} />;
}

export default App;

=======
import { useEffect } from 'react';
import { useAppStore } from '@/store/appStore';

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

  return (
    <div className="flex flex-col items-center justify-center h-screen text-flow-charcoal">
      <h1 className="text-4xl font-bold">🌊 Flow</h1>
      <p className="text-lg mt-1">A tu lado, a tu ritmo</p>

      <div className="mt-6 space-y-2 text-center">
        <p className="font-medium">
          {isOnboarded
            ? '✅ Setup completo - Onboarding ya completado'
            : '⚙️ Setup completo - Listo para desarrollar onboarding'}
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
>>>>>>> 4d59d2a16b7324ee1d8b7b114d2574b2193e2677
