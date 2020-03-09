<h1 align="center">
    <img alt="GoStack" src="githubAssets/bootcamp-header.png" />
</h1>

<h3 align="center">
  Repositório de projetos do bootcamp GoStak!
</h3>

<p align="center">
  <a href="#get-started">Get Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sobre-o-repositório">Sobre o repositório</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

## Get Started

Esta sessão destina-se a esclarecer o processo de instalação das ferramentas necessárias para executar os projetos postados neste repositório. Porém, dado o fato dos prjetos ainda estarem em andamento, as ferramentas para a sua execução são mutáveis, deste modo, esta sessão permanecerá vazia até a postagem do último projeto do bootcamp, após isto as instruções desta sessão serão liberados.

## Sobre o repositório

Este repositório contém todos os projetos elaborados nos módulos do bootcamp GoStack 10.

A estrutura de pastas criadas aqui seguem o modelo de monorepo, isto significa que este é um repositório único que possuí vários projetos separados em pastas, estas pastas estão dentro do diretório `packages` e correspondem a um projeto desenvolvido em um ou mais módulos.

Todos os projetos possuem dependências de pacotes NPM, e muitas destas dependências são compartilhadas entre os projetos, por conta disso este monorepo segue a estrutura de gerenciamento de monorepos do yarn, garantindo que os mesmos pacotes não sejam baixados para cada um dos diretórios de dasafios existentes, tornando a estrutura do repositório mais limpa e clara. Para saber mais sobre monorepos com yarn acesse [Workspaces in Yarn](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

O fato dos diretórios dos projetos estarem organizados na estrutura de monorepos não muda o modo como estes são executados. Os diretórios dos projetos possuem seus próprios arquivos de configurações de dependências e ferramentas atualizadas, e são executados individualmente do mesmo modo que qualquer outro projeto do tipo…

Execute o comando `yarn` no diretório raiz desse repositório para baixar as dependências de todos os projetos, em seguida acesse o diretório do projeto desejado e execute o comando de inicialização do projeto, este pode ser `yarn dev`, `yarn dev:debug`, `yarn start` ou outro. Consulte o arquivo package.json de cada diretório para tomar conhecimento dos scripts disponíveis.

Todos os diretórios com projetos possuem o seu próprio arquivo READMER.md, este arquivo serve para descrever as tarefas de cada um dos projetos e quaisquer outras informações relevantes para os próprios.

Alguns arquivos são únicos para este repositório e não se repetem para os diretórios dos projetos, estes arquivos são:
- `.editorconfig`: Arquivo que contém as especificações da IDE de desenvolvimento para a padronização do código;
- `.gitignore`: Arquivo de configuração do Git responsável por ignorar alterações em arquivos ou diretórios específicos que não devem ser “comitados” neste diretório;
- `.prettierrc`: Arquivo de sobreposição das configurações padrões do Prettier;
- `LICENSE.md`: Arquivo que esclarece o tipo de licença usada neste projeto, a esta se aplica a todos os arquivos do repositório;
- `yarn.lock`: Arquivo semelhante ao package-lock.json mas referente ao yarn ao invés do NPM.
- `githubAssets`: Diretório que contém as imagens utilizadas para a elaboração dos arquivos README.md de todos os projetos e deste próprio documento;
- `insomniaApiTest`: Diretório que contém as exportações dos teste das rotas dos desafios realizados por meio do Insomnia, mais sobre essa ferramenta em [insomnia.rest](https://insomnia.rest/)

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

by Mauricio Redmerski André
