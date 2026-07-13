# Arquitetura do Projeto

## Índice

- [Arquitetura do Projeto](#arquitetura-do-projeto)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Objetivos](#objetivos)
- [Arquitetura](#arquitetura)
  - [Organização](#organização)
  - [Legibilidade](#legibilidade)
  - [Reutilização](#reutilização)
  - [Baixo Acoplamento](#baixo-acoplamento)
  - [Alta Coesão](#alta-coesão)
- [Estrutura](#estrutura)
- [Responsabilidade das Pastas](#responsabilidade-das-pastas)
  - [docs/](#docs)
  - [public/](#public)
  - [src/](#src)
  - [assets/](#assets)
  - [components/](#components)
  - [layouts/](#layouts)
  - [pages/](#pages)
  - [routes/](#routes)
  - [services/](#services)
  - [hooks/](#hooks)
  - [utils/](#utils)
  - [styles/](#styles)
- [Organização dos Componentes](#organização-dos-componentes)
- [Organização das Páginas](#organização-das-páginas)
- [Organização das Rotas](#organização-das-rotas)
- [Organização dos Estilos](#organização-dos-estilos)
- [Organização dos Arquivos](#organização-dos-arquivos)
- [Padrões de Arquitetura](#padrões-de-arquitetura)
- [Boas Práticas](#boas-práticas)
- [Segurança](#segurança)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Desenvolvimento Front-end](#desenvolvimento-front-end)
  - [Arquitetura e Organização](#arquitetura-e-organização)

---

# Objetivo

Este documento define a arquitetura do projeto, estabelecendo a organização da aplicação, a estrutura de diretórios, as responsabilidades de cada camada e os padrões que deverão ser seguidos durante todo o desenvolvimento.

A arquitetura foi planejada para facilitar manutenção, organização, legibilidade, escalabilidade e segurança, sem alterar os requisitos definidos.

Uma arquitetura bem definida permite:

- localizar arquivos facilmente;
- evitar duplicação de código;
- facilitar manutenção;
- aumentar a legibilidade;
- reduzir acoplamento;
- melhorar reutilização.

Esta arquitetura organiza o projeto sem adicionar funcionalidades além das previstas.

---

# Referência

Será realizada o desenvolvimento de uma interface de autenticação utilizando React.

A arquitetura definida neste documento existe apenas para organizar a implementação desses requisitos.

Ela não representa novos requisitos da aplicação.

---

# Objetivos

Ao final desta etapa o projeto deverá possuir:

- estrutura de diretórios definida;
- responsabilidades de cada pasta documentadas;
- padrão de nomenclatura estabelecido;
- organização preparada para evolução futura;
- separação clara entre responsabilidades.

---

# Arquitetura

Durante todo o desenvolvimento serão seguidos os seguintes princípios.

## Organização

Cada arquivo deverá possuir apenas uma responsabilidade.

---

## Legibilidade

A estrutura deverá ser intuitiva para qualquer pessoa que leia a documentação.

---

## Reutilização

Sempre que possível componentes deverão ser reutilizados.

---

## Baixo Acoplamento

As partes da aplicação deverão depender o mínimo possível umas das outras.

---

## Alta Coesão

Cada pasta deverá conter apenas arquivos relacionados à sua responsabilidade.

---

# Estrutura

A estrutura inicial será organizada da seguinte forma.

```text
 desafio-tecnico-berna/
│
├── docs/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx (ou App.tsx)
│   └── main.jsx (ou main.tsx)
│
├── .github/
│
└── demais arquivos de configuração
```

A estrutura poderá conter apenas os diretórios necessários ao projeto.

Pastas não utilizadas não deverão ser mantidas apenas por organização.

---

# Responsabilidade das Pastas

## docs/

Contém toda a documentação do projeto.

Nenhum código da aplicação deverá ser armazenado aqui.

---

## public/

Arquivos públicos disponibilizados diretamente pela aplicação.

---

## src/

Contém todo o código-fonte.

Toda implementação será realizada dentro deste diretório.

---

## assets/

Arquivos estáticos.

Exemplos:

- imagens;
- ícones;
- fontes.

---

## components/

Componentes reutilizáveis.

Critérios:

- não representar páginas completas;
- possuir responsabilidade única;
- poder ser reutilizados.

---

## layouts/

Layouts compartilhados entre páginas.

---

## pages/

Representam as páginas da aplicação.

Cada página deverá possuir responsabilidade própria.

---

## routes/

Configuração das rotas da aplicação.

Também será responsável pelo controle das rotas protegidas.

---

## services/

Camada responsável pela comunicação com serviços externos.

A camada de services será responsável por simular a autenticação do usuário. Isso permite que a solução seja "mockada", vamos utilizar um arquivo local (authService.js) que validará as credenciais contra dados estáticos, simulando uma promessa de API (Promise) para garantir que a lógica de carregamento e feedback visual funcione como em um cenário de produção.

Caso utilize autenticação simulada, esta organização continuará válida no projeto.

---

## hooks/

Hooks personalizados reutilizáveis.

Somente deverão existir quando houver a necessidade.

---

## utils/

Funções utilitárias compartilhadas.

---

## styles/

Arquivos globais relacionados ao estilo da aplicação.

---

# Organização dos Componentes

Cada componente deverá possuir responsabilidade única.

Evitar componentes excessivamente grandes.

Sempre que possível dividir as responsabilidades.

---

# Organização das Páginas

Cada página deverá representar apenas uma tela da aplicação.

No contexto espera-se:

- Login;
- Área Protegida.

---

# Organização das Rotas

As rotas deverão permanecer centralizadas.

Responsabilidades:

- registrar rotas;
- controlar acesso;
- separar rotas públicas e protegidas.

---

# Organização dos Estilos

Usaremos Tailwind CSS.

Os estilos deverão permanecer organizados e consistentes.

Evitar:

- duplicação;
- estilos conflitantes;
- classes desnecessárias.

---

# Organização dos Arquivos

Recomendações.

Utilizar nomes claros.

Evitar:

```text
teste.jsx

novo.jsx

arquivo.jsx
```

Preferir nomes descritivos.

Exemplo:

```text
LoginPage.jsx

PrivateRoute.jsx

LoginForm.jsx
```

---

# Padrões de Arquitetura

Durante todo o projeto serão adotados:

- separação de responsabilidades;
- reutilização de componentes;
- organização modular;
- estrutura previsível;
- baixo acoplamento;
- alta coesão.

---

# Boas Práticas

Durante o desenvolvimento deverão ser seguidas as seguintes diretrizes.

- não criar componentes gigantes;
- evitar repetição de código;
- manter organização consistente;
- utilizar nomes claros;
- manter estrutura previsível;
- documentar alterações relevantes.

---

# Segurança

Embora arquitetura não implemente segurança diretamente, algumas decisões reduzem riscos.

Sempre:

- separar responsabilidades;
- evitar lógica sensível espalhada pela aplicação;
- centralizar configurações;
- evitar duplicação de regras;
- organizar corretamente rotas protegidas.

Essas práticas reduzem erros durante o desenvolvimento.

---

# Erros Comuns

Evitar:

- misturar responsabilidades;
- criar componentes reutilizáveis sem necessidade;
- criar estrutura excessivamente complexa;
- utilizar nomes genéricos;
- espalhar lógica da aplicação em diversos arquivos.

---

# Critérios

Esta etapa será considerada concluída quando:

- estrutura do projeto estiver definida;
- responsabilidades documentadas;
- padrão de organização estabelecido;
- arquitetura preparada para implementação;
- critérios de segurança registrados.

---

# Checklist

- [x] Estrutura do projeto definida
- [x] Responsabilidades documentadas
- [x] Organização dos componentes definida
- [x] Organização das páginas definida
- [x] Organização das rotas definida
- [x] Organização dos estilos definida
- [x] Boas práticas registradas
- [x] Diretrizes de segurança registradas

---

# Referências

## Desenvolvimento Front-end

- React → [Site Oficial](https://react.dev/) | [Documentação](https://react.dev/learn)
- Tailwind CSS → [Site Oficial](https://tailwindcss.com/) | [Documentação](https://tailwindcss.com/docs)

---

## Arquitetura e Organização

- Vite → [Site Oficial](https://vitejs.dev/) | [Documentação](https://vite.dev/guide/)

---
