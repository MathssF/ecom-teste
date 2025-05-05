import { limitsData } from '../tables/interfaces';
import {
  TrendingResult,
  TrendingCoupled,
  TrendingList,
  TrendingListWithPages,
} from '../tables/results/trends.interfaces';
import { set_time_window } from '../tables/variables';
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

  private getUrl(mode?: number): string {
    if (mode) {
      this.time_window = set_time_window[mode - 1];
    }
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

  public async getTrendingMovies(mode: number, data?: limitsData): Promise<
    // TrendingResult[] | TrendingCoupled[] | TrendingList | TrendingListWithPages
    any [] | any
  > {
    let allMovies: any[] = [];
    let allPages: number[] = [];
    let resultsPages: any[] = [];
    let coupledData = [0, 0];

    let page = 1;
    let maxItems = 250;
    let maxPages = 13;

    if (mode !== 1 && mode !== 2) {
      throw new Error('O :mode precisa ser ou 1, ou 2');
    }
    if (data?.setLimitItems && data.limitItems && data.limitItems > 0 && data.limitItems <= 1000) {
      maxItems = data.limitItems;
    }
    if (data?.setLimitPages && data.limitPages && data.limitPages > 0 && data.limitPages <= 50) {
      maxPages = data.limitPages;
    }
    if (data?.setLang && data.chooseLang) {
      this.language = data.chooseLang;
    }

    while (page <= maxPages && allMovies.length < maxItems) {
      const response = await fetch(`${this.getUrl()}&page=${page}`, this.getOptions());
      const json: any = await response.json();

      if (data?.resultModeByPage) {
        resultsPages.push(json);
      }

      if (json.total_pages && json.total_pages > coupledData[0]) {
        coupledData[0] = json.total_pages;
      }
      if (json.total_results && json.total_results > coupledData[1]) {
        coupledData[1] = json.total_results;
      }

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

        if (data?.frontEndPage || data?.dev || data?.persistence) {
          movieData.page = page;
        }

        if (data?.dev || data?.persistence) {
          const globalIndex = allMovies.length + index + 1;
          movieData.rank = globalIndex;
          movieData.rankPage = globalIndex - (20 * (page - 1));
        }

        if (data?.showFullApi) {
          if (data?.frontEndPage || data?.dev || data?.persistence) {
            movie.page = page;
          }
          if (data?.dev || data?.persistence) {
            const globalIndex = allMovies.length + index + 1;
            movie.rank = globalIndex;
            movie.rankPage = globalIndex - (20 * (page - 1));
          }
          return movie;
        }

        return movieData;
      });

      allMovies = [...allMovies, ...movies];

      if (allMovies.length >= maxItems) break;
      if (data?.returnPageList) {
        allPages.push(page);
      }
      page++;
    }
    if (data?.resultModeByPage) {
      return resultsPages;
    }
    if (data.returnPageList) {
      const resultData = {
        pages: allPages,
        movies: allMovies,
        total_pages: coupledData[0],
        total_results: coupledData[1]
      };
      return resultData;
    }

    return allMovies;
  }

  public async getTrendByPage(mode: number, page: number, data?: limitsData): Promise<any> {
    if (data?.setLang && data.chooseLang) {
      this.language = data.chooseLang;
    }
    const response = await fetch(`${this.getUrl(mode)}&page=${page}`, this.getOptions());
    return await response.json();
  }
}