# Planejamento

## Índice
- [Planejamento](#planejamento)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Planejamento](#planejamento-1)
- [Desenvolvimento](#desenvolvimento)
- [Ordem de Execução](#ordem-de-execução)
  - [Etapa 1 — Planejamento Geral](#etapa-1--planejamento-geral)
  - [Etapa 2 — Planejamento da Execução](#etapa-2--planejamento-da-execução)
  - [Etapa 3 — Levantamento dos Requisitos](#etapa-3--levantamento-dos-requisitos)
  - [Etapa 4 — Organização do Versionamento](#etapa-4--organização-do-versionamento)
  - [Etapa 5 — Arquitetura](#etapa-5--arquitetura)
  - [Etapa 6 — Desenvolvimento](#etapa-6--desenvolvimento)
  - [Etapa 7 — Segurança](#etapa-7--segurança)
  - [Etapa 8 — Integração Contínua e Entrega Contínua](#etapa-8--integração-contínua-e-entrega-contínua)
  - [Etapa 9 — Deploy](#etapa-9--deploy)
  - [Etapa 10 — Validação](#etapa-10--validação)
- [Dependências entre as Etapas](#dependências-entre-as-etapas)
- [Critérios](#critérios)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios-1)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Tecnologias Base](#tecnologias-base)
  - [Controle de Versão](#controle-de-versão)
  - [Deploy](#deploy)

---

# Objetivo

Este documento define o plano de execução técnico, estabelecendo a ordem correta das atividades, as dependências entre cada etapa e os critérios que deverão ser atendidos antes de avançar para a próxima fase.

Seu objetivo é garantir que o desenvolvimento aconteça de forma organizada, segura, previsível e alinhada aos requisitos técnicos.

Antes de escrever código é necessário definir:

- a sequência de desenvolvimento;
- as dependências entre as atividades;
- os critérios de validação;
- os pontos de controle;
- os responsáveis por cada etapa (quando aplicável).

Isso reduz retrabalho, evita decisões fora do escopo e facilita a manutenção do projeto.

---

# Referência

Será realizado o desenvolvimento de uma interface de autenticação moderna, segura e responsiva utilizando React, GitHub, Vercel e Tailwind CSS.

---

# Planejamento

Ao final desta etapa o projeto deverá possuir:

- cronograma de execução definido;
- ordem de desenvolvimento estabelecida;
- documentação organizada;
- critérios de validação definidos;
- separação entre requisitos do desafio e infraestrutura de desenvolvimento.

---

# Desenvolvimento

O desenvolvimento seguirá uma abordagem incremental.

Cada etapa somente será iniciada quando:

- a documentação correspondente estiver concluída;
- a etapa anterior estiver validada;
- os critérios de conclusão forem atendidos.

---

# Ordem de Execução

## Etapa 1 — Planejamento Geral

Status:

- Concluída.

Objetivo:

Definir metodologia, escopo, organização e diretrizes gerais do projeto.

Documentação:

```text
docs/00-planejamento-geral/
```

---

## Etapa 2 — Planejamento da Execução

Status:

- Em andamento.

Objetivo:

Definir como o projeto será desenvolvido.

Documentação:

```text
docs/01-planejamento/
```

---

## Etapa 3 — Levantamento dos Requisitos

Objetivo:

Documentar todos os requisitos funcionais e não funcionais extraídosdo PDF.

Nenhum requisito será criado além daqueles previstos.

Documentação:

```text
docs/02-requisitos/
```

---

## Etapa 4 — Organização do Versionamento

Objetivo:

Definir a estratégia de desenvolvimento utilizando Git Flow, branches, commits e Pull Requests.

Esta etapa refere-se exclusivamente à infraestrutura de desenvolvimento.

Documentação:

```text
docs/03-gitflow/
```

---

## Etapa 5 — Arquitetura

Objetivo:

Definir a estrutura de diretórios, responsabilidades dos componentes, organização da aplicação e padrões adotados.

Documentação:

```text
docs/04-arquitetura/
```

---

## Etapa 6 — Desenvolvimento

Objetivo:

Implementar cada funcionalidade prevista.

Cada funcionalidade será documentada antes da implementação.

Documentação:

```text
docs/05-desenvolvimento/
```

---

## Etapa 7 — Segurança

Objetivo:

Documentar as boas práticas de segurança adotadas durante o desenvolvimento.

Esta documentação complementará todas as demais etapas.

Documentação:

```text
docs/06-seguranca/
```

---

## Etapa 8 — Integração Contínua e Entrega Contínua

Objetivo:

Definir a estratégia de validação automática do projeto.

Serão documentados:

- GitHub Actions;
- validação de Pull Requests;
- qualidade do código;
- build automatizado;
- deploy.

Documentação:

```text
docs/07-ci-cd/
```

---

## Etapa 9 — Deploy

Objetivo:

Documentar todo o processo de publicação utilizando a Vercel.

Documentação:

```text
docs/08-deploy/
```

---

## Etapa 10 — Validação

Objetivo:

Garantir que todos os requisitos foram implementados corretamente.

Documentação:

```text
docs/09-checklist/
```

---

# Dependências entre as Etapas

A sequência deverá ser obrigatoriamente respeitada.

```text
Planejamento Geral
        │
        ▼
Planejamento
        │
        ▼
Requisitos
        │
        ▼
Git Flow
        │
        ▼
Arquitetura
        │
        ▼
Desenvolvimento
        │
        ▼
Segurança
        │
        ▼
CI/CD
        │
        ▼
Deploy
        │
        ▼
Checklist Final
```

Nenhuma etapa poderá ser iniciada sem que sua dependência esteja concluída.

---

# Critérios

Cada etapa deverá atender aos seguintes critérios antes de ser considerada concluída:

- documentação completa;
- conformidade com o projeto (PDF);
- conformidade com as boas práticas adotadas;
- critérios de segurança atendidos;
- checklist aprovado.

---

# Boas Práticas

Durante toda a execução do projeto serão seguidas as seguintes diretrizes:

- documentar antes de implementar;
- desenvolver incrementalmente;
- realizar pequenas alterações por etapa;
- manter histórico organizado;
- utilizar nomenclaturas consistentes;
- evitar duplicação de responsabilidades;
- manter documentação sincronizada com o código.

---

# Segurança

Embora esta etapa não envolva implementação, algumas diretrizes passam a valer desde o início do projeto.

- Nunca desenvolver diretamente na branch `main`.
- Nunca realizar alterações sem documentação correspondente.
- Nunca versionar arquivos contendo informações sensíveis.
- Validar cada alteração antes da criação de Pull Requests.
- Manter histórico de commits organizado e rastreável.

Os detalhes técnicos de cada medida serão documentados nas etapas específicas.

---

# Erros Comuns

Evitar:

- iniciar implementação antes do planejamento;
- alterar a ordem definida neste documento;
- misturar requisitos do desafio com infraestrutura de desenvolvimento;
- implementar funcionalidades não previstas;
- criar documentação desatualizada em relação ao projeto.

---

# Critérios

Esta etapa será considerada concluída quando:

- todas as fases do projeto estiverem definidas;
- a ordem de execução estiver estabelecida;
- as dependências estiverem documentadas;
- os critérios de validação estiverem definidos;
- os cuidados gerais de segurança estiverem registrados.

---

# Checklist

- [x] Objetivo definido
- [x] Ordem das etapas definida
- [x] Dependências documentadas
- [x] Fluxo de execução estabelecido
- [x] Critérios de validação definidos
- [x] Boas práticas documentadas
- [x] Diretrizes gerais de segurança registradas
- [x] Critérios de conclusão definidos

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

---
