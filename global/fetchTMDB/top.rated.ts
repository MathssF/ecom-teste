import * as dotenv from 'dotenv';
dotenv.config();

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

    let page = 1;
    let totalPages = 1;

    while (allMovies.length < 250 && page <= totalPages) {
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

      totalPages = json.total_pages;
      page++;
    }

    return allMovies.slice(0, 250)
  }

  public async getTopsByPage(page: number): Promise<any> {
    const response = await fetch(`${this.getUrl()}&page=${page}`, this.getOptions());
    return await response.json();
  }
}
