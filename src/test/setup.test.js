// Importa as funções utilizadas para criação e execução dos testes.
import { describe, it, expect } from 'vitest';

// Importa a função responsável pela validação de emails da aplicação.
import { validateEmail } from '../utils/validators';

// Agrupa os testes relacionados ao ambiente de testes e validações.
describe('Configuração do Vitest', () => {
  // Verifica se a função de validação de email retorna o resultado esperado.
  it('deve validar um email corretamente', () => {
    // Executa a validação utilizando um email considerado válido.
    const result = validateEmail('lucas.dias@berna.com.br');

    // Confirma que a validação retorna verdadeiro para um email válido.
    expect(result).toBe(true);
  });
});
