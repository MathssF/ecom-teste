import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { MovieDetailsAPI } from '../../../global/fetchTMDB/details';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trendings';

@Module({
  controllers: [ApiController],
  providers: [
    ApiService,
    MovieDetailsAPI,
    TopRatedMoviesAPI,
    TrendingMoviesAPI,
  ],
})
export class ApiModule {}
