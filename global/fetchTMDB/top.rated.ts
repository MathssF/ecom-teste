import * as dotenv from 'dotenv';
dotenv.config();

interface Movie {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
  adult: boolean;
  release_date: string;
  genre_ids: number[];
  poster_path: string;
}

interface TopRatedMoviesResponse {
  results: Movie[];
}

export class TopRatedMoviesAPI {
  private language: string;
  private apiKey: string;

  constructor(language: string = 'en-US') {
    this.language = language;
    this.apiKey = process.env.API_KEY!;
  }

  private getUrl(): string {
    return `https://api.themoviedb.org/3/movie/top_rated?language=${this.language}`;
  }

  private getOptions(): RequestInit {
    return {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: this.apiKey,
      },
    };
  }

  public async getTopRatedMovies(): Promise<any[]> {
    let allMovies: any[] = [];
    console.log('Entrou no top rated')

    const pages = Array.from({ length: 13 }, (_, i) => i + 1);
    const requests = pages.map(page => {
      console.log(`Fazendo requisição para a página ${page}`);
      return  fetch(`${this.getUrl()}&page=${page}`, this.getOptions())
        .then(response => {
          console.log(`Resposta recebida para a página ${page}:`, response.status);
          return response.json();
        })
        .then(json => {
          console.log(`Dados da página ${page}:`, json);
          return json;
        });
    });

    console.log('Antes do Response');

    const responses = await Promise.all(requests);

    // const jsonPromises = responses.map(response => response.json());
    const jsonResults = await Promise.all(requests);  //(jsonPromises);

    for (const json of jsonResults) {
      const { results } = json as TopRatedMoviesResponse;
      const movies = results.map((movie: any) => ({
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
      if (allMovies.length >= 250) break;
    }

    console.log('ALL MOVIES: ', allMovies)

    return allMovies.slice(0, 250);
  }
}