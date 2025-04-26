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

    // for (let page = 1; page <= 13; page++) {
    //   const response = await fetch(`${this.getUrl()}&page=${page}`, this.getOptions());
    //   const json: any = await response.json();

    //   const movies = json.results.map((movie: any) => ({
    //     id: movie.id,
    //     title: movie.title,
    //     original_title: movie.original_title,
    //     original_language: movie.original_language,
    //     vote_count: movie.vote_count,
    //     vote_average: movie.vote_average,
    //     popularity: movie.popularity,
    //     adult: movie.adult,
    //     release_date: movie.release_date,
    //     genre_ids: movie.genre_ids,
    //     poster_path: movie.poster_path,
    //   }));

    //   allMovies = [...allMovies, ...movies];

    //   if (allMovies.length >= 250) break;
    // }

    const pages = Array.from({ length: 13 }, (_, i) => i + 1);
    const requests = pages.map(page => fetch(`${this.getUrl()}&page=${page}`, this.getOptions()));

    const responses = await Promise.all(requests);

    const jsonPromises = responses.map(response => response.json());
    const jsonResults = await Promise.all(jsonPromises);

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

    return allMovies.slice(0, 250);
  }
}