import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BasicModule } from './basic/basic.module';
import { MoviesModule } from './movies/movies.module';
import { TrendingsModule } from './trendings/trendings.module';
import { DevModule } from './dev/dev.module';
import { PrismaModule } from './prisma/prisma.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [BasicModule, MoviesModule, TrendingsModule, DevModule, PrismaModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
