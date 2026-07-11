# ESLint

## Índice

- [ESLint](#eslint)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Por que esta etapa](#por-que-esta-etapa)
- [Referência](#referência)
- [Escopo](#escopo)
- [ESLint](#eslint-1)
- [Análise Estática](#análise-estática)
- [Como o ESLint analisa](#como-o-eslint-analisa)
- [React utiliza o ESLint](#react-utiliza-o-eslint)
- [Vite integra o ESLint](#vite-integra-o-eslint)
- [ESLint será utilizado](#eslint-será-utilizado)
- [Decisões](#decisões)
- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
- [Etapa 1 — Acessar a pasta do projeto](#etapa-1--acessar-a-pasta-do-projeto)
  - [Comando](#comando)
  - [Onde executar](#onde-executar)
  - [O que este comando faz](#o-que-este-comando-faz)
  - [Resultado](#resultado)
  - [Como validar](#como-validar)
- [Etapa 2 — Instalar o ESLint](#etapa-2--instalar-o-eslint)
  - [Comando](#comando-1)
  - [Onde executar](#onde-executar-1)
  - [O que este comando faz](#o-que-este-comando-faz-1)
  - [Resultado](#resultado-1)
  - [Como validar](#como-validar-1)
- [Arquivo eslint.config.js](#arquivo-eslintconfigjs)
  - [Onde fica](#onde-fica)
  - [Para que serve](#para-que-serve)
- [Estrutura](#estrutura)
- [Como Validar](#como-validar-2)
- [Corrigir Problemas](#corrigir-problemas)
  - [O comando de instalação foi executado corretamente](#o-comando-de-instalação-foi-executado-corretamente)
  - [O projeto está sendo executado na pasta correta](#o-projeto-está-sendo-executado-na-pasta-correta)
  - [O arquivo eslint.config.js existe](#o-arquivo-eslintconfigjs-existe)
  - [Verifique se o script lint existe](#verifique-se-o-script-lint-existe)
  - [Reinicie o ambiente](#reinicie-o-ambiente)
  - [Consultar as mensagens do terminal](#consultar-as-mensagens-do-terminal)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
  - [Build](#build)
  - [Frontend](#frontend)
  - [Estilização](#estilização)
  - [Qualidade de Código](#qualidade-de-código)

---

# Objetivo

Este documento tem como objetivo apresentar o ESLint, explicar como ele será utilizado neste projeto e orientar sua instalação e configuração de forma organizada, segura e compatível com toda a stack definida durante o planejamento.

Ao final desta etapa, o projeto estará preparado para utilizar o ESLint como ferramenta de análise estática de código durante o desenvolvimento.

Embora o ESLint seja utilizado durante todo o desenvolvimento da aplicação, nesta etapa serão realizadas apenas sua instalação e configuração inicial.

---

# Por que esta etapa

Durante o desenvolvimento de aplicações é comum que pequenos erros passem despercebidos pelo desenvolvedor.

Alguns exemplos são:

- variáveis declaradas e nunca utilizadas;
- importações desnecessárias;
- erros de sintaxe;
- possíveis bugs;
- código duplicado;
- padrões inconsistentes entre arquivos.

Esses problemas nem sempre impedem que a aplicação funcione, porém dificultam sua manutenção e podem gerar falhas futuras.

Para reduzir esse tipo de problema existem ferramentas de análise estática de código.

Será utilizado o ESLint como ferramenta oficial para realizar essa análise durante o desenvolvimento.

Sua utilização contribui para:

- maior qualidade do código;
- identificação precoce de erros;
- padronização do desenvolvimento;
- redução de problemas simples antes da execução da aplicação;
- facilidade de manutenção do projeto.

---

# Referência

O desafio não exige a utilização do ESLint.

Também não apresenta nenhuma configuração obrigatória relacionada à análise estática de código.

A adoção do ESLint foi definida como uma decisão para aumentar a qualidade do desenvolvimento e facilitar a manutenção do código ao longo da implementação.

É importante destacar que essa decisão não altera o escopo funcional do desafio.

O ESLint será utilizado apenas como ferramenta de apoio ao desenvolvimento.

---

# Escopo

Durante esta etapa serão realizadas apenas atividades relacionadas à configuração do ESLint.

Serão abordados:

- instalação do ESLint;
- integração com React;
- integração com Vite;
- configuração inicial;
- estrutura dos arquivos envolvidos;
- validação da instalação;
- boas práticas de utilização.

---

# ESLint

O ESLint é uma ferramenta de análise estática de código.

Sua função é analisar os arquivos do projeto em busca de possíveis erros, inconsistências e más práticas antes mesmo da aplicação ser executada.

Ao contrário do navegador ou do React, o ESLint não executa o código.

Ele apenas realiza uma inspeção dos arquivos fonte para identificar situações que podem indicar problemas durante o desenvolvimento.

Essa análise ajuda o desenvolvedor a corrigir diversos erros ainda durante a escrita do código.

---

# Análise Estática

Análise estática é o processo de verificar o código sem executá-lo.

Enquanto o navegador interpreta a aplicação apenas quando ela é iniciada, o ESLint consegue identificar diversos problemas apenas analisando os arquivos do projeto.

Por exemplo, ele consegue detectar:

- variáveis não utilizadas;
- importações desnecessárias;
- código inacessível;
- possíveis erros de sintaxe;
- padrões inconsistentes de escrita.

Isso permite corrigir diversos problemas antes mesmo da aplicação ser executada.

Durante o desenvolvimento, o ESLint analisa automaticamente os arquivos JavaScript e JSX presentes no projeto.

Sempre que um arquivo é salvo, ele verifica se o código está de acordo com as regras configuradas.

Caso encontre algum problema, ele apresenta uma mensagem informando:

- qual arquivo possui o problema;
- em qual linha ele foi encontrado;
- qual regra foi violada;
- uma breve descrição do problema.

Essa análise ocorre sem modificar automaticamente o funcionamento da aplicação.

O objetivo é fornecer informações que auxiliem durante a implementação.

---

# Como o ESLint analisa

Durante o desenvolvimento acontece o seguinte fluxo:

```text
Código JavaScript / JSX
            │
            ▼
        ESLint
            │
            ▼
Analisa o código
            │
            ▼
Verifica as regras configuradas
            │
            ▼
Informa possíveis problemas
            │
            ▼
Desenvolvedor realiza as correções
```

Esse processo acontece continuamente durante o desenvolvimento.

O ESLint não altera automaticamente o comportamento da aplicação.

Ele apenas identifica situações que merecem atenção.

---

# React utiliza o ESLint

No React, os componentes são desenvolvidos utilizando JavaScript e JSX.

Durante o desenvolvimento, o ESLint analisa esses arquivos para identificar possíveis problemas antes que eles afetem o funcionamento da aplicação.

Entre as verificações mais comuns estão:

- variáveis declaradas e não utilizadas;
- importações desnecessárias;
- possíveis erros de sintaxe;
- problemas relacionados às regras do React;
- utilização inadequada de Hooks (quando configurado).

Essa integração auxilia o desenvolvedor a manter o código mais organizado e consistente ao longo do projeto.

---

# Vite integra o ESLint

O Vite é responsável por executar o ambiente de desenvolvimento e construir a aplicação.

Embora o ESLint não faça parte do funcionamento interno do Vite, ambos trabalham de forma complementar.

Enquanto o Vite executa a aplicação, o ESLint realiza a análise dos arquivos do projeto.

Na prática, o fluxo de desenvolvimento passa a ser semelhante ao seguinte:

```text
Desenvolvedor altera um arquivo
                │
                ▼
          Vite detecta a alteração
                │
                ▼
      Aplicação é recompilada
                │
                ▼
      ESLint analisa o arquivo
                │
                ▼
Informa possíveis problemas encontrados
```

Dessa forma, o desenvolvedor recebe rapidamente informações sobre eventuais inconsistências no código.

---

# ESLint será utilizado

Embora o desafio não exija sua utilização, o ESLint será adotado para aumentar a qualidade do desenvolvimento.

Entre os principais benefícios estão:

- identificação precoce de erros;
- redução de problemas simples durante a implementação;
- maior padronização entre os arquivos do projeto;
- facilidade de manutenção;
- integração oficial com React;
- compatibilidade com toda a stack definida.

Sua utilização não altera o funcionamento da aplicação.

O ESLint atua apenas como ferramenta de apoio.

---

# Decisões

O desafio não exige nenhuma ferramenta de análise estática de código.

Mesmo assim, adotarei oficialmente o ESLint como solução para inspeção automática dos arquivos durante o desenvolvimento.

Essa decisão foi tomada considerando:

- maior qualidade do código;
- facilidade de manutenção;
- identificação precoce de erros;
- integração oficial com Vite;
- compatibilidade com toda a stack.

Serão utilizadas apenas configurações oficiais compatíveis com React e Vite.

Não serão adicionadas regras personalizadas que alterem os requisitos do desafio.

---

# Pré-requisitos

Antes de iniciar esta etapa, os seguintes Guides deverão estar concluídos.

- Guide 10 — Preparação do Ambiente;
- Guide 11 — Configuração do Git e GitHub;
- Guide 12 — Configuração do Projeto React + Vite;
- Guide 13 — Tailwind CSS.

Também será necessário que:

- o projeto React esteja funcionando corretamente;
- o Tailwind CSS esteja configurado;
- todas as dependências instaladas anteriormente estejam funcionando;
- o projeto execute normalmente através do comando:

```bash
npm run dev
```

---

# Passo a Passo

Nesta etapa será realizada a instalação do ESLint e sua integração ao projeto React criado com Vite.

Ao final deste processo, o projeto estará preparado para analisar automaticamente os arquivos durante o desenvolvimento.

---

# Etapa 1 — Acessar a pasta do projeto

Antes de instalar qualquer dependência, é necessário acessar a pasta raiz do projeto.

## Comando

```bash
cd desafio-tecnico-berna
```

## Onde executar

Executar no **Git Bash**.

Após acessar o diretório correto, o terminal deverá estar posicionado na raiz do projeto.

Exemplo:

```text
desafio-tecnico-berna/
```

Todos os comandos desta etapa deverão ser executados dentro da pasta principal do projeto.

Caso contrário, as dependências poderão ser instaladas no local incorreto.

## O que este comando faz

Altera o diretório atual do terminal para a pasta raiz do projeto.

## Resultado

O terminal deverá indicar que o diretório atual corresponde ao projeto.

## Como validar

Execute:

```bash
pwd
```

O caminho retornado deverá terminar com:

```text
desafio-tecnico-berna
```

---

# Etapa 2 — Instalar o ESLint

Será realizada a instalação do ESLint como dependência de desenvolvimento do projeto.

## Comando

```bash
npm install -D eslint
```

## Onde executar

Executar no **Git Bash**, dentro da pasta raiz do projeto.

Esse comando adiciona o ESLint ao projeto como ferramenta de desenvolvimento.

Sua função será analisar automaticamente os arquivos JavaScript e JSX durante a implementação da aplicação.

## O que este comando faz

O npm realiza o download da biblioteca e registra sua utilização no arquivo `package.json`, dentro da seção `devDependencies`.

Também atualiza automaticamente o arquivo `package-lock.json`.

## Resultado

Ao final da instalação, o npm deverá informar que o pacote foi instalado com sucesso.

## Como validar

Abra o arquivo:

```text
package.json
```

Na seção `devDependencies` deverá existir uma entrada correspondente ao ESLint.

---

# Arquivo eslint.config.js

## Onde fica

```text
desafio-tecnico-berna/
eslint.config.js
```

Após a instalação do ESLint, este arquivo será criado durante a configuração da ferramenta.

Ele ficará localizado na raiz do projeto.

## Para que serve

O arquivo `eslint.config.js` é o principal arquivo de configuração do ESLint.

É nele que são definidas as regras utilizadas durante a análise do código.

Também é responsável por informar:

- quais arquivos deverão ser analisados;
- quais arquivos deverão ser ignorados;
- quais regras serão aplicadas;
- quais plugins serão utilizados.

Todas essas configurações serão utilizadas automaticamente sempre que o ESLint executar a análise do projeto.

---

# Estrutura

Após a instalação e configuração do ESLint, a estrutura principal do projeto será semelhante à seguinte:

```text
desafio-tecnico-berna/
│
├── node_modules/
├── public/
├── src/
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── ...
```

---

# Como Validar

Após concluir esta etapa, será necessário validar se o ESLint está funcionando corretamente.

Execute o seguinte comando:

```bash
npx eslint .
```

O comando solicitará que o ESLint analise todos os arquivos do projeto.

Se nenhum problema for encontrado, a configuração foi realizada corretamente.

Caso existam avisos ou erros, eles serão apresentados indicando:

- arquivo;
- linha;
- coluna;
- descrição do problema.

---

# Corrigir Problemas

Caso o ESLint apresente erros durante a configuração ou execução, verifique os seguintes pontos antes de prosseguir.

## O comando de instalação foi executado corretamente

Confirme que todas as dependências foram instaladas.

Execute:

```bash
npm install
```

Caso alguma dependência esteja ausente, execute novamente o comando de instalação do Guide 14.

---

## O projeto está sendo executado na pasta correta

Antes de executar qualquer comando, confirme que o terminal está na raiz do projeto.

Execute:

```bash
pwd
```

O caminho deverá terminar com:

```text
desafio-tecnico-berna
```

---

## O arquivo eslint.config.js existe

Confirme que o arquivo está localizado na raiz do projeto.

```text
desafio-tecnico-berna/
├── eslint.config.js
```

Caso ele tenha sido removido ou renomeado, o ESLint não conseguirá carregar a configuração.

---

## Verifique se o script lint existe

Abra o arquivo:

```text
package.json
```

Na seção `scripts` deverá existir uma entrada semelhante a:

```json
"lint": "eslint ."
```

Sem esse script o comando:

```bash
npm run lint
```

não funcionará.

---

## Reinicie o ambiente

Após instalar novas dependências ou alterar a configuração do ESLint, interrompa o servidor de desenvolvimento, caso ele esteja em execução.

Em seguida execute novamente:

```bash
npm run dev
```

Isso garante que todas as alterações sejam carregadas corretamente.

---

## Consultar as mensagens do terminal

Sempre leia atentamente os erros apresentados pelo terminal.

Na maioria das vezes o próprio ESLint informa:

- qual arquivo contém o problema;
- em qual linha ocorreu;
- qual regra foi violada;
- quando a correção automática é possível.

Essas informações devem ser utilizadas antes de realizar qualquer alteração na configuração.

---

# Boas Práticas

Durante o desenvolvimento deste projeto serão adotadas as seguintes práticas relacionadas ao ESLint.

- executar o ESLint frequentemente durante o desenvolvimento;
- corrigir os avisos antes de criar novos commits;
- manter apenas regras realmente necessárias;
- evitar desabilitar regras sem justificativa técnica;
- revisar novas regras antes de adicioná-las ao projeto;
- manter o arquivo de configuração simples e organizado;
- utilizar sempre a configuração oficial recomendada para React e Vite.

O objetivo é manter um padrão de qualidade consistente durante toda a implementação do projeto.

---

# Segurança

Embora o ESLint não seja uma ferramenta de segurança, algumas regras ajudam a reduzir problemas durante o desenvolvimento.

Durante esta etapa deverão ser observados os seguintes cuidados.

- instalar dependências apenas pelos repositórios oficiais;
- evitar plugins de origem desconhecida;
- manter as dependências atualizadas;
- não copiar configurações sem compreender seu funcionamento;
- revisar alterações realizadas no arquivo `eslint.config.js`;
- evitar desabilitar regras que possam ocultar problemas reais.

Essas práticas reduzem riscos de configuração incorreta e facilitam a manutenção do projeto.

---

# Erros Comuns

Evite os seguintes problemas durante esta etapa.

- executar o ESLint fora da pasta do projeto;
- esquecer de instalar todas as dependências;
- remover arquivos de configuração;
- ignorar erros apresentados pelo ESLint;
- desabilitar regras apenas para eliminar avisos;
- alterar regras sem compreender seus efeitos;
- misturar configurações incompatíveis.

---

# Critérios

Esta etapa será considerada concluída quando todos os itens abaixo forem atendidos.

- ESLint instalado corretamente;
- configuração oficial criada;
- arquivo `eslint.config.js` presente;
- script `lint` funcionando;
- comando `npm run lint` executado sem erros de configuração;
- ambiente preparado para analisar automaticamente o código do projeto.

---

# Checklist

- [x] ESLint instalado
- [x] Dependências instaladas corretamente
- [x] Arquivo `eslint.config.js` criado
- [x] Script `lint` configurado
- [x] Comando `npm run lint` funcionando
- [x] Configuração validada
- [x] Ambiente preparado para a próxima etapa

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

## Estilização

- Tailwind CSS → [Site Oficial](https://tailwindcss.com/) | [Documentação](https://tailwindcss.com/docs)

---

## Qualidade de Código

- ESLint → [Site Oficial](https://eslint.org/) | [Documentação](https://eslint.org/docs/latest/)
- GitHub Actions → [Documentação](https://docs.github.com/actions)

---
