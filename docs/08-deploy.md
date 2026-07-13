# Deploy e Entrega do Projeto

## Índice

- [Deploy e Entrega do Projeto](#deploy-e-entrega-do-projeto)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Objetivos](#objetivos)
- [Pré-requisitos](#pré-requisitos)
- [Processo de Deploy](#processo-de-deploy)
- [Etapa 1 — Validação da Aplicação](#etapa-1--validação-da-aplicação)
- [Etapa 2 — Build](#etapa-2--build)
- [Etapa 3 — Revisão da Documentação](#etapa-3--revisão-da-documentação)
- [Etapa 4 — Revisão do Repositório](#etapa-4--revisão-do-repositório)
- [Etapa 5 — Configuração da Vercel](#etapa-5--configuração-da-vercel)
- [Etapa 6 — Testes após o Deploy](#etapa-6--testes-após-o-deploy)
- [Fluxo de Entrega](#fluxo-de-entrega)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Versionamento e Deploy](#versionamento-e-deploy)

---

# Objetivo

Este documento define o processo oficial de preparação, validação e publicação da aplicação.

Seu objetivo é garantir que a entrega seja realizada de forma organizada, segura e alinhada aos requisitos definidos no PDF, assegurando que a aplicação esteja funcionando corretamente antes de ser disponibilizada.

A publicação representa a última fase do desenvolvimento.

Antes do deploy é necessário confirmar que:

- todos os requisitos foram implementados;
- a aplicação funciona corretamente;
- não existem arquivos sensíveis;
- a documentação está atualizada;
- o repositório representa exatamente a versão entregue.

---

# Referência

O desafio solicita:

- publicação da aplicação utilizando a Vercel;
- disponibilização do repositório GitHub;
- disponibilização do link da aplicação publicada.

---

# Objetivos

Ao final desta etapa o projeto deverá possuir:

- aplicação validada;
- build funcionando;
- deploy realizado;
- documentação atualizada;
- links prontos para entrega.

---

# Pré-requisitos

Antes do deploy deverão estar concluídas todas as etapas anteriores:

- Planejamento Geral
- Planejamento
- Requisitos
- Git Flow
- Arquitetura
- Desenvolvimento
- Segurança
- CI/CD

Nenhuma publicação deverá ocorrer antes da conclusão dessas etapas.

---

# Processo de Deploy

A publicação seguirá obrigatoriamente a sequência abaixo.

```text
Validação Final

↓

Build

↓

Revisão da Documentação

↓

Validação do Repositório

↓

Configuração da Vercel

↓

Deploy

↓

Testes da Aplicação Publicada

↓

Entrega
```

---

# Etapa 1 — Validação da Aplicação

Antes da publicação verificar:

- funcionamento completo da aplicação;
- interface de login;
- validações;
- rota protegida;
- responsividade.

---

# Etapa 2 — Build

Executar a geração da versão de produção.

Validar:

- ausência de erros;
- build concluída com sucesso;
- aplicação pronta para publicação.

---

# Etapa 3 — Revisão da Documentação

Antes da entrega verificar:

- README principal;
- documentação da pasta `docs`;
- decisões técnicas registradas;
- melhorias futuras documentadas.

---

# Etapa 4 — Revisão do Repositório

Verificar:

- histórico organizado;
- branches sincronizadas;
- ausência de arquivos desnecessários;
- ausência de arquivos sensíveis.

---

# Etapa 5 — Configuração da Vercel

Durante a publicação deverão ser conferidos:

- repositório correto;
- branch de publicação;
- variáveis de ambiente;
- configuração do projeto.

---

# Etapa 6 — Testes após o Deploy

Após a publicação validar:

- aplicação acessível;
- tela de login funcionando;
- responsividade;
- navegação;
- área protegida;
- funcionamento geral.

---

# Fluxo de Entrega

```text
Aplicação Validada

↓

Build

↓

Deploy

↓

Validação Online

↓

GitHub

↓

Link da Vercel

↓

Entrega
```

---

# Boas Práticas

Durante a entrega deverão ser seguidas as seguintes diretrizes:

- publicar apenas versões estáveis;
- revisar documentação antes do deploy;
- validar aplicação publicada;
- manter repositório organizado;
- garantir consistência entre GitHub e Vercel.

---

# Segurança

Antes do deploy verificar obrigatoriamente:

- ausência de arquivos `.env`;
- ausência de API Keys no código;
- ausência de credenciais;
- variáveis de ambiente configuradas corretamente;
- dependências atualizadas.

Nunca publicar informações sensíveis.

---

# Erros Comuns

Evitar:

- publicar sem testar;
- esquecer de atualizar a documentação;
- publicar branch incorreta;
- deixar arquivos sensíveis no repositório;
- entregar aplicação sem validar o funcionamento online.

---

# Critérios

Esta etapa será considerada concluída quando:

- aplicação publicada;
- GitHub atualizado;
- documentação revisada;
- deploy validado;
- links prontos para envio.

---

# Checklist

- [x] Aplicação validada
- [x] Build executada
- [x] Documentação revisada
- [x] Repositório conferido
- [x] Deploy realizado
- [x] Aplicação validada online
- [x] GitHub atualizado
- [x] Links prontos para entrega

---

# Referências

## Versionamento e Deploy

- Git → [Site Oficial](https://git-scm.com/) | [Documentação](https://git-scm.com/doc)
- GitHub → [Site Oficial](https://github.com/) | [Documentação](https://docs.github.com/)
- GitHub Actions → [Documentação](https://docs.github.com/actions)
- Vercel → [Site Oficial](https://vercel.com/) | [Documentação](https://vercel.com/docs)
- React → [Site Oficial](https://react.dev/) | [Documentação](https://react.dev/)
- Vite → [Site Oficial](https://vite.dev/) | [Documentação](https://vite.dev/guide/)

---
