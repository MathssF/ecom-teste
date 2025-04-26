import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { BasicModule } from '../basic/basic.module';
import { MoviesRepository } from '../application/movies.repository';

@Module({
  imports: [BasicModule],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository],
  exports: [MoviesService]
})
export class MoviesModule {}
