# Planejamento Geral

## Índice
- [Planejamento Geral](#planejamento-geral)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Stack Tecnológica do Projeto](#stack-tecnológica-do-projeto)
  - [Importante](#importante)
  - [Missão](#missão)
  - [Stack Tecnológica](#stack-tecnológica)
  - [Requisitos Obrigatórios](#requisitos-obrigatórios)
  - [Diferenciais previstos no desafio](#diferenciais-previstos-no-desafio)
- [Escopo do Projeto](#escopo-do-projeto)
- [Organização do Projeto](#organização-do-projeto)
  - [1. Requisitos do Desafio](#1-requisitos-do-desafio)
  - [2. Infraestrutura de Desenvolvimento](#2-infraestrutura-de-desenvolvimento)
- [Metodologia](#metodologia)
  - [Fase 0](#fase-0)
  - [Fase 1](#fase-1)
  - [Fase 2](#fase-2)
  - [Fase 3](#fase-3)
  - [Fase 4](#fase-4)
- [Estrutura da Pasta docs](#estrutura-da-pasta-docs)
- [Fluxo de Desenvolvimento](#fluxo-de-desenvolvimento)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Tecnologias Base](#tecnologias-base)
  - [Controle de Versão](#controle-de-versão)
  - [Deploy](#deploy)
  - [Qualidade de Código](#qualidade-de-código)

---

# Objetivo

Este documento tem como objetivo definir o planejamento geral do projeto, estabelecendo a estratégia de desenvolvimento, organização da documentação, infraestrutura adotada, boas práticas e critérios que serão seguidos durante toda a implementação.

Este documento será a principal referência para todas as demais etapas do projeto.

Nenhuma implementação deverá ser iniciada sem que sua documentação correspondente esteja concluída.

Esta documentação tem como finalidade servir de guia durante todo o ciclo de desenvolvimento.

---

# Referência

Este planejamento foi elaborado com base nas informações fornecidas no desafio técnico da Berna (PDF).

---

# Stack Tecnológica do Projeto

Esta seção consolida todas as tecnologias e práticas mencionadas no desafio técnico, diferenciando claramente o que faz parte da implementação obrigatória, o que é recomendado, o que representa uma boa prática e o que foi apresentado apenas como reflexão para evolução futura.

| Tecnologia / Recurso | Status | Observação |
|-----------------------|--------|------------|
| React.js |  Tecnologia base esperada | Utilizado para construção da interface, componentização e gerenciamento de estado. |
| GitHub |  Tecnologia base esperada | Utilizado para versionamento do código e entrega do repositório. |
| Vercel |  Tecnologia base esperada | Utilizado para publicação (deploy) da aplicação. |
| Tailwind CSS |  Fortemente recomendado | Recomendado pelo desafio para estilização da interface. |
| Git |  Necessário (implícito) | Necessário para utilizar o GitHub e realizar o versionamento do projeto. |
| Variáveis de ambiente (.env) |  Citadas pelo desafio | Utilizadas para proteger informações sensíveis durante o desenvolvimento e deploy. |
| Testes Unitários |  Diferencial opcional | Citado pelo desafio como forma de aumentar a confiabilidade da aplicação. |
| Clean Code |  Diferencial / Boa prática | Incentivado para melhorar organização, legibilidade e manutenção do código. |
| UX / UI |  Diferencial | Melhorias visuais e de experiência do usuário que agregam valor à entrega. |
| Neon (Serverless PostgreSQL) |  Reflexão para evolução futura | Citado apenas como possibilidade para uma futura integração com banco de dados. Não será utilizado neste desafio. |
| Rate Limit (Proteção contra força bruta) |  Reflexão para evolução futura | Citado apenas como cenário de reflexão. Não será implementado neste desafio. |

## Importante

As tecnologias acima representam exatamente o que foi apresentado no desafio técnico.

As ferramentas abaixo ``não fazem parte dos requisitos do desafio``, estão sendo adotadas exclusivamente como infraestrutura de desenvolvimento para garantir organização, qualidade, segurança e padronização durante a implementação:

- Git Flow;
- Estratégia de Branches;
- Pull Requests;
- Conventional Commits;
- ESLint;
- Prettier;
- Husky;
- GitHub Actions;
- Integração Contínua (CI);
- Entrega Contínua (CD);
- Branch Protection.

Essas ferramentas não alteram o comportamento esperado da aplicação e não representam funcionalidades do sistema. Sua utilização é uma decisão adotada para apoiar o desenvolvimento do projeto seguindo boas práticas.

---

## Missão

Desenvolver uma interface de autenticação moderna, segura e responsiva.

---

## Stack Tecnológica

Conforme informado no desafio, serão utilizadas as seguintes tecnologias:

- React.js
- GitHub
- Vercel
- Tailwind CSS

---

## Requisitos Obrigatórios

O projeto deverá implementar:

- Interface de Login
- Campos de e-mail e senha
- Validação dos dados informados
- Feedback visual para sucesso e erro
- Área protegida após autenticação
- Restrição de acesso para usuários não autenticados
- Responsividade
- Deploy utilizando Vercel
- Documentação do projeto

---

## Diferenciais previstos no desafio

O desafio menciona como diferenciais:

- Testes Unitários
- Clean Code
- UX/UI refinada

Sempre que possível estes itens serão implementados sem alterar o escopo da aplicação.

---

# Escopo do Projeto

O objetivo deste projeto é implementar exclusivamente o que foi solicitado pelo desafio técnico.

Nenhuma funcionalidade será adicionada sem necessidade.

As decisões adicionais adotadas neste projeto referem-se exclusivamente à infraestrutura de desenvolvimento, organização, qualidade e segurança.

---

# Organização do Projeto

O projeto será dividido em duas grandes áreas.

## 1. Requisitos do Desafio

Contém tudo aquilo que faz parte da aplicação.

Exemplos:

- Login
- Validações
- Rota Privada
- Responsividade
- Deploy
- README

Todo requisito desta categoria possui origem direta no desafio proposto.

---

## 2. Infraestrutura de Desenvolvimento

Esta categoria reúne ferramentas e processos utilizados para garantir um desenvolvimento organizado e seguro.

Esses itens não alteram as funcionalidades da aplicação.

Serão utilizados como suporte durante o desenvolvimento.

Exemplos:

- Organização do repositório
- Git Flow
- Estratégia de Branches
- Pull Requests
- Conventional Commits
- ESLint
- Prettier
- Husky
- GitHub Actions
- CI
- CD
- Branch Protection
- Organização da documentação

---

# Metodologia

O desenvolvimento seguirá obrigatoriamente a sequência abaixo.

## Fase 0

Planejamento

Objetivos:

- compreender completamente o desafio;
- documentar todas as etapas;
- definir organização;
- definir infraestrutura.

---

## Fase 1

Preparação do Ambiente

Nesta fase serão preparados e validados todos os recursos necessários para iniciar o projeto.

Serão realizadas:

- instalação e validação do Git;
- instalação e validação do Node.js;
- utilização do npm como gerenciador de pacotes;
- configuração do VS Code;
- configuração inicial do GitHub;
- validação do ambiente de desenvolvimento.

---

## Fase 2

Configuração do Projeto

Nesta fase será criada toda a base técnica do projeto utilizando as tecnologias previstas no desafio e as ferramentas de infraestrutura definidas para o desenvolvimento.

Serão configurados:

- React.js;
- Vite;
- Tailwind CSS;
- ESLint;
- Prettier;
- Husky;
- GitHub Actions;
- Vercel;
- variáveis de ambiente.

Ao final desta fase, todo o ambiente estará preparado e validado para iniciar a implementação das funcionalidades da aplicação.

---

## Fase 3

Desenvolvimento / Implementação

Cada funcionalidade será implementada individualmente.

Antes de iniciar qualquer implementação deverá existir documentação correspondente.

Nenhuma funcionalidade será criada sem documentação.

---

## Fase 4

Validação

Cada etapa somente será considerada concluída após validação completa.

Serão verificados:

- requisitos do desafio;
- funcionamento;
- organização;
- segurança;
- documentação;
- qualidade do código.

Somente após aprovação da etapa será iniciada a próxima fase.

---

# Estrutura da Pasta docs

```text
docs/

├── 00-planejamento-geral/
├── 01-planejamento/
├── 02-requisitos/
├── 03-gitflow/
├── 04-arquitetura/
├── 05-desenvolvimento/
├── 06-seguranca/
├── 07-ci-cd/
├── 08-deploy/
└── 09-checklist/
```

Cada diretório conterá sua própria documentação.

---

# Fluxo de Desenvolvimento

O desenvolvimento seguirá obrigatoriamente o fluxo abaixo.

```
Planejamento

↓

Documentação

↓

Configuração da infraestrutura

↓

Desenvolvimento

↓

Validação

↓

Merge

↓

Deploy
```
---

# Boas Práticas

Durante todo o desenvolvimento deverão ser seguidas as seguintes diretrizes.

- documentar antes de implementar;
- manter organização consistente;
- seguir os padrões definidos na arquitetura;
- evitar duplicação de código;
- utilizar nomes claros;
- manter commits pequenos e objetivos;
- validar cada etapa antes de prosseguir.

---

# Segurança

Essas práticas deverão ser adotadas durante todo o desenvolvimento.

Sempre:

- utilizar variáveis de ambiente para informações sensíveis;
- nunca versionar arquivos `.env`;
- manter o `.gitignore` atualizado;
- validar entradas do usuário;
- organizar corretamente as rotas protegidas.

---

# Critérios

Esta etapa será considerada concluída quando:

- o planejamento geral estiver documentado;
- a metodologia do projeto estiver definida;
- a estrutura da documentação estiver organizada;
- as tecnologias utilizadas estiverem definidas;
- a infraestrutura de desenvolvimento estiver planejada;
- os critérios de qualidade estiverem registrados.

---

# Checklist

- [x] Objetivos definidos.
- [x] Escopo documentado.
- [x] Stack tecnológica definida.
- [x] Metodologia estabelecida.
- [x] Estrutura da documentação organizada.
- [x] Fluxo de desenvolvimento definido.
- [x] Boas práticas registradas.
- [x] Diretrizes de segurança registradas.

---

# Referências

## Tecnologias Base

- React → https://react.dev/
- Documentação do React → https://react.dev/learn
- Tailwind CSS → https://tailwindcss.com/
- Documentação do Tailwind CSS → https://tailwindcss.com/docs

---

## Controle de Versão

- Git → https://git-scm.com/
- Documentação do Git → https://git-scm.com/doc
- GitHub → https://github.com/
- GitHub Docs → https://docs.github.com/

---

## Deploy

- Vercel → https://vercel.com/
- Documentação da Vercel → https://vercel.com/docs
- Variáveis de Ambiente na Vercel → https://vercel.com/docs/environment-variables

---

## Qualidade de Código

- ESLint → https://eslint.org/
- Documentação do ESLint → https://eslint.org/docs/latest/
- Prettier → https://prettier.io/
- Documentação do Prettier → https://prettier.io/docs/
- Husky → https://typicode.github.io/husky/
- Documentação do Husky → https://typicode.github.io/husky/

---
