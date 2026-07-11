# Validação do Ambiente

## Índice

- [Validação do Ambiente](#validação-do-ambiente)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Escopo desta Etapa](#escopo-desta-etapa)
- [Validação do Ambiente](#validação-do-ambiente-1)
- [Como a Validação do Ambiente vai funciona](#como-a-validação-do-ambiente-vai-funciona)
- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
- [Etapa 1 — Validar a Estrutura do Projeto](#etapa-1--validar-a-estrutura-do-projeto)
  - [Estrutura](#estrutura)
  - [Onde validar](#onde-validar)
  - [O que esta validação faz](#o-que-esta-validação-faz)
  - [Resultado](#resultado)
  - [Como validar](#como-validar)
- [Etapa 2 — Validar a Instalação das Dependências](#etapa-2--validar-a-instalação-das-dependências)
  - [Comando](#comando)
  - [Onde executar](#onde-executar)
  - [Resultado](#resultado-1)
  - [Como validar](#como-validar-1)
- [Etapa 3 — Validar a Execução da Aplicação](#etapa-3--validar-a-execução-da-aplicação)
  - [Comando](#comando-1)
  - [Onde executar](#onde-executar-1)
  - [Resultado](#resultado-2)
  - [Como validar](#como-validar-2)
- [Etapa 4 — Validar o ESLint](#etapa-4--validar-o-eslint)
  - [Comando](#comando-2)
  - [Onde executar](#onde-executar-2)
  - [O que este comando faz](#o-que-este-comando-faz)
  - [Resultado](#resultado-3)
- [Etapa 5 — Validar o Prettier](#etapa-5--validar-o-prettier)
  - [Comando](#comando-3)
  - [Onde executar](#onde-executar-3)
  - [O que este comando faz](#o-que-este-comando-faz-1)
  - [Resultado](#resultado-4)
- [Etapa 6 — Validar o Build de Produção](#etapa-6--validar-o-build-de-produção)
  - [Comando](#comando-4)
  - [Onde executar](#onde-executar-4)
  - [O que este comando faz](#o-que-este-comando-faz-2)
  - [Resultado](#resultado-5)
- [Etapa 7 — Validar o Husky](#etapa-7--validar-o-husky)
  - [O que validar](#o-que-validar)
  - [Resultado](#resultado-6)
- [Etapa 8 — Validar o GitHub Actions](#etapa-8--validar-o-github-actions)
  - [O que validar](#o-que-validar-1)
  - [Resultado](#resultado-7)
- [Etapa 9 — Validar a Publicação na Vercel](#etapa-9--validar-a-publicação-na-vercel)
  - [O que validar](#o-que-validar-2)
  - [Resultado](#resultado-8)
- [Validação](#validação)
- [Corrigir Problemas](#corrigir-problemas)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
  - [Frontend](#frontend)
  - [Qualidade de Código](#qualidade-de-código)
  - [Automação e Versionamento](#automação-e-versionamento)
  - [Deploy](#deploy)

---

# Objetivo

Este documento tem como objetivo validar toda a preparação do ambiente de desenvolvimento realizada nos Guides anteriores.

Ao final desta etapa será possível confirmar que todas as ferramentas instaladas e configuradas estão funcionando corretamente, integradas entre si e prontas para iniciar o desenvolvimento da aplicação.

Nenhuma funcionalidade da aplicação será implementada nesta etapa.

Esta etapa representa a conclusão da preparação do ambiente de desenvolvimento e garante que toda a infraestrutura do projeto esteja pronta para iniciar a implementação.

---

# Escopo desta Etapa

Durante esta etapa serão realizadas apenas atividades relacionadas à validação do ambiente preparado anteriormente.

Serão abordados:

- validação da estrutura do projeto;
- validação da instalação das dependências;
- validação do React;
- validação do Vite;
- validação do Tailwind CSS;
- validação do ESLint;
- validação do Prettier;
- validação do Husky;
- validação do GitHub Actions;
- validação da publicação na Vercel.

---

# Validação do Ambiente

A validação do ambiente consiste na conferência de todas as ferramentas instaladas durante a preparação do projeto.

Seu objetivo é garantir que cada tecnologia esteja funcionando corretamente e integrada às demais.

Essa validação ocorre antes do início do desenvolvimento da aplicação, reduzindo a possibilidade de problemas durante a implementação.

Sua utilização foi definida considerando os seguintes fatores:

- confirmação da instalação correta das ferramentas;
- validação da integração entre as tecnologias utilizadas;
- identificação antecipada de problemas de configuração;
- redução de retrabalho durante o desenvolvimento;
- maior confiabilidade do ambiente;
- encerramento formal da fase de preparação.

Essa etapa garante que o ambiente esteja completamente preparado para iniciar a implementação.

---

# Como a Validação do Ambiente vai funciona

A validação será realizada por meio da execução dos principais comandos utilizados durante o desenvolvimento e da conferência das integrações configuradas nos Guides anteriores.

Cada ferramenta será validada individualmente.

Ao final da etapa também será realizada uma validação geral para confirmar que todas as tecnologias estão funcionando corretamente em conjunto.

---

# Pré-requisitos

Antes de iniciar esta etapa, os seguintes Guides deverão estar concluídos.

- Guide 10 — Preparação do Ambiente;
- Guide 11 — Configuração do Git e GitHub;
- Guide 12 — Configuração do Projeto React + Vite;
- Guide 13 — Tailwind CSS;
- Guide 14 — ESLint;
- Guide 15 — Prettier;
- Guide 16 — Husky;
- Guide 17 — GitHub Actions;
- Guide 18 — Vercel.

Também será necessário que:

- todas as dependências estejam instaladas;
- o projeto esteja versionado no Git;
- o repositório esteja sincronizado com o GitHub;
- o projeto execute corretamente através do comando `npm run dev`;
- o projeto gere corretamente a versão de produção através do comando `npm run build`;
- o primeiro deploy na Vercel tenha sido concluído.

---

# Passo a Passo

Nesta etapa será realizada uma validação completa do ambiente preparado durante os Guides anteriores.

Ao final deste processo será possível confirmar que todas as ferramentas estão funcionando corretamente e que o projeto está pronto para iniciar o desenvolvimento da aplicação.

---

# Etapa 1 — Validar a Estrutura do Projeto

Antes de iniciar será necessário verificar se toda a estrutura criada durante a preparação do ambiente permanece organizada e completa.

---

## Estrutura

Estrutura do projeto deverá ser:

```text
desafio-tecnico-berna/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .husky/
│
├── guides/
│
├── public/
│
├── src/
│
├── .editorconfig
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── ...
```

---

## Onde validar

Na pasta raiz do projeto.

```text
desafio-tecnico-berna/
```

---

## O que esta validação faz

Esta validação confirma que:

- a estrutura do projeto permanece organizada;
- os arquivos de configuração existem;
- as pastas obrigatórias foram criadas;
- nenhuma configuração importante foi removida acidentalmente.

---

## Resultado

Todos os diretórios e arquivos obrigatórios deverão existir na raiz do projeto.

---

## Como validar

Verifique se existem:

- a pasta `.github`;
- a pasta `.husky`;
- a pasta `guides`;
- a pasta `public`;
- a pasta `src`;
- o arquivo `package.json`;
- o arquivo `package-lock.json`;
- o arquivo `eslint.config.js`;
- o arquivo `.prettierrc`;
- o arquivo `.prettierignore`;
- o arquivo `.editorconfig`;
- o arquivo `vite.config.js`;
- o arquivo `README.md`.

Caso algum desses arquivos ou diretórios esteja ausente, ele deverá ser restaurado antes de prosseguir.

---

# Etapa 2 — Validar a Instalação das Dependências

Após validar a estrutura do projeto será necessário confirmar que todas as dependências continuam instaladas corretamente.

---

## Comando

```bash
npm install
```

---

## Onde executar

Executar no **Git Bash**, dentro da pasta raiz do projeto.

```text
desafio-tecnico-berna/
```

Este comando verifica as dependências declaradas no arquivo `package.json` e garante que todas estejam corretamente instaladas na pasta `node_modules`.

Caso alguma dependência esteja ausente, ela será instalada automaticamente.

Durante sua execução o npm irá:

- analisar o arquivo `package.json`;
- analisar o arquivo `package-lock.json`;
- instalar dependências ausentes;
- atualizar a pasta `node_modules`, caso necessário.

Nenhuma configuração do projeto será alterada.

---

## Resultado

A instalação deverá ser concluída sem mensagens de erro.

Caso todas as dependências já estejam instaladas, o npm apenas confirmará que o ambiente está atualizado.

---

## Como validar

Verifique se:

- o comando foi concluído sem erros;
- a pasta `node_modules` existe;
- nenhuma dependência obrigatória foi reportada como ausente;
- o terminal retornou ao prompt normalmente.

Se essas condições forem atendidas, as dependências estarão validadas.

---

# Etapa 3 — Validar a Execução da Aplicação

Após confirmar que todas as dependências estão instaladas corretamente, será necessário verificar se a aplicação pode ser executada em ambiente de desenvolvimento.

---

## Comando

```bash
npm run dev
```

---

## Onde executar

Executar no **Git Bash**, dentro da pasta raiz do projeto.

```text
desafio-tecnico-berna/
```

Este comando inicia o servidor de desenvolvimento do Vite.

Ele permite verificar se toda a configuração realizada anteriormente continua funcionando corretamente e se a aplicação pode ser executada localmente.

Durante sua execução serão realizadas as seguintes etapas:

- inicialização do Vite;
- compilação da aplicação;
- leitura das configurações do projeto;
- disponibilização da aplicação em ambiente de desenvolvimento.

---

## Resultado

O terminal deverá exibir uma mensagem semelhante à seguinte:

```text
VITE v...

Local: http://localhost:5173
```

---

## Como validar

Verifique se:

- o servidor iniciou sem erros;
- foi exibida a URL local;
- a aplicação abriu corretamente no navegador;
- nenhuma mensagem de erro foi apresentada no terminal.

Se essas condições forem atendidas, a execução local estará validada.

---

# Etapa 4 — Validar o ESLint

Após validar a execução da aplicação, será necessário confirmar que a análise estática do código continua funcionando corretamente.

---

## Comando

```bash
npm run lint
```

---

## Onde executar

Executar no **Git Bash**, na raiz do projeto.

---

## O que este comando faz

O ESLint irá:

- analisar os arquivos configurados;
- identificar problemas de qualidade;
- verificar regras configuradas;
- informar possíveis correções.

---

## Resultado

O comando deverá ser concluído sem erros.

Verifique se:

- o comando terminou normalmente;
- nenhum erro foi encontrado;
- o terminal retornou ao prompt.

---

# Etapa 5 — Validar o Prettier

Após validar o ESLint será necessário confirmar que a formatação do projeto permanece consistente.

---

## Comando

```bash
npm run format:check
```

---

## Onde executar

Executar no Git Bash, na raiz do projeto.

---

## O que este comando faz

O Prettier irá:

- analisar os arquivos suportados;
- comparar a formatação atual com a configuração definida;
- informar possíveis divergências.

---

## Resultado

Todos os arquivos deverão estar corretamente formatados.

Verifique se:

- nenhum arquivo foi reportado com erro de formatação;
- o comando terminou normalmente.

---

# Etapa 6 — Validar o Build de Produção

Após validar o ambiente de desenvolvimento será necessário confirmar que a aplicação pode ser compilada para produção.

---

## Comando

```bash
npm run build
```

---

## Onde executar

Executar no Git Bash, na raiz do projeto.

---

## O que este comando faz

Durante sua execução serão realizadas as seguintes etapas:

- compilação da aplicação;
- otimização dos arquivos;
- geração da pasta `dist`.

---

## Resultado

A pasta:

```text
dist/
```

deverá ser criada automaticamente.

Verifique se:

- a compilação terminou sem erros;
- a pasta `dist` foi criada;
- o terminal retornou ao prompt.

---

# Etapa 7 — Validar o Husky

Após validar o build será necessário confirmar que o Husky continua integrado ao Git.

---

## O que validar

Verifique se:

- a pasta `.husky` existe;
- o arquivo `pre-commit` existe;
- o script `prepare` permanece configurado no `package.json`.

---

## Resultado

Toda a estrutura do Husky deverá permanecer íntegra.

Realize um commit de teste.

Antes da criação do commit o hook deverá ser executado automaticamente.

Caso as validações falhem, o commit deverá ser interrompido.

---

# Etapa 8 — Validar o GitHub Actions

Após validar o Husky será necessário confirmar que o Workflow do GitHub Actions está funcionando corretamente.

---

## O que validar

Realize um novo commit em uma branch de funcionalidade e envie-a para o repositório remoto.

Exemplo:

```bash
git checkout dev

git pull origin dev

git checkout -b feature/validacao-github-actions
```

Após realizar alguma alteração no projeto, execute:

```bash
git add .

git commit -m "test: validar github actions"

git push -u origin feature/validacao-github-actions
```

Em seguida, abra um Pull Request da branch:

```text
feature/validacao-github-actions
```

para a branch:

```text
dev
```

---

## Resultado

Após o envio da branch para o GitHub:

- o Workflow deverá iniciar automaticamente;
- todas as etapas configuradas no arquivo `ci.yml` deverão ser executadas;
- o Workflow deverá finalizar com sucesso;
- o Pull Request deverá indicar que todas as verificações obrigatórias foram aprovadas antes da realização do merge para a branch `dev`.

No GitHub acesse:

```text
Repository

↓

Actions
```

Verifique se o Workflow aparece com o status:

```text
Success
```

Caso exista um Pull Request aberto, confirme também que todas as verificações obrigatórias foram concluídas com sucesso antes da realização do merge para a branch `dev`.

---

# Etapa 9 — Validar a Publicação na Vercel

Após validar o GitHub Actions será necessário confirmar que a aplicação publicada continua funcionando corretamente.

---

## O que validar

Abra a URL pública fornecida pela Vercel.

---

## Resultado

A aplicação deverá:

- carregar corretamente;
- apresentar todas as páginas;
- funcionar sem erros.

Verifique se:

- a URL responde normalmente;
- não existem erros no navegador;
- o deploy mais recente aparece como **Ready** na Vercel.

---

# Validação

Ao concluir todas as etapas anteriores confirme que:

- Node.js está funcionando;
- npm está funcionando;
- Git está funcionando;
- React está funcionando;
- Vite está funcionando;
- Tailwind CSS está funcionando;
- ESLint está funcionando;
- Prettier está funcionando;
- Husky está funcionando;
- GitHub Actions está funcionando;
- Vercel está funcionando.

Se todas as verificações forem concluídas com sucesso, o ambiente estará completamente preparado para iniciar o desenvolvimento da aplicação.

---

# Corrigir Problemas

Caso alguma validação falhe:

- verifique a mensagem apresentada no terminal;
- confirme se todas as dependências estão instaladas;
- execute novamente `npm install`;
- confirme se os arquivos de configuração não foram alterados;
- verifique os Guides correspondentes à ferramenta que apresentou falha;
- repita a validação após realizar a correção.

---

# Boas Práticas

Durante a validação do ambiente recomenda-se:

- validar todas as ferramentas antes de iniciar o desenvolvimento;
- corrigir qualquer erro imediatamente;
- manter o projeto sincronizado com o GitHub;
- executar o build antes de publicar alterações;
- manter a documentação atualizada.

---

# Segurança

Durante esta etapa deverão ser observados os seguintes cuidados:

- utilizar apenas dependências oficiais;
- manter o ambiente atualizado;
- não remover arquivos de configuração;
- revisar alterações antes de realizar commits;
- proteger informações sensíveis utilizando variáveis de ambiente.

---

# Erros Comuns

Evitar:

- iniciar o desenvolvimento sem validar o ambiente;
- ignorar erros do ESLint;
- ignorar erros do Prettier;
- publicar alterações sem validar o build;
- remover arquivos de configuração;
- alterar Workflows sem necessidade.

---

# Critérios

Esta etapa será considerada concluída quando:

- toda a estrutura do projeto estiver íntegra;
- todas as dependências estiverem instaladas;
- a aplicação executar corretamente;
- o ESLint estiver funcionando;
- o Prettier estiver funcionando;
- o Build gerar a pasta `dist`;
- o Husky estiver funcionando;
- o GitHub Actions executar corretamente;
- a aplicação publicada estiver acessível na Vercel.

---

# Checklist

- [ ] Estrutura validada
- [ ] Dependências validadas
- [ ] Aplicação executando
- [ ] ESLint validado
- [ ] Prettier validado
- [ ] Build validado
- [ ] Husky validado
- [ ] GitHub Actions validado
- [ ] Vercel validada
- [ ] Ambiente completamente preparado

---

# Referências

## Ambiente de Desenvolvimento

- **Node.js v24.x LTS** → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest-v24.x/api/)
- **npm** → [Documentação](https://docs.npmjs.com/)
- **Git** → [Download](https://git-scm.com/downloads) | [Documentação](https://git-scm.com/doc)

---

## Frontend

- **React** → [Site Oficial](https://react.dev/) | [Documentação](https://react.dev/learn)
- **Vite** → [Site Oficial](https://vite.dev/) | [Documentação](https://vite.dev/guide/)
- **Tailwind CSS** → [Site Oficial](https://tailwindcss.com/) | [Documentação](https://tailwindcss.com/docs)

---

## Qualidade de Código

- **ESLint** → [Site Oficial](https://eslint.org/) | [Documentação](https://eslint.org/docs/latest/)
- **Prettier** → [Site Oficial](https://prettier.io/) | [Documentação](https://prettier.io/docs/)

---

## Automação e Versionamento

- **Husky** → [Site Oficial](https://typicode.github.io/husky/) | [Documentação](https://typicode.github.io/husky/)
- **GitHub Actions** → [Documentação](https://docs.github.com/actions)

---

## Deploy

- **Vercel** → [Site Oficial](https://vercel.com/) | [Documentação](https://vercel.com/docs)

---
