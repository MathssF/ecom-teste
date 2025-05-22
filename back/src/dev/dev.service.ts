import { Injectable } from '@nestjs/common';
import { MovieDetailsAPI } from '../../../global/src/fetchTMDB/details';
import { TopRatedMoviesAPI } from '../../../global/src/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/src/fetchTMDB/trendings';
// import { BasicSeed } from '../basic/seeds/basic.seeds';
import { DevTools } from './tools/dev.tools';
import { DevRepository } from './tools/dev.repository';
import { limitsData } from '../../../global/src/tables/interfaces';


@Injectable()
export class DevService {
  constructor(
    private readonly movieDetailAPI: MovieDetailsAPI,
    private readonly topRatedAPI: TopRatedMoviesAPI,
    private readonly trendingsAPI: TrendingMoviesAPI,
    // private readonly basicSeed: BasicSeed,
    private readonly devTools: DevTools,
    private readonly devRepository: DevRepository,
  ) {}

  // async seedStart() {
  //   return await this.basicSeed.run()
  // }

  async callTopRated(data?: limitsData) {
    const tops = await this.topRatedAPI.getTopRatedMovies({
      dev: true,
    });
    return tops;
  }

  async callTopPage(page: number, data?: limitsData) {
    return await this.topRatedAPI.getTopsByPage(page, {
      dev: true,
      ...data,
    })
  }

  async callTrendings(mode: number, data?: limitsData) {
    const trends = await this.trendingsAPI.getTrendingMovies(mode, {
      dev: true,
      ...data,
    });
    return trends;
  }

  async callTrendPage(mode: number, page: number, data?: limitsData) {
    return await this.trendingsAPI.getTrendByPage(mode, page, {
      dev: true,
      ...data,
    });
  }

  async callDetails(id: string, data?: limitsData) {
    const movieId = Number(id);
    const details = await this.movieDetailAPI.getMovieDetails(movieId, {
      dev: true,
      ...data,
    });
    return details;
  }

  async deleteAllMovies() {
    return await this.devRepository.dellMovies();
  }

  async devError(msg: string, path:string, method: string) {
    return await this.devTools.DevError(msg, path, method);
  }
}
