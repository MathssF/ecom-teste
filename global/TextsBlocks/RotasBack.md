# Links do Back End.

## Api Direta:

### Rotas:

Rotas da API que apenas retornam as informações cruas do TMDb sem trata-las na persistência nem nada.

GET 'http://localhost:3000/api/movie/:movieId'    // Procure um por ID
GET 'http://localhost:3000/api/movie/1895'        // Exemplo: Star Wars III
GET 'http://localhost:3000/api/top-rated'         // Veja a lista dos filmes mais bem avaliados
GET 'http://localhost:3000/api/top-rated/:page'   // Veja a Lista, Escolha a página
GET 'http://localhost:3000/api/top-rated/1'       // Exemplo, página 1
GET 'http://localhost:3000/api/top-rated/2'       // Exemplo, página 2
GET 'http://localhost:3000/api/trends'            // Veja a lista dos filmes do momento
GET 'http://localhost:3000/api/trends/:page'      // Veja a Lista, Escolha a página
GET 'http://localhost:3000/api/trends/1'          // Exempĺo, página 1

### Infos:

Pode opicionalmente adicionar um corpo a requisição:

{
  showFullApi: boolean,
  setLimitItems: boolean,
  setLimitPages: boolean,
  limitItems: number,
  limitPages: number,
  setLang: boolean,
  chooseLang: string,
}

Todas são opicionais. Mas com as seguintes lógicas:

showFullApi: Mostra informações a mais do que apenas as básicas.
(As que tem páginas, já são true por padrão)

setLimitItems + limitItems: Para requisições '/top-rated' e '/trends',
define o limite de itens no resultado.

setLimitPages + limitPages: Para requisições '/top-rated' e '/trends',
define o limite de pages no resultado.

setLang + chooseLang: Para qualquer requisição, define a lingua usada.

## Api Basic:

GET http://localhost:3000/api/basic/genres
→ Lista todos os gêneros cadastrados.

GET http://localhost:3000/api/basic/langs
→ Lista todos os idiomas cadastrados.

GET http://localhost:3000/api/basic/companies
→ Lista todas as companhias cadastradas.

GET http://localhost:3000/api/basic/genre/:id
→ Busca um gênero pelo ID.

GET http://localhost:3000/api/basic/lang/:id
→ Busca um idioma pelo ID.

GET http://localhost:3000/api/basic/company/:id
→ Busca uma companhia pelo ID.

## Api Movies:

POST http://localhost:3000/api/movies
→ Cria um filme.

POST http://localhost:3000/api/movies/detail
→ Cria um detalhe para um filme.

GET http://localhost:3000/api/movies/:id
→ Retorna um filme pelo ID.

GET http://localhost:3000/api/movies/detail/:id
→ Retorna o detalhe de um filme pelo ID.

GET http://localhost:3000/api/movies/list/movies
→ Lista todos os filmes cadastrados.

GET http://localhost:3000/api/movies/list/details
→ Lista todos os detalhes de filmes cadastrados.

PATCH http://localhost:3000/api/movies/update/:id
→ Atualiza um filme e/ou seu detalhe.

GET http://localhost:3000/api/movies/genres/:id
→ Retorna os gêneros de um filme específico.

GET http://localhost:3000/api/movies/by-genre/:id
→ Lista filmes que pertencem a um gênero específico.

GET http://localhost:3000/api/movies/list/by-genres?limit=10
→ Lista agrupada de filmes por gênero, com limite opcional.

## Api Trendings:

POST http://localhost:3000/api/trendings/entry
→ Cria uma entrada de trending (tendência).

POST http://localhost:3000/api/trendings/story
→ Adiciona uma história (ligação de filme com uma tendência).

GET http://localhost:3000/api/trendings/entry/:id
→ Retorna uma entrada de trending pelo ID.

GET http://localhost:3000/api/trendings/story/:movieId/:trendId
→ Retorna a história entre um filme e uma tendência.

GET http://localhost:3000/api/trendings/movies/:id
→ Retorna os filmes relacionados a uma entrada de trending.

GET http://localhost:3000/api/trendings/trend-movies/:id
→ Retorna todas as entradas (tendências) associadas a um filme.

POST http://localhost:3000/api/trendings/genres
→ Busca e agrupa informações de gêneros relacionados às trends enviadas no corpo.

DELETE http://localhost:3000/api/trendings/entry/:id
→ Deleta uma entrada específica de trending.

DELETE http://localhost:3000/api/trendings/entries
→ Deleta todas as entradas de trending.

## Dev:

Rotas para Desenvolvimento, teste, e apresentação, e não para Produção

GET  'http://localhost:3000/dev/movie/:movieId'   // Vê os dados do filme
POST 'http://localhost:3000/dev/movie/:movieId'   // Salva o filme na Persistência
GET  'http://localhost:3000/dev/top-rated'        // Vê a lista dos filmes mais bem avaliados
GET  'http://localhost:3000/dev/top-rated/:page'  // Vê a lista dos filmes, por página
GET  'http://localhost:3000/dev/top-rated/1'      // Vê a lista dos filmes, na página 1
POST 'http://localhost:3000/dev/top-rated'        // Salva os filmes na Persitência
GET  'http://localhost:3000/dev/trends'           // Vê a lista dos filmes do momento
GET  'http://localhost:3000/dev/trends/:page'     // Vê a lista dos filmes, por página
GET  'http://localhost:3000/dev/trends/1'         // Vê a lista dos filmes, na página 1
POST 'http://localhost:3000/dev/trends/:mode'     // Salva os filmes na Persitência, selecione o Mode
POST 'http://localhost:3000/dev/trends/1'         // Salva os filmes do dia
POST 'http://localhost:3000/dev/trends/2'         // Salva os filmes da semana

A rota DEV tem o mesmo corpo da rota API (Api Direta)

## Dev Global:

GET  'http://localhost:3003/movie/{id}'
GET  'http://localhost:3003/movie/1895'
GET  'http://localhost:3003/top-rated?limitItems=10&limitPages=2&chooseLang=en-US'
GET  'http://localhost:3003/top-rated?limitPages=20&chooseLang=pt-BR'
GET  'http://localhost:3003/top-rated?limitItems=300&chooseLang=pt-BR'
GET  'http://localhost:3003/top-rated/page/1'
GET  'http://localhost:3003/trending?mode=1&limitItems=10&limitPages=2&chooseLang=en-US'
GET  'http://localhost:3003/trending?mode=1&limitPages=20&chooseLang=pt-BR'
GET  'http://localhost:3003/trending?mode=1&limitItems=300&chooseLang=pt-BR'
GET  'http://localhost:3003/trending/page/1/1'
