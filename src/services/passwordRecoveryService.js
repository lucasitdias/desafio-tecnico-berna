// Importa as chaves utilizadas para gerenciamento dos dados armazenados no navegador.
import { STORAGE_KEYS } from '../constants/storageKeys';

// Define o email padrão utilizado no processo de recuperação de senha.
const DEFAULT_EMAIL = import.meta.env.VITE_DEFAULT_EMAIL;

// Verifica se a variável obrigatória de recuperação de senha foi configurada corretamente.
if (!DEFAULT_EMAIL) {
  throw new Error('Variáveis de ambiente não configuradas.');
}

// Objeto responsável por centralizar as operações de recuperação de senha.
export const passwordRecoveryService = {
  // Envia um código de recuperação para validação do usuário.
  sendCode(email) {
    // Retorna uma Promise para simular o processamento assíncrono do envio.
    return new Promise((resolve, reject) => {
      // Simula o tempo de processamento da operação.
      setTimeout(() => {
        // Verifica se o email informado pertence a uma conta cadastrada.
        if (email !== DEFAULT_EMAIL) {
          // Retorna erro quando o email não está cadastrado.
          return reject(new Error('Não encontramos uma conta cadastrada com este e-mail.'));
        }

        // Gera um código numérico aleatório utilizando API criptográfica do navegador.
        const array = new Uint32Array(1);

        // Preenche o array com um valor aleatório seguro gerado pelo navegador.
        crypto.getRandomValues(array);

        // Converte o valor aleatório em um código numérico de seis dígitos.
        const code = ((array[0] % 900000) + 100000).toString();

        // Exibe o código no console para testes do ambiente mock.
        console.log(`Código de recuperação: ${code}`);

        // Armazena o código de recuperação gerado.
        localStorage.setItem(STORAGE_KEYS.RECOVERY_CODE, code);

        // Armazena o email associado ao processo de recuperação.
        localStorage.setItem(STORAGE_KEYS.RECOVERY_EMAIL, email);

        // Retorna a confirmação de sucesso da operação.
        resolve({
          // Indica que o envio foi concluído com sucesso.
          success: true,
        });
      }, 1500);
    });
  },

  // Valida se o código informado corresponde ao código armazenado.
  validateCode(code) {
    // Retorna uma Promise para simular a validação assíncrona do código.
    return new Promise((resolve, reject) => {
      // Simula o tempo de processamento da validação.
      setTimeout(() => {
        // Recupera o código salvo anteriormente no armazenamento.
        const savedCode = localStorage.getItem(STORAGE_KEYS.RECOVERY_CODE);

        // Verifica se o código informado é igual ao código armazenado.
        if (code === savedCode) {
          // Confirma a validação quando o código está correto.
          resolve(true);
        } else {
          // Retorna erro quando o código informado é inválido.
          reject(new Error('Código inválido.'));
        }
      }, 700);
    });
  },

  // Salva uma nova senha para o usuário.
  resetPassword(newPassword) {
    // Retorna uma Promise para simular o processamento da alteração.
    return new Promise((resolve) => {
      // Simula o tempo de processamento da atualização da senha.
      setTimeout(() => {
        // Armazena a nova senha no navegador.
        localStorage.setItem(STORAGE_KEYS.PASSWORD, newPassword);

        // Remove o código de recuperação após concluir a alteração.
        localStorage.removeItem(STORAGE_KEYS.RECOVERY_CODE);

        // Confirma a conclusão da alteração da senha.
        resolve(true);
      }, 1000);
    });
  },
};
