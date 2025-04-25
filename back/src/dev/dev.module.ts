import { Module } from '@nestjs/common';
import { DevService } from './dev.service';
import { DevController } from './dev.controller';
import { BasicService } from 'src/basic/basic.service';
import { MoviesService } from 'src/movies/movies.service';
import { TrendingsService } from 'src/trendings/trendings.service';


@Module({
  imports: [BasicService, MoviesService, TrendingsService],
  controllers: [DevController],
  providers: [DevService],
  exports: [],
})
export class DevModule {}
