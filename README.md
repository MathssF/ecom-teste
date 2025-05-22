# 🎬 ecom-test

## 🚀 Introdução

**ecom-test** é um projeto desenvolvido com foco em estudos, prática e demonstração de conhecimentos em desenvolvimento backend e frontend, utilizando dados do **The Movie Database (TMDb)**.

Este projeto simula um ecossistema de APIs próprias, onde dados sobre filmes mais bem avaliados (**Top Rated Movies**) e filmes em tendência (**Trending Movies**) são consumidos da API pública do TMDb, tratados, armazenados e disponibilizados através de uma API personalizada.

🔗 Referências da API original:  
- [Top Rated Movies](https://developer.themoviedb.org/reference/movie-top-rated-list)  
- [Trending Movies](https://developer.themoviedb.org/reference/trending-movies)  

---

## 🎯 Objetivo do Projeto

O principal objetivo é **praticar conceitos de APIs REST, persistência de dados, manipulação de informações externas e construção de uma interface frontend para consumir essas APIs.**

Este projeto serve tanto como **portfólio técnico**, quanto como ambiente de estudo para tópicos como:
- Consumo de APIs externas
- Criação de APIs próprias com NestJS
- Tratamento e persistência de dados (filmes, tendências, gêneros, idiomas, empresas)
- Separação clara entre APIs para desenvolvimento, consumo direto e dados tratados
- Organização de rotas e versionamento de API
- Consumo das APIs via Frontend (React, Next ou outro)

---

## 🔗 Sobre os Arquivos de Rotas

### 📄 **Rotas do Back End**

Temos Arquivo que documenta todas as **rotas da API Backend**, chamado **./global/TextsBlocks/RotasBack.md**.

- Rotas diretas, que fazem apenas proxy dos dados brutos do TMDb
- Rotas com persistência de dados (salvar filmes, trends, detalhes)
- Rotas para manipular dados auxiliares (gêneros, idiomas, companhias)

✔️ Este arquivo serve para quem for utilizar ou testar a API Backend diretamente, seja via Postman, Insomnia, ou integração via código.

---

### 📄 **Rotas do Front End**

Temos o Arquivo que documenta as rotas disponíveis no **Frontend**, ou seja, os endpoints e caminhos que o sistema expõe para navegação na interface.

Ele esta na rota **./global/TextsBlocks/RotasFront.md**

Inclui informações como:
- Rotas de listagem de filmes
- Rotas de visualização de detalhes
- Rotas específicas por gênero ou tendência
- Quais parâmetros são aceitos nas rotas da interface

As rotas são: 

http://localhost:3002/

http://localhost:3002/top-list

http://localhost:3002/top-by-genres

http://localhost:3002/top-in-trends

✔️ Esse documento serve tanto para desenvolvedores frontend entenderem a navegação, quanto para documentar como os usuários acessam as diferentes funcionalidades da aplicação.

---

## 🗺️ Estrutura Geral da API

Claro que tamvém passaremos as APIs aqui, de forma resumida.

Temos primeiramente a API Direta, ela faz uma busca pelos links das chamadas, Top-rated e trendings.
Após isto ela faz os tratamentos e devolve a resposta.

GET 'http://localhost:3000/api/movie/:movieId'

GET 'http://localhost:3000/api/movie/1895'

GET 'http://localhost:3000/api/top-rated'

GET 'http://localhost:3000/api/top-rated/:page'

GET 'http://localhost:3000/api/top-rated/1'

GET 'http://localhost:3000/api/top-rated/2'

GET 'http://localhost:3000/api/trends'

GET 'http://localhost:3000/api/trends/:page'

GET 'http://localhost:3000/api/trends/1'

Temos também uma persistência, que esta organizada em três principais grupos de rotas:

1. **API Basic**  
Manipula dados auxiliares como gêneros, idiomas e companhias.

GET http://localhost:3000/api/basic/genres

GET http://localhost:3000/api/basic/langs

GET http://localhost:3000/api/basic/companies

GET http://localhost:3000/api/basic/genre/:id

GET http://localhost:3000/api/basic/lang/:id

GET http://localhost:3000/api/basic/company/:id

2. **API Movies**  
Gerencia os filmes: cadastro, detalhes, listagens e agrupamento por gêneros.

POST http://localhost:3000/api/movies

POST http://localhost:3000/api/movies/detail

GET http://localhost:3000/api/movies/:id

GET http://localhost:3000/api/movies/detail/:id

GET http://localhost:3000/api/movies/list/movies

GET http://localhost:3000/api/movies/list/details

PATCH http://localhost:3000/api/movies/update/:id

GET http://localhost:3000/api/movies/genres/:id

GET http://localhost:3000/api/movies/by-genre/:id

GET http://localhost:3000/api/movies/list/by-genres?limit=10

3. **API Trendings**  
Gerencia as tendências (trending entries) e suas relações com os filmes.

POST http://localhost:3000/api/trendings/entry

POST http://localhost:3000/api/trendings/story

GET http://localhost:3000/api/trendings/entry/:id

GET http://localhost:3000/api/trendings/story/:movieId/:trendId

GET http://localhost:3000/api/trendings/movies/:id

GET http://localhost:3000/api/trendings/trend-movies/:id

POST http://localhost:3000/api/trendings/genres

DELETE http://localhost:3000/api/trendings/entry/:id

DELETE http://localhost:3000/api/trendings/entries


---

## 💡 Como Utilizar

Clone o projeto.

Para usar somente o Front End, é o comando:

npm run dev:front


Para usar somente o Back End, é o comando:

npm run dev:back