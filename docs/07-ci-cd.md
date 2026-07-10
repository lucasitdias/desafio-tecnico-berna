# Integração Contínua (CI) e Entrega Contínua (CD)

## Índice
- [Integração Contínua (CI) e Entrega Contínua (CD)](#integração-contínua-ci-e-entrega-contínua-cd)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Objetivos](#objetivos)
- [Ferramentas Adotadas](#ferramentas-adotadas)
- [ESLint](#eslint)
  - [Objetivo](#objetivo-1)
    - [Como será utilizado neste projeto](#como-será-utilizado-neste-projeto)
    - [Benefícios](#benefícios)
- [Prettier](#prettier)
  - [Objetivo](#objetivo-2)
    - [Como será utilizado neste projeto](#como-será-utilizado-neste-projeto-1)
    - [Benefícios](#benefícios-1)
- [Husky](#husky)
  - [Objetivo](#objetivo-3)
    - [Como será utilizado neste projeto](#como-será-utilizado-neste-projeto-2)
    - [Benefícios](#benefícios-2)
- [GitHub Actions](#github-actions)
  - [Objetivo](#objetivo-4)
    - [Como será utilizado neste projeto](#como-será-utilizado-neste-projeto-3)
    - [Benefícios](#benefícios-3)
- [Integração Contínua (CI)](#integração-contínua-ci)
  - [Objetivo](#objetivo-5)
    - [Fluxo](#fluxo)
- [Entrega Contínua (CD)](#entrega-contínua-cd)
  - [Objetivo](#objetivo-6)
- [Fluxo Completo](#fluxo-completo)
- [Critérios](#critérios)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios-1)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Qualidade de Código](#qualidade-de-código)
  - [Controle de Versão](#controle-de-versão)
  - [CI/CD e Deploy](#cicd-e-deploy)

---

# Objetivo

Este documento define a estratégia de qualidade adotada durante o desenvolvimento do projeto.

Seu objetivo é documentar como ferramentas de automação serão utilizadas para validar o código, manter a padronização do projeto e reduzir falhas durante o desenvolvimento, sem alterar os requisitos funcionais.

Essas validações ajudam a identificar problemas de qualidade, organização e funcionamento antes que eles cheguem à versão final da aplicação.

Todas as ferramentas descritas neste documento fazem parte da infraestrutura de desenvolvimento.

---

# Referência

O desafio não exige a utilização de:

- ESLint;
- Prettier;
- Husky;
- GitHub Actions;
- CI;
- CD.

A adoção dessas ferramentas representa uma decisão para garantir qualidade, organização e segurança durante o desenvolvimento.

Nenhuma funcionalidade da aplicação será alterada por sua utilização.

---

# Objetivos

Ao final desta etapa o projeto deverá possuir:

- padronização automática do código;
- validações automáticas durante o desenvolvimento;
- pipeline de integração contínua;
- estratégia de entrega contínua;
- fluxo automatizado de qualidade.

---

# Ferramentas Adotadas

Durante o desenvolvimento serão utilizadas as seguintes ferramentas:

- ESLint;
- Prettier;
- Husky;
- GitHub Actions.

Cada uma possui uma responsabilidade específica.

---

# ESLint

## Objetivo

Analisar o código para identificar problemas relacionados à qualidade e boas práticas.

### Como será utilizado neste projeto

Será executado para verificar:

- possíveis erros;
- inconsistências;
- padrões de código.

### Benefícios

- melhora a qualidade do código;
- reduz erros simples;
- mantém consistência.

---

# Prettier

## Objetivo

Padronizar automaticamente a formatação do código.

### Como será utilizado neste projeto

Será responsável por manter:

- indentação;
- espaçamento;
- organização visual;
- consistência entre arquivos.

### Benefícios

- facilita leitura;
- reduz diferenças desnecessárias;
- mantém padrão único.

---

# Husky

## Objetivo

Executar validações automaticamente antes de permitir commits.

### Como será utilizado neste projeto

Antes de cada commit poderão ser executadas verificações como:

- formatação;
- lint;
- validações configuradas.

Caso alguma verificação falhe, o commit deverá ser corrigido antes de prosseguir.

### Benefícios

- evita commits com problemas simples;
- reduz retrabalho;
- melhora qualidade do histórico.

---

# GitHub Actions

## Objetivo

Automatizar verificações durante Pull Requests e integrações.

### Como será utilizado neste projeto

Durante a integração do código serão executadas automaticamente verificações definidas para o projeto.

Exemplos:

- instalação das dependências;
- execução do lint;
- validação da build.

### Benefícios

- aumenta confiabilidade;
- reduz falhas;
- automatiza verificações.

---

# Integração Contínua (CI)

## Objetivo

Garantir que toda alteração seja validada antes de ser integrada.

### Fluxo

```text
Push

↓

GitHub Actions

↓

Instalação das dependências

↓

ESLint

↓

Build

↓

Validação

↓

Merge permitido
```

A integração somente deverá ocorrer após todas as verificações serem concluídas com sucesso.

---

# Entrega Contínua (CD)

## Objetivo

Garantir que apenas versões validadas sejam publicadas.

Neste projeto o deploy será realizado na Vercel após a conclusão das validações.

---

# Fluxo Completo

```text
Feature Branch

↓

Commit

↓

Husky

↓

Push

↓

Pull Request

↓

GitHub Actions

↓

ESLint

↓

Build

↓

Validação

↓

Merge para Dev

↓

Validação Final

↓

Merge para Main

↓

Deploy na Vercel
```

---

# Critérios

Antes de qualquer merge deverão ser atendidos os seguintes critérios:

- documentação atualizada;
- código revisado;
- lint sem erros;
- build executada com sucesso;
- requisitos da etapa concluídos.

---

# Boas Práticas

Durante o desenvolvimento deverão ser observadas as seguintes diretrizes:

- realizar commits pequenos;
- manter Pull Requests objetivos;
- corrigir problemas antes do merge;
- manter documentação sincronizada;
- utilizar automações como apoio ao desenvolvimento.

---

# Segurança

Durante a configuração da automação deverão ser observadas as seguintes práticas:

- nunca armazenar credenciais diretamente nos workflows;
- utilizar GitHub Secrets quando necessário;
- limitar permissões dos workflows;
- revisar alterações nos arquivos de automação;
- validar pipelines antes da publicação.

---

# Erros Comuns

Evitar:

- ignorar erros do ESLint;
- desabilitar verificações para realizar commits;
- publicar código sem validação;
- utilizar workflows sem necessidade;
- manter automações desatualizadas.

---

# Critérios

Esta etapa será considerada concluída quando:

- ferramentas documentadas;
- responsabilidades definidas;
- fluxo automatizado registrado;
- critérios de validação definidos;
- práticas de segurança documentadas.

---

# Checklist

- [x] ESLint documentado
- [x] Prettier documentado
- [x] Husky documentado
- [x] GitHub Actions documentado
- [x] Integração Contínua documentada
- [x] Entrega Contínua documentada
- [x] Fluxo automatizado definido
- [x] Diretrizes de segurança registradas

---

# Referências

## Qualidade de Código

- ESLint → [Site Oficial](https://eslint.org/) | [Documentação](https://eslint.org/docs/latest/)
- Prettier → [Site Oficial](https://prettier.io/) | [Documentação](https://prettier.io/docs/)
- Husky → [Site Oficial](https://typicode.github.io/husky/) | [Documentação](https://typicode.github.io/husky/)

---

## Controle de Versão

- Git → [Site Oficial](https://git-scm.com/) | [Documentação](https://git-scm.com/doc)
- GitHub → [Site Oficial](https://github.com/) | [Documentação](https://docs.github.com/)

---

## CI/CD e Deploy

- GitHub Actions → [Documentação](https://docs.github.com/actions)
- Vercel → [Site Oficial](https://vercel.com/) | [Documentação](https://vercel.com/docs)

---

