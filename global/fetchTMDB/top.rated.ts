import { setLang } from '../variables';

let page: number = 1;
let lang: string = 'en-US';

const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.API_KEY!
  }
};

async function getTopRatedMovies() {
  let allMovies: any[] = [];

  // Iterando pelas páginas de 1 a 13
  for (let page = 1; page <= 13; page++) {
    const response = await fetch(`${url}&page=${page}`, options);
    const json = await response.json();

    // Filtrando os dados que você quer
    const movies = json.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      original_language: movie.original_language,
      vote_count: movie.vote_count,
      vote_average: movie.vote_average,
      popularity: movie.popularity,
      adult: movie.adult,
      release_date: movie.release_date,
      genre_ids: movie.genre_ids,
      poster_path: movie.poster_path,
    }));

    allMovies = [...allMovies, ...movies];

    // Se já tivermos 250 elementos, podemos parar
    if (allMovies.length >= 250) break;
  }

  // Garantir que vamos retornar exatamente 250 itens
  return allMovies.slice(0, 250);
}

getTopRatedMovies()
  .then(movies => console.log(movies))
  .catch(err => console.error(err));
