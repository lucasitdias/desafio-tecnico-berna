# Versionamento (Git Flow)

## Índice

- [Versionamento (Git Flow)](#versionamento-git-flow)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Objetivos](#objetivos)
- [Estratégia de Branches](#estratégia-de-branches)
- [Branch Main](#branch-main)
  - [Objetivo](#objetivo-1)
- [Branch Dev](#branch-dev)
  - [Objetivo](#objetivo-2)
- [Branches de Trabalho](#branches-de-trabalho)
  - [feature/](#feature)
  - [docs/](#docs)
  - [fix/](#fix)
  - [refactor/](#refactor)
  - [chore/](#chore)
  - [hotfix/](#hotfix)
- [Desenvolvimento](#desenvolvimento)
- [Estratégia de Commits](#estratégia-de-commits)
- [Pull Requests](#pull-requests)
- [Estratégia de Merge](#estratégia-de-merge)
- [Branch Protection](#branch-protection)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Controle de Versão](#controle-de-versão)

---

# Objetivo

Este documento define a estratégia de versionamento do projeto, estabelecendo o fluxo de trabalho utilizando Git e GitHub durante todo o desenvolvimento.

Seu objetivo é garantir organização, rastreabilidade, segurança e qualidade no histórico do projeto, sem alterar os requisitos funcionais definidos.

Uma estratégia de versionamento bem definida permite:

- manter um histórico organizado;
- reduzir conflitos;
- facilitar revisões;
- preservar a estabilidade da aplicação;
- evitar alterações diretas em código estável.

Esta estratégia faz parte exclusivamente da infraestrutura de desenvolvimento.

---

# Referência

É solicitado que o projeto seja disponibilizado em um repositório GitHub.

Este documento define apenas como esse repositório será organizado durante o desenvolvimento.

---

# Objetivos

Ao final desta etapa o projeto deverá possuir:

- estratégia de branches definida;
- fluxo de desenvolvimento documentado;
- convenção de commits estabelecida;
- política de Pull Requests definida;
- estratégia de merge documentada.

---

# Estratégia de Branches

Será adotada a seguinte estrutura:

```text
main
│
└── dev
      │
      ├── feature/*
      ├── docs/*
      ├── fix/*
      ├── refactor/*
      ├── chore/*
      └── hotfix/*
```

Cada branch possui uma responsabilidade específica.

---

# Branch Main

## Objetivo

Versão estável do projeto (Produção).

Regras:

- nunca desenvolver diretamente;
- nunca realizar commits diretos;
- receber apenas código validado;
- conter apenas versões funcionais da aplicação.

---

# Branch Dev

## Objetivo

Centralizar todo o desenvolvimento do projeto.

Todas as funcionalidades concluídas serão integradas primeiro nesta branch.

Somente após validação poderão seguir para a `main`.

---

# Branches de Trabalho

Cada atividade será desenvolvida em uma branch específica.

## feature/

Utilizada para desenvolvimento de funcionalidades.

Exemplo:

```text
feature/login-page
```

---

## docs/

Utilizada para alterações exclusivamente na documentação.

Exemplo:

```text
docs/readme-planejamento
```

---

## fix/

Utilizada para correções de defeitos.

Exemplo:

```text
fix/email-validation
```

---

## refactor/

Utilizada para melhorias internas sem alterar comportamento.

Exemplo:

```text
refactor/login-component
```

---

## chore/

Utilizada para tarefas de manutenção.

Exemplo:

```text
chore/eslint-config
```

---

## hotfix/

Utilizada apenas para correções urgentes em versões estáveis.

Neste projeto seu uso será eventual quando necessário.

---

# Desenvolvimento

Todo desenvolvimento seguirá obrigatoriamente o fluxo abaixo.

```text
main

↓

dev

↓

feature/*

↓

Commit

↓

Push

↓

Pull Request

↓

Code Review

↓

GitHub Actions

↓

Merge para dev

↓

Validação

↓

Merge para main

↓

Deploy
```

Nenhuma etapa deverá ser ignorada.

---

# Estratégia de Commits

Será utilizada uma convenção padronizada para facilitar o entendimento do histórico.

Para garantir a rastreabilidade total solicitada, cada commit de funcionalidade deve referenciar seu respectivo requisito (ex: RF-01).

Exemplo: feat: implement login screen (RF-01).

Tipos principais:

```text
feat:
```

Nova funcionalidade.

---

```text
fix:
```

Correção.

---

```text
docs:
```

Documentação.

---

```text
style:
```

Formatação.

---

```text
refactor:
```

Refatoração.

---

```text
test:
```

Testes.

---

```text
build:
```

Alterações de build.

---

```text
chore:
```

Manutenção.

> **Obs:**
> Também será utilizado para alterações relacionadas à infraestrutura do projeto, como configurações do GitHub Actions, Husky, ESLint, Prettier e demais ferramentas de desenvolvimento.

---

# Pull Requests

Toda alteração deverá ser enviada através de Pull Request.

Os Pull Requests deverão utilizar o template padronizado definido para o projeto, garantindo consistência durante o processo de revisão.

Objetivos:

- revisar alterações;
- validar qualidade;
- executar verificações automáticas;
- manter histórico organizado.

Nenhum desenvolvimento deverá ser integrado diretamente à branch principal.

---

# Estratégia de Merge

O merge somente poderá ocorrer quando:

- documentação correspondente estiver concluída;
- código aprovado;
- validações executadas;
- build concluído com sucesso;
- critérios da etapa atendidos.

---

# Branch Protection

A branch `main` deverá permanecer protegida.

Recomendações:

- impedir commits diretos;
- exigir Pull Request;
- exigir aprovação antes do merge;
- exigir aprovação do pipeline do GitHub Actions antes do merge.

Estas configurações aumentam a segurança e reduzem riscos durante o desenvolvimento.

---

# Boas Práticas

Durante o desenvolvimento deverão ser seguidas as seguintes práticas:

- criar uma branch por atividade;
- manter branches pequenas;
- realizar commits frequentes;
- escrever mensagens claras;
- atualizar a branch antes do merge;
- utilizar os templates de Issues e Pull Requests do repositório.
- remover branches concluídas.

---

# Segurança

Para preservar a integridade do projeto deverão ser observadas as seguintes diretrizes.

Nunca:

- desenvolver diretamente na `main`;
- realizar merge sem validação;
- ignorar conflitos;
- versionar arquivos sensíveis;
- enviar credenciais ao repositório.

Sempre:

- revisar alterações antes do merge;
- validar o funcionamento da aplicação;
- manter histórico organizado;
- utilizar Pull Requests.

---

# Erros Comuns

Evitar:

- trabalhar diretamente na branch principal;
- utilizar commits genéricos;
- misturar várias alterações em um único commit;
- criar Pull Requests muito grandes;
- esquecer de atualizar a branch antes do merge.

---

# Critérios

Esta etapa será considerada concluída quando:

- estratégia de branches estiver definida;
- fluxo de desenvolvimento documentado;
- convenção de commits estabelecida;
- política de Pull Requests definida;
- critérios de merge registrados.

---

# Checklist

- [x] Estratégia de branches documentada
- [x] Fluxo de desenvolvimento definido
- [x] Convenção de commits registrada
- [x] Política de Pull Requests documentada
- [x] Estratégia de merge definida
- [x] Diretrizes de segurança registradas
- [x] Critérios de conclusão definidos

---

# Referências

## Controle de Versão

- Git → [Site Oficial](https://git-scm.com/) | [Documentação](https://git-scm.com/doc)
- GitHub → [Site Oficial](https://github.com/) | [Documentação](https://docs.github.com/)

---
