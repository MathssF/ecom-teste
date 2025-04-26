import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TrendingsService } from './trendings.service';
import { TrendingsController } from './trendings.controller';
import { BasicModule } from '../basic/basic.module';
import { TrendingsRepository } from '../application/trendings.repository';

@Module({
  imports: [BasicModule],
  controllers: [TrendingsController],
  providers: [TrendingsService, TrendingsRepository, PrismaService],
  exports: [TrendingsService],
})
export class TrendingsModule {}
