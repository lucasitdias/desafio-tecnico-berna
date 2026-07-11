# GitHub Actions

## Índice

- [GitHub Actions](#github-actions)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Por que esta etapa no projeto](#por-que-esta-etapa-no-projeto)
- [Referência](#referência)
- [Escopo](#escopo)
- [GitHub Actions](#github-actions-1)
- [Por que o GitHub Actions será utilizado](#por-que-o-github-actions-será-utilizado)
- [Como o GitHub Actions trabalha junto com Git, Husky, ESLint e Prettier](#como-o-github-actions-trabalha-junto-com-git-husky-eslint-e-prettier)
- [Decisões](#decisões)
- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
- [Etapa 1 — Criar a estrutura do GitHub Actions](#etapa-1--criar-a-estrutura-do-github-actions)
  - [Estrutura](#estrutura)
  - [Onde criar](#onde-criar)
  - [O que a estrutura faz](#o-que-a-estrutura-faz)
  - [Resultado](#resultado)
  - [Como validar](#como-validar)
- [Etapa 2 — Criar Workflow](#etapa-2--criar-workflow)
  - [Arquivo](#arquivo)
  - [Por que criar](#por-que-criar)
  - [O que este arquivo faz](#o-que-este-arquivo-faz)
  - [Código](#código)
- [Explicando cada bloco](#explicando-cada-bloco)
  - [name](#name)
  - [on](#on)
  - [push](#push)
  - [pull\_request](#pull_request)
  - [jobs](#jobs)
  - [validate-project](#validate-project)
  - [runs-on](#runs-on)
  - [steps](#steps)
  - [Resultado](#resultado-1)
  - [Como validar](#como-validar-1)
    - [Passo 1 — Salvar as alterações](#passo-1--salvar-as-alterações)
    - [Passo 2 — Acessar o GitHub](#passo-2--acessar-o-github)
    - [Passo 3 — Verificar a execução](#passo-3--verificar-a-execução)
    - [Resultado](#resultado-2)
- [Corrigir Problemas](#corrigir-problemas)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [Build](#build)
  - [Dependências](#dependências)
  - [Estrutura](#estrutura-1)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Plataforma de Automação](#plataforma-de-automação)
  - [Plataforma de Versionamento](#plataforma-de-versionamento)
  - [Ferramentas Utilizadas](#ferramentas-utilizadas)
  - [Tecnologias Citadas](#tecnologias-citadas)
  - [Actions Oficiais Utilizadas](#actions-oficiais-utilizadas)
  - [Recursos Utilizados](#recursos-utilizados)

---

# Objetivo

Este documento tem como objetivo apresentar o GitHub Actions, explicar sua finalidade dentro deste projeto e orientar sua configuração de forma organizada, segura e compatível com toda a stack tecnológica definida durante o planejamento.

Ao final desta etapa, o projeto estará preparado para utilizar o GitHub Actions como ferramenta oficial para automatizar verificações sempre que alterações forem enviadas ao repositório.

Esta etapa integra a preparação do ambiente de desenvolvimento e da infraestrutura definida para o projeto.

Embora o GitHub Actions esteja diretamente integrado ao repositório hospedado no GitHub, nesta etapa serão realizadas apenas sua configuração inicial e a criação do Workflow.

---

# Por que esta etapa no projeto

Durante o desenvolvimento é importante garantir que determinadas verificações ocorram sempre que alterações forem enviadas ao repositório.

Realizar essas verificações manualmente aumenta a possibilidade de falhas humanas.

Além disso, quando um projeto é desenvolvido por mais de uma pessoa, torna-se necessário garantir que todos os colaboradores executem exatamente as mesmas validações.

O GitHub Actions permite automatizar esse processo.

Sempre que determinados eventos ocorrerem dentro do repositório, o GitHub poderá executar automaticamente um conjunto de tarefas previamente definidas.

Neste projeto, essa automação será utilizada para validar a integridade do ambiente e garantir que as ferramentas configuradas anteriormente continuem funcionando corretamente durante o desenvolvimento.

---

# Referência

O desafio não exige a utilização do GitHub Actions.

Entretanto, também não impõe qualquer restrição quanto ao uso de ferramentas que aumentem a qualidade do processo de desenvolvimento.

Sua utilização neste projeto faz parte da infraestrutura adotada durante o planejamento e tem como objetivo automatizar verificações relacionadas ao ambiente de desenvolvimento.

A configuração do GitHub Actions não altera nenhuma funcionalidade prevista pelo desafio.

---

# Escopo

Durante esta etapa serão realizadas apenas atividades relacionadas ao GitHub Actions.

Serão abordados:

- estrutura dos Workflows;
- criação da pasta `.github`;
- criação da pasta `workflows`;
- criação do Workflow;
- validação da configuração;
- boas práticas de utilização.

---

# GitHub Actions

GitHub Actions é a plataforma oficial de automação disponibilizada pelo GitHub.

Ela permite executar automaticamente diferentes tarefas sempre que determinados eventos ocorrerem dentro do repositório.

Essas tarefas são chamadas de **Workflows**.

Cada Workflow é composto por uma sequência organizada de etapas chamadas de **Jobs** e **Steps**.

Neste projeto, os Workflows serão utilizados para automatizar verificações relacionadas ao ambiente de desenvolvimento.

Nenhuma funcionalidade da aplicação será executada através deles.

---

# Por que o GitHub Actions será utilizado

Sua utilização foi definida considerando os seguintes fatores:

- integração oficial com GitHub;
- automatização de tarefas repetitivas;
- execução padronizada das verificações;
- facilidade de manutenção;
- rastreabilidade das execuções;
- ampla documentação;

Sua adoção torna o processo de desenvolvimento mais previsível e reduz a necessidade de validações manuais.

---

# Como o GitHub Actions trabalha junto com Git, Husky, ESLint e Prettier

Cada ferramenta utilizada neste projeto possui uma responsabilidade específica.

O Git continua responsável pelo controle de versão.

O Husky continua responsável por executar verificações locais antes dos commits.

O ESLint continua responsável por analisar a qualidade do código.

O Prettier continua responsável por padronizar a formatação.

O GitHub Actions atua como uma camada adicional de validação.

Sempre que alterações forem enviadas ao repositório, o GitHub poderá executar automaticamente os Workflows configurados.

Essa separação de responsabilidades reduz o acoplamento entre as ferramentas e torna o ambiente mais previsível e organizado.

---

# Decisões

Neste projeto serão utilizadas apenas funcionalidades oficiais do GitHub Actions.

Não serão utilizados Workflows experimentais nem Actions de procedência desconhecida.

Sempre que possível serão utilizadas Actions oficiais mantidas pelo GitHub.

Os Workflows terão como responsabilidade apenas automatizar verificações relacionadas ao ambiente de desenvolvimento.

Nenhuma regra de negócio da aplicação será implementada através do GitHub Actions.

Também não será realizada nesta etapa qualquer configuração relacionada a:

- deploy automático;
- publicação na Vercel;
- testes automatizados;
- cobertura de testes;
- SonarCloud.

Esses assuntos pertencem a outras etapas do projeto e serão documentados separadamente quando fizerem parte do escopo em possíveis melhorias futuras.

---

# Pré-requisitos

Antes de iniciar esta etapa, os seguintes Guides deverão estar concluídos.

- Guide 10 — Preparação do Ambiente;
- Guide 11 — Configuração do Git e GitHub;
- Guide 12 — Configuração do Projeto React + Vite;
- Guide 13 — Tailwind CSS;
- Guide 14 — ESLint;
- Guide 15 — Prettier;
- Guide 16 — Husky.

Também será necessário que:

- o projeto esteja versionado no Git;
- o repositório esteja hospedado no GitHub;
- todas as dependências estejam instaladas;
- o projeto execute corretamente através do comando `npm run dev`;
- o Husky esteja funcionando corretamente;
- o ESLint esteja funcionando corretamente;
- o Prettier esteja funcionando corretamente.

---

# Passo a Passo

Nesta etapa será criada toda a estrutura inicial do GitHub Actions.

Ao final deste processo, o repositório estará preparado para executar automaticamente Workflows sempre que ocorrerem os eventos configurados.

---

# Etapa 1 — Criar a estrutura do GitHub Actions

Antes de criar qualquer Workflow, será necessário criar a estrutura oficial utilizada pelo GitHub.

---

## Estrutura

Na raiz do projeto deverá existir a seguinte estrutura:

```text
desafio-tecnico-berna/
│
├── .github/
│   └── workflows/
│
├── src/
├── public/
├── package.json
└── ...
```

---

## Onde criar

A pasta deverá ser criada diretamente na raiz do projeto.

```text
desafio-tecnico-berna/
```

O GitHub identifica automaticamente os Workflows apenas quando eles estão localizados dentro da pasta:

```text
.github/workflows/
```

Arquivos criados em qualquer outro diretório não serão reconhecidos pela plataforma.

---

## O que a estrutura faz

Essa estrutura será utilizada para armazenar todos os Workflows do projeto.

Cada Workflow será representado por um arquivo com extensão:

```text
.yml
```

Sempre que um evento configurado ocorrer, o GitHub localizará esses arquivos e executará o Workflow correspondente.

---

## Resultado

Após a criação da estrutura, o projeto deverá conter:

```text
desafio-tecnico-berna/
│
├── .github/
│   └── workflows/
```

Ainda não existirá nenhum Workflow configurado.

Será criada apenas a estrutura oficial utilizada pelo GitHub.

---

## Como validar

Verifique se:

- existe uma pasta chamada `.github`;
- dentro dela existe a pasta `workflows`;
- ambas estão localizadas na raiz do projeto.

---

# Etapa 2 — Criar Workflow

Após criar a estrutura do GitHub Actions, será necessário criar o Workflow do projeto.

Esse Workflow será responsável por executar automaticamente uma validação básica do ambiente sempre que alterações forem enviadas ao repositório.

Nesta etapa não será realizado deploy, publicação da aplicação ou execução de testes automatizados.

O objetivo é apenas garantir que o ambiente possa ser preparado corretamente pelo GitHub Actions.

---

## Arquivo

```text
desafio-tecnico-berna/
.github/
└── workflows/
    └── ci.yml
```

---

## Por que criar

O GitHub executa automaticamente todos os arquivos com extensão `.yml` localizados dentro da pasta:

```text
.github/workflows/
```

Cada arquivo representa um Workflow independente.

Será criado inicialmente apenas um Workflow responsável por validar o ambiente de desenvolvimento.

---

## O que este arquivo faz

O arquivo `ci.yml` informará ao GitHub:

- quando o Workflow deverá ser executado;
- qual sistema operacional será utilizado;
- quais etapas deverão ser executadas;
- quais comandos serão executados durante a validação.

---

## Código

```yaml
name: Continuous Integration

on:
  push:
    branches:
      - main
      - dev

  pull_request:
    branches:
      - main
      - dev

jobs:
  validate-project:
    runs-on: ubuntu-latest

    steps:
      - name: Baixar o repositório
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24

      - name: Instalar dependências
        run: npm install

      - name: Executar ESLint
        run: npm run lint

      - name: Verificar formatação
        run: npm run format:check

      - name: Executar Testes Unitários
        run: npm test

      - name: Gerar versão de produção
        run: npm run build
```

---

# Explicando cada bloco

## name

```yaml
name: Continuous Integration
```

Define o nome do Workflow que será exibido na interface do GitHub.

Esse nome serve apenas para identificação.

---

## on

```yaml
on:
```

Define os eventos que irão disparar automaticamente a execução do Workflow.

Neste projeto serão utilizados:

- `push`;
- `pull_request`.

---

## push

```yaml
push:
```

Executa o Workflow sempre que alterações forem enviadas para uma das branches configuradas.

Neste projeto:

- `main`;
- `dev`.

---

## pull_request

```yaml
pull_request:
```

Executa o Workflow sempre que um Pull Request for aberto, atualizado ou sincronizado para uma das branches configuradas.

Isso permite validar as alterações antes da realização do merge.

---

## jobs

```yaml
jobs:
```

Agrupa todos os processos que serão executados pelo Workflow.

Cada Job possui ambiente próprio e executa suas etapas de forma independente.

Será criado apenas um Job.

---

## validate-project

```yaml
validate-project:
```

Nome do Job responsável por validar o ambiente do projeto.

Esse nome pode ser alterado futuramente, porém vamos manter nomes descritivos para facilitar a leitura do Workflow.

---

## runs-on

```yaml
runs-on: ubuntu-latest
```

Define o sistema operacional utilizado pelo GitHub para executar o Workflow.

Neste projeto será utilizado o Ubuntu mais recente disponibilizado pelo GitHub.

Essa é a configuração recomendada para projetos React desenvolvidos com Node.js.

---

## steps

```yaml
steps:
```

Representa a sequência de comandos que serão executados pelo Workflow.

Cada Step possui uma única responsabilidade.

Essa organização facilita a leitura, manutenção e identificação de falhas durante a execução.

---

## Resultado

Ao salvar o arquivo `ci.yml`, o repositório passará a possuir um Workflow configurado.

Esse Workflow ainda não será executado localmente.

Sua execução ocorrerá automaticamente pelo GitHub quando forem realizados os eventos configurados.

---

## Como validar

Após criar o arquivo `ci.yml`, será necessário verificar se o GitHub reconheceu corretamente o Workflow.

### Passo 1 — Salvar as alterações

Após criar o arquivo, realize um commit normalmente.

```bash
git add .
git commit -m "chore: adicionando workflow de integração contínua"
git push origin develop
```

---

### Passo 2 — Acessar o GitHub

Abra o repositório hospedado no GitHub.

Selecione a aba:

```text
Actions
```

---

### Passo 3 — Verificar a execução

Na lista de Workflows deverá aparecer:

```text
Continuous Integration
```

Ao clicar sobre a execução será possível acompanhar cada etapa.

Deverão ser exibidas as seguintes verificações:

- Checkout do repositório;
- Configuração do Node.js;
- Instalação das dependências;
- Execução do ESLint;
- Verificação da formatação;
- Build da aplicação.

---

### Resultado

Se todas as etapas forem concluídas com sucesso, o Workflow será exibido com o status:

```text
✓ Success
```

Isso indica que o ambiente foi preparado corretamente e que todas as validações executadas foram aprovadas.

---

# Corrigir Problemas

Caso o Workflow apresente falhas, verifique os seguintes pontos.

## ESLint

Se ocorrer erro durante:

```text
npm run lint
```

Verifique se:

- o ESLint foi instalado corretamente;
- o arquivo de configuração está presente;
- não existem erros de sintaxe no código.

---

## Prettier

Se ocorrer erro durante:

```text
npm run format:check
```

Execute localmente:

```bash
npm run format
```

Depois realize um novo commit.

---

## Build

Se ocorrer erro durante:

```text
npm run build
```

Execute o mesmo comando localmente.

Caso a aplicação não gere a pasta `dist`, corrija os erros apresentados antes de enviar novamente ao GitHub.

---

## Dependências

Se o Workflow não conseguir instalar as dependências:

Verifique:

- `package.json`;
- `package-lock.json`;
- versão do Node utilizada.

Também confirme se todas as dependências foram adicionadas corretamente ao projeto.

---

## Estrutura

Confirme se o arquivo foi criado exatamente em:

```text
.github/workflows/ci.yml
```

Qualquer outro diretório impedirá que o GitHub reconheça o Workflow.

---

# Boas Práticas

Durante a utilização do GitHub Actions serão adotadas as seguintes práticas:

- utilizar apenas Actions oficiais;
- manter cada Workflow com responsabilidade única;
- utilizar nomes descritivos para Jobs e Steps;
- manter os Workflows pequenos e objetivos;
- validar localmente antes do push;
- manter a documentação sincronizada com os Workflows;
- revisar alterações antes do merge.

---

# Segurança

Durante esta etapa deverão ser observados os seguintes cuidados:

- utilizar apenas Actions oficiais e confiáveis;
- evitar armazenar informações sensíveis diretamente nos Workflows;
- utilizar Secrets do GitHub quando necessário;
- manter Actions atualizadas;
- revisar alterações antes de realizar merge;
- limitar permissões quando aplicável.

---

# Erros Comuns

Evitar:

- criar Workflows fora da pasta `.github/workflows`;
- utilizar versões antigas das Actions;
- executar comandos inexistentes;
- alterar o nome dos scripts definidos no `package.json` sem atualizar o Workflow;
- ignorar falhas apresentadas pelo GitHub Actions;
- utilizar o Workflow para executar tarefas que pertencem à aplicação.

---

# Critérios

Esta etapa será considerada concluída quando:

- a pasta `.github/workflows` existir;
- o arquivo `ci.yml` estiver criado;
- o Workflow for reconhecido pelo GitHub;
- o Workflow executar automaticamente após `push` e `pull_request`;
- todas as etapas forem concluídas com sucesso;
- o projeto continuar funcionando normalmente.

---

# Checklist

- [x] Pasta `.github` criada
- [x] Pasta `workflows` criada
- [x] Arquivo `ci.yml` criado
- [x] Workflow reconhecido pelo GitHub
- [x] ESLint executado automaticamente
- [x] Prettier validado automaticamente
- [x] Build executado automaticamente
- [x] Workflow finalizado com sucesso

---

# Referências

## Plataforma de Automação

- GitHub Actions → [Documentação](https://docs.github.com/actions)

---

## Plataforma de Versionamento

- GitHub → [Site Oficial](https://github.com/) | [Documentação](https://docs.github.com/)

---

## Ferramentas Utilizadas

- Git → [Download](https://git-scm.com/downloads) | [Documentação](https://git-scm.com/doc)
- Node.js → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest/api/)
- npm → [Documentação](https://docs.npmjs.com/)

---

## Tecnologias Citadas

- React → [Site Oficial](https://react.dev/) | [Documentação](https://react.dev/learn)
- Vite → [Site Oficial](https://vite.dev/) | [Documentação](https://vite.dev/guide/)
- ESLint → [Site Oficial](https://eslint.org/) | [Documentação](https://eslint.org/docs/latest/)
- Prettier → [Site Oficial](https://prettier.io/) | [Documentação](https://prettier.io/docs/)
- Husky → [Site Oficial](https://typicode.github.io/husky/) | [Documentação](https://typicode.github.io/husky/)

---

## Actions Oficiais Utilizadas

- actions/checkout → [Marketplace](https://github.com/marketplace/actions/checkout) | [Repositório Oficial](https://github.com/actions/checkout)
- actions/setup-node → [Marketplace](https://github.com/marketplace/actions/setup-node-js-environment) | [Repositório Oficial](https://github.com/actions/setup-node)

---

## Recursos Utilizados

- Workflows (GitHub Actions) → [Documentação](https://docs.github.com/actions/using-workflows)
- Eventos `push` e `pull_request` → [Documentação](https://docs.github.com/actions/using-workflows/events-that-trigger-workflows)
- GitHub Secrets → [Documentação](https://docs.github.com/actions/security-guides/encrypted-secrets)

---
