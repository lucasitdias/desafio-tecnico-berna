// Importa o modo estrito do React para auxiliar na identificação de problemas.
import { StrictMode } from 'react';

// Importa a função responsável por criar a raiz da aplicação.
import { createRoot } from 'react-dom/client';

// Importa os estilos globais da aplicação.
import './styles/index.css';

// Importa o componente principal da aplicação.
import App from './App.jsx';

// Renderiza a aplicação no elemento raiz da página.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
