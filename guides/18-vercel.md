# Vercel

## Índice

- [Vercel](#vercel)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Escopo](#escopo)
- [O que é a Vercel](#o-que-é-a-vercel)
- [Como a Vercel funciona](#como-a-vercel-funciona)
- [Decisões](#decisões)
- [Pré-requisitos](#pré-requisitos)
- [Passo a Passo](#passo-a-passo)
- [Etapa 1 — Criar uma Conta na Vercel](#etapa-1--criar-uma-conta-na-vercel)
  - [Onde acessar](#onde-acessar)
  - [Criar uma conta](#criar-uma-conta)
  - [Como criar](#como-criar)
  - [Durante o login](#durante-o-login)
  - [Resultado](#resultado)
  - [Como validar](#como-validar)
- [Etapa 2 — Importar o Repositório](#etapa-2--importar-o-repositório)
  - [Onde realizar](#onde-realizar)
  - [Por que importar](#por-que-importar)
  - [Resultado](#resultado-1)
  - [Como validar](#como-validar-1)
- [Etapa 3 — Configurar o Projeto na Vercel](#etapa-3--configurar-o-projeto-na-vercel)
  - [Onde realizar](#onde-realizar-1)
  - [O que será configurado](#o-que-será-configurado)
  - [Framework Preset](#framework-preset)
  - [Root Directory](#root-directory)
  - [Build Command](#build-command)
  - [Output Directory](#output-directory)
  - [Install Command](#install-command)
  - [Node.js Version](#nodejs-version)
  - [Variáveis de Ambiente](#variáveis-de-ambiente)
  - [Resultado](#resultado-2)
  - [Como validar](#como-validar-2)
- [Etapa 4 — Publicar a Aplicação](#etapa-4--publicar-a-aplicação)
  - [Onde realizar](#onde-realizar-2)
  - [Como publicar](#como-publicar)
  - [Deploy](#deploy)
  - [Resultado](#resultado-3)
  - [Como validar](#como-validar-3)
- [Etapa 5 — Validar a Aplicação Publicada](#etapa-5--validar-a-aplicação-publicada)
  - [Onde realizar](#onde-realizar-3)
  - [O que validar](#o-que-validar)
  - [Resultado](#resultado-4)
  - [Como validar](#como-validar-4)
- [Corrigir Problemas](#corrigir-problemas)
  - [Build com erro](#build-com-erro)
  - [Dependências](#dependências)
  - [Projeto incorreto](#projeto-incorreto)
  - [Página em branco](#página-em-branco)
  - [Deploy não atualizado](#deploy-não-atualizado)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Plataforma de Deploy](#plataforma-de-deploy)
  - [Versionamento](#versionamento)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Recursos Utilizados](#recursos-utilizados)

---

# Objetivo

Este documento tem como objetivo apresentar a Vercel, explicar sua finalidade dentro deste projeto e orientar a publicação da aplicação de forma organizada, segura e compatível com toda a stack tecnológica definida durante o planejamento.

Ao final desta etapa, a aplicação estará publicada na internet utilizando a plataforma oficial adotada para este projeto.

Esta etapa integra a fase final do desenvolvimento, sendo responsável apenas pela disponibilização da aplicação para acesso público.

---

# Escopo

Durante esta etapa serão realizadas apenas atividades relacionadas à publicação da aplicação.

Serão abordados:

- criação da conta na Vercel (caso necessário);
- importação do repositório GitHub;
- configuração do projeto;
- publicação da aplicação;
- validação da aplicação publicada;
- boas práticas de utilização.

---

# O que é a Vercel

A Vercel é uma plataforma de hospedagem especializada em aplicações Front-end.

Ela permite publicar aplicações desenvolvidas utilizando tecnologias como:

- React;
- Vite;
- Next.js;
- Vue;
- Angular;
- Svelte.

Sua integração com o GitHub permite publicar novas versões da aplicação sempre que o repositório for atualizado.

Neste projeto será utilizada apenas sua funcionalidade de hospedagem.

Sua utilização foi definida considerando os seguintes fatores:

- excelente integração com React;
- excelente integração com Vite;
- integração oficial com GitHub;
- facilidade de publicação;
- ambiente gratuito suficiente para este projeto;
- ampla documentação oficial;

---

# Como a Vercel funciona

A Vercel conecta-se diretamente ao repositório hospedado no GitHub.

Após importar o projeto, a plataforma identifica automaticamente a tecnologia utilizada.

Durante a publicação, a Vercel executa uma sequência de etapas, incluindo:

- download do código-fonte;
- instalação das dependências;
- geração da versão de produção;
- disponibilização da aplicação na internet.

Após a conclusão desse processo, a aplicação passa a ser acessível por meio de uma URL pública.

---

# Decisões

Neste projeto será utilizada apenas a integração oficial entre GitHub e Vercel.

Também não serão configurados nesta etapa:

- domínio personalizado;
- deploy automático por outras plataformas;
- Analytics;
- Speed Insights;
- Edge Functions;
- Serverless Functions.

O objetivo deste Guide é apenas publicar corretamente a aplicação desenvolvida.

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
- Guide 17 — GitHub Actions.

Também será necessário que:

- o projeto esteja concluído;
- todas as funcionalidades previstas pelo desafio estejam implementadas;
- o projeto execute corretamente utilizando `npm run dev`;
- o projeto gere corretamente a versão de produção utilizando `npm run build`;
- o repositório esteja atualizado no GitHub.

---

# Passo a Passo

Nesta etapa será realizada a publicação da aplicação utilizando a plataforma Vercel.

Ao final deste processo, o projeto estará disponível para acesso público através de uma URL fornecida pela própria plataforma.

---

# Etapa 1 — Criar uma Conta na Vercel

Antes de publicar a aplicação será necessário possuir uma conta na plataforma Vercel.

---

## Onde acessar

Acesse o site oficial da Vercel.

```text
https://vercel.com
```

---

## Criar uma conta

A Vercel exige autenticação para permitir:

- importar repositórios;
- realizar deploys;
- acompanhar o histórico de publicações;
- gerenciar projetos.

Sem uma conta não será possível publicar a aplicação.

---

## Como criar

Na página inicial da Vercel clique em:

```text
Sign Up
```

Será apresentada uma lista de provedores de autenticação.

Neste projeto será utilizada a autenticação através do GitHub.

Selecione:

```text
Continue with GitHub
```

---

## Durante o login

Ao selecionar o GitHub:

- será aberta a tela de autenticação do GitHub;
- caso ainda não esteja autenticado, será solicitado login;
- a Vercel solicitará autorização para acessar sua conta do GitHub.

Essa autorização é necessária para que a plataforma consiga visualizar os repositórios e realizar os deploys.

---

## Resultado

Após concluir a autenticação, o usuário será redirecionado para o painel principal da Vercel.

A tela deverá apresentar opções para criação ou importação de projetos.

---

## Como validar

Verifique se:

- o login foi realizado com sucesso;
- o painel principal da Vercel foi carregado;
- o nome da sua conta aparece no canto superior da interface.

Se essas condições forem atendidas, a conta estará pronta para utilização.

---

# Etapa 2 — Importar o Repositório

Com a conta criada, será necessário importar o repositório hospedado no GitHub.

---

## Onde realizar

Dentro do painel principal da Vercel.

Clique em:

```text
Add New

↓

Project
```

---

## Por que importar

A Vercel realiza os deploys diretamente a partir do repositório hospedado no GitHub.

Sempre que um novo commit for enviado, a plataforma poderá gerar uma nova versão da aplicação.

A Vercel exibirá a lista de repositórios disponíveis na conta do GitHub.

Localize o repositório:

```text
desafio-tecnico-berna
```

Ao lado dele clique em:

```text
Import
```

Caso o repositório não apareça na lista, clique em:

```text
Adjust GitHub App Permissions
```

Conceda acesso ao repositório e retorne para a tela de importação.

---

## Resultado

Após importar o repositório será exibida a tela de configuração do projeto.

Nessa tela será possível definir as configurações utilizadas durante o deploy.

---

## Como validar

Verifique se:

- o repositório correto foi importado;
- o nome do projeto está correto;
- a origem do projeto corresponde ao repositório do GitHub.

Se essas informações estiverem corretas, a importação foi concluída com sucesso.

---

# Etapa 3 — Configurar o Projeto na Vercel

Após importar o repositório, a Vercel exibirá a tela de configuração do projeto.

Nesta etapa serão revisadas todas as configurações antes da publicação da aplicação.

---

## Onde realizar

No painel da Vercel, logo após importar o repositório.

Embora a Vercel identifique automaticamente a maioria das configurações de projetos React com Vite, é importante conferir cada campo antes de iniciar o deploy.

Essa validação evita erros de configuração e garante que a aplicação seja publicada corretamente.

---

## O que será configurado

Serão revisados os seguintes campos:

- Framework Preset;
- Root Directory;
- Build Command;
- Output Directory;
- Install Command;
- Node.js Version;
- Variáveis de Ambiente (caso existam).

---

## Framework Preset

A Vercel normalmente identifica automaticamente o framework utilizado.

Para este projeto deverá aparecer:

```text
Vite
```

Caso outro framework seja identificado, selecione manualmente:

```text
Vite
```

---

## Root Directory

Como este projeto está localizado diretamente na raiz do repositório, mantenha:

```text
./
```

Não será necessário alterar esse campo.

---

## Build Command

Verifique se o comando informado é:

```text
npm run build
```

Esse comando gera a versão otimizada da aplicação para produção.

Caso outro comando seja exibido, substitua pelo comando acima.

---

## Output Directory

Verifique se o diretório de saída é:

```text
dist
```

Esse diretório é gerado automaticamente pelo Vite durante o processo de build.

---

## Install Command

Verifique se o comando utilizado para instalar as dependências é:

```text
npm install
```

Não será necessário alterar esse valor.

---

## Node.js Version

Verifique se a versão do Node.js utilizada pela Vercel é compatível com a versão definida durante a preparação do ambiente.

Caso a plataforma permita selecionar a versão manualmente, utilize a mesma versão adotada durante o desenvolvimento do projeto.

Essa prática reduz diferenças entre o ambiente local e o ambiente de produção.

---

## Variáveis de Ambiente

Este projeto não utiliza variáveis de ambiente.

Portanto, nenhuma variável deverá ser cadastrada nesta etapa.

Caso futuramente o projeto utilize arquivos `.env`, essas variáveis deverão ser cadastradas na seção **Environment Variables** da Vercel.

```text
IMPORTANTE: Conforme exigido, nunca deixar URLs de API ou chaves expostas no código-fonte.
```

Mesmo para o serviço de mock, utilize a configuração de Environment Variables diretamente no painel da Vercel para gerenciar esses segredos.

---

## Resultado

Todas as configurações deverão estar corretamente definidas para um projeto React utilizando Vite.

---

## Como validar

Antes de iniciar o deploy confirme que:

- Framework Preset está como **Vite**;
- Root Directory está correto;
- Build Command é `npm run build`;
- Output Directory é `dist`;
- Install Command é `npm install`;
- nenhuma configuração inesperada foi alterada.

Se todas essas informações estiverem corretas, o projeto estará pronto para publicação.

---

# Etapa 4 — Publicar a Aplicação

Após revisar todas as configurações será possível iniciar o deploy.

---

## Onde realizar

Na própria tela de configuração da Vercel.

---

## Como publicar

Clique no botão:

```text
Deploy
```

---

## Deploy

Após iniciar o processo, a Vercel executará automaticamente as seguintes etapas:

- clonagem do repositório;
- instalação das dependências;
- execução do comando `npm run build`;
- geração da versão de produção;
- publicação da aplicação.

Todo esse processo poderá ser acompanhado em tempo real através dos logs apresentados pela plataforma.

---

## Resultado

Ao final do processo será exibida uma mensagem semelhante a:

```text
Deployment Completed
```

Também será apresentada uma URL pública para acesso à aplicação.

---

## Como validar

Verifique se:

- o deploy foi concluído com sucesso;
- nenhuma etapa apresentou erro;
- foi gerada uma URL pública;
- a aplicação pode ser acessada utilizando essa URL.

Se essas condições forem atendidas, a publicação foi realizada corretamente.

---

# Etapa 5 — Validar a Aplicação Publicada

Após a conclusão do deploy, será necessário validar se a aplicação publicada está funcionando corretamente.

Esta etapa garante que a versão disponibilizada na internet corresponde ao projeto desenvolvido localmente.

---

## Onde realizar

A validação será realizada acessando a URL pública gerada pela Vercel.

Ela estará disponível:

- na tela final do deploy;
- no Dashboard da Vercel;
- na lista de Deployments do projeto.

Embora o deploy tenha sido concluído com sucesso, é necessário confirmar que a aplicação funciona corretamente em ambiente de produção.

Diferenças entre o ambiente local e o ambiente publicado podem ocasionar comportamentos inesperados.

---

## O que validar

Acesse a URL pública e verifique:

- se a aplicação abre corretamente;
- se a tela inicial é carregada;
- se não existem erros visíveis;
- se o layout permanece responsivo;
- se todas as funcionalidades previstas pelo desafio funcionam corretamente.

Caso o projeto utilize autenticação simulada, valide também o fluxo completo de login.

---

## Resultado

A aplicação deverá ser carregada normalmente através da URL pública.

Todas as funcionalidades implementadas deverão funcionar da mesma forma que no ambiente local.

---

## Como validar

Confirme que:

- a URL pública está acessível;
- nenhuma página apresenta erro;
- o console do navegador não apresenta erros relacionados à aplicação;
- o projeto corresponde à versão mais recente enviada ao GitHub.

Se todos esses itens forem atendidos, a publicação foi concluída com sucesso.

---

# Corrigir Problemas

Caso ocorram falhas durante o deploy ou após a publicação, verifique os seguintes pontos.

---

## Build com erro

Se o deploy falhar durante a geração da versão de produção:

Execute localmente:

```bash
npm run build
```

Corrija todos os erros apresentados antes de realizar um novo commit.

---

## Dependências

Se ocorrer erro durante a instalação das dependências:

Verifique:

- `package.json`;
- `package-lock.json`;
- versões das dependências.

Após corrigir, envie um novo commit para o GitHub.

---

## Projeto incorreto

Caso a aplicação publicada não corresponda ao projeto esperado:

Verifique se:

- o repositório importado é o correto;
- a branch utilizada está correta;
- o último commit foi enviado ao GitHub.

---

## Página em branco

Se a aplicação abrir, mas apresentar apenas uma tela em branco:

Verifique:

- erros no console do navegador;
- erros durante o processo de build;
- importações incorretas;
- configurações do React Router, caso esteja sendo utilizado.

---

## Deploy não atualizado

Caso as alterações mais recentes não apareçam:

Confirme que:

- o commit foi enviado ao GitHub;
- o deploy foi executado novamente;
- não existe nenhum deploy pendente.

Se necessário, utilize a opção:

```text
Redeploy
```

disponível na Vercel.

---

# Boas Práticas

Durante a utilização da Vercel neste projeto serão adotadas as seguintes práticas:

- publicar apenas versões validadas localmente;
- executar `npm run build` antes do deploy;
- manter o repositório sincronizado com o GitHub;
- revisar os logs de cada publicação;
- manter apenas configurações necessárias;
- utilizar a integração oficial com GitHub.

---

# Segurança

Durante esta etapa deverão ser observados os seguintes cuidados:

- nunca armazenar informações sensíveis diretamente no código;
- utilizar variáveis de ambiente quando necessário;
- revisar permissões concedidas ao GitHub;
- manter dependências atualizadas;
- utilizar apenas integrações oficiais;
- revisar os logs antes de compartilhar a aplicação.

---

# Erros Comuns

Evitar:

- publicar sem executar o build localmente;
- alterar configurações padrão da Vercel sem necessidade;
- ignorar erros apresentados durante o deploy;
- utilizar a branch incorreta;
- publicar versões não validadas;
- remover arquivos necessários para o build.

---

# Critérios

Esta etapa será considerada concluída quando:

- a conta na Vercel estiver configurada;
- o repositório tiver sido importado;
- o projeto estiver configurado corretamente;
- o deploy for concluído sem erros;
- a URL pública estiver acessível;
- todas as funcionalidades previstas pelo funcionarem corretamente na versão publicada.

---

# Checklist

- [ ] Conta criada na Vercel
- [ ] Repositório importado
- [ ] Configurações revisadas
- [ ] Deploy realizado
- [ ] URL pública gerada
- [ ] Aplicação acessível
- [ ] Funcionalidades validadas
- [ ] Publicação concluída

---

# Referências

## Plataforma de Deploy

- Vercel → [Site Oficial](https://vercel.com/) | [Documentação](https://vercel.com/docs)

---

## Versionamento

- GitHub → [Site Oficial](https://github.com/) | [Documentação](https://docs.github.com/)

---

## Tecnologias Utilizadas

- React → [Site Oficial](https://react.dev/) | [Documentação](https://react.dev/learn)
- Vite → [Site Oficial](https://vite.dev/) | [Documentação](https://vite.dev/guide/)
- Node.js → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest/api/)
- npm → [Documentação](https://docs.npmjs.com/)

---

## Recursos Utilizados

- Variáveis de Ambiente (Vercel) → [Documentação](https://vercel.com/docs/environment-variables)
- GitHub Integration (Vercel) → [Documentação](https://vercel.com/docs/deployments/git)
- Deployments (Vercel) → [Documentação](https://vercel.com/docs/deployments)
- Build Configuration (Vercel) → [Documentação](https://vercel.com/docs/frameworks/vite)

---
