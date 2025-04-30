## Api Direta:

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

Pode opicionalmente adicionar um corpo a requisição:

{
  
}

## Dev:

Rotas para Desenvolvimento, teste, e apresentação, e não para Produção

GET 'http://localhost:3000/dev/top-rated'
GET 'http://localhost:3000/dev/trends/1'
GET 'http://localhost:3000/dev/trends/2'
GET 'http://localhost:3000/dev/movie/:movieId'

