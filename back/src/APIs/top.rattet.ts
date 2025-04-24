let page: number = 1;
let lang: string = 'en-US';
const setLang = [
  'en-US',   // Inglês (padrão)
  'pt-BR',   // Português (Brasil)
  'es-ES',   // Espanhol (Espanha)
  'fr-FR',   // Francês
  'de-DE',   // Alemão
  'it-IT',   // Italiano
  'ja-JP',   // Japonês
  'ko-KR',   // Coreano
  'zh-CN',   // Chinês (Simplificado)
  'ru-RU',   // Russo
];

const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.API_KEY
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
//

export {};