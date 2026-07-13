// Define funções responsáveis pela validação de dados informados pelo usuário.

// Valida se o email informado possui um formato aceito pela aplicação.
export const validateEmail = (email) => {
  // Cria a expressão regular utilizada para validar a estrutura do email.
  const re = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

  // Retorna se o email corresponde ao padrão esperado.
  return re.test(email);
};

// Valida se a senha atende aos requisitos mínimos de segurança definidos.
export const validatePassword = (password) => {
  // Verifica se a senha contém pelo menos uma letra.
  const hasLetter = /[a-zA-Z]/.test(password);

  // Verifica se a senha contém pelo menos um número.
  const hasNumber = /\d/.test(password);

  // Verifica se a senha possui no mínimo oito caracteres.
  const isLongEnough = password.length >= 8;

  // Retorna verdadeiro somente quando todos os requisitos forem atendidos.
  return isLongEnough && hasLetter && hasNumber;
};
