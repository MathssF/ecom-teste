import { Injectable } from '@nestjs/common';
import { MovieDetailsAPI } from '../../../global/fetchTMDB/details';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trendings';
import { BasicSeed } from '../../../global/seeds/basic.seeds';
import { DevTools } from './tools/dev.tools';
import { DevRepository } from './tools/dev.repository';
import { limitsData } from '../../../global/tables/interfaces';


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

  async callTopRated(data?: limitsData) {
    const tops = await this.topRatedAPI.getTopRatedMovies({
      dev: true,
    });
    return tops;
  }

  async callTopPage(page: number, data?: limitsData) {
    return await this.topRatedAPI.getTopsByPage(page, {
      dev: true,
      persistence: data.persistence ?? null,
      setLimitItems: data.setLimitItems ?? null,
      setLimitPages: data.setLimitPages ?? null,
      limitItems: data.limitItems ?? null,
      setLang: data.setLang ?? null,
      chooseLang: data.chooseLang ?? null,
    })
  }

  async callTrendings(data?: limitsData) {
    const trends = await this.trendingsAPI.getTrendingMovies({
      dev: true,
      persistence: data.persistence ?? null,
      setLimitItems: data.setLimitItems ?? null,
      setLimitPages: data.setLimitPages ?? null,
      limitItems: data.limitItems ?? null,
      setLang: data.setLang ?? null,
      chooseLang: data.chooseLang ?? null,
    });
    return trends;
  }

  async callTrendPage(page: number, data?: limitsData) {
    return await this.trendingsAPI.getTrendByPage(page, {
      dev: true,
      persistence: data.persistence ?? null,
      setLimitItems: data.setLimitItems ?? null,
      setLimitPages: data.setLimitPages ?? null,
      limitItems: data.limitItems ?? null,
      setLang: data.setLang ?? null,
      chooseLang: data.chooseLang ?? null,
    });
  }

  async callDetails(id: string, data?: limitsData) {
    const movieId = Number(id);
    const details = await this.movieDetailAPI.getMovieDetails(movieId, {
      dev: true,
      persistence: data.persistence ?? null,
      setLimitItems: data.setLimitItems ?? null,
      setLimitPages: data.setLimitPages ?? null,
      limitItems: data.limitItems ?? null,
      setLang: data.setLang ?? null,
      chooseLang: data.chooseLang ?? null,
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
