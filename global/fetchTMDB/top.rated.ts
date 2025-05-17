import { limitsData } from '../tables/interfaces';
import {
  TopRatedResult,
  TopRatedCoupled,
  TopRatedList,
  TopRatedListWithPages,
} from '../tables/results/top-rated.interfaces';
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

  public async getTopRatedMovies(data?: limitsData): Promise<
  any[] | any |
  TopRatedCoupled[] | TopRatedResult[] | TopRatedList | TopRatedListWithPages
> {
    let allMovies: TopRatedResult[] = [];
    let allPages: number[] = [];
    let resultsPages: TopRatedList[] = [];
    let coupledData = [0, 0]; // [total_pages, total_results]
  
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
  
      if (json.total_pages && json.total_pages > coupledData[0]) {
        coupledData[0] = json.total_pages;
      }
      if (json.total_results && json.total_results > coupledData[1]) {
        coupledData[1] = json.total_results;
      }
  
      const movies: TopRatedResult[] = json.results.map((movie: TopRatedResult, index: number) => {
        if (data?.frontEndPage || data?.dev) {
          movie.page = page;
        }
        if (data?.dev) {
          const globalIndex = allMovies.length + index + 1;
          movie.rank = globalIndex;
          movie.rankPage = globalIndex - (20 * (page - 1));
        }
        return movie;
      });
  
      // Prioridade 1: retornar TopRatedListWithPages
      if (data?.returnPageList) {
        allPages.push(page);
        allMovies.push(...movies);
      }
  
      // Prioridade 2: retornar TopRatedList[]
      if (data?.resultModeByPage) {
        const pageResult: TopRatedList = {
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
      const resultData: TopRatedListWithPages = {
        pages: allPages,
        movies: allMovies,
        total_pages: coupledData[0],
        total_results: coupledData[1],
      };
      return resultData;
    }
  
    if (data?.resultModeByPage) {
      return resultsPages; // TopRatedList[]
    }
  
    return allMovies; // TopRatedResult[]
  }

  public async getTopsByPage(page: number, data?: limitsData): Promise<any> {
    if (data?.setLang && data.chooseLang) {
      this.language = data.chooseLang;
    }
    const response = await fetch(`${this.getUrl()}&page=${page}`, this.getOptions());
    return await response.json();
  }
}
