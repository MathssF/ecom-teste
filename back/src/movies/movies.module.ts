import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { BasicModule } from '../basic/basic.module';
import { MoviesRepository } from '../application/movies.repository';

@Module({
  imports: [BasicModule],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository, PrismaService],
  exports: [MoviesService]
})
export class MoviesModule {}
