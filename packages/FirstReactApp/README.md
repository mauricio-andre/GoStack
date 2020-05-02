<h1 align="center">
  FirstReactApp
</h1>

<p align="center">
  <a href="#lista-de-correspondências">Lista de correspondências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#nota-do-desenvolvedor">Nota do desenvolvedor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sobre-o-desafio">Sobre o desafio</a>
</p>

## Lista de correspondências

* **Modulo 6:** Primeiro projeto com React Native
* **Desafio 6:** Primeiro projeto com React Native

Este projeto compila um ambiente de módulo e desafio.

---

## Nota do desenvolvedor

Este diretório contém a resolução do módulo/desafio **FirstReactApp** proposto no bootcamp da turma GoStack 10, as instruções sobre o que se espera no cumprimento deste desafio encontram-se abaixo na seção [Sobre o desafio](#sobre-o-desafio) e estão descritas do mesmo modo como foram fornecidas aos participantes do bootcamp. Por este projeto se tratar de um compilado entre módulo e desafio, as instruções fornecidas abaixo correspondem somente ao proposto como desafio, e parte do princípio da existência de uma aplicação base que foi desenvolvido durante o módulo.
Para instruções sobre a instalação das dependências deste projeto consulte a seção Get Started no [README](../../README.md) do diretório raiz deste repositório.

## Sobre o desafio

Nesse desafio você adicionará novas funcionalidades na aplicação que desenvolvemos ao longo desse módulo.

### Funcionalidades

#### 1. Loading de repositórios

Adicione um indicator de loading utilizando `<ActivityIndicator />` antes de carregar a lista de repositórios favoritados na tela de detalhes do Usuário.

#### 2. Scroll infinito

Adicione uma funcionalidade de scroll infinito na lista de repositórios favoritados. Assim que o usuário chegar nos **20%** do final de lista, busque pelos items na próxima página e adicione na lista. Seu código ficará da seguinte forma:

```js
<Stars
  onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
  onEndReached={this.loadMore} // Função que carrega mais itens
  // Restante das props
>
```

Para requisitar uma nova página no Github utilize um parâmetro `page` no fim da URL:

```
https://api.github.com/users/diego3g/starred?page=2
```

#### 3. Pull to Refresh

Adicione uma funcionalidade para quando o usuário arrastar a listagem de repositórios favoritados pra baixo atualize a lista resetando o estado, ou seja, volte o estado da paginação para a página 1 exibindo apenas os 30 primeiros itens.

A funcionalidade "Pull to Refresh" existe por padrão na FlatList e pode ser implementada através do seguinte código:

```js
<Stars
  onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
  refreshing={this.state.refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
  // Restante das props
>
```

#### 4. WebView

Crie uma nova página na aplicação que vai ser acessada quando o usuário clicar em um repositório favoritado, essa página deve conter apenas o Header da aplicação. O conteúdo da página será uma WebView, ou seja, um browser integrado que exibe o atributo `html_url` presente no objeto do repositório que vem da API do Github.

Documentação de utilização da [WebView](https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md).

Exemplo de código:

```js
<WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />
```

Resultado:

![WebView](../../.github/firstReactApp.png)
