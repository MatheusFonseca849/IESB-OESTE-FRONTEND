import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext';

export function App() {

  return (
    // Usamos o nosso componente limpo e encapsulado
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}