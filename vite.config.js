// Importa a função para definir a configuração do Vite.
import { defineConfig } from 'vite';

// Importa o plugin do React para o Vite.
import react from '@vitejs/plugin-react';

// Importa o plugin do Tailwind CSS para o Vite.
import tailwindcss from '@tailwindcss/vite';

// Documentação oficial da configuração do Vite.
// https://vite.dev/config/

// Exporta a configuração do Vite.
export default defineConfig({
  // Registra os plugins utilizados pelo projeto.
  plugins: [react(), tailwindcss()],

  // Configura o ambiente de testes do Vitest.
  test: {
    // Habilita funções globais nos testes.
    globals: true,

    // Define o ambiente de execução dos testes.
    environment: 'jsdom',

    // Define o arquivo de configuração executado antes dos testes.
    setupFiles: './src/test/setup.js',
  },
});
