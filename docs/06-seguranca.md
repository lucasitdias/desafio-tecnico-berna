# Segurança

## Índice

- [Segurança](#segurança)
  - [Índice](#índice)
- [Objetivo](#objetivo)
- [Referência](#referência)
- [Objetivos](#objetivos)
- [Princípios de Segurança](#princípios-de-segurança)
  - [Menor Exposição](#menor-exposição)
  - [Menor Privilégio](#menor-privilégio)
  - [Simplicidade](#simplicidade)
  - [Organização](#organização)
  - [Validação](#validação)
- [Segurança do Repositório](#segurança-do-repositório)
- [Segurança das Variáveis de Ambiente](#segurança-das-variáveis-de-ambiente)
- [Segurança do Código](#segurança-do-código)
- [Segurança das Entradas](#segurança-das-entradas)
- [Segurança das Dependências](#segurança-das-dependências)
- [Segurança durante o Desenvolvimento](#segurança-durante-o-desenvolvimento)
- [Segurança na Publicação](#segurança-na-publicação)
- [Segurança](#segurança-1)
- [Boas Práticas](#boas-práticas)
- [Cuidados](#cuidados)
- [Erros Comuns](#erros-comuns)
- [Critérios](#critérios)
- [Checklist](#checklist)
- [Referências](#referências)
  - [Controle de Versão](#controle-de-versão)
  - [Deploy e Variáveis de Ambiente](#deploy-e-variáveis-de-ambiente)

---

# Objetivo

Este documento define as práticas de segurança adotadas durante o desenvolvimento do projeto.

Seu objetivo é reduzir riscos, evitar vulnerabilidades comuns e estabelecer diretrizes para proteger o código-fonte, o repositório e o processo de desenvolvimento, sem alterar os requisitos funcionais definidos.

As diretrizes apresentadas neste documento fazem parte da infraestrutura de desenvolvimento e serão aplicadas durante todas as etapas da implementação.

---

# Referência

O desafio destaca a importância de:

- não expor arquivos `.env`;
- não expor API Keys;
- utilizar corretamente variáveis de ambiente na Vercel.

---

# Objetivos

Ao final desta etapa o projeto deverá:

- proteger informações sensíveis;
- seguir boas práticas de desenvolvimento seguro;
- reduzir riscos durante a implementação;
- manter o repositório protegido;
- evitar vulnerabilidades comuns.

---

# Princípios de Segurança

Durante todo o projeto serão seguidos os seguintes princípios.

## Menor Exposição

Somente as informações necessárias deverão estar disponíveis no código.

---

## Menor Privilégio

Cada ferramenta deverá possuir apenas as permissões necessárias.

---

## Simplicidade

Não adicionar mecanismos complexos que não façam parte do projeto.

---

## Organização

Centralizar configurações e evitar duplicação.

---

## Validação

Toda entrada informada pelo usuário deverá ser validada antes de ser utilizada.

---

# Segurança do Repositório

Durante o desenvolvimento deverão ser observadas as seguintes práticas.

Nunca versionar:

- `.env`
- arquivos contendo credenciais;
- tokens;
- chaves privadas;
- informações pessoais;
- arquivos temporários.

Sempre utilizar:

- `.gitignore`;
- GitHub Actions;
- Husky;
- branches de desenvolvimento;
- Pull Requests;
- revisão antes do merge.

---

# Segurança das Variáveis de Ambiente

Quando houver necessidade de variáveis de ambiente:

- nunca armazená-las diretamente no código;
- nunca enviá-las ao GitHub;
- utilizar arquivos apropriados para desenvolvimento local;
- utilizar as variáveis configuradas na Vercel durante o deploy.

---

# Segurança do Código

Durante a implementação deverão ser observadas as seguintes práticas.

Evitar:

- código morto;
- dependências desnecessárias;
- duplicação de lógica;
- funções excessivamente grandes;
- comentários desatualizados.

Sempre:

- escrever código legível;
- manter responsabilidades separadas;
- reutilizar componentes quando apropriado.

---

# Segurança das Entradas

Toda informação fornecida pelo usuário deverá ser validada antes de ser utilizada.

Neste desafio isso inclui:

- e-mail;
- senha.

As validações deverão seguir exatamente os requisitos definidos.

---

# Segurança das Dependências

Antes de instalar uma biblioteca:

- verificar se ela é realmente necessária;
- utilizar fontes confiáveis;
- evitar bibliotecas sem manutenção;
- remover dependências não utilizadas.

---

# Segurança durante o Desenvolvimento

Durante toda a implementação deverão ser seguidas as seguintes práticas.

- trabalhar em branches específicas;
- revisar alterações antes do merge;
- manter documentação atualizada;
- validar funcionamento antes de integrar alterações;
- utilizar ESLint, Prettier, Husky e GitHub Actions para validação automática.

---

# Segurança na Publicação

Antes do deploy deverá ser verificado:

- ausência de arquivos sensíveis;
- ausência de variáveis privadas no código;
- funcionamento da aplicação;
- configuração correta das variáveis de ambiente.

---

# Segurança

O desafio apresenta alguns temas para reflexão.

Entre eles:

- ataques de força bruta;
- persistência de autenticação.

Esses mecanismos **não serão implementados**, pois informa que não fazem parte do escopo atual.

Entretanto, eles poderão ser considerados como possibilidades de evolução futura, sem interferir na entrega deste projeto.

---

# Boas Práticas

Durante todo o projeto deverão ser seguidas as seguintes diretrizes:

- manter o projeto atualizado;
- revisar alterações antes do merge;
- validar entradas do usuário;
- evitar informações sensíveis no código;
- manter a documentação sincronizada;
- remover código não utilizado;
- manter o projeto organizado.

---

# Cuidados

Nunca:

- enviar `.env` ao GitHub;
- armazenar tokens no código;
- compartilhar credenciais;
- ignorar avisos de segurança;
- instalar bibliotecas sem necessidade;
- alterar configurações sem documentação.

Sempre:

- revisar Pull Requests;
- validar o funcionamento antes do deploy;
- seguir a arquitetura definida;
- utilizar apenas dependências necessárias;
- manter o histórico organizado.

---

# Erros Comuns

Evitar:

- esquecer arquivos sensíveis no repositório;
- armazenar informações privadas em componentes;
- misturar configurações de desenvolvimento e produção;
- utilizar bibliotecas desnecessárias;
- ignorar atualizações importantes.

---

# Critérios

Esta etapa será considerada concluída quando:

- diretrizes de segurança estiverem documentadas;
- práticas de desenvolvimento seguro definidas;
- regras para variáveis de ambiente registradas;
- critérios para publicação documentados;
- recomendações alinhadas ao desafio.

---

# Checklist

- [x] Princípios de segurança definidos
- [x] Segurança do repositório documentada
- [x] Segurança das variáveis de ambiente documentada
- [x] Segurança das entradas documentada
- [x] Segurança das dependências documentada
- [x] Segurança durante o desenvolvimento documentada
- [x] Segurança para publicação documentada
- [x] Reflexões do desafio registradas
- [x] Critérios de conclusão definidos

---

# Referências

## Controle de Versão

- Git → [Site Oficial](https://git-scm.com/) | [Documentação](https://git-scm.com/doc)
- GitHub → [Site Oficial](https://github.com/) | [Documentação](https://docs.github.com/)

---

## Deploy e Variáveis de Ambiente

- Vercel → [Site Oficial](https://vercel.com/) | [Documentação](https://vercel.com/docs)
- Variáveis de Ambiente na Vercel → [Documentação](https://vercel.com/docs/environment-variables)

---
