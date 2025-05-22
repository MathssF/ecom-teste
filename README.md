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

### 📄 **RotasBack.md**

Arquivo que documenta todas as **rotas da API Backend**, tanto de desenvolvimento (`/dev`) quanto de produção (`/api`), incluindo:

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

✔️ Esse documento serve tanto para desenvolvedores frontend entenderem a navegação, quanto para documentar como os usuários acessam as diferentes funcionalidades da aplicação.

---

## 🗺️ Estrutura Geral da API

Temos primeiramente a API Direta, ela faz uma busca pelos links das chamadas, Top-rated e trendings.
Após isto ela 

Temos também uma persistência, que esta organizada em três principais grupos de rotas:

1. **API Basic**  
Manipula dados auxiliares como gêneros, idiomas e companhias.

2. **API Movies**  
Gerencia os filmes: cadastro, detalhes, listagens e agrupamento por gêneros.

3. **API Trendings**  
Gerencia as tendências (trending entries) e suas relações com os filmes.

Toda essa documentação detalhada você encontra no arquivo:  
📄 **./globa/TextsBlocks/RotasBack.md**

---

## 💡 Como Utilizar

### 🔧 Backend
- Clonar o projeto
- Configurar o arquivo `.env` com sua chave da API TMDb e configurações locais
- Rodar a API localmente (`npm run start:dev`)

### 🌐 Frontend
- Utilizar as rotas definidas no arquivo **RotasFront.md** para consumir os dados
- Navegar entre as páginas de filmes, trends e detalhes

---

## 🚧 Status

✅ Em desenvolvimento contínuo.  
O projeto está funcional para testes, desenvolvimento e demonstração de conceitos.

---
