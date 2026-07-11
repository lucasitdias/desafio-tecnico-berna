# Configuração de Testes (Vitest)

## Índice

- [Configuração de Testes (Vitest)](#configuração-de-testes-vitest)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [O que será desenvolvido](#o-que-será-desenvolvido)
- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
- [Etapa 1 — Instalar Dependências dos Teste](#etapa-1--instalar-dependências-dos-teste)
  - [Comando](#comando)
  - [O que será instalado](#o-que-será-instalado)
  - [Resultado](#resultado)
- [Etapa 2 — Configurar o Vite para os Testes](#etapa-2--configurar-o-vite-para-os-testes)
  - [Código](#código)
  - [Resultado](#resultado-1)
- [Etapa 3 — Criar Arquivo de Setup](#etapa-3--criar-arquivo-de-setup)
  - [Conteúdo](#conteúdo)
  - [Resultado](#resultado-2)
- [Etapa 4 — Adicionar Script de Teste](#etapa-4--adicionar-script-de-teste)
  - [Código](#código-1)
  - [Resultado](#resultado-3)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
  - [Build](#build)
  - [Frontend](#frontend)
  - [Estilização](#estilização)
  - [Testes](#testes)
  - [Qualidade de Código](#qualidade-de-código)
  - [CI/CD](#cicd)
  - [Deploy](#deploy)

---

# Objetivo

Este documento tem como objetivo configurar o ambiente de testes unitários no projeto, permitindo validar as regras de negócio (como validações de e-mail e senha) de forma automatizada.

Ao final desta etapa, o projeto estará preparado para executar testes que garantam a confiabilidade da aplicação antes de cada deploy.

Nenhuma funcionalidade da aplicação será implementada nesta etapa.

Esta etapa integra a preparação da infraestrutura de testes do projeto.

---

# O que será desenvolvido

Durante esta etapa serão realizadas apenas atividades relacionadas à configuração do ambiente de testes.

Serão abordados:

- instalação do Vitest;
- instalação da React Testing Library;
- configuração do ambiente jsdom;
- criação dos scripts de testes no `package.json`;
- configuração do Vitest no `vite.config.js`.

---

# Pré-requisitos

Antes de iniciar esta etapa, os seguintes Guides deverão estar concluídos.

- Guide 10 — Preparação do Ambiente;
- Guide 11 — Configuração do Git e GitHub;
- Guide 12 — Configuração do Projeto React + Vite;
- Guide 13 — Tailwind CSS;
- Guide 14 — ESLint;
- Guide 15 — Prettier;
- Guide 16 — Husky;
- Guide 17 — GitHub Actions;
- Guide 18 — Vercel;
- Guide 19 — Validação do Ambiente.

Também será necessário que:

- todas as dependências base do projeto estejam instaladas.
- Node.js v24.18.0 (ou versão estável utilizada) esteja instalado;
- o projeto esteja executando corretamente através do comando `npm run dev`;
- o ambiente tenha sido validado.

---

# Passo a Passo

Nesta etapa será configurada toda a infraestrutura necessária para execução de testes unitários.

Ao final deste processo o projeto estará preparado para criar e executar testes automatizados.

---

# Etapa 1 — Instalar Dependências dos Teste

Execute o comando no terminal (**Git Bash**) na raiz do projeto.

---

## Comando

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

---

## O que será instalado

- **Vitest** — executor de testes;
- **React Testing Library** — biblioteca para testes de componentes React;
- **jsdom** — ambiente que simula um navegador utilizando Node.js.

---

## Resultado

As dependências deverão ser instaladas sem mensagens de erro.

---

# Etapa 2 — Configurar o Vite para os Testes

Abra o arquivo:

```text
vite.config.js
```

e adicione a configuração de testes.

---

## Código

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
```

---

## Resultado

O Vite estará configurado para executar testes utilizando o Vitest.

---

# Etapa 3 — Criar Arquivo de Setup

Crie a pasta:

```text
src/test/
```

e o arquivo:

```text
setup.js
```

---

## Conteúdo

```javascript
import '@testing-library/jest-dom';
```

---

## Resultado

O ambiente de testes estará preparado para utilizar as extensões disponibilizadas pela Testing Library.

---

# Etapa 4 — Adicionar Script de Teste

Abra o arquivo:

```text
package.json
```

Adicione os seguintes scripts na seção:

```json
"scripts"
```

---

## Código

```json
"test": "vitest",
"test:ui": "vitest --ui",
"test:run": "vitest run"
```

---

## Resultado

Os comandos de execução de testes estarão disponíveis através do npm.

---

# Boas Práticas

Durante o desenvolvimento dos testes recomenda-se:

- priorizar testes para as validações de e-mail e senha exigidas;
- utilizar nomes de testes que descrevam claramente o comportamento esperado;
- manter cada teste responsável por validar apenas uma pequena parte da funcionalidade.

---

# Segurança

Durante esta etapa deverão ser observados os seguintes cuidados:

- não utilizar credenciais reais nos arquivos de teste;
- manter os testes isolados de serviços externos utilizando o mock de autenticação definido na arquitetura.

---

# Erros Comuns

Evitar:

- executar testes de componentes React sem configurar o ambiente `jsdom`;
- testar detalhes de implementação em vez do comportamento esperado pelo usuário.

---

# Critérios

Esta etapa será considerada concluída quando:

- o Vitest estiver instalado e configurado;
- o script `npm test` executar sem erros;
- o arquivo de setup estiver configurado corretamente;
- o ambiente estiver preparado para criação do primeiro teste de login.

---

# Checklist

- [x] Vitest instalado como dependência de desenvolvimento.
- [x] jsdom instalado.
- [x] React Testing Library instalada.
- [x] `vite.config.js` atualizado com a propriedade `test`.
- [x] Scripts de teste adicionados ao `package.json`.
- [x] Arquivo `src/test/setup.js` criado.
- [x] Configuração validada com sucesso.

---

# Referências

## Ambiente de Desenvolvimento

- Node.js v24.x LTS → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest-v24.x/api/)
- npm → [Documentação](https://docs.npmjs.com/)

---

## Build

- Vite → [Site Oficial](https://vite.dev/) | [Documentação](https://vite.dev/guide/)

---

## Frontend

- React → [Site Oficial](https://react.dev/) | [Documentação](https://react.dev/)

---

## Estilização

- Tailwind CSS → [Site Oficial](https://tailwindcss.com/) | [Documentação](https://tailwindcss.com/docs)

---

## Testes

- Vitest → [Site Oficial](https://vitest.dev/) | [Documentação](https://vitest.dev/guide/)
- React Testing Library → [Site Oficial](https://testing-library.com/) | [Documentação](https://testing-library.com/docs/react-testing-library/intro/)
- jest-dom → [Documentação](https://testing-library.com/docs/ecosystem-jest-dom/)
- jsdom → [Site Oficial](https://github.com/jsdom/jsdom) | [Documentação](https://github.com/jsdom/jsdom)

---

## Qualidade de Código

- ESLint → [Site Oficial](https://eslint.org/) | [Documentação](https://eslint.org/docs/latest/)
- Prettier → [Site Oficial](https://prettier.io/) | [Documentação](https://prettier.io/docs/)
- Husky → [Site Oficial](https://typicode.github.io/husky/) | [Documentação](https://typicode.github.io/husky/)

---

## CI/CD

- GitHub Actions → [Documentação](https://docs.github.com/actions)

---

## Deploy

- Vercel → [Site Oficial](https://vercel.com/) | [Documentação](https://vercel.com/docs)

---
