// Importa o modo estrito do React para auxiliar na identificação de problemas durante o desenvolvimento.
import { StrictMode } from 'react';

// Importa a função responsável por criar a raiz de renderização da aplicação.
import { createRoot } from 'react-dom/client';

// Importa os estilos globais utilizados pela aplicação.
import './styles/index.css';

// Importa o componente principal que inicia a aplicação.
import App from './App.jsx';

// Renderiza a aplicação dentro do elemento raiz definido no HTML.
createRoot(document.getElementById('root')).render(
  // Ativa verificações adicionais do React para identificar possíveis problemas no código.
  <StrictMode>
    <App />
  </StrictMode>
);
