import { Injectable } from '@nestjs/common';
import { MovieDetailsAPI } from '../../../global/fetchTMDB/details';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trendings';
import { BasicSeed } from '../../../global/seeds/basic.seeds';
import { DevTools } from './tools/dev.tools';


@Injectable()
export class DevService {
  constructor(
    private readonly movieDetailAPI: MovieDetailsAPI,
    private readonly topRatedAPI: TopRatedMoviesAPI,
    private readonly trendingsAPI: TrendingMoviesAPI,
    private readonly basicSeed: BasicSeed,
    private readonly devTools: DevTools,
  ) {}

  async seedStart() {
    return await this.basicSeed.run()
  }

  async callTopRated() {
    const tops = await this.topRatedAPI.getTopRatedMovies();
    return tops;
  }

  async callTopPage(page: number) {
    return await this.topRatedAPI.getTopsByPage(page)
  }

  async callTrendings() {
    const trends = await this.trendingsAPI.getTrendingMovies();
    return trends;
  }

  async callTrendPage(page: number) {
    return await this.trendingsAPI.getTrendByPage(page);
  }

  async callDetails(id: string) {
    const movieId = Number(id);
    const details = await this.movieDetailAPI.getMovieDetails(movieId);
    return details;
  }

  async devError(msg: string, path:string, method: string) {
    return await this.devTools.DevError(msg, path, method);
  }
}
