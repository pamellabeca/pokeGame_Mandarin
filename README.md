# PokeGame Mandarin

PokeGame Mandarin é um projeto web uma cujo objetivo foi criar uma página e consumir uma API da Agência Mandarin, e renderizar na tela da forma que o desenvolvedor achasse melhor (seja criativo!).

Essa API devolve alguns Pokémons e informações como: nome, link da imagem, link da imagem de fundo e categoria do pokémon. A minha ideia veio de uma mistura de muitos jogos presentes na minha vida e decidi transformar em um pouco de cada deles.

## Estrutura do Diretório

A estrutura do projeto é organizada da seguinte forma:
```
PokeGame_Mandarin/
│
├── assets/
│   ├── audios/           # Arquivos de áudio utilizados no projeto
│   └── images/           # Imagens utilizadas no projeto
│
├── css/                  # Arquivos CSS para estilização das páginas
│   ├── floatMessage.css
│   ├── initialPage.css
│   ├── intro.css
│   └── sortPokemon.css
│
├── html/                 # Arquivos HTML para as diferentes páginas do projeto
│   ├── initialPage.html
│   ├── intro.html
│   └── sortPokemon.html
│
├── js/                   # Arquivos JavaScript para a funcionalidade das páginas
│   ├── floatMessage.js
│   ├── initialPage.js
│   ├── intro.js
│   └── sortPokemon.js
│
├── .gitattributes
├── index.html            # Página inicial do projeto
└── README.md             # Este arquivo
```
## Funcionalidades

- **floatMessage**: Módulo para exibir mensagem flutuante do avatar na tela.
- **initialPage**: Página inicial com um background personalizado.
- **intro**: Página de introdução ao jogo.
- **sortPokemon**: Página onde o usuário pode gerar um Pokémon aleatório e visualizar suas informações.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura das páginas.
- **CSS3**: Para estilização das páginas.
- **JavaScript**: Para manipulação do DOM e interação com a API.

## API

A aplicação faz requisições a uma API para obter informações sobre os Pokémon. A URL da API é:

```
https://dev-api-teste.mandarin.com.br/pokemons
```

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/pokegame_mandarin.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd pokegame_mandarin
   ```

3. Abra o arquivo `index.html` no seu navegador para visualizar a página inicial ou acesse o [Deploy do projeto no Vercel](https://poke-game-mandarin.vercel.app/).


## Créditos

- **Avatar do FloatMessage**: Criado por Pamella Rebeca.
- **Background da InitialPage**: Criado por Pamella Rebeca através do vídeo tutorial do [Wellington Coloni - Tutoriais de Blender 3D](https://youtube.com/playlist?list=PLuGCQAHfIDDvf6fn1Y0oLL1hDfeo_gsBi&si=PAkH8EcK3h6zKVQ8).

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
