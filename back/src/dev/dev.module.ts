import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DevService } from './dev.service';
import { DevController } from './dev.controller';
import { BasicModule } from '../basic/basic.module';
import { MoviesModule } from '../movies/movies.module';
import { TrendingsModule } from '../trendings/trendings.module';
import { MovieDetailsAPI } from '../../../global/fetchTMDB/details';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trendings';
import { BasicSeed } from '../../../global/seeds/basic.seeds';
import { DevTools } from './tools/dev.tools';
import { MoviesRepository } from '../application/movies.repository';
import { DevRepository } from '../application/dev.repository';


@Module({
  imports: [BasicModule, MoviesModule, TrendingsModule],
  controllers: [DevController],
  providers: [
    DevService, MovieDetailsAPI,
    TopRatedMoviesAPI, TrendingMoviesAPI,
    BasicSeed, DevTools, PrismaService,
    MoviesRepository, DevRepository
  ],
  exports: [],
})
export class DevModule {}
