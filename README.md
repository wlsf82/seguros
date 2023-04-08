# Seguros ABC

[![CI](https://github.com/wlsf82/seguros/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/seguros/actions)

Aplicação exemplo para demonstração de testes automatizados escritos com [Cypress](https://cypress.io).

___

## Pré-requisitos

Para baixar e rodar este projeto, você precisará dos seguintes sistemas instalados em seu computador:

- [git](https://git-scm.com/downloads) (usei a versão `2.34.1` enquanto escrevia este documento)
- [Node.js](https://nodejs.org/en/) (usei a versão `v18.13.0` enquanto escrevia este documento)
- npm (usei a versão `8.19.3` enquanto escrevia este documento)

**Obs:** Ao instalar o Node.js, o npm é instalado automaticamente.

## Instalação

Para instalar as dependências de desenvolvimento, execute o comando `npm install` (ou `npm i` para a versão curta).

## Executando os testes

Neste projeto, você pode rodar os testes em modo interativo ou modo _headless_.

### Modo _headless_

Execute o comando `npm test` (ou `npm t` para a versão curta) para rodar a **versão 1** de todos os testes em modo _headless_.

Ou execute o comando `npm run test:v2`para rodar a **versão 2** de todos os testes em modo _headless_.

### Modo interativo

Execute o comando `npm run cy:open` para abrir a Cypress App e rodar: a **versão 1** dos testes (onde a profissão padrão é "arquiteta"); ou a **versão 2** dos testes, a qual testa todas as profissões de uma só vez.

Ou execute o comando `npm run cy:open:[profissao]` (ex.: `npm run cy:open:dentista`) para abrir a Cypress App e rodar os testes em modo interativo para uma profissão específica.

___

Feito com ❤️ por [Walmyr](https://walmyr.dev).
