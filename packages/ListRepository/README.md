<h1 align="center">
  ListRepository
</h1>

<p align="center">
  <a href="#lista-de-correspondências">Lista de correspondências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#nota-do-desenvolvedor">Nota do desenvolvedor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sobre-o-desafio">Sobre o desafio</a>
</p>

## Lista de correspondências

* **Modulo 5:** Primeiro projeto com ReactJS
* **Desafio 5:** Primeiro projeto com ReactJS

Este projeto compila um ambiente de módulo e desafio.

---

## Nota do desenvolvedor

Este diretório contém a resolução do módulo/desafio **ListRepository** proposto no bootcamp da turma GoStack 10, as instruções sobre o que se espera no cumprimento deste desafio encontram-se abaixo na seção [Sobre o desafio](#sobre-o-desafio) e estão descritas do mesmo modo como foram fornecidas aos participantes do bootcamp. Por este projeto se tratar de um compilado entre módulo e desafio, as instruções fornecidas abaixo correspondem somente ao proposto como desafio, e parte do princípio da existência de uma aplicação base que foi desenvolvido durante o módulo.
Para instruções sobre a instalação das dependências deste projeto consulte a seção Get Started no [README](../../README.md) do diretório raiz deste repositório.

## Sobre o desafio

Nesse desafio você adicionará novas funcionalidades na aplicação que desenvolvemos ao longo desse módulo.

### Funcionalidades

#### 1. Captando erros

Adicione um `try/catch` por volta do código presente na função `handleSubmit` presente no componente `Main` e caso um repositório não seja encontrado na API do Github adicione uma borda vermelha por volta do input em que o usuário digitou o nome do repositório.

#### 2. Repositório duplicado

Antes de fazer a chamada à API na função `handleSubmit` faça uma verificação para ver se o repositório não está duplicado, ou seja, se ele ainda não existe no estado de `repositories`.

Caso exista, dispare um erro, e com isso o código cairá no `catch` do `try/catch` criado na funcionalidade anterior.

```js
throw new Error('Repositório duplicado');
```

#### 3. Filtro de estado

Adicione um filtro de estado na listagem de Issues que criamos no detalhe do repositório. O estado representa se a issue está em aberto, fechada ou uma opção para exibir todas.

Exemplos de requisição:

```
https://api.github.com/repos/rocketseat/unform/issues?state=all
https://api.github.com/repos/rocketseat/unform/issues?state=open
https://api.github.com/repos/rocketseat/unform/issues?state=closed
```

Você pode encontrar a documentação [nesse link](https://developer.github.com/v3/issues/#parameters-1);

#### 4. Paginação

Adicione paginação nas issues listadas no detalhe do repositório. A API do Github lista no máximo 30 issues por página e você pode controlar o número da página atual por um parâmetro no endereço da requisição:

```
https://api.github.com/repos/rocketseat/unform/issues?page=2
```

Adicione apenas um botão de próxima página e página anterior. O botão de página anterior deve ficar desativado na primeira página.
