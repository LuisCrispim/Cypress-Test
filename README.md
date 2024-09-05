# Cypress Test

Este repositório contém testes automatizados usando Cypress para validar funcionalidades e fluxos de trabalho de uma aplicação web. O objetivo é garantir que as principais funcionalidades do site estejam funcionando corretamente após atualizações ou mudanças no código.

## Tecnologias Utilizadas

- **Cypress**: Framework de teste end-to-end, utilizado para simular interações do usuário e verificar o comportamento da aplicação.
- **JavaScript**: Linguagem de programação utilizada para escrever os testes.
- **Node.js**: Ambiente de execução para o JavaScript.

## Estrutura do Projeto

- **/cypress/integration**: Contém os arquivos de teste, organizados por funcionalidades.
- **/cypress/fixtures**: Inclui arquivos de dados estáticos utilizados nos testes.
- **/cypress/support**: Contém comandos customizados e outras configurações do Cypress.

## Como Executar os Testes

1. Clone este repositório:

    ```bash
    git clone https://github.com/LuisCrispim/Cypress-Test.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd Cypress-Test
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute os testes:

    ```bash
    npx cypress open
    ```

    Isso abrirá o Test Runner do Cypress, onde você pode selecionar e executar os testes.




