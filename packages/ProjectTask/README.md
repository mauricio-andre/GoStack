<h1 align="center">
  ProjectTask
</h1>

<p align="center">
  <a href="#lista-de-correspondências">Lista de correspondências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#nota-do-desenvolvedor">Nota do desenvolvedor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#testando-a-api">Testando a API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sobre-o-desafio">Sobre o desafio</a>
</p>

## Lista de correspondências

* **Desafio 1:** Conceitos do NodeJS

## Nota do desenvolvedor

Este diretório contém a resolução do desafio **ProjectTask** proposto no bootcamp da turma GoStack 10, as instruções sobre o que se espera no cumprimento deste desafio encontram-se abaixo na seção [Sobre o desafio](#sobre-o-desafio) e estão descritas do mesmo modo como foram fornecidas aos participantes do bootcamp.
Para instruções sobre a instalação das dependências deste projeto consulte a seção Get Started no [README](../../README.md) do diretório raiz deste repositório.

### Testando a API

Os testes deste desafio podem ser realizados por meio de qualquer ferramenta de teste de API REST, durante a construção deste projeto, a ferramenta Insomnia foi utilizada para a realização dos testes.
Você pode baixar o workspace de testes deste desafio pressionando o botão abaixo, ou acesse o arquivo diretamente deste repositório [insomnia/ProjectTask](../../.github/insomnia/ProjectTask.json)

[![Run in Insomnia}](../../.github/insomniaRun.svg)](https://insomnia.rest/run/?label=ProjectTask&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fmauricio-andre%2FgoStack10%2Fmaster%2F.github%2Finsomnia%2FProjectTask.json)

## Sobre o desafio

Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

### Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;
