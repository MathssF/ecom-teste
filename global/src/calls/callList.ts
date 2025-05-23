import { MovieDetailsAPI } from '../fetchTMDB/details';
import { TopRatedMoviesAPI } from '../fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../fetchTMDB/trendings';
import { limitsData } from '../tables/interfaces';
import { ApiTools } from '../tools/api.tools';
import { Genres } from '../tables/seed.tables';
import { GenresType } from '../tools/api.interfaces';
import { MovieDetails } from '../tables/results/details.interfaces';
import {
  TopRatedResult,
  TopRatedList
} from '../tables/results/top-rated.interfaces';
import {
  TrendingResult,
  TrendingList
} from '../tables/results/trends.interfaces';

export class CallLists {
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
    return await this.topRatedAPI.getTopsByPage(page, data);
  }

  async callTopGenres(data?: limitsData) {
    let genreRef: GenresType | null = null;
    if (data?.setGenre && data?.chooseGenreRef) {
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
    if (tops && typeof tops === 'object' && 'results' in tops) {
      const results = (tops as { results: any[] }).results;
      const genresTops = this.apiTools.filterByGenres(results, genreRef);
      return genresTops;
    } else {
      throw new Error('tops não possui propriedade "results"');
    }
  }

  async callTopsByYear(data?: limitsData) {
    let yearRef: string | null = null;
    const currentYear = new Date().getFullYear();
    if (data?.setYear && data?.chooseYear) {
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
    if (tops && typeof tops === 'object' && 'results' in tops) {
      const results = (tops as { results: any[] }).results;
      const yearTops = this.apiTools.filterByYear(results, yearRef);
      return yearTops;
    } else {
      throw new Error('tops não possui propriedade "results"');
    }
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
    if (
      tops && typeof tops === 'object' && 'results' in tops &&
      trends && typeof trends === 'object' && 'results' in trends
    ) {
      const topResults = (tops as { results: any[] }).results;
      const trendsResults = (trends as { results: any[] }).results;
      const TopsInTrends = this.apiTools.checkEach(topResults, trendsResults);
      return TopsInTrends;
    } else {
      throw new Error('tops e/ou trends não possui propriedade "results"');
    }
  }
}
