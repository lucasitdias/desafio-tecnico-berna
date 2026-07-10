# Requisitos

## Índice
- [Requisitos](#requisitos)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Stack Tecnológica](#stack-tecnológica)
- [Requisitos](#requisitos-1)
  - [1. Requisitos Funcionais](#1-requisitos-funcionais)
  - [2. Requisitos Não Funcionais](#2-requisitos-não-funcionais)
  - [3. Infraestrutura de Desenvolvimento](#3-infraestrutura-de-desenvolvimento)
- [Requisitos Funcionais](#requisitos-funcionais)
  - [RF-01 — Interface de Login](#rf-01--interface-de-login)
    - [Origem](#origem)
    - [Objetivo](#objetivo-1)
    - [Critérios](#critérios)
  - [RF-02 — Validação dos Dados](#rf-02--validação-dos-dados)
    - [Origem](#origem-1)
    - [Objetivo](#objetivo-2)
    - [Critérios](#critérios-1)
  - [RF-03 — Feedback Visual](#rf-03--feedback-visual)
    - [Origem](#origem-2)
    - [Objetivo](#objetivo-3)
    - [Critérios](#critérios-2)
  - [RF-04 — Área Protegida](#rf-04--área-protegida)
    - [Origem](#origem-3)
    - [Objetivo](#objetivo-4)
    - [Critérios](#critérios-3)
- [Requisitos Não Funcionais](#requisitos-não-funcionais)
  - [RNF-01 — Responsividade](#rnf-01--responsividade)
    - [Origem](#origem-4)
  - [RNF-02 — Documentação](#rnf-02--documentação)
    - [Origem](#origem-5)
  - [RNF-03 — Deploy](#rnf-03--deploy)
    - [Origem](#origem-6)
- [Diferenciais](#diferenciais)
  - [D-01 — Testes Unitários](#d-01--testes-unitários)
  - [D-02 — Clean Code](#d-02--clean-code)
  - [D-03 — UX/UI Refinada](#d-03--uxui-refinada)
- [Requisitos de Segurança](#requisitos-de-segurança)
  - [RS-01](#rs-01)
  - [RS-02](#rs-02)
  - [RS-03](#rs-03)
- [Infraestrutura de Desenvolvimento](#infraestrutura-de-desenvolvimento)
- [Rastreabilidade](#rastreabilidade)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios-4)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Tecnologias Base](#tecnologias-base)
  - [Qualidade e Desenvolvimento](#qualidade-e-desenvolvimento)
  - [Deploy e Infraestrutura](#deploy-e-infraestrutura)

---

# Objetivo

Este documento tem como objetivo identificar, organizar e documentar todos os requisitos, servindo como referência para a implementação da aplicação.

Todos os requisitos descritos neste documento possuem origem ou foram definidos como infraestrutura de desenvolvimento para garantir qualidade, organização e segurança durante a execução do projeto.

Nenhuma funcionalidade deverá ser implementada sem que esteja documentada neste documento ou nos documentos específicos das etapas de desenvolvimento.

Antes de iniciar a implementação é necessário compreender exatamente o que deverá ser desenvolvido.

Esta documentação evita:

- implementação de funcionalidades fora do escopo;
- interpretações incorretas;
- retrabalho;
- inconsistências entre código e documentação.

Ela será utilizada como referência durante todo o desenvolvimento.

---

# Referência

Conforme definido, o objetivo é desenvolver uma interface de autenticação moderna, segura e responsiva.

Requisitos obrigatórios, diferenciais opcionais e recomendações de boas práticas.

Este documento organiza essas informações para orientar a implementação.

---

# Stack Tecnológica

Conforme definido, esta implementação utilizará as tecnologias base esperadas.

A tabela abaixo reproduz as orientações do PDF, diferenciando tecnologias base, recomendações, boas práticas e itens apresentados apenas como reflexão.

| Tecnologia | Situação no desafio | Finalidade |
|------------|---------------------|------------|
| React.js |  Tecnologia base esperada | Construção da interface, componentização e gerenciamento de estado |
| GitHub |  Tecnologia base esperada | Versionamento do código |
| Vercel |  Tecnologia base esperada | Configuração de ambiente e deploy contínuo |
| Tailwind CSS | Recomendado | Estilização da interface |
| Git |  Necessário para utilizar o GitHub | Controle de versão local |
| Variáveis `.env` |  Citadas nas boas práticas | Proteção de informações sensíveis |
| Testes Unitários |  Diferencial | Garantir a qualidade e estabilidade do código |
| Clean Code | Boa prática | Melhorar organização e manutenção do projeto |
| UX/UI |  Diferencial | Melhorar a experiência do usuário |
| Neon (Serverless Postgres) | Evolução futura | Possível banco de dados caso a autenticação deixe de ser mockada |
| Rate Limit | Evolução futura | Possível proteção contra ataques de força bruta |

> **Importante**
>
> Os itens **Neon** e **Rate Limit** **não fazem parte da implementação**.
>
> Eles são apresentados apenas como **Opções Futuras**, possíveis implementações para um ambiente de produção.
>
> Durante este projeto seguiremos exatamenete o escopo definido e não implementaremos banco de dados, persistência ou mecanismos de proteção contra força bruta.

---

# Requisitos

Os requisitos deste projeto estão divididos em três categorias.

## 1. Requisitos Funcionais

São funcionalidades obrigatórias da aplicação.

Todo requisito desta categoria possui origem direta do planejamento.

---

## 2. Requisitos Não Funcionais

São características relacionadas à qualidade da aplicação.

Também possuem origem planejamento ou decorrem diretamente das tecnologias utilizadas.

Exemplos:

- responsividade;
- organização;
- documentação;
- deploy.

---

## 3. Infraestrutura de Desenvolvimento

Não representa funcionalidades da aplicação.

São decisões adotadas para garantir um desenvolvimento seguro e organizado.

Exemplos:

- Git Flow;
- CI/CD;
- ESLint;
- Prettier;
- Husky;
- GitHub Actions;
- Branch Protection.

Esses itens não alteram o comportamento esperado da aplicação.

---

# Requisitos Funcionais

## RF-01 — Interface de Login

### Origem

Desafio do projeto

### Objetivo

Disponibilizar uma interface para autenticação do usuário.

### Critérios

A interface deverá possuir:

- campo de e-mail;
- campo de senha;
- botão para autenticação.

---

## RF-02 — Validação dos Dados

### Origem

Desafio do projeto

### Objetivo

Validar os dados informados pelo usuário antes da autenticação.

### Critérios

Deverão existir validações para:

- formato de e-mail;
- senha conforme o padrão mínimo definido.

Mensagens de erro deverão ser claras para o usuário.

---

## RF-03 — Feedback Visual

### Origem

Desafio do projeto

### Objetivo

Informar o resultado da tentativa de autenticação.

### Critérios

A aplicação deverá apresentar feedback visual para:

- autenticação realizada com sucesso;
- erro de autenticação;
- falhas de validação.

---

## RF-04 — Área Protegida

### Origem

Desafio do projeto

### Objetivo

Garantir que apenas usuários autenticados tenham acesso à área restrita.

### Critérios

Após autenticação:

- redirecionar para área protegida;
- impedir acesso direto por usuários não autenticados.

---

# Requisitos Não Funcionais

## RNF-01 — Responsividade

### Origem

Desafio do projeto

A interface deverá funcionar corretamente em diferentes tamanhos de tela.

Incluindo:

- dispositivos móveis;
- notebooks;
- desktops;
- monitores ultrawide.

---

## RNF-02 — Documentação

### Origem

Desafio do projeto

O projeto deverá possuir documentação explicando:

- instalação;
- execução;
- decisões técnicas;
- melhorias futuras.

---

## RNF-03 — Deploy

### Origem

Desafio do projeto

A aplicação deverá ser publicada utilizando a plataforma Vercel.

Ao final deverão ser disponibilizados:

- link do repositório;
- link da aplicação publicada.

---

# Diferenciais

Citado alguns itens como diferenciais.

Eles poderão ser implementados para enriquecer a entrega, sem alterar o escopo funcional.

## D-01 — Testes Unitários

Objetivo:

Aumentar a confiabilidade da aplicação.

---

## D-02 — Clean Code

Objetivo:

Melhorar organização, legibilidade e manutenção do código.

---

## D-03 — UX/UI Refinada

Objetivo:

Melhorar experiência do usuário mantendo fidelidade ao desafio.

---

# Requisitos de Segurança

Destaca-se a importância de proteger informações sensíveis.

Durante a implementação deverão ser observadas as seguintes diretrizes.

## RS-01

Não expor:

- tokens;
- credenciais;
- API Keys;
- variáveis sensíveis.

---

## RS-02

Utilizar corretamente variáveis de ambiente para informações sensíveis.

---

## RS-03

Não versionar arquivos contendo informações confidenciais.

---

# Infraestrutura de Desenvolvimento

Os itens abaixo não fazem parte dos requisitos funcionais da aplicação.

Serão adotados exclusivamente para apoiar o desenvolvimento.

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

Cada item será documentado em seu respectivo README.

---

# Rastreabilidade

Todo requisito implementado deverá possuir origem neste documento.

Durante o desenvolvimento cada funcionalidade deverá ser vinculada ao seu respectivo requisito.

Exemplo:

| Requisito | Implementação |
|-----------|---------------|
| RF-01 | Tela de Login |
| RF-02 | Validação dos Campos |
| RF-03 | Feedback Visual |
| RF-04 | Área Protegida |

Esta rastreabilidade facilitará a validação final do projeto.

---

# Boas Práticas

Durante a implementação dos requisitos serão adotadas as seguintes diretrizes:

- implementar apenas requisitos documentados;
- validar cada requisito individualmente;
- manter código organizado;
- documentar alterações relevantes;
- evitar duplicação de responsabilidades;
- manter consistência entre documentação e implementação.

---

# Segurança

Durante o desenvolvimento dos requisitos deverá ser observado:

- validar entradas do usuário;
- nunca confiar apenas na validação visual;
- evitar exposição de informações sensíveis;
- utilizar variáveis de ambiente para configurações privadas;
- revisar o código antes da criação de Pull Requests.

As medidas específicas de segurança serão detalhadas no documento `docs/06-seguranca/README.md`.

---

# Erros Comuns

Evitar:

- implementar funcionalidades não previstas;
- modificar requisitos durante o desenvolvimento;
- misturar requisitos da aplicação com infraestrutura;
- deixar documentação desatualizada;
- ignorar validações definidas.

---

# Critérios

Esta etapa será considerada concluída quando:

- todos os requisitos estiverem documentados;
- diferenciais estiverem identificados;
- requisitos de segurança estiverem registrados;
- infraestrutura estiver claramente separada dos requisitos funcionais;
- rastreabilidade entre requisitos e implementação estiver definida.

---

# Checklist

- [x] Requisitos funcionais documentados
- [x] Requisitos não funcionais documentados
- [x] Diferenciais identificados
- [x] Requisitos de segurança registrados
- [x] Infraestrutura separada dos requisitos
- [x] Critérios de validação definidos
- [x] Rastreabilidade estabelecida

---

# Referências

## Tecnologias Base

- React → [Site Oficial](https://react.dev/) | [Documentação](https://react.dev/learn)
- Tailwind CSS → [Site Oficial](https://tailwindcss.com/) | [Documentação](https://tailwindcss.com/docs)

---

## Qualidade e Desenvolvimento

- Git → [Site Oficial](https://git-scm.com/) | [Documentação](https://git-scm.com/doc)
- GitHub → [Site Oficial](https://github.com/) | [Documentação](https://docs.github.com/)

---

## Deploy e Infraestrutura

- Vercel → [Site Oficial](https://vercel.com/) | [Documentação](https://vercel.com/docs)

---
