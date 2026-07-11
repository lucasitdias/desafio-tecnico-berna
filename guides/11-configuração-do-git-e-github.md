# Configuração do Git e GitHub

## Índice

- [Configuração do Git e GitHub](#configuração-do-git-e-github)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Escopo](#escopo)
- [Ferramentas Utilizadas](#ferramentas-utilizadas)
- [Decisões](#decisões)
  - [Estratégia de Branches](#estratégia-de-branches)
  - [Commits](#commits)
  - [Pull Requests](#pull-requests)
  - [Branch Protection](#branch-protection)
- [Pré-requisitos](#pré-requisitos)
- [O que será configurado](#o-que-será-configurado)
- [O que será validado](#o-que-será-validado)
- [Como saber se esta etapa foi concluída](#como-saber-se-esta-etapa-foi-concluída)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Controle de Versão](#controle-de-versão)

---

# Objetivo

Este documento tem como objetivo configurar o ambiente de versionamento do projeto utilizando Git e GitHub, estabelecendo a estratégia de trabalho que será utilizada durante todo o desenvolvimento.

Ao final desta etapa, o repositório estará preparado para receber o projeto, permitindo o controle de versões, colaboração e integração com as próximas etapas da infraestrutura.

O Git permite registrar a evolução do código ao longo do tempo, enquanto o GitHub possibilita armazenar o repositório remotamente, compartilhar o projeto e integrar ferramentas como GitHub Actions e Vercel.

Preparar corretamente essa estrutura antes de iniciar o desenvolvimento reduz riscos, facilita a manutenção e garante um fluxo de trabalho organizado.

---

# Referência

O desafio técnico informa que o projeto deverá utilizar o GitHub para versionamento do código e entrega do repositório.

Embora o Git não seja citado explicitamente, ele é a ferramenta necessária para utilizar o GitHub durante o desenvolvimento.

Esta etapa prepara todo o processo de versionamento que será utilizado até a entrega final do desafio.

---

# Escopo

Durante esta etapa serão realizadas apenas atividades relacionadas ao controle de versões.

Serão abordados:

- configuração inicial do Git;
- autenticação com o GitHub;
- criação do repositório remoto;
- clonagem do repositório;
- configuração da branch principal;
- criação da branch de desenvolvimento;
- definição da estratégia de branches;
- validação do ambiente de versionamento.

---

# Ferramentas Utilizadas

| `Ferramenta` | `Finalidade`                                     |
| ------------ | ------------------------------------------------ |
| Git          | Controle de versão local                         |
| GitHub       | Hospedagem do repositório e versionamento remoto |

---

# Decisões

Para manter o desenvolvimento organizado e alinhado às boas práticas definidas para este projeto, serão adotadas as seguintes decisões.

## Estratégia de Branches

A estratégia de versionamento adotada neste projeto está documentada em `docs/03-gitflow/README.md`.

Nesta etapa serão aplicadas apenas as configurações iniciais necessárias para sua utilização.

Serão utilizadas inicialmente as seguintes branches:

```text
main
dev
```

A branch `main` representará a versão estável do projeto.

A branch `dev` será utilizada para o desenvolvimento contínuo.

---

## Commits

Os commits seguirão o padrão de Conventional Commits.

Esta padronização facilita a leitura do histórico e torna o processo de versionamento mais organizado.

---

## Pull Requests

Toda alteração destinada à branch principal deverá passar por Pull Request.

Mesmo sendo um projeto individual.

---

## Branch Protection

Ao longo da configuração do projeto, a branch `main` será protegida para evitar alterações diretas.

Essa configuração faz parte da infraestrutura definida durante o planejamento.

---

# Pré-requisitos

Antes de iniciar esta etapa deverão estar concluídos:

- Git instalado;
- Git Bash funcionando;

Conforme documentado na etapa anterior.

---

# O que será configurado

Ao longo desta etapa serão configurados:

- Git local;
- identidade do desenvolvedor;
- autenticação com o GitHub;
- repositório remoto;
- branch principal;
- branch de desenvolvimento;
- estratégia inicial de versionamento.

---

# O que será validado

Ao final desta etapa será confirmado que:

- Git está funcionando corretamente;
- autenticação com o GitHub está operacional;
- repositório remoto foi criado;
- repositório local está sincronizado;
- branches estão configuradas;
- ambiente está preparado para iniciar a criação do projeto.

---

# Como saber se esta etapa foi concluída

Esta etapa estará concluída quando:

- o repositório existir no GitHub;
- o repositório estiver clonado localmente;
- as branches principais estiverem configuradas;
- a comunicação entre Git e GitHub estiver validada.

---

# Boas Práticas

Durante esta etapa serão adotadas as seguintes práticas:

- realizar commits pequenos e objetivos;
- utilizar mensagens semânticas;
- manter histórico organizado;
- evitar alterações diretamente na branch principal;
- sincronizar frequentemente o repositório remoto.

---

# Segurança

Durante a configuração do Git e GitHub deverão ser observados os seguintes cuidados:

- nunca versionar arquivos contendo informações sensíveis;
- utilizar corretamente o arquivo `.gitignore`;
- revisar alterações antes de cada commit;
- evitar publicar credenciais no repositório.

---

# Erros Comuns

Evitar:

- trabalhar diretamente na branch `main`;
- criar commits muito grandes;
- utilizar mensagens de commit pouco descritivas;
- esquecer de sincronizar o repositório remoto;
- versionar arquivos desnecessários.

---

# Critérios

Esta etapa será considerada concluída quando:

- Git estiver configurado;
- GitHub estiver configurado;
- repositório remoto estiver criado;
- repositório local estiver sincronizado;
- branches estiverem configuradas;
- fluxo de versionamento estiver validado.

---

# Checklist

- [x] Git configurado
- [x] GitHub configurado
- [x] Repositório criado
- [x] Repositório clonado
- [x] Branch `main` validada
- [x] Branch `dev` criada
- [x] Fluxo de versionamento validado

---

# Referências

## Controle de Versão

- Git → [Site Oficial](https://git-scm.com/) | [Documentação](https://git-scm.com/doc)
- GitHub → [Site Oficial](https://github.com/) | [Documentação](https://docs.github.com/)

---
