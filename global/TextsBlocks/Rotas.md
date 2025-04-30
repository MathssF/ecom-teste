## Api Direta:

Rotas da API que apenas retornam as informações cruas do TMDb sem trata-las na persistência nem nada.

GET http://localhost:3000/api/movie/:movieId // Básico
GET http://localhost:3000/api/movie/1895 // Exemplo: Star Wars III

## Dev:

Rotas para Desenvolvimento, teste, e apresentação, e não para Produção

GET 'http://localhost:3000/dev/top-rated'
GET 'http://localhost:3000/dev/trends/1'
GET 'http://localhost:3000/dev/trends/2'
GET 'http://localhost:3000/dev/movie/:movieId'

