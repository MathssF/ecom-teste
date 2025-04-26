import * as dotenv from 'dotenv';
dotenv.config();

export class TrendingMoviesAPI {
  private time_window: string;
  private language: string;
  private apiKey: string;

  constructor(time_window: string = 'day', language: string = 'en-US') {
    this.time_window = time_window;
    this.language = language;
    this.apiKey = process.env.API_KEY!;
  }

  private getUrl(): string {
    return `https://api.themoviedb.org/3/trending/movie/${this.time_window}?language=${this.language}`;
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

  public async getTrendingMovies(): Promise<any[]> {
    let allMovies: any[] = [];

    for (let page = 1; page <= 13; page++) {
      const response = await fetch(`${this.getUrl()}&page=${page}`, this.getOptions());
      const json: any = await response.json();

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

      if (allMovies.length >= 250) break;
    }

    return allMovies.slice(0, 250);
  }
}