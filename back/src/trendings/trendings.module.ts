import { Module } from '@nestjs/common';
import { TrendingsService } from './trendings.service';
import { TrendingsController } from './trendings.controller';
import { BasicModule } from '../basic/basic.module';
import { TrendingsRepository } from '../application/trendings.repository';

@Module({
  imports: [BasicModule],
  controllers: [TrendingsController],
  providers: [TrendingsService, TrendingsRepository],
  exports: [TrendingsService],
})
export class TrendingsModule {}
