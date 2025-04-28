import { limitsData } from '../tables/interfaces';
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

  public async getTopRatedMovies(data?: limitsData): Promise<any[]> {
    let allMovies: any[] = [];

    let page = 1;
    let totalPages = 1;
    let maxItems = 250;
    let maxPages = 13;

    if (data?.setLimitItems && data.limitItems && data.limitItems > 0 && data.limitItems <= 1000) {
      maxItems = data.limitItems;
    }
    if (data?.setLimitPages && data.limitPages && data.limitPages > 0 && data.limitPages <= 50) {
      maxPages = data.limitPages;
    }

    // while (allMovies.length < 250 && page <= totalPages) {
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
    //     page: page,
    //     rank: allMovies.length + 1,
    //     rankPage: (allMovies.length + 21 - (20 * page))
    //   }));
  
    while (page <= totalPages && page <= maxPages && allMovies.length < maxItems) {
      const response = await fetch(`${this.getUrl()}&page=${page}`, this.getOptions());
      const json: any = await response.json();

      const movies = json.results.map((movie: any, index: number) => {
        const movieData: any = {
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
        };

        // Só adiciona page/rank/pageRank se dev for true
        if (data?.dev) {
          const globalIndex = allMovies.length + index + 1;
          movieData.page = page;
          movieData.rank = globalIndex;
          movieData.pageRank = globalIndex - (20 * (page - 1));
        }

        return movieData;
      });

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
