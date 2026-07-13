# Configuração do Projeto (React + Vite)

## Índice

- [Configuração do Projeto (React + Vite)](#configuração-do-projeto-react--vite)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [React](#react)
- [Vite](#vite)
- [React e Vite serão utilizados](#react-e-vite-serão-utilizados)
- [Como React e Vite funcionam](#como-react-e-vite-funcionam)
- [Decisões](#decisões)
  - [Framework](#framework)
  - [Ferramenta de Build](#ferramenta-de-build)
  - [Linguagem](#linguagem)
  - [Gerenciador de Pacotes](#gerenciador-de-pacotes)
- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
  - [Passo 1 — Abrir o Git Bash](#passo-1--abrir-o-git-bash)
  - [Passo 2 — Acessar a pasta onde ficará o projeto](#passo-2--acessar-a-pasta-onde-ficará-o-projeto)
    - [O que este comando faz](#o-que-este-comando-faz)
  - [Passo 3 — Clonar o repositório (caso ainda não tenha sido feito)](#passo-3--clonar-o-repositório-caso-ainda-não-tenha-sido-feito)
    - [O que este comando faz](#o-que-este-comando-faz-1)
  - [Passo 4 — Confirmar que estamos na branch correta](#passo-4--confirmar-que-estamos-na-branch-correta)
  - [Passo 5 — Criar o projeto React utilizando o Vite](#passo-5--criar-o-projeto-react-utilizando-o-vite)
    - [O que este comando faz](#o-que-este-comando-faz-2)
  - [O que esperar durante a execução](#o-que-esperar-durante-a-execução)
    - [Observações](#observações)
      - [Diretório não vazio](#diretório-não-vazio)
      - [Seleção do Linter](#seleção-do-linter)
      - [Instalação das dependências](#instalação-das-dependências)
  - [Passo 6 — Instalar as dependências do projeto](#passo-6--instalar-as-dependências-do-projeto)
    - [O que este comando faz](#o-que-este-comando-faz-3)
  - [Passo 7 — Executar o projeto](#passo-7--executar-o-projeto)
    - [O que este comando faz](#o-que-este-comando-faz-4)
- [Estrutura](#estrutura)
- [O que será validado](#o-que-será-validado)
- [Como validar esta etapa](#como-validar-esta-etapa)
- [Corrigir problemas](#corrigir-problemas)
  - [Erro: npm não é reconhecido](#erro-npm-não-é-reconhecido)
  - [Erro durante o npm install](#erro-durante-o-npm-install)
  - [Erro ao executar npm run dev](#erro-ao-executar-npm-run-dev)
  - [Porta já está em uso](#porta-já-está-em-uso)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
  - [Build](#build)
  - [Frontend](#frontend)

---

# Objetivo

Este documento tem como objetivo criar e configurar a base da aplicação utilizando React.js e Vite, estabelecendo a estrutura inicial que será utilizada durante todo o desenvolvimento.

Ao final desta etapa, o projeto estará criado, configurado e pronto para receber as próximas ferramentas definidas para a infraestrutura de desenvolvimento, como Tailwind CSS, ESLint, Prettier, Husky, GitHub Actions e Vercel.

Antes de iniciar o desenvolvimento das funcionalidades é necessário criar uma configuração inicial bem estruturada que proporciona benefícios importantes, como:

- organização da estrutura do projeto;
- melhor desempenho durante o desenvolvimento;
- facilidade de manutenção;
- compatibilidade com as ferramentas de qualidade adotadas;
- facilidade para integração com processos de CI/CD;
- maior previsibilidade durante o deploy.

Esta etapa estabelece essa base e prepara o ambiente para o desenvolvimento das funcionalidades.

---

# Referência

A aplicação deverá utilizar como tecnologia base o React.js para construção da interface, componentização e gerenciamento de estado.

Também terá a utilização do Tailwind CSS para estilização da interface.

Para criar um projeto React moderno será utilizado o Vite para criação e execução de aplicações.

Assim será utilizado como ferramenta de construção do projeto por oferecer uma configuração simples, rápida e amplamente adotada.

---

# React

React é uma biblioteca JavaScript criada para construir interfaces de usuário utilizando componentes reutilizáveis.

Em vez de criar páginas inteiras, a interface passa a ser dividida em pequenos componentes independentes, facilitando a organização, reutilização de código e manutenção da aplicação.

Entre suas principais características estão:

- componentização;
- reutilização de código;
- atualização eficiente da interface;
- gerenciamento de estado;
- grande ecossistema de ferramentas.

---

# Vite

O Vite é uma ferramenta utilizada para criar, executar e empacotar aplicações modernas.

Seu principal objetivo é fornecer um ambiente de desenvolvimento rápido, simples e eficiente.

Entre suas vantagens estão:

- inicialização praticamente instantânea;
- atualização rápida durante o desenvolvimento;
- configuração simples;
- excelente integração com React;
- geração otimizada para produção.

---

# React e Vite serão utilizados

Cada ferramenta possui uma responsabilidade diferente.

O React será responsável pela construção da aplicação.

O Vite será responsável por criar e executar essa aplicação durante o desenvolvimento e gerar a versão otimizada para produção.

Neste projeto utilizaremos essa combinação porque:

- está alinhada às tecnologias esperadas no desafio;
- simplifica a configuração inicial do projeto;
- facilita a integração com Tailwind CSS, ESLint, Prettier, Husky, GitHub Actions e Vercel;
- reduz configurações desnecessárias.

---

# Como React e Vite funcionam

Durante o desenvolvimento, o Vite executa um servidor local responsável por disponibilizar a aplicação no navegador.

Sempre que um arquivo é alterado, o Vite atualiza automaticamente apenas a parte modificada da interface, tornando o desenvolvimento muito mais rápido.

O React organiza toda a interface em componentes independentes.

Cada componente possui sua própria responsabilidade e pode ser reutilizado em diferentes partes da aplicação, facilitando a manutenção e reduzindo a duplicação de código.

Ao final do desenvolvimento, o Vite gera uma versão otimizada da aplicação, pronta para ser publicada na Vercel.

---

# Decisões

Para manter consistência com o planejamento definido para este projeto, serão adotadas as seguintes decisões.

## Framework

Será utilizado:

```text
React.js
```

Justificativa:

- tecnologia base solicitada no desafio;
- arquitetura baseada em componentes;
- facilidade de manutenção.

---

## Ferramenta de Build

Será utilizado:

```text
Vite
```

Justificativa:

- inicialização rápida;
- excelente integração com React;
- configuração simplificada;
- geração otimizada para produção.

---

## Linguagem

Será utilizado:

```text
JavaScript
```

Justificativa:

O desafio não exige a utilização de outra linguagem.

Para manter fidelidade ao escopo proposto, a implementação será realizada utilizando JavaScript.

---

## Gerenciador de Pacotes

Será utilizado exclusivamente:

```text
npm
```

Conforme definido na etapa de preparação do ambiente.

---

# Pré-requisitos

Antes de iniciar esta etapa deverão estar concluídas as etapas anteriores.

É necessário possuir:

- Git instalado e configurado;
- GitHub configurado;
- repositório criado;
- Git Bash funcionando;
- Node.js v24.18.0 instalado;
- npm disponível;

Conforme documentado nos guias anteriores.

---

# Passo a Passo

Nesta etapa será criado o projeto React utilizando o Vite.

Cada comando será executado no Git Bash, conforme definido no guia de preparação do ambiente.

---

## Passo 1 — Abrir o Git Bash

Abra o Git Bash.

Este será o terminal utilizado durante todo o desenvolvimento do projeto.

---

## Passo 2 — Acessar a pasta onde ficará o projeto

Utilize o comando:

```bash
cd /c/Users/seu-usuario/Documentos/GitHub
```

### O que este comando faz

O comando `cd` significa **Change Directory**.

Ele altera o diretório atual do terminal.

Substitua `seu-usuario` pelo nome do seu usuário.

Caso utilize outra pasta para armazenar seus projetos, navegue até ela.

---

## Passo 3 — Clonar o repositório (caso ainda não tenha sido feito)

Caso o repositório ainda não exista localmente, execute:

```bash
git clone https://github.com/SEU-USUARIO/desafio-tecnico-berna.git
```

Após a clonagem:

```bash
cd desafio-tecnico-berna
```

### O que este comando faz

O Git realizará o download do repositório remoto para sua máquina.

Após isso estaremos trabalhando dentro do projeto.

---

## Passo 4 — Confirmar que estamos na branch correta

Execute:

```bash
git branch
```

O resultado esperado será:

```text
* dev
```

Caso esteja na branch `main`, altere para `dev`:

```bash
git checkout dev
```

---

## Passo 5 — Criar o projeto React utilizando o Vite

Execute:

```bash
npm create vite@latest . -- --template react
```

### O que este comando faz

Cada parte possui uma responsabilidade específica.

**npm**

Executa um pacote utilizando o gerenciador oficial do Node.js.

**create vite@latest**

Baixa a versão mais recente da ferramenta responsável por criar projetos Vite.

**.**

O ponto indica que o projeto será criado na pasta atual.

Como nosso repositório já existe, não vamos criar outra pasta.

**--template react**

Informa que será utilizado o template oficial do React.

---

## O que esperar durante a execução

O instalador poderá solicitar algumas confirmações.

Aceite as opções padrão.

Ao final será criada toda a estrutura inicial da aplicação.

### Observações

Dependendo da versão do Vite utilizada, o instalador poderá apresentar perguntas adicionais durante a criação do projeto.

Essas perguntas fazem parte do processo de criação da aplicação e deverão ser respondidas conforme a infraestrutura definida para este projeto.

#### Diretório não vazio

Caso o repositório já exista e contenha arquivos previamente criados, como documentação, arquivos de configuração ou estrutura inicial da infraestrutura, poderá ser apresentada a mensagem:

```text
Current directory is not empty. Please choose how to proceed:
```

Antes de selecionar uma das opções apresentadas, verifique se existem arquivos importantes que não podem ser removidos.

- Caso existam arquivos que devam ser preservados, utilize a opção que mantenha os arquivos existentes e permita a continuação da criação do projeto.
- Caso os arquivos existentes tenham sido criados apenas temporariamente, possuam backup ou possam ser restaurados posteriormente, poderá ser utilizada a opção de remoção para permitir que o Vite gere a estrutura padrão do projeto.

Essa decisão deve ser tomada de acordo com o estado atual do repositório, preservando sempre a integridade da documentação e da infraestrutura do projeto.

#### Seleção do Linter

Em versões mais recentes do Vite poderá ser apresentada a pergunta:

```text
Which linter to use?
```

Neste projeto deverá ser selecionada a opção definida pela arquitetura e pelos próximos guias de configuração.

A configuração definitiva do ESLint será realizada posteriormente no **Guia 14**, seguindo o padrão estabelecido para o projeto.

#### Instalação das dependências

Ao final da criação do projeto poderá ser apresentada a pergunta:

```text
Install with npm and start now?
```

Quando essa opção estiver disponível, recomenda-se selecionar **Yes** para que o instalador execute automaticamente a instalação das dependências e valide a criação inicial da aplicação.

---

## Passo 6 — Instalar as dependências do projeto

Após a criação execute:

```bash
npm install
```

### O que este comando faz

Lê o arquivo `package.json` e instala todas as dependências necessárias para executar a aplicação.

Ao término será criada a pasta:

```text
node_modules/
```

Essa pasta contém todas as bibliotecas utilizadas pelo projeto.

Ela nunca deverá ser versionada no GitHub nem apagda durante o desenvolvimento.

---

## Passo 7 — Executar o projeto

Execute:

```bash
npm run dev
```

### O que este comando faz

Inicia o servidor de desenvolvimento do Vite.

Após alguns segundos será exibido algo semelhante a:

```text
Local: http://localhost:5173/
```

Abra esse endereço no navegador.

Se tudo estiver correto será exibida a tela inicial do React.

---

# Estrutura

Após concluir esta etapa, a estrutura principal do projeto será semelhante a:

```text
desafio-tecnico-berna/

├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

Nos próximos guias parte dessa estrutura será personalizada conforme as necessidades do projeto.

---

# O que será validado

Ao final desta etapa deverá ser possível confirmar que:

- o projeto React foi criado;
- o Vite foi configurado;
- as dependências foram instaladas;
- o servidor iniciou corretamente;
- a aplicação abre no navegador;
- não existem erros no terminal.

---

# Como validar esta etapa

Execute novamente:

```bash
npm run dev
```

Se a aplicação abrir corretamente em:

```text
http://localhost:5173
```

o ambiente estará configurado corretamente.

Também confirme a existência dos arquivos:

- `package.json`;
- `vite.config.js`;
- `src/main.jsx`;
- `src/App.jsx`.

---

# Corrigir problemas

## Erro: npm não é reconhecido

Verifique se o Node.js foi instalado corretamente.

Execute:

```bash
node -v
```

e

```bash
npm -v
```

---

## Erro durante o npm install

Remova a pasta:

```text
node_modules
```

e o arquivo:

```text
package-lock.json
```

Depois execute novamente:

```bash
npm install
```

---

## Erro ao executar npm run dev

Confirme que todas as dependências foram instaladas.

Execute novamente:

```bash
npm install
```

---

## Porta já está em uso

Caso a porta padrão esteja ocupada, o próprio Vite sugerirá outra porta automaticamente.

Basta acessar o endereço informado no terminal.

---

# Boas Práticas

Durante esta etapa recomenda-se:

- criar o projeto exatamente conforme documentado;
- utilizar apenas o template React;
- manter a estrutura gerada inicialmente;
- evitar instalar bibliotecas adicionais antes da conclusão dos próximos guias;
- validar o funcionamento antes de prosseguir.

---

# Segurança

Durante esta etapa deverão ser observados os seguintes cuidados:

- utilizar apenas pacotes oficiais;
- evitar instalar dependências desconhecidas;
- não alterar arquivos gerados automaticamente sem necessidade;
- manter o repositório sincronizado antes de iniciar novas configurações.

---

# Erros Comuns

Evitar:

- criar o projeto fora do repositório;
- utilizar outro template diferente do React;
- executar comandos em outra branch;
- instalar bibliotecas antes da etapa correspondente;
- ignorar mensagens de erro apresentadas pelo terminal.

---

# Critérios

Esta etapa será considerada concluída quando:

- o projeto React estiver criado;
- o Vite estiver configurado;
- todas as dependências estiverem instaladas;
- a aplicação executar corretamente;
- o ambiente estiver preparado para instalar o Tailwind CSS.

---

# Checklist

- [x] Projeto React criado
- [x] Vite configurado
- [x] Dependências instaladas
- [x] Aplicação executando
- [x] Estrutura inicial validada
- [x] Ambiente preparado para o Tailwind CSS

---

# Referências

## Ambiente de Desenvolvimento

- Node.js v24.x LTS → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest-v24.x/api/)
- npm → [Documentação](https://docs.npmjs.com/)

---

## Build

- Vite → [Site Oficial](https://vite.dev/) | [Documentação](https://vite.dev/guide/)

---

## Frontend

- React → [Site Oficial](https://react.dev/) | [Documentação](https://react.dev/)

---
