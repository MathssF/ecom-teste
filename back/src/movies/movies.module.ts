import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { BasicModule } from '../basic/basic.module';
import { MovieFactoryRepository } from '../application/movies/movie.factory.repository';
import { MovieReaderRepository } from '../application/movies/movie.reader.repository';

@Module({
  imports: [BasicModule],
  controllers: [MoviesController],
  providers: [
    MoviesService, 
    MovieCreatorRepository, 
    MovieReaderRepository, 
    PrismaService
  ],
  exports: [MoviesService]
})
export class MoviesModule {}
