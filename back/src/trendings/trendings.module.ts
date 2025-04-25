import { Module } from '@nestjs/common';
import { TrendingsService } from './trendings.service';
import { TrendingsController } from './trendings.controller';

@Module({
  controllers: [TrendingsController],
  providers: [TrendingsService],
})
export class TrendingsModule {}
