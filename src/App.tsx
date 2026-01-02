import { Welcome } from './components/onboarding/Welcome';

function App() {
  return <Welcome onNext={() => alert('¡Siguiente pantalla!')} />;
}

export default App;

