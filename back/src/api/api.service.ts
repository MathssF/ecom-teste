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
    const tops = await this.topRatedAPI.getTopRatedMovies(data);
    return tops;
  }

  async callTopPage(page: number, data?: limitsData) {
    return await this.topRatedAPI.getTopsByPage(page, data)
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
    })
    console.log('tops: ', tops);
    let results: any[] = [];

    if (Array.isArray(tops)) {
      results = tops;
    } else if ('movies' in tops && Array.isArray(tops.movies)) {
      results = tops.movies;
    } else if ('results' in tops && Array.isArray(tops.results)) {
      results = tops.results;
    } else {
      throw new Error('Formato inesperado em tops: não foi possível extrair os filmes');
    }

    const genresTops = this.apiTools.filterByGenres(results, genreRef);
    return genresTops;
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
    })
    let results: any[] = [];

    if (Array.isArray(tops)) {
      results = tops;
    } else if ('movies' in tops && Array.isArray(tops.movies)) {
      results = tops.movies;
    } else if ('results' in tops && Array.isArray(tops.results)) {
      results = tops.results;
    } else {
      throw new Error('Formato inesperado em tops: não foi possível extrair os filmes');
    }

    const yearTops = this.apiTools.filterByYear(results, yearRef);
    return yearTops;

  }

  async callTrendings(mode: number, data?: limitsData) {
    const trends = await this.trendingsAPI.getTrendingMovies(mode, data);
    return trends;
  }

  async callTrendPage(mode: number, page: number, data?: limitsData) {
    return await this.trendingsAPI.getTrendByPage(mode, page, data);
  }

  async callDetails(id: string, data?: limitsData) {
    const movieId = Number(id);
    const details = await this.movieDetailAPI.getMovieDetails(movieId, data);
    return details;
  }

  callTopsInTrends(tops: any[], trends: any[]) {
    let topResults: any[] = [];
    let trendsResults: any[] = [];

    // Extrai os filmes de "tops"
    if (Array.isArray(tops)) {
      topResults = tops;
    } else if ('movies' in tops && Array.isArray(tops.movies)) {
      topResults = tops.movies;
    } else if ('results' in tops && Array.isArray(tops.results)) {
      topResults = tops.results;
    } else {
      throw new Error('tops não possui estrutura válida');
    }

    // Extrai os filmes de "trends"
    if (Array.isArray(trends)) {
      trendsResults = trends;
    } else if ('movies' in trends && Array.isArray(trends.movies)) {
      trendsResults = trends.movies;
    } else if ('results' in trends && Array.isArray(trends.results)) {
      trendsResults = trends.results;
    } else {
      throw new Error('trends não possui estrutura válida');
    }

    const TopsInTrends = this.apiTools.checkEach(topResults, trendsResults);
    return TopsInTrends;
  }
}
