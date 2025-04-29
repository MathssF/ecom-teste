import { Injectable } from '@nestjs/common';
import { MovieDetailsAPI } from '../../../global/fetchTMDB/details';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trendings';
import { BasicSeed } from '../../../global/seeds/basic.seeds';
import { DevTools } from './tools/dev.tools';
import { DevRepository } from '../application/dev.repository';


@Injectable()
export class DevService {
  constructor(
    private readonly movieDetailAPI: MovieDetailsAPI,
    private readonly topRatedAPI: TopRatedMoviesAPI,
    private readonly trendingsAPI: TrendingMoviesAPI,
    private readonly basicSeed: BasicSeed,
    private readonly devTools: DevTools,
    private readonly devRepository: DevRepository,
  ) {}

  async seedStart() {
    return await this.basicSeed.run()
  }

  async callTopRated() {
    const tops = await this.topRatedAPI.getTopRatedMovies({ dev: true });
    return tops;
  }

  async callTopPage(page: number) {
    return await this.topRatedAPI.getTopsByPage(page)
  }

  async callTrendings() {
    const trends = await this.trendingsAPI.getTrendingMovies({ dev: true });
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

  async deleteAllMovies() {
    return await this.devRepository.dellMovies();
  }

  async devError(msg: string, path:string, method: string) {
    return await this.devTools.DevError(msg, path, method);
  }
}
