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
    if (data?.setLang && data.chooseLang) {
      this.language = data.chooseLang;
    }
  
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

        if (data?.dev) {
          const globalIndex = allMovies.length + index + 1;
          movieData.page = page;
          movieData.rank = globalIndex;
          movieData.rankPage = globalIndex - (20 * (page - 1));
        }

        if (data?.showFullApi) {
          if (data?.dev) {
            const globalIndex = allMovies.length + index + 1;
            movie.page = page;
            movie.rank = globalIndex;
            movie.rankPage = globalIndex - (20 * (page - 1));
          }
          return movie;
        }

        return movieData;
      });

      allMovies = [...allMovies, ...movies];

      totalPages = json.total_pages;
      if (allMovies.length >= maxItems) break;
      page++;
    }

    return allMovies.slice(0, maxItems);
  }

  public async getTopsByPage(page: number, data?: limitsData): Promise<any> {
    if (data?.setLang && data.chooseLang) {
      this.language = data.chooseLang;
    }
    const response = await fetch(`${this.getUrl()}&page=${page}`, this.getOptions());
    return await response.json();
  }
}
