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
import { DevRepository } from './tools/dev.repository';

import { MovieFactoryRepository } from '../application/movies/movie.factory.repository';
import { MovieReaderRepository } from '../application/movies/movie.reader.repository';

import { TrendingsFactoryRepository } from '../application/trends/trendings.factory.repository';
import { TrendingsReaderRepository } from '../application/trends/trendings.reader.repository';
import { TrendingsValidationRepository } from '../application/trends/trendings.validations.repository';
import { TrendingsPurgeRepository } from '../application/trends/trendings.purge.repository';


@Module({
  imports: [BasicModule, MoviesModule, TrendingsModule],
  controllers: [DevController],
  providers: [
    DevService,
    MovieDetailsAPI,
    TopRatedMoviesAPI,
    TrendingMoviesAPI,
    BasicSeed,
    DevTools,
    PrismaService,
    DevRepository,

    MovieFactoryRepository,
    MovieReaderRepository,

    TrendingsFactoryRepository,
    TrendingsReaderRepository,
    TrendingsValidationRepository,
    TrendingsPurgeRepository,
  ],
  exports: [],
})
export class DevModule {}
