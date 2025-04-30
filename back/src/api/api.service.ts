import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { MovieDetailsAPI } from '../../../global/fetchTMDB/details';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trendings';

@Injectable()
export class ApiService {
  constructor(
    private readonly movieDetailAPI: MovieDetailsAPI,
    private readonly topRatedAPI: TopRatedMoviesAPI,
    private readonly trendingsAPI: TrendingMoviesAPI,
  ) {}

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
}
