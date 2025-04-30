import { Injectable } from '@nestjs/common';
import { MovieDetailsAPI } from '../../../global/fetchTMDB/details';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trendings';
import { limitsData } from '../../../global/tables/interfaces';

@Injectable()
export class ApiService {
  constructor(
    private readonly movieDetailAPI: MovieDetailsAPI,
    private readonly topRatedAPI: TopRatedMoviesAPI,
    private readonly trendingsAPI: TrendingMoviesAPI,
  ) {}

  async callTopRated(data?: limitsData) {
    const tops = await this.topRatedAPI.getTopRatedMovies(data);
    return tops;
  }

  async callTopPage(page: number, data?: limitsData) {
    return await this.topRatedAPI.getTopsByPage(page, data)
  }

  async callTrendings(data?: limitsData) {
    const trends = await this.trendingsAPI.getTrendingMovies(data);
    return trends;
  }

  async callTrendPage(page: number, data?: limitsData) {
    return await this.trendingsAPI.getTrendByPage(page, data);
  }

  async callDetails(id: string, data?: limitsData) {
    const movieId = Number(id);
    const details = await this.movieDetailAPI.getMovieDetails(movieId, data);
    return details;
  }
}
