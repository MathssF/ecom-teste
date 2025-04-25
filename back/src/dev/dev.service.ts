import { Injectable } from '@nestjs/common';
import { MovieDetailsAPI } from '../../../global/fetchTMDB/details';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trendings';
import { BasicSeed } from '../../../global/seeds/basic.seeds'


@Injectable()
export class DevService {
  constructor(
    private readonly movieDetailAPI: MovieDetailsAPI,
    private readonly topRatedAPI: TopRatedMoviesAPI,
    private readonly trendingsAPI: TrendingMoviesAPI,
    private readonly basicSeed: BasicSeed,
  ) {}

  async seedStar() {
    return this.basicSeed.run()
  }

  async callTopRated() {
    const tops = await this.topRatedAPI.getTopRatedMovies();
  }

  async callTrendings() {
    const trends = await this.trendingsAPI.getTrendingMovies();
  }

  async callDetails(id: string) {
    const movieId = Number(id);
    const details = await this.movieDetailAPI.getMovieDetails(movieId);
  }
}
