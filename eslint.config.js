// Importa a configuração recomendada do ESLint.
import js from '@eslint/js';

// Importa os objetos globais do ambiente de navegador.
import globals from 'globals';

// Importa a configuração para evitar conflitos entre ESLint e Prettier.
import eslintConfigPrettier from 'eslint-config-prettier';

// Exporta a configuração do ESLint.
export default [
  // Define arquivos e diretórios ignorados durante a análise.
  {
    ignores: ['dist'],
  },

  // Configura as regras para arquivos JavaScript e JSX.
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      // Define a versão mais recente do ECMAScript.
      ecmaVersion: 'latest',

      // Define o uso de módulos ES.
      sourceType: 'module',

      // Disponibiliza os objetos globais do navegador.
      globals: globals.browser,

      // Habilita o suporte à sintaxe JSX.
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    // Aplica as regras recomendadas do ESLint.
    ...js.configs.recommended,
  },

  // Aplica a configuração de compatibilidade com o Prettier.
  eslintConfigPrettier,
];
