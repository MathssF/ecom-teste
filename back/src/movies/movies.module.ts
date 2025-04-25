import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { BasicModule } from 'src/basic/basic.module';

@Module({
  imports: [BasicModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
