import { Injectable } from '@nestjs/common';
import { MovieDetailsAPI } from '../../../global/fetchTMDB/details';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trendings';
import { limitsData } from '../../../global/tables/interfaces';
import { ApiTools } from './tools/api.tools';
import { Genres } from '../../../global/tables/seed.tables';
import { GenresType } from './tools/api.interfaces';
import { MovieDetails } from '../../../global/tables/results/details.interfaces';
import {
  TopRatedResult,
  TopRatedList
} from '../../../global/tables/results/top-rated.interfaces';
import {
  TrendingResult,
  TrendingList
} from '../../../global/tables/results/trends.interfaces';

@Injectable()
export class ApiService {
  constructor(
    private readonly movieDetailAPI: MovieDetailsAPI,
    private readonly topRatedAPI: TopRatedMoviesAPI,
    private readonly trendingsAPI: TrendingMoviesAPI,
    private readonly apiTools: ApiTools,
  ) {}

  async callTopRated(data?: limitsData) {
    return await this.topRatedAPI.getTopRatedMovies(data);
  }

  async callTopPage(page: number, data?: limitsData) {
    return await this.topRatedAPI.getTopsByPage(page, data);
  }

  async callTopGenres(data?: limitsData) {
    let genreRef: GenresType | null = null;
    if (data.setGenre && data.chooseGenreRef) {
      genreRef = this.apiTools.validadeGenreRef({
        chooseGenreRef: data.chooseGenreRef 
      });
    }

    const tops = await this.topRatedAPI.getTopRatedMovies({
      ...(data ?? {}),
      frontEndPage: data?.frontEndPage !== undefined ? data.frontEndPage : true,
      setLimitItems: true,
      limitItems: data?.limitItems !== undefined ? data.limitItems : 250,
    });

    const results = this.extractMoviesList(tops);
    return this.apiTools.filterByGenres(results, genreRef);
  }

  async callTopsByYear(data?: limitsData) {
    let yearRef: string | null = null;
    const currentYear = new Date().getFullYear();
    if (data.setYear && data.chooseYear) {
      const year = Number(data.chooseYear);
      const isValid = !isNaN(year)
        && Number.isInteger(year)
        && year >= 1800
        && year <= currentYear;
      if (isValid) {
        yearRef = data.chooseYear.toString();
      }
    }

    const tops = await this.topRatedAPI.getTopRatedMovies({
      ...(data ?? {}),
      frontEndPage: data?.frontEndPage !== undefined ? data.frontEndPage : true,
      setLimitItems: true,
      limitItems: data?.limitItems !== undefined ? data.limitItems : 250,
    });

    const results = this.extractMoviesList(tops);
    return this.apiTools.filterByYear(results, yearRef);
  }

  async callTrendings(mode: number, data?: limitsData) {
    return await this.trendingsAPI.getTrendingMovies(mode, data);
  }

  async callTrendPage(mode: number, page: number, data?: limitsData) {
    return await this.trendingsAPI.getTrendByPage(mode, page, data);
  }

  async callDetails(id: string, data?: limitsData) {
    const movieId = Number(id);
    return await this.movieDetailAPI.getMovieDetails(movieId, data);
  }

  callTopsInTrends(tops: any, trends: any) {
    const topResults = this.extractMoviesList(tops);
    const trendsResults = this.extractMoviesList(trends);
    return this.apiTools.checkEach(topResults, trendsResults);
  }

  private extractMoviesList(data: any): any[] {
    if (Array.isArray(data)) {
      return data;
    } else if (data && Array.isArray(data.movies)) {
      return data.movies;
    } else if (data && Array.isArray(data.results)) {
      return data.results;
    } else {
      throw new Error('Formato inesperado: não foi possível extrair os filmes');
    }
  }
}
