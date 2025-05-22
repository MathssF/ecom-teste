import { limitsData } from '../tables/interfaces';
import {
  TrendingResult,
  TrendingCoupled,
  TrendingList,
  TrendingListWithPages,
} from '../tables/results/trends.interfaces';
import { set_time_window } from '../tables/variables';
// import * as dotenv from 'dotenv';
// dotenv.config();

export class TrendingMoviesAPI {
  private time_window: string;
  private language: string;
  private apiKey: string;

  constructor(time_window: string = 'day', language: string = 'en-US') {
    this.time_window = time_window;
    this.language = language;
    this.apiKey = process.env.NEXT_PUBLIC_API_KEY!;
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
  TrendingResult[] | TrendingCoupled[] | TrendingList[] | TrendingListWithPages | any[]
> {
  let allMovies: TrendingResult[] = [];
  let allPages: number[] = [];
  let resultsPages: TrendingList[] = [];
  let coupledData = [0, 0]; // [total_pages, total_results]

  let page = 1;
  let totalPages = 1;
  let maxItems = 400;
  let maxPages = 20;

  // Validação e ajustes
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

  while (page <= totalPages && page <= maxPages && allMovies.length < maxItems) {
    const response = await fetch(`${this.getUrl(mode)}&page=${page}`, this.getOptions());
    const json: any = await response.json();

    if (json.total_pages && json.total_pages > coupledData[0]) {
      coupledData[0] = json.total_pages;
    }
    if (json.total_results && json.total_results > coupledData[1]) {
      coupledData[1] = json.total_results;
    }

    const movies: TrendingResult[] = json.results.map((movie: TrendingResult, index: number) => {
      if (data?.frontEndPage || data?.dev || data?.persistence) {
        movie.page = page;
      }
      if (data?.dev || data?.persistence) {
        const globalIndex = allMovies.length + index + 1;
        movie.rank = globalIndex;
        movie.rankPage = globalIndex - (20 * (page - 1));
      }
      return movie;
    });

    if (data?.returnPageList) {
      allPages.push(page);
      allMovies.push(...movies);
    }

    if (data?.resultModeByPage) {
      const pageResult: TrendingList = {
        page,
        results: movies,
        total_pages: json.total_pages,
        total_results: json.total_results,
      };
      resultsPages.push(pageResult);
    }

    if (!data?.returnPageList && !data?.resultModeByPage) {
      allMovies.push(...movies);
    }

    totalPages = json.total_pages;
    if (allMovies.length >= maxItems) break;
    page++;
  }

  if (data?.returnPageList) {
    const resultData: TrendingListWithPages = {
      pages: allPages,
      movies: allMovies,
      total_pages: coupledData[0],
      total_results: coupledData[1]
    };
    return resultData;
  }

  if (data?.resultModeByPage) {
    return resultsPages;
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