# Preparação do Ambiente

## Índice

- [Preparação do Ambiente](#preparação-do-ambiente)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Escopo](#escopo)
- [Ferramentas Utilizadas](#ferramentas-utilizadas)
- [Decisões](#decisões)
  - [Node.js](#nodejs)
  - [Gerenciador de Pacotes](#gerenciador-de-pacotes)
  - [Gerenciador de Versões do Node](#gerenciador-de-versões-do-node)
  - [Docker](#docker)
  - [Terminal](#terminal)
- [Pré-requisitos](#pré-requisitos)
- [O que será validado](#o-que-será-validado)
- [Como saber se esta etapa foi concluída](#como-saber-se-esta-etapa-foi-concluída)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)

---

# Objetivo

Este documento tem como objetivo preparar e validar todo o ambiente de desenvolvimento necessário para iniciar o projeto.

Ao final desta etapa, todas as ferramentas necessárias para o desenvolvimento estarão instaladas, configuradas e validadas.

Antes de iniciar qualquer projeto é necessário garantir que o ambiente de desenvolvimento esteja corretamente preparado.

Um ambiente configurado de forma inadequada pode causar problemas como:

- incompatibilidade entre versões;
- erros durante a instalação das dependências;
- comportamento diferente entre máquinas;
- dificuldades para reproduzir o projeto;
- falhas durante o deploy.

Preparar corretamente o ambiente reduz esses riscos e proporciona um processo de desenvolvimento mais previsível.

---

# Referência

O desafio informa que a aplicação deverá utilizar como tecnologias base:

- React.js;
- GitHub;
- Vercel;
- Tailwind CSS

Embora Node.js, npm e Git não sejam citados explicitamente como requisitos, eles são necessários para utilizar a stack.

Esta etapa prepara essas ferramentas para que a implementação possa seguir exatamente o escopo definida.

---

# Escopo

Durante esta etapa serão realizadas apenas atividades relacionadas à preparação do ambiente.

Serão abordados:

- instalação do Git;
- instalação do Node.js;
- utilização do npm;
- instalação das extensões recomendadas;
- validação das versões instaladas;
- configuração do terminal utilizado durante o projeto.

---

# Ferramentas Utilizadas

| `Ferramenta` | `Finalidade`                                        |
| ------------ | --------------------------------------------------- |
| Git          | Controle de versão local                            |
| Git Bash     | Terminal padrão utilizado durante o desenvolvimento |
| Node.js      | Ambiente de execução JavaScript                     |
| npm          | Gerenciador de pacotes oficial do Node.js           |

---

# Decisões

Para manter o ambiente simples, reproduzível e alinhado ao desafio, foram adotadas as seguintes decisões.

## Node.js

Será utilizada a versão:

```text
Node.js v24.18.0
```

Esta versão será utilizada durante todo o desenvolvimento.

---

## Gerenciador de Pacotes

Será utilizado exclusivamente:

```text
npm
```

Justificativa:

- acompanha o Node.js;
- reduz dependências externas;
- facilita a reprodução do ambiente;
- atende plenamente às necessidades do projeto.

Não serão utilizados:

- pnpm;
- Yarn.

---

## Gerenciador de Versões do Node

Neste projeto não será utilizado:

- nvm;
- fnm.

Justificativa:

Como o projeto será desenvolvido utilizando apenas uma versão específica do Node.js, não há necessidade de adicionar ferramentas para gerenciamento de múltiplas versões.

---

## Docker

Docker não será utilizado.

Justificativa:

O responsável pelo desafio informou que Docker não faz parte do processo esperado.

---

## Terminal

Durante todo o desenvolvimento será utilizado:

```text
Git Bash
```

Esta será a interface padrão para execução dos comandos apresentados nos próximos guias.

---

# Pré-requisitos

Antes de prosseguir para a próxima etapa, deverão estar instalados:

- Git;
- Git Bash;
- Node.js;
- npm;

---

# O que será validado

Ao final desta etapa será confirmado que:

- Git está instalado;
- Git Bash está funcionando;
- Node.js está instalado;
- npm está funcionando;
- todas as versões estão corretas.

---

# Como saber se esta etapa foi concluída

Esta etapa estará concluída quando:

- todas as ferramentas estiverem instaladas;
- todas as versões estiverem validadas;
- o terminal estiver funcionando corretamente;
- o ambiente estiver pronto para iniciar a configuração do Git.

---

# Boas Práticas

Durante esta etapa serão adotadas as seguintes práticas:

- utilizar apenas versões previamente definidas;
- manter todas as ferramentas atualizadas conforme o projeto;
- evitar instalar ferramentas que não serão utilizadas;
- validar cada instalação antes de prosseguir.

---

# Segurança

Durante a preparação do ambiente deverão ser observados os seguintes cuidados:

- instalar ferramentas apenas por seus canais oficiais;
- evitar instaladores de terceiros;
- manter o sistema operacional atualizado;
- verificar a integridade das instalações antes do uso.

---

# Erros Comuns

Evitar:

- instalar múltiplas versões do Node.js sem necessidade;
- utilizar mais de um gerenciador de pacotes no mesmo projeto;
- utilizar terminais diferentes dos documentados;
- iniciar o projeto sem validar as versões instaladas.

---

# Critérios

Esta etapa será considerada concluída quando:

- Git estiver instalado;
- Git Bash estiver funcionando;
- Node.js v24.18.0 estiver instalado;
- npm estiver disponível;
- todas as ferramentas tiverem sido validadas.

---

# Checklist

- [x] Git instalado
- [x] Git Bash funcionando
- [x] Node.js v24.18.0 instalado
- [x] npm disponível
- [x] Ambiente validado

---

# Referências

## Ambiente de Desenvolvimento

- Node.js v24.x LTS → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest-v24.x/api/)
- npm → [Documentação](https://docs.npmjs.com/)
- Git → [Site Oficial](https://git-scm.com/) | [Documentação](https://git-scm.com/doc)
- Git Bash → [Download (Git for Windows)](https://gitforwindows.org/) | [Documentação](https://git-scm.com/doc)

---
