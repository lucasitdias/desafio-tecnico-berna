# Prettier

## Índice

- [Prettier](#prettier)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Por que esta etapa no projeto](#por-que-esta-etapa-no-projeto)
- [Referência](#referência)
- [Escopo](#escopo)
- [Prettier](#prettier-1)
- [Como o Prettier funciona](#como-o-prettier-funciona)
- [Como o Prettier trabalha junto com o ESLint](#como-o-prettier-trabalha-junto-com-o-eslint)
- [Prettier será utilizado neste projeto](#prettier-será-utilizado-neste-projeto)
- [Decisões](#decisões)
- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
- [Etapa 1 — Acessar a pasta do projeto](#etapa-1--acessar-a-pasta-do-projeto)
  - [Comando](#comando)
  - [Onde executar](#onde-executar)
  - [Resultado](#resultado)
  - [Como validar](#como-validar)
- [Etapa 2 — Instalar o Prettier](#etapa-2--instalar-o-prettier)
  - [Comando](#comando-1)
  - [Onde executar](#onde-executar-1)
  - [Resultado](#resultado-1)
  - [Como validar](#como-validar-1)
- [Arquivo package.json](#arquivo-packagejson)
  - [Onde fica](#onde-fica)
- [Arquivo package-lock.json](#arquivo-package-lockjson)
  - [Onde fica](#onde-fica-1)
- [Pasta node\_modules](#pasta-node_modules)
  - [Onde fica](#onde-fica-2)
- [Estrutura](#estrutura)
- [Etapa 3 — Criar o Arquivo de Configuração do Prettier](#etapa-3--criar-o-arquivo-de-configuração-do-prettier)
  - [Arquivo](#arquivo)
  - [O que será criado](#o-que-será-criado)
  - [Código](#código)
  - [Explicando cada configuração](#explicando-cada-configuração)
    - [`"semi": true`](#semi-true)
    - [`"singleQuote": true`](#singlequote-true)
    - [`"tabWidth": 2`](#tabwidth-2)
    - [`"useTabs": false`](#usetabs-false)
    - [`"trailingComma": "es5"`](#trailingcomma-es5)
    - [`"printWidth": 100`](#printwidth-100)
    - [`"arrowParens": "always"`](#arrowparens-always)
    - [`"bracketSpacing": true`](#bracketspacing-true)
    - [`"endOfLine": "lf"`](#endofline-lf)
  - [Resultado](#resultado-2)
  - [Como validar](#como-validar-2)
- [Etapa 4 — Criar o Arquivo .prettierignore](#etapa-4--criar-o-arquivo-prettierignore)
  - [Arquivo](#arquivo-1)
  - [O que será criado](#o-que-será-criado-1)
  - [Código](#código-1)
  - [Explicando cada entrada](#explicando-cada-entrada)
    - [node\_modules](#node_modules)
    - [dist](#dist)
  - [Resultado](#resultado-3)
  - [Como validar](#como-validar-3)
- [Etapa 5 — Integrar o Prettier ao ESLint](#etapa-5--integrar-o-prettier-ao-eslint)
  - [Por que realizar essa integração](#por-que-realizar-essa-integração)
  - [Instalar as dependências de integração](#instalar-as-dependências-de-integração)
  - [Comando](#comando-2)
  - [Onde executar](#onde-executar-2)
  - [O que será realizado](#o-que-será-realizado)
  - [Resultado](#resultado-4)
  - [Como validar](#como-validar-4)
  - [Configurar a integração no ESLint](#configurar-a-integração-no-eslint)
  - [Arquivo](#arquivo-2)
  - [O que será realizado](#o-que-será-realizado-1)
  - [Como validar](#como-validar-5)
  - [Resultado](#resultado-5)
  - [Como validar](#como-validar-6)
- [Estrutura](#estrutura-1)
- [Como Validar](#como-validar-7)
- [Corrigir Problemas](#corrigir-problemas)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Ferramentas de Formatação](#ferramentas-de-formatação)
  - [Ferramentas de Qualidade de Código](#ferramentas-de-qualidade-de-código)
  - [Front-end](#front-end)
  - [Gerenciador de Pacotes](#gerenciador-de-pacotes)
  - [Ferramentas de Desenvolvimento](#ferramentas-de-desenvolvimento)

---

# Objetivo

Este documento tem como objetivo apresentar o Prettier, explicar sua finalidade dentro deste projeto e orientar sua instalação e configuração de forma organizada, segura e compatível com toda a stack tecnológica definida durante o planejamento.

Ao final desta etapa, o projeto estará preparado para utilizar o Prettier como ferramenta oficial de formatação automática do código-fonte.

Embora o Prettier atue diretamente sobre os arquivos do projeto, nesta etapa serão realizadas apenas sua instalação, configuração e integração com as demais ferramentas do ambiente.

---

# Por que esta etapa no projeto

Durante o desenvolvimento de software, diferentes desenvolvedores podem escrever códigos que executam exatamente a mesma funcionalidade, porém utilizando estilos de formatação completamente diferentes.

Essas diferenças normalmente envolvem:

- quantidade de espaços;
- indentação;
- uso de aspas;
- quebra de linhas;
- posicionamento de chaves;
- tamanho das linhas;
- organização dos arquivos.

Embora essas diferenças não alterem o funcionamento da aplicação, elas dificultam a leitura, aumentam conflitos em commits e tornam a manutenção mais trabalhosa.

O Prettier foi criado para resolver esse problema de forma automática.

Ao invés de cada desenvolvedor decidir como formatar o código, toda a equipe utiliza uma única configuração.

Dessa forma, todos os arquivos permanecem padronizados durante todo o desenvolvimento.

---

# Referência

O desafio não exige explicitamente a utilização do Prettier.

Entretanto, também não impõe qualquer restrição quanto à utilização de ferramentas de formatação automática.

Sua adoção neste projeto faz parte da preparação do ambiente de desenvolvimento e busca manter toda a base de código organizada, consistente e fácil de manter.

A utilização do Prettier não altera nenhuma funcionalidade prevista.

---

# Escopo

Durante esta etapa serão realizadas apenas atividades relacionadas à configuração do Prettier.

Serão abordados:

- instalação do Prettier;
- integração com o projeto React;
- configuração inicial;
- criação dos arquivos de configuração;
- integração com o ESLint;
- validação da instalação;
- boas práticas de utilização.

---

# Prettier

O Prettier é uma ferramenta de formatação automática de código.

Seu objetivo é manter todos os arquivos do projeto seguindo um único padrão visual.

Ao invés do desenvolvedor ajustar manualmente cada detalhe da formatação, o Prettier reorganiza automaticamente o código conforme regras previamente definidas.

Essa padronização torna a leitura mais simples, reduz diferenças entre desenvolvedores e evita discussões relacionadas apenas ao estilo do código.

O Prettier não altera a lógica da aplicação.

Ele modifica apenas a forma como o código é apresentado.

---

# Como o Prettier funciona

Sempre que um arquivo é processado pelo Prettier, a ferramenta analisa sua estrutura e aplica automaticamente as regras definidas para formatação.

Entre essas regras podem estar:

- indentação;
- utilização de aspas simples ou duplas;
- largura máxima das linhas;
- ponto e vírgula;
- espaçamento;
- quebra automática de linhas.

Ao final do processo, o arquivo permanece com exatamente o mesmo comportamento, porém seguindo um padrão consistente de escrita.

---

# Como o Prettier trabalha junto com o ESLint

Embora ambos analisem arquivos do projeto, suas responsabilidades são diferentes.

O ESLint verifica problemas relacionados à qualidade do código.

O Prettier é responsável exclusivamente pela formatação.

Neste projeto, ambas as ferramentas serão utilizadas de forma complementar.

O ESLint continuará identificando possíveis problemas no código.

O Prettier garantirá que todos os arquivos mantenham exatamente o mesmo padrão de formatação.

Essa separação de responsabilidades reduz conflitos entre ferramentas e melhora a organização do ambiente de desenvolvimento.

---

# Prettier será utilizado neste projeto

A utilização do Prettier foi definida considerando os seguintes fatores:

- padronização automática do código;
- excelente integração com React;
- excelente integração com Vite;
- excelente integração com ESLint;
- redução de conflitos em commits;
- melhoria da legibilidade;
- facilidade de manutenção;

---

# Decisões

Para este projeto será utilizada apenas a configuração oficial do Prettier.

Não serão utilizadas extensões, plugins ou configurações experimentais que possam comprometer a estabilidade do ambiente.

O Prettier permanecerá responsável exclusivamente pela formatação automática dos arquivos.

A análise de qualidade continuará sendo responsabilidade do ESLint.

Essa separação mantém cada ferramenta atuando exatamente em sua finalidade.

---

# Pré-requisitos

Antes de iniciar esta etapa, os seguintes Guides deverão estar concluídos.

- Guide 10 — Preparação do Ambiente;
- Guide 11 — Configuração do Git e GitHub;
- Guide 12 — Configuração do Projeto React + Vite;
- Guide 13 — Tailwind CSS;
- Guide 14 — ESLint.

Também será necessário que:

- o projeto execute corretamente através do comando `npm run dev`;
- o ESLint esteja configurado corretamente;
- todas as dependências estejam instaladas.

---

# Passo a Passo

Será realizada a instalação do Prettier e sua integração ao projeto React criado com Vite.

Ao final deste processo, o projeto estará preparado para formatar automaticamente todos os arquivos de código-fonte utilizando um padrão único de formatação.

---

# Etapa 1 — Acessar a pasta do projeto

Antes de instalar qualquer dependência, é necessário acessar a pasta raiz do projeto.

## Comando

```bash
cd desafio-tecnico-berna
```

## Onde executar

Executar no **Git Bash**.

O comando deverá ser executado no diretório onde o projeto foi criado ou clonado.

Exemplo:

```text
C:\Users\seu-usuario\Documentos\
```

Após acessar a pasta, o terminal deverá indicar:

```text
desafio-tecnico-berna/
```

Todos os próximos comandos deverão ser executados dentro da raiz do projeto.

Caso contrário, as dependências poderão ser instaladas no diretório incorreto.

Altera o diretório atual do terminal para a pasta raiz do projeto.

## Resultado

O terminal deverá indicar que o diretório atual corresponde ao projeto.

Exemplo:

```bash
@DESKTOP MINGW64 ~/Documentos/desafio-tecnico-berna
```

## Como validar

Execute:

```bash
pwd
```

O resultado deverá terminar com:

```text
desafio-tecnico-berna
```

---

# Etapa 2 — Instalar o Prettier

Após acessar a pasta do projeto, será realizada a instalação do Prettier como dependência de desenvolvimento.

## Comando

```bash
npm install -D prettier
```

## Onde executar

Executar no **Git Bash**, dentro da pasta raiz do projeto.

```text
desafio-tecnico-berna/
```

O Prettier será utilizado durante todo o desenvolvimento para manter um padrão único de formatação dos arquivos.

Por ser utilizado apenas durante o desenvolvimento, ele será instalado como dependência de desenvolvimento (`devDependency`).

O npm realizará:

- download do Prettier;
- registro da dependência no projeto;
- atualização dos arquivos de configuração do npm.

Após a instalação:

- `package.json` será atualizado;
- `package-lock.json` será atualizado;
- os arquivos necessários serão armazenados em `node_modules`.

## Resultado

Ao final da instalação, o terminal deverá informar que o pacote foi instalado com sucesso.

## Como validar

Abra o arquivo:

```text
package.json
```

Na seção `devDependencies` deverá existir uma entrada semelhante a:

```json
"prettier": "..."
```

---

# Arquivo package.json

## Onde fica

```text
desafio-tecnico-berna/
package.json
```

Este arquivo registra todas as dependências utilizadas pelo projeto.

Após esta etapa, ele também registrará o Prettier.

Não é necessário editar esse arquivo manualmente para instalar a ferramenta.

---

# Arquivo package-lock.json

## Onde fica

```text
desafio-tecnico-berna/
package-lock.json
```

Registra exatamente quais versões das dependências foram instaladas.

Seu objetivo é garantir que qualquer pessoa obtenha exatamente o mesmo ambiente ao executar:

```bash
npm install
```

Esse arquivo não deve ser editado manualmente.

---

# Pasta node_modules

## Onde fica

```text
desafio-tecnico-berna/
node_modules/
```

Armazena todas as bibliotecas utilizadas pelo projeto.

Após esta etapa, também conterá os arquivos internos do Prettier.

Essa pasta é criada automaticamente pelo npm.

Ela não deve ser enviada ao GitHub.

---

# Estrutura

Após esta etapa, a estrutura principal permanecerá semelhante à seguinte:

```text
desafio-tecnico-berna/
│
├── node_modules/
├── public/
├── src/
├── package.json
├── package-lock.json
├── vite.config.js
└── ...
```

O Prettier estará instalado, porém ainda não estará configurado.

A configuração será realizada na próxima etapa.

---

# Etapa 3 — Criar o Arquivo de Configuração do Prettier

Após instalar o Prettier, será necessário criar um arquivo de configuração para definir o padrão oficial de formatação que será utilizado durante todo o desenvolvimento do projeto.

Essa configuração garantirá que todos os arquivos sejam formatados de maneira consistente, independentemente do ambiente utilizado pelo desenvolvedor.

---

## Arquivo

```text
desafio-tecnico-berna/
.prettierrc
```

Caso o arquivo ainda não exista, ele deverá ser criado na raiz do projeto.

---

## O que será criado

Será criado um arquivo chamado:

```text
.prettierrc
```

Esse arquivo armazenará as configurações oficiais de formatação adotadas neste projeto.

---

## Código

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf"
}
```

---

## Explicando cada configuração

### `"semi": true`

Adiciona automaticamente ponto e vírgula ao final das instruções.

Essa configuração melhora a consistência do código e evita ambiguidades causadas pela inserção automática de ponto e vírgula do JavaScript.

---

### `"singleQuote": true`

Utiliza aspas simples como padrão para strings.

Exemplo:

```javascript
const nome = 'Lucas';
```

---

### `"tabWidth": 2`

Define que cada nível de indentação utilizará dois espaços.

Esse é um padrão amplamente utilizado em projetos React.

---

### `"useTabs": false`

Define que a indentação utilizará espaços em vez de caracteres TAB.

Isso evita diferenças de visualização entre diferentes editores.

---

### `"trailingComma": "es5"`

Adiciona vírgulas finais sempre que permitido pelo padrão ECMAScript 5.

Essa prática reduz conflitos durante alterações em listas e objetos.

---

### `"printWidth": 100`

Define que o Prettier tentará manter cada linha com aproximadamente 100 caracteres.

Quando necessário, ele realizará automaticamente a quebra das linhas.

---

### `"arrowParens": "always"`

Sempre utilizará parênteses em funções arrow.

Exemplo:

```javascript
const soma = (a) => a + 1;
```

Essa configuração aumenta a consistência do código.

---

### `"bracketSpacing": true`

Mantém espaços internos em objetos JavaScript.

Exemplo:

```javascript
const usuario = { nome: 'Lucas' };
```

---

### `"endOfLine": "lf"`

Define que todos os arquivos utilizarão o padrão LF para quebra de linha.

Essa configuração evita conflitos entre Windows, Linux e macOS durante o versionamento com Git.

---

## Resultado

Após salvar o arquivo, o Prettier passará a utilizar essas configurações sempre que formatar um arquivo do projeto.

Todos utilizarão exatamente o mesmo padrão de formatação.

---

## Como validar

Confirme que:

- o arquivo `.prettierrc` foi criado;
- ele está localizado na raiz do projeto;
- todas as configurações foram copiadas corretamente;
- não existem erros de sintaxe no arquivo JSON.

---

# Etapa 4 — Criar o Arquivo .prettierignore

Assim como o Git possui um arquivo `.gitignore`, o Prettier também permite definir arquivos e diretórios que não deverão ser formatados.

Essa prática evita processamento desnecessário e impede alterações em arquivos gerados automaticamente.

---

## Arquivo

```text
desafio-tecnico-berna/
.prettierignore
```

---

## O que será criado

Será criado um arquivo chamado:

```text
.prettierignore
```

Esse arquivo informará ao Prettier quais diretórios deverão ser ignorados durante a formatação.

---

## Código

```text
node_modules
dist
```

---

## Explicando cada entrada

### node_modules

Contém todas as bibliotecas instaladas pelo npm.

Esses arquivos são gerados automaticamente e nunca devem ser formatados manualmente.

---

### dist

Contém a versão compilada da aplicação.

Seu conteúdo é recriado automaticamente sempre que o projeto é gerado para produção.

---

## Resultado

O Prettier ignorará automaticamente esses diretórios durante sua execução.

Isso reduz o tempo de processamento e evita modificações desnecessárias.

---

## Como validar

Confirme que:

- o arquivo `.prettierignore` existe;
- ele está localizado na raiz do projeto;
- todas as entradas foram adicionadas corretamente.

---

# Etapa 5 — Integrar o Prettier ao ESLint

Após configurar o Prettier, será realizada sua integração com o ESLint.

Essa integração garante que cada ferramenta mantenha sua responsabilidade durante o desenvolvimento.

O ESLint continuará responsável pela análise da qualidade do código.

O Prettier continuará responsável exclusivamente pela formatação automática.

Essa separação evita conflitos entre as ferramentas e mantém o ambiente mais organizado.

---

## Por que realizar essa integração

Embora ambas trabalhem sobre os mesmos arquivos, suas finalidades são diferentes.

O ESLint identifica problemas relacionados à qualidade do código.

O Prettier padroniza apenas sua formatação.

Quando corretamente integradas, ambas trabalham de forma complementar.

---

## Instalar as dependências de integração

Para que o ESLint e o Prettier trabalhem de forma complementar, será realizada a instalação das dependências responsáveis por essa integração.

Essas dependências evitam conflitos entre regras de formatação e permitem que cada ferramenta permaneça responsável por sua finalidade.

---

## Comando

```bash
npm install -D eslint-config-prettier
```

---

## Onde executar

Executar no **Git Bash**, dentro da pasta raiz do projeto.

```text
desafio-tecnico-berna/
```

---

## O que será realizado

Durante a instalação, o npm irá:

- realizar o download da dependência;
- registrar a dependência em `package.json`;
- atualizar o arquivo `package-lock.json`;
- disponibilizar a integração para utilização pelo ESLint.

---

## Resultado

Ao final da instalação, o terminal deverá informar que a dependência foi instalada com sucesso.

---

## Como validar

Abra o arquivo:

```text
package.json
```

Na seção `devDependencies` deverá existir uma entrada semelhante a:

```json
"eslint-config-prettier": "..."
```

---

## Configurar a integração no ESLint

Após instalar a dependência, será necessário atualizar o arquivo de configuração do ESLint para que as regras de formatação sejam tratadas pelo Prettier.

Essa configuração evita conflitos entre as duas ferramentas e mantém cada uma responsável por sua finalidade.

---

## Arquivo

```text
desafio-tecnico-berna/
eslint.config.js
```

---

## O que será realizado

Será adicionada a configuração do `eslint-config-prettier` ao arquivo `eslint.config.js`.

Essa configuração desativa regras de formatação do ESLint que possam entrar em conflito com o Prettier.

Após salvar o arquivo, o ESLint continuará realizando a análise da qualidade do código e o Prettier permanecerá responsável exclusivamente pela formatação automática dos arquivos.

---

## Como validar

Execute:

```bash
npm run lint
```

O comando deverá finalizar sem apresentar erros relacionados à configuração da integração entre ESLint e Prettier.

---

## Resultado

Após concluir esta etapa:

- o ESLint continuará realizando a análise estática do código;
- o Prettier continuará realizando apenas a formatação;
- cada ferramenta atuará dentro de sua responsabilidade.

---

## Como validar

Confirme que:

- o ESLint continua funcionando normalmente;
- o Prettier formata os arquivos sem apresentar conflitos;
- nenhuma mensagem de erro relacionada à integração é apresentada.

---

# Estrutura

Após concluir esta etapa, a estrutura principal do projeto será semelhante à seguinte:

```text
desafio-tecnico-berna/
│
├── node_modules/
├── public/
├── src/
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── package-lock.json
├── vite.config.js
└── ...
```

---

# Como Validar

Para confirmar que a configuração foi realizada corretamente:

1. execute:

```bash
npm run dev
```

2. abra qualquer arquivo do projeto;

3. realize pequenas alterações de espaçamento ou indentação;

4. execute a formatação utilizando o Prettier;

5. confirme que o arquivo foi formatado automaticamente;

6. execute:

```bash
npm run lint
```

O comando deverá finalizar sem apresentar erros relacionados à configuração do Prettier.

---

# Corrigir Problemas

Caso ocorram problemas durante esta etapa, verifique:

- se o Prettier foi instalado corretamente;
- se o arquivo `.prettierrc` está na raiz do projeto;
- se o arquivo `.prettierignore` existe;
- se não existem erros de sintaxe no arquivo de configuração;
- se todas as dependências foram instaladas corretamente;
- se o projeto foi reiniciado após a instalação.

Persistindo o problema, execute:

```bash
npm install
```

Em seguida:

```bash
npm run dev
```

E novamente:

```bash
npm run lint
```

---

# Boas Práticas

Durante a utilização do Prettier neste projeto serão adotadas as seguintes práticas:

- manter um único padrão de formatação;
- não formatar arquivos manualmente quando o Prettier puder realizar essa tarefa;
- manter o arquivo `.prettierrc` simples;
- revisar alterações antes de realizar commits;
- manter o Prettier atualizado;
- utilizar sempre a configuração oficial adotada pelo projeto.

---

# Segurança

Durante esta etapa deverão ser observados os seguintes cuidados:

- instalar dependências apenas pelas fontes oficiais;
- evitar plugins de origem desconhecida;
- não alterar arquivos da pasta `node_modules`;
- revisar alterações antes de enviá-las ao repositório;
- manter as dependências atualizadas.

---

# Erros Comuns

Evitar:

- editar manualmente arquivos gerados automaticamente;
- remover o arquivo `.prettierrc`;
- esquecer de criar o `.prettierignore`;
- utilizar configurações incompatíveis;
- modificar padrões de formatação sem necessidade;
- ignorar mensagens apresentadas pelo terminal.

---

# Critérios

Esta etapa será considerada concluída quando:

- o Prettier estiver instalado;
- o arquivo `.prettierrc` estiver configurado;
- o arquivo `.prettierignore` estiver criado;
- a formatação automática estiver funcionando corretamente;
- o ESLint continuar funcionando normalmente;
- o ambiente estiver preparado para a próxima etapa.

---

# Checklist

- [x] Prettier instalado
- [x] Arquivo `.prettierrc` criado
- [x] Arquivo `.prettierignore` criado
- [x] Configuração validada
- [x] Formatação automática funcionando
- [x] Integração com ESLint validada
- [x] Ambiente preparado para a próxima etapa

---

# Referências

### Ferramentas de Formatação

- Prettier → [Site Oficial](https://prettier.io/) | [Documentação](https://prettier.io/docs/)
- eslint-config-prettier → [Documentação](https://github.com/prettier/eslint-config-prettier)

---

### Ferramentas de Qualidade de Código

- ESLint → [Site Oficial](https://eslint.org/) | [Documentação](https://eslint.org/docs/latest)

---

### Front-end

- React → [Site Oficial](https://react.dev/) | [Documentação](https://react.dev/learn)
- Vite → [Site Oficial](https://vite.dev/) | [Documentação](https://vite.dev/guide/)

---

### Gerenciador de Pacotes

- npm → [Site Oficial](https://www.npmjs.com/) | [Documentação](https://docs.npmjs.com/)

---

### Ferramentas de Desenvolvimento

- Git Bash → [Download](https://git-scm.com/downloads) | [Documentação](https://git-scm.com/doc)

---
