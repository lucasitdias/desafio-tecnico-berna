// Importa as chaves utilizadas para gerenciamento dos dados armazenados no navegador.
import { STORAGE_KEYS } from '../constants/storageKeys';

// Define o email padrão utilizado no processo de autenticação do usuário.
const DEFAULT_EMAIL = import.meta.env.VITE_DEFAULT_EMAIL;

// Define a senha padrão utilizada no processo de autenticação do usuário.
const DEFAULT_PASSWORD = import.meta.env.VITE_DEFAULT_PASSWORD;

// Verifica se as variáveis obrigatórias de autenticação foram configuradas corretamente.
if (!DEFAULT_EMAIL || !DEFAULT_PASSWORD) {
  throw new Error('Variáveis de ambiente não configuradas.');
}

// Objeto responsável por centralizar as operações de autenticação da aplicação.
export const authService = {
  // Realiza a autenticação do usuário utilizando email e senha.
  login(email, password) {
    // Retorna uma Promise para simular uma requisição assíncrona de autenticação.
    return new Promise((resolve, reject) => {
      // Simula um tempo de processamento antes de concluir a autenticação.
      setTimeout(() => {
        // Recupera a senha salva ou utiliza a senha padrão definida.
        const savedPassword = localStorage.getItem(STORAGE_KEYS.PASSWORD) || DEFAULT_PASSWORD;

        // Verifica se o email e senha informados correspondem às credenciais válidas.
        if (email === DEFAULT_EMAIL && password === savedPassword) {
          // Define o token utilizado para manter a sessão autenticada.
          const token = STORAGE_KEYS.TOKEN;

          // Armazena o token de autenticação no navegador.
          localStorage.setItem(STORAGE_KEYS.TOKEN, token);

          // Retorna os dados do usuário autenticado.
          resolve({
            // Retorna o token gerado para a sessão.
            token,

            // Retorna as informações básicas do usuário.
            user: {
              // Define o nome do usuário autenticado.
              name: 'Teste',

              // Define o email do usuário autenticado.
              email: DEFAULT_EMAIL,
            },
          });

          // Finaliza a execução após autenticação bem-sucedida.
          return;
        }

        // Retorna erro quando as credenciais informadas são inválidas.
        reject(new Error('Credenciais inválidas. Verifique seu e-mail e senha.'));
      }, 1500);
    });
  },

  // Remove os dados de autenticação e encerra a sessão do usuário.
  logout() {
    // Remove o token armazenado no navegador.
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  },

  // Verifica se existe um token válido armazenado.
  isAuthenticated() {
    // Retorna verdadeiro quando o token existe e falso quando não existe.
    return !!localStorage.getItem(STORAGE_KEYS.TOKEN);
  },

  // Retorna os dados do usuário atualmente autenticado.
  getCurrentUser() {
    // Retorna as informações básicas do usuário padrão.
    return {
      // Define o nome do usuário autenticado.
      name: 'Teste',

      // Define o email do usuário autenticado.
      email: DEFAULT_EMAIL,
    };
  },
};
