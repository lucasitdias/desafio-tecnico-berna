# Husky

## Índice

- [Husky](#husky)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Por que esta etapa](#por-que-esta-etapa)
- [Referência](#referência)
- [Escopo](#escopo)
- [Husky](#husky-1)
- [Git Hooks](#git-hooks)
- [Como o Husky funciona](#como-o-husky-funciona)
- [Como o Husky trabalha junto com Git, ESLint e Prettier](#como-o-husky-trabalha-junto-com-git-eslint-e-prettier)
- [Por que o Husky será utilizado](#por-que-o-husky-será-utilizado)
- [Decisões](#decisões)
- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
- [Etapa 1 — Instalar o Husky](#etapa-1--instalar-o-husky)
  - [Comando](#comando)
  - [Onde executar](#onde-executar)
  - [O que este comando faz](#o-que-este-comando-faz)
  - [Resultado](#resultado)
  - [Como validar](#como-validar)
- [Etapa 2 — Inicializar o Husky](#etapa-2--inicializar-o-husky)
  - [Comando](#comando-1)
  - [Onde executar](#onde-executar-1)
  - [O que este comando faz](#o-que-este-comando-faz-1)
  - [Resultado](#resultado-1)
- [Estrutura Gerada](#estrutura-gerada)
- [Etapa 3 — Verificar o script](#etapa-3--verificar-o-script)
  - [Arquivo](#arquivo)
  - [O que validar](#o-que-validar)
- [Etapa 4 — Verificar o Hook pre-commit](#etapa-4--verificar-o-hook-pre-commit)
  - [Arquivo](#arquivo-1)
- [Como Validar](#como-validar-1)
- [Corrigir Problemas](#corrigir-problemas)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Ferramenta Principal](#ferramenta-principal)
  - [Controle de Versão](#controle-de-versão)
  - [Gerenciador de Pacotes](#gerenciador-de-pacotes)
  - [Tecnologias Integradas](#tecnologias-integradas)
  - [Comandos Utilizados](#comandos-utilizados)

---

# Objetivo

Este documento tem como objetivo apresentar o Husky, explicar sua finalidade dentro deste projeto e orientar sua instalação e configuração de forma organizada, segura e compatível com toda a stack tecnológica definida durante o planejamento.

Ao final desta etapa, o projeto estará preparado para utilizar o Husky como ferramenta oficial para automatizar verificações antes da execução de operações do Git, garantindo maior qualidade e consistência durante o desenvolvimento.

Embora o Husky seja integrado diretamente ao Git, nesta etapa serão realizadas apenas sua instalação, configuração inicial e integração com as ferramentas já configuradas anteriormente.

---

# Por que esta etapa

Durante o desenvolvimento é comum que pequenos erros sejam enviados ao repositório por descuido.

Alguns exemplos são:

- arquivos com formatação incorreta;
- código que não segue o padrão definido pelo projeto;
- alterações realizadas sem validação prévia;
- commits contendo problemas que poderiam ser identificados automaticamente.

Embora esses problemas normalmente possam ser corrigidos posteriormente, eles aumentam o retrabalho e reduzem a qualidade do histórico do projeto.

O Husky permite automatizar verificações antes que determinadas operações do Git sejam concluídas.

Dessa forma, tarefas repetitivas passam a ser executadas automaticamente, reduzindo falhas humanas e mantendo um fluxo de desenvolvimento mais consistente.

---

# Referência

O desafio não exige a utilização do Husky.

Entretanto, também não impõe qualquer restrição quanto ao uso de ferramentas que melhorem a qualidade do processo de desenvolvimento.

Sua adoção faz parte da preparação do ambiente de desenvolvimento e busca automatizar verificações antes dos commits realizados durante a implementação.

A utilização do Husky não altera nenhuma funcionalidade prevista.

---

# Escopo

Durante esta etapa serão realizadas apenas atividades relacionadas à configuração do Husky.

Serão abordados:

- instalação do Husky;
- configuração inicial;
- integração com o Git;
- criação da estrutura inicial de hooks;
- validação da instalação;
- boas práticas de utilização.

---

# Husky

O Husky é uma ferramenta utilizada para automatizar a execução de comandos durante determinados eventos do Git.

Esses eventos são conhecidos como **Git Hooks**.

Por meio deles é possível executar verificações automaticamente antes ou depois de operações como:

- commit;
- push;
- merge;
- checkout.

Neste projeto, o Husky será utilizado para garantir que determinadas validações ocorram automaticamente antes da criação de novos commits.

Seu objetivo é reduzir erros e manter um padrão de qualidade durante todo o desenvolvimento.

---

# Git Hooks

O Git possui um mecanismo chamado **Hooks**, que permite executar scripts automaticamente quando determinados eventos acontecem.

Alguns exemplos são:

- antes de um commit;
- após um commit;
- antes de um push;
- após um merge.

Sem o Husky, esses scripts precisariam ser criados e mantidos manualmente.

O Husky simplifica esse processo, oferecendo uma forma organizada e compatível com projetos baseados em Node.js.

---

# Como o Husky funciona

Após sua instalação, o Husky cria uma estrutura específica dentro do projeto para armazenar os Git Hooks.

Sempre que um evento configurado ocorrer, o Git executará automaticamente o hook correspondente.

Cada hook poderá executar um ou mais comandos previamente definidos.

Essa estrutura será utilizada para automatizar verificações relacionadas à qualidade do código antes da realização de commits.

---

# Como o Husky trabalha junto com Git, ESLint e Prettier

Cada uma dessas ferramentas possui uma responsabilidade específica.

O Git continua responsável pelo controle de versão.

O ESLint continua responsável por analisar a qualidade do código.

O Prettier continua responsável por padronizar a formatação.

O Husky atua apenas como um orquestrador.

Ele executa automaticamente comandos dessas ferramentas nos momentos definidos durante o fluxo de desenvolvimento.

Essa separação de responsabilidades mantém cada tecnologia focada em sua função específica e reduz o acoplamento entre elas.

---

# Por que o Husky será utilizado

A utilização do Husky foi definida considerando os seguintes fatores:

- automação de tarefas repetitivas;
- integração oficial com Git;
- excelente integração com projetos React;
- integração com ESLint;
- integração com Prettier;
- redução de erros antes dos commits;
- melhoria da qualidade do histórico do repositório;

Sua adoção torna o processo de desenvolvimento mais previsível e reduz a possibilidade de envio de código fora dos padrões definidos no projeto.

---

# Decisões

Será utilizada apenas a integração oficial do Husky.

Os Git Hooks serão utilizados apenas para automatizar verificações relacionadas ao ambiente de desenvolvimento.

Nenhuma regra de negócio da aplicação será executada através do Husky.

Essa abordagem mantém a responsabilidade da ferramenta restrita à automação do processo de desenvolvimento.

---

# Pré-requisitos

Antes de iniciar esta etapa, os seguintes Guides deverão estar concluídos.

- Guide 10 — Preparação do Ambiente;
- Guide 11 — Configuração do Git e GitHub;
- Guide 12 — Configuração do Projeto React + Vite;
- Guide 13 — Tailwind CSS;
- Guide 14 — ESLint;
- Guide 15 — Prettier.

Também será necessário que:

- o Git esteja instalado corretamente;
- o repositório esteja inicializado;
- todas as dependências estejam instaladas;
- o projeto execute corretamente através do comando `npm run dev`;
- o ESLint esteja funcionando corretamente;
- o Prettier esteja configurado corretamente.

---

# Passo a Passo

Será realizada a instalação do Husky, sua integração ao Git e a preparação da estrutura que permitirá automatizar verificações durante o fluxo de desenvolvimento.

Ao final desta etapa, o projeto estará preparado para executar automaticamente verificações antes da realização de commits.

---

# Etapa 1 — Instalar o Husky

Com o projeto aberto, será instalada a dependência oficial do Husky como dependência de desenvolvimento.

## Comando

```bash
npm install -D husky
```

## Onde executar

Executar no **Git Bash**, dentro da pasta raiz do projeto.

```text
desafio-tecnico-berna/
```

Este comando adiciona ao projeto a biblioteca responsável pela criação e gerenciamento dos Git Hooks.

## O que este comando faz

O npm realizará:

- download da biblioteca;
- atualização do arquivo `package.json`;
- atualização do arquivo `package-lock.json`;
- armazenamento da dependência em `node_modules`.

## Resultado

A instalação deverá ser concluída sem erros.

## Como validar

Abra o arquivo:

```text
package.json
```

Na seção `devDependencies` deverá existir a dependência:

```json
"husky"
```

---

# Etapa 2 — Inicializar o Husky

Após a instalação será necessário inicializar o Husky no projeto.

## Comando

```bash
npx husky init
```

## Onde executar

Executar no Git Bash na raiz do projeto.

Esse comando prepara o repositório para utilizar Git Hooks gerenciados pelo Husky.

## O que este comando faz

Durante sua execução serão realizadas automaticamente algumas configurações iniciais.

Entre elas:

- criação da pasta `.husky`;
- criação do primeiro hook de exemplo;
- atualização do script `prepare` no `package.json`.

## Resultado

A estrutura inicial do Husky deverá existir dentro do projeto.

---

# Estrutura Gerada

Após a inicialização, a estrutura será semelhante a:

```text
desafio-tecnico-berna/
│
├── .husky/
│   ├── _
│   └── pre-commit
│
├── node_modules/
├── package.json
├── package-lock.json
└── ...
```

---

# Etapa 3 — Verificar o script

Após a inicialização, o arquivo `package.json` deverá conter o script responsável por preparar automaticamente o Husky sempre que as dependências forem instaladas.

## Arquivo

```text
desafio-tecnico-berna/
package.json
```

## O que validar

Na seção `scripts` deverá existir uma entrada semelhante a:

```json
"prepare": "husky"
```

Esse script garante que o Husky seja configurado automaticamente após a instalação das dependências do projeto.

---

# Etapa 4 — Verificar o Hook pre-commit

Após a inicialização será criado automaticamente um hook chamado `pre-commit`.

## Arquivo

```text
desafio-tecnico-berna/
.husky/
pre-commit
```

Sua configuração definitiva será feita posteriormente, quando integrarmos o Husky às ferramentas responsáveis pelas validações automáticas.

O objetivo deste Guide é apenas garantir que a estrutura foi criada corretamente.

---

# Como Validar

Ao final desta etapa verifique se:

- o Husky foi instalado sem erros;
- a pasta `.husky` foi criada;
- o arquivo `pre-commit` existe;
- o script `prepare` foi adicionado ao `package.json`;
- o projeto continua executando normalmente através do comando:

```bash
npm run dev
```

Se todos esses itens estiverem corretos, a instalação do Husky foi concluída com sucesso.

---

# Corrigir Problemas

Caso o Husky não funcione corretamente, verifique os seguintes pontos:

- a dependência foi instalada utilizando `npm install -D husky`;
- o comando `npx husky init` foi executado com sucesso;
- a pasta `.husky` foi criada na raiz do projeto;
- o arquivo `pre-commit` existe dentro da pasta `.husky`;
- o script `prepare` está presente no arquivo `package.json`;
- o Git está instalado corretamente;
- o repositório foi inicializado utilizando `git init`, caso ainda não estivesse configurado.

Persistindo o problema, execute novamente:

```bash
npm install
```

Em seguida execute:

```bash
npx husky init
```

Após isso, confirme novamente se a estrutura foi criada corretamente.

---

# Boas Práticas

Durante a utilização do Husky neste projeto serão adotadas as seguintes práticas:

- utilizar apenas a integração oficial do Husky;
- manter os Git Hooks simples e objetivos;
- utilizar o Husky apenas para automatizar verificações relacionadas ao desenvolvimento;
- manter cada ferramenta responsável apenas por sua função específica;
- revisar alterações antes de realizar commits;
- manter a documentação sincronizada com a configuração do projeto.

---

# Segurança

Durante esta etapa deverão ser observados os seguintes cuidados:

- instalar o Husky apenas pela fonte oficial;
- evitar modificar arquivos internos da biblioteca localizada em `node_modules`;
- revisar alterações realizadas nos Git Hooks antes de compartilhá-las;
- não executar comandos desconhecidos dentro dos hooks;
- manter todas as dependências atualizadas.

---

# Erros Comuns

Evitar:

- instalar o Husky como dependência de produção;
- esquecer de executar `npx husky init`;
- remover acidentalmente a pasta `.husky`;
- editar arquivos internos da pasta `node_modules`;
- criar Git Hooks com responsabilidades que pertencem à aplicação;
- utilizar o Husky para implementar regras de negócio.

---

# Critérios

Esta etapa será considerada concluída quando:

- o Husky estiver instalado;
- a pasta `.husky` tiver sido criada;
- o hook `pre-commit` existir;
- o script `prepare` estiver presente no `package.json`;
- o projeto continuar executando normalmente;
- a estrutura estiver preparada para integrar as validações automáticas nas próximas etapas.

---

# Checklist

- [x] Husky instalado
- [x] Pasta `.husky` criada
- [x] Hook `pre-commit` criado
- [x] Script `prepare` configurado
- [x] Projeto executando normalmente
- [x] Estrutura validada

---

# Referências

## Ferramenta Principal

- Husky → [Site Oficial](https://typicode.github.io/husky/) | [Documentação](https://typicode.github.io/husky/)

---

## Controle de Versão

- Git → [Download](https://git-scm.com/downloads) | [Documentação](https://git-scm.com/doc)
- Git Hooks → [Documentação](https://git-scm.com/docs/githooks)

---

## Gerenciador de Pacotes

- Node.js → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest/api/)
- npm → [Documentação](https://docs.npmjs.com/)

---

## Tecnologias Integradas

- React → [Site Oficial](https://react.dev/) | [Documentação](https://react.dev/learn)
- Vite → [Site Oficial](https://vite.dev/) | [Documentação](https://vite.dev/guide/)
- ESLint → [Site Oficial](https://eslint.org/) | [Documentação](https://eslint.org/docs/latest/)
- Prettier → [Site Oficial](https://prettier.io/) | [Documentação](https://prettier.io/docs/)

---

## Comandos Utilizados

- npm CLI → [Documentação](https://docs.npmjs.com/cli)
- npx → [Documentação](https://docs.npmjs.com/cli/v11/commands/npx)

---
