// Importa as funções utilizadas para estruturar e validar os testes.
import { describe, it, expect } from 'vitest';

// Importa as funções de validação que serão testadas.
import { validateEmail, validatePassword } from './validators';

// Agrupa os testes relacionados à validação de email.
describe('validateEmail', () => {
  // Verifica se a função aceita um email com formato válido.
  it('deve retornar true para um e-mail válido', () => {
    // Confirma que um email válido retorna verdadeiro.
    expect(validateEmail('lucas.dias@berna.com.br')).toBe(true);
  });

  // Verifica se a função rejeita emails sem o caractere obrigatório.
  it('deve retornar false para e-mail sem @', () => {
    // Confirma que um email sem @ retorna falso.
    expect(validateEmail('lucas.dias.berna.com.br')).toBe(false);
  });

  // Verifica se a função rejeita emails sem domínio.
  it('deve retornar false para e-mail sem domínio', () => {
    // Confirma que um email sem domínio retorna falso.
    expect(validateEmail('lucas@')).toBe(false);
  });

  // Verifica se a função rejeita valores vazios.
  it('deve retornar false para string vazia', () => {
    // Confirma que uma string vazia retorna falso.
    expect(validateEmail('')).toBe(false);
  });
});

// Agrupa os testes relacionados à validação de senha.
describe('validatePassword', () => {
  // Verifica se a função aceita uma senha que atende aos requisitos.
  it('deve aceitar senha com letra e número', () => {
    // Confirma que uma senha válida retorna verdadeiro.
    expect(validatePassword('Senha@123')).toBe(true);
  });

  // Verifica se a função rejeita senhas menores que o tamanho mínimo.
  it('deve rejeitar senha com menos de 8 caracteres', () => {
    // Confirma que uma senha curta retorna falso.
    expect(validatePassword('Abc123')).toBe(false);
  });

  // Verifica se a função rejeita senhas sem números.
  it('deve rejeitar senha sem número', () => {
    // Confirma que uma senha sem número retorna falso.
    expect(validatePassword('SenhaTeste')).toBe(false);
  });

  // Verifica se a função rejeita senhas sem letras.
  it('deve rejeitar senha sem letra', () => {
    // Confirma que uma senha sem letra retorna falso.
    expect(validatePassword('12345678')).toBe(false);
  });

  // Verifica se a função rejeita valores vazios.
  it('deve rejeitar string vazia', () => {
    // Confirma que uma senha vazia retorna falso.
    expect(validatePassword('')).toBe(false);
  });
});
