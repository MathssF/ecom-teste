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
      frontEndPage: true,
      setLimitItems: true, limitItems: 250
    })
    // const genresTops: any = this.apiTools.filterByGenres(
    //   // tops.results,
    //   (tops as { results: any[] }).results,
    //   genreRef
    // );
    // return genresTops;
    if (tops && 'results' in tops) {
      const genresTops = this.apiTools.filterByGenres(tops.results, genreRef);
      return genresTops;
    } else {
      throw new Error('tops não possui propriedade "results"');
    }
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
      frontEndPage: true,
      setLimitItems: true, limitItems: 250
    })
    // const yearTops: any = this.apiTools.filterByYear(
    //   // tops.results,
    //   (tops as { results: any[] }).results,
    //   yearRef
    // );
    // return yearTops;
    if (tops && 'results' in tops) {
      const yearTops = this.apiTools.filterByYear(tops.results, yearRef);
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

  async callTopsInTrends() {

  }
}
