// Importa as funções utilizadas para criar e validar os testes.
import { describe, expect, it } from 'vitest';

// Agrupa os testes relacionados à configuração do Vitest.
describe('Configuração do Vitest', () => {
  // Verifica se o ambiente de testes está funcionando corretamente.
  it('deve executar o ambiente de testes corretamente', () => {
    expect(true).toBe(true);
  });
});
