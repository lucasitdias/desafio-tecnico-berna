# Tailwind CSS

## Índice

- [Tailwind CSS](#tailwind-css)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Escopo](#escopo)
- [Tailwind CSS como funciona](#tailwind-css-como-funciona)
- [Significado de Utility-First](#significado-de-utility-first)
- [Tailwind CSS](#tailwind-css-1)
- [CSS](#css)
- [Vite conversa com o Tailwind CSS](#vite-conversa-com-o-tailwind-css)
- [O React utiliza as classes do Tailwind](#o-react-utiliza-as-classes-do-tailwind)
- [Tailwind CSS será utilizado neste projeto](#tailwind-css-será-utilizado-neste-projeto)
- [Decisões](#decisões)
- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
- [Etapa 1 — Acessar a pasta do projeto](#etapa-1--acessar-a-pasta-do-projeto)
  - [Comando](#comando)
  - [Onde executar](#onde-executar)
  - [O que este comando faz](#o-que-este-comando-faz)
  - [Resultado](#resultado)
  - [Como validar](#como-validar)
- [Etapa 2 — Instalar o Tailwind CSS](#etapa-2--instalar-o-tailwind-css)
  - [Comando](#comando-1)
  - [Onde executar](#onde-executar-1)
  - [Por que executar](#por-que-executar)
  - [O que este comando faz](#o-que-este-comando-faz-1)
  - [Resultado](#resultado-1)
  - [Como validar](#como-validar-1)
- [Arquivo package.json](#arquivo-packagejson)
  - [Onde fica](#onde-fica)
  - [Quando foi criado](#quando-foi-criado)
  - [Para que serve](#para-que-serve)
- [Arquivo package-lock.json](#arquivo-package-lockjson)
  - [Onde fica](#onde-fica-1)
  - [Quando foi criado](#quando-foi-criado-1)
  - [Para que serve](#para-que-serve-1)
- [Pasta node\_modules](#pasta-node_modules)
  - [Onde fica](#onde-fica-2)
  - [Para que serve](#para-que-serve-2)
- [Estrutura](#estrutura)
- [Etapa 3 — Configurar o Plugin do Tailwind CSS no Vite](#etapa-3--configurar-o-plugin-do-tailwind-css-no-vite)
  - [Arquivo](#arquivo)
  - [O que será alterado](#o-que-será-alterado)
  - [Código](#código)
  - [Explicando cada linha](#explicando-cada-linha)
    - [import { defineConfig } from 'vite'](#import--defineconfig--from-vite)
    - [import react from '@vitejs/plugin-react'](#import-react-from-vitejsplugin-react)
    - [import tailwindcss from '@tailwindcss/vite'](#import-tailwindcss-from-tailwindcssvite)
    - [plugins](#plugins)
  - [Resultado](#resultado-2)
  - [Como validar](#como-validar-2)
- [Etapa 4 — Importar o Tailwind CSS na Aplicação](#etapa-4--importar-o-tailwind-css-na-aplicação)
  - [Arquivo](#arquivo-1)
  - [O que será alterado](#o-que-será-alterado-1)
  - [Código](#código-1)
  - [O que esse código faz](#o-que-esse-código-faz)
  - [Resultado](#resultado-3)
  - [Como validar](#como-validar-3)
- [Estrutura](#estrutura-1)
- [Como Validar](#como-validar-4)
- [Corrigir Problemas](#corrigir-problemas)
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

---

# Objetivo

Este documento tem como objetivo apresentar o Tailwind CSS, explicar como ele será utilizado neste projeto e orientar sua instalação e configuração de forma organizada, segura e compatível com toda a stack definida durante o planejamento.

Ao final desta etapa, o projeto estará preparado para utilizar o Tailwind CSS como principal ferramenta de estilização da interface da aplicação.

Embora o Tailwind CSS seja utilizado diretamente pela aplicação, nesta etapa serão realizadas apenas sua instalação e configuração inicial.

Além disso, essa tecnologia oferece uma forma moderna de construir interfaces reutilizando classes utilitárias já prontas, reduzindo significativamente a quantidade de CSS escrito manualmente.

A adoção do Tailwind CSS também favorece:

- maior produtividade;
- padronização visual;
- menor quantidade de arquivos CSS;
- facilidade de manutenção;
- menor probabilidade de conflitos entre estilos.

---

# Referência

O desafio informa:

> **"Estilização: Recomendamos o uso de Tailwind CSS para agilidade e padronização."**

Por esse motivo, este projeto adotará o Tailwind CSS como tecnologia para construção da interface.

É importante destacar que esta decisão não altera o escopo funcional do desafio.

O Tailwind CSS será utilizado apenas como ferramenta de estilização da interface.

---

# Escopo

Durante esta etapa serão realizadas apenas atividades relacionadas à configuração do Tailwind CSS.

Serão abordados:

- instalação do Tailwind CSS;
- integração com React;
- integração com Vite;
- configuração inicial;
- estrutura dos arquivos envolvidos;
- validação da instalação;
- boas práticas de utilização.

---

# Tailwind CSS como funciona

Tailwind CSS é um framework de CSS baseado no conceito de **Utility-First**.

Ao invés de criar dezenas de classes personalizadas dentro de arquivos CSS, o desenvolvedor utiliza pequenas classes utilitárias diretamente nos elementos HTML ou JSX.

Por exemplo, em vez de criar uma classe chamada:

```css
.botao-primario {
  background: blue;
  color: white;
  padding: 16px;
}
```

No Tailwind CSS o mesmo resultado pode ser obtido utilizando classes utilitárias:

```html
<button class="bg-blue-600 text-white p-4"></button>
```

Cada classe possui uma única responsabilidade.

Alguns exemplos:

| Classe        | Responsabilidade    |
| ------------- | ------------------- |
| `flex`        | Define Flexbox      |
| `grid`        | Define Grid Layout  |
| `text-white`  | Cor do texto        |
| `bg-blue-600` | Cor de fundo        |
| `rounded-lg`  | Bordas arredondadas |
| `shadow-md`   | Sombra              |
| `font-bold`   | Texto em negrito    |
| `p-4`         | Espaçamento interno |
| `m-4`         | Espaçamento externo |
| `w-full`      | Largura total       |

Essas pequenas classes podem ser combinadas para construir interfaces completas.

---

# Significado de Utility-First

Utility-First significa utilizar pequenas classes reutilizáveis para montar a aparência dos componentes.

Cada classe resolve apenas um único aspecto visual.

Por exemplo:

```html
<div class="bg-white p-6 rounded-xl shadow-lg"></div>
```

Nesse exemplo:

| Classe       | Função              |
| ------------ | ------------------- |
| `bg-white`   | Fundo branco        |
| `p-6`        | Espaçamento interno |
| `rounded-xl` | Bordas arredondadas |
| `shadow-lg`  | Sombra              |

Cada classe possui apenas uma responsabilidade.

Essa abordagem segue um princípio semelhante ao utilizado em Clean Code:

> pequenas responsabilidades tornam o código mais simples de entender e manter.

---

# Tailwind CSS

Embora o desenvolvedor escreva dezenas de pequenas classes dentro do HTML ou JSX, essas classes não existem prontas dentro do navegador.

Durante o processo de desenvolvimento, o Tailwind analisa todos os arquivos do projeto.

Ele identifica quais classes realmente foram utilizadas.

Em seguida, gera automaticamente um arquivo CSS contendo apenas os estilos necessários para aquela aplicação.

Esse processo reduz significativamente o tamanho do CSS final.

Em outras palavras:

O Tailwind não entrega milhares de classes para o navegador.

Ele gera somente aquilo que realmente está sendo utilizado no projeto.

Essa estratégia melhora:

- desempenho;
- carregamento da página;
- organização;
- manutenção.

---

# CSS

Durante o desenvolvimento, acontece o seguinte fluxo:

```text
React (JSX)
        │
        ▼
Classes Tailwind
        │
        ▼
Tailwind CSS analisa os arquivos
        │
        ▼
Gera o CSS necessário
        │
        ▼
Vite empacota a aplicação
        │
        ▼
Navegador recebe apenas o CSS utilizado
```

Esse processo acontece automaticamente.

O desenvolvedor não precisa escrever manualmente os estilos gerados pelo Tailwind.

---

# Vite conversa com o Tailwind CSS

No Guide 12 foi realizada a criação do projeto utilizando React e Vite.

O Vite será responsável por executar o ambiente de desenvolvimento e construir a aplicação.

Após a instalação do Tailwind CSS, o Vite continuará sendo responsável por iniciar o projeto.

Entretanto, durante esse processo, ele também executará a etapa de processamento do Tailwind.

Sempre que um arquivo JSX for alterado:

1. o Vite detecta a alteração;
2. o Tailwind identifica as classes utilizadas;
3. os estilos são atualizados automaticamente;
4. o navegador recarrega apenas o necessário.

Esse processo torna o desenvolvimento muito rápido.

Na prática, basta salvar o arquivo para visualizar imediatamente as alterações na interface.

---

# O React utiliza as classes do Tailwind

No React, os componentes são escritos utilizando JSX.

Como `class` é uma palavra reservada da linguagem JavaScript, utiliza-se o atributo:

```jsx
className;
```

Exemplo:

```jsx
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Entrar</button>
```

Cada classe será interpretada pelo Tailwind CSS durante o processo de compilação.

O resultado será uma interface totalmente estilizada sem que seja necessário escrever arquivos CSS específicos para cada componente.

Essa abordagem reduz significativamente a quantidade de código CSS mantido pelo projeto.

---

# Tailwind CSS será utilizado neste projeto

A utilização do Tailwind CSS foi definida considerando dois fatores.

O próprio desafio, recomenda sua utilização.

O segundo é a padronização da infraestrutura definida.

Entre os principais benefícios estão:

- rapidez na construção das telas;
- menor quantidade de CSS manual;
- padronização visual;
- facilidade de manutenção;
- excelente integração com React;
- excelente integração com Vite;

---

# Decisões

O uso do Tailwind CSS, neste projeto adotará oficialmente essa tecnologia como solução de estilização da interface.

Esta decisão foi tomada considerando:

- recomendação explícita presente no desafio técnico;
- integração oficial com React;
- integração oficial com Vite;
- facilidade de manutenção;
- redução da quantidade de CSS manual;
- padronização visual da aplicação;

Para manter toda a stack consistente durante o desenvolvimento, será utilizada a integração oficial do Tailwind CSS com o Vite.

Não serão utilizadas configurações legadas ou depreciadas em um projeto iniciado do zero.

---

# Pré-requisitos

Antes de iniciar esta etapa, os seguintes Guides deverão estar concluídos.

- Guide 10 — Preparação do Ambiente;
- Guide 11 — Configuração do Git e GitHub;
- Guide 12 — Configuração do Projeto React + Vite.

Também será necessário que:

- o projeto React tenha sido criado com Vite;
- todas as dependências do projeto estejam instaladas;
- o projeto execute corretamente através do comando `npm run dev`.

---

# Passo a Passo

Nesta etapa será realizada a instalação do Tailwind CSS e sua integração ao projeto React criado com Vite.

Ao final deste processo será possível utilizar classes utilitárias do Tailwind em qualquer componente React da aplicação.

---

# Etapa 1 — Acessar a pasta do projeto

Antes de instalar qualquer dependência, é necessário acessar a pasta raiz do projeto.

## Comando

```bash
cd desafio-tecnico-berna
```

## Onde executar

Executar no **Git Bash**.

Este comando deverá ser executado dentro do diretório onde o projeto foi clonado ou criado.

Exemplo:

```text
C:\Users\seu-usuario\Documentos\
```

Após entrar na pasta do projeto, o terminal deverá estar apontando para:

```text
desafio-tecnico-berna/
```

Todos os próximos comandos deverão ser executados dentro da raiz do projeto.

Caso sejam executados em outro diretório, as dependências serão instaladas no local incorreto.

## O que este comando faz

Altera o diretório atual do terminal para a pasta raiz do projeto.

## Resultado

O prompt do Git Bash deverá indicar que o diretório atual corresponde ao projeto.

Exemplo:

```bash
@DESKTOP MINGW64 ~/Documentos/desafio-tecnico-berna
```

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

# Etapa 2 — Instalar o Tailwind CSS

Com o projeto aberto, será realizada a instalação da dependência principal do Tailwind CSS juntamente com o plugin oficial para integração com o Vite. :contentReference[oaicite:1]{index=1}

## Comando

```bash
npm install -D tailwindcss @tailwindcss/vite
```

## Onde executar

Executar no **Git Bash**, dentro da pasta raiz do projeto.

```text
desafio-tecnico-berna/
```

## Por que executar

Este comando adiciona ao projeto, como dependências de desenvolvimento:

- Tailwind CSS;
- plugin oficial de integração com Vite.

Essas dependências permitirão que o Vite processe automaticamente as classes utilitárias utilizadas na aplicação.

## O que este comando faz

O npm realiza o download das dependências necessárias e registra essas informações no projeto.

Após a instalação:

- as dependências serão armazenadas na pasta `node_modules`;
- o arquivo `package.json` será atualizado;
- o arquivo `package-lock.json` será atualizado para registrar exatamente as versões instaladas.

## Resultado

Ao final da instalação, o npm deverá informar que os pacotes foram adicionados com sucesso.

## Como validar

Abra o arquivo:

```text
package.json
```

Na seção `devDependencies` deverão existir entradas correspondentes ao Tailwind CSS e ao plugin oficial do Vite.

---

# Arquivo package.json

## Onde fica

```text
desafio-tecnico-berna/
package.json
```

## Quando foi criado

Este arquivo foi criado durante o Guide 12, quando o projeto React foi inicializado utilizando o Vite.

## Para que serve

O `package.json` é o principal arquivo de configuração de um projeto Node.js.

Ele registra:

- nome do projeto;
- scripts disponíveis;
- dependências;
- informações da aplicação.

Sempre que uma nova biblioteca é instalada utilizando o npm, este arquivo é atualizado automaticamente.

Nesta etapa ele passará a registrar também as dependências relacionadas ao Tailwind CSS.

---

# Arquivo package-lock.json

## Onde fica

```text
desafio-tecnico-berna/
package-lock.json
```

## Quando foi criado

Durante a instalação inicial das dependências do projeto no Guide 12.

## Para que serve

Esse arquivo registra exatamente quais versões das dependências foram instaladas.

Seu objetivo é garantir que o projeto seja reproduzido da mesma forma em qualquer computador.

Ele não deve ser editado manualmente.

Sempre que novas dependências forem instaladas, ele será atualizado automaticamente.

---

# Pasta node_modules

## Onde fica

```text
desafio-tecnico-berna/
node_modules/
```

## Para que serve

Essa pasta armazena todas as bibliotecas utilizadas pelo projeto.

Entre elas:

- React;
- Vite;
- Tailwind CSS;
- demais dependências instaladas ao longo do desenvolvimento.

Essa pasta é criada automaticamente pelo npm.

Ela não deve ser modificada manualmente.

Também não deve ser enviada para o GitHub, pois poderá ser recriada posteriormente utilizando o comando `npm install`.

---

# Estrutura

Após esta etapa, a estrutura principal do projeto permanecerá semelhante à seguinte:

```text
desafio-tecnico-berna/
│
├── node_modules/
├── src/
├── public/
├── package.json
├── package-lock.json
├── vite.config.js
└── ...
```

---

# Etapa 3 — Configurar o Plugin do Tailwind CSS no Vite

Após instalar as dependências, será necessário informar ao Vite que ele deverá utilizar o plugin oficial do Tailwind CSS durante o desenvolvimento e na geração da aplicação para produção.

Sem essa configuração, o Vite não processará as classes utilitárias utilizadas nos componentes React.

---

## Arquivo

```text
desafio-tecnico-berna/
vite.config.js
```

Este arquivo foi criado automaticamente durante o Guide 12.

Ele é responsável por definir as configurações utilizadas pelo Vite durante a execução e a geração da aplicação.

---

## O que será alterado

Será adicionada a importação do plugin oficial do Tailwind CSS.

Também será registrada sua utilização na configuração do Vite.

---

## Código

O arquivo deverá ficar semelhante ao seguinte:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

## Explicando cada linha

### import { defineConfig } from 'vite'

Importa a função responsável por organizar a configuração do Vite.

---

### import react from '@vitejs/plugin-react'

Carrega o plugin oficial responsável por adicionar suporte ao React.

---

### import tailwindcss from '@tailwindcss/vite'

Importa o plugin oficial responsável por integrar o Tailwind CSS ao Vite.

É esse plugin que permitirá ao Vite identificar e processar automaticamente as classes utilitárias utilizadas na aplicação.

---

### plugins

A propriedade `plugins` informa ao Vite quais funcionalidades adicionais deverão ser utilizadas durante o desenvolvimento e durante a geração da versão de produção.

Neste projeto serão utilizados apenas:

- Plugin React;
- Plugin Tailwind CSS.

---

## Resultado

Após salvar o arquivo, o Vite estará preparado para processar automaticamente todas as classes do Tailwind CSS utilizadas na aplicação.

Ainda será necessário realizar mais uma configuração antes de utilizar essas classes.

---

## Como validar

Verifique se:

- não existem erros de sintaxe no arquivo;
- todas as importações foram realizadas corretamente;
- o plugin `tailwindcss()` está presente na lista de plugins.

---

---

# Etapa 4 — Importar o Tailwind CSS na Aplicação

Após configurar o plugin do Tailwind CSS no Vite, será necessário importar o Tailwind na folha de estilos principal da aplicação.

Essa importação permitirá que todas as classes utilitárias estejam disponíveis para utilização nos componentes React.

---

## Arquivo

```text
desafio-tecnico-berna/
src/
└── index.css
```

Este arquivo foi criado automaticamente durante a criação do projeto React com Vite.

Ele será utilizado como ponto de entrada para os estilos globais da aplicação.

---

## O que será alterado

O conteúdo do arquivo deverá ser substituído pela importação do Tailwind CSS.

---

## Código

```css
@import 'tailwindcss';
```

---

## O que esse código faz

A diretiva acima informa ao Vite que os estilos do Tailwind CSS deverão ser incorporados à aplicação.

A partir desse momento, todas as classes utilitárias do Tailwind poderão ser utilizadas nos componentes React.

---

## Resultado

Após salvar o arquivo, o projeto estará preparado para utilizar classes do Tailwind CSS.

Nenhum outro arquivo de configuração será necessário para essa integração.

---

## Como validar

Abra o arquivo `src/index.css` e confirme que ele contém apenas:

```css
@import 'tailwindcss';
```

---

# Estrutura

Após concluir esta etapa, a estrutura principal do projeto será semelhante à seguinte:

```text
desafio-tecnico-berna/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── ...
```

O projeto estará preparado para utilizar classes utilitárias do Tailwind CSS em qualquer componente React.

---

# Como Validar

Para confirmar que a configuração foi realizada corretamente:

1. execute o projeto utilizando:

```bash
npm run dev
```

2. aguarde a inicialização do servidor do Vite;

3. abra a aplicação no navegador;

4. altere temporariamente o conteúdo de um componente React utilizando algumas classes do Tailwind, por exemplo:

```jsx
<h1 className="text-3xl font-bold text-blue-600">Teste Tailwind CSS</h1>
```

5. salve o arquivo.

Se o texto for exibido com os estilos definidos pelas classes utilitárias, a configuração foi concluída com sucesso.

---

# Corrigir Problemas

Caso o Tailwind CSS não funcione corretamente, verifique os seguintes pontos:

- o comando de instalação foi executado com sucesso;
- o arquivo `vite.config.js` contém a importação do plugin oficial;
- o plugin `tailwindcss()` está registrado na configuração do Vite;
- o arquivo `src/index.css` contém a diretiva `@import "tailwindcss";`;
- o projeto foi iniciado novamente após as alterações;
- não existem erros apresentados pelo terminal.

Persistindo o problema, execute novamente:

```bash
npm install
```

e reinicie o servidor utilizando:

```bash
npm run dev
```

---

# Boas Práticas

Durante a utilização do Tailwind CSS neste projeto serão adotadas as seguintes práticas:

- utilizar classes utilitárias sempre que possível;
- manter os componentes organizados;
- evitar estilos duplicados;
- reutilizar componentes para reduzir repetição de código;
- seguir a documentação oficial quando houver dúvidas.

---

# Segurança

Durante esta etapa deverão ser observados os seguintes cuidados:

- instalar dependências apenas pelas fontes oficiais;
- evitar alterar arquivos da pasta `node_modules`;
- não modificar arquivos gerados automaticamente sem necessidade;
- revisar alterações antes de enviá-las ao repositório.

---

# Erros Comuns

Evitar:

- instalar versões incompatíveis do Tailwind CSS;
- editar manualmente arquivos da pasta `node_modules`;
- esquecer de importar o Tailwind CSS no arquivo `src/index.css`;
- iniciar o desenvolvimento sem validar a configuração;
- alterar a configuração do Vite sem compreender seu funcionamento.

---

# Critérios

Esta etapa será considerada concluída quando:

- o Tailwind CSS estiver instalado;
- o plugin oficial estiver configurado no Vite;
- o Tailwind estiver importado na aplicação;
- o projeto executar normalmente;
- as classes utilitárias funcionarem corretamente.

---

# Checklist

- [x] Tailwind CSS instalado
- [x] Plugin oficial configurado
- [x] Arquivo `vite.config.js` atualizado
- [x] Arquivo `src/index.css` configurado
- [x] Projeto iniciado com sucesso
- [x] Classes utilitárias funcionando
- [x] Configuração validada

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
