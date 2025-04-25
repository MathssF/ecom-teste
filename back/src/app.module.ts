import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BasicModule } from './basic/basic.module';
import { MoviesModule } from './movies/movies.module';
import { TrendingsModule } from './trendings/trendings.module';

@Module({
  imports: [BasicModule, MoviesModule, TrendingsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
