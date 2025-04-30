import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TrendingsService } from './trendings.service';
import { TrendingsController } from './trendings.controller';
import { BasicModule } from '../basic/basic.module';
import { TrendingsRepository } from '../application/trends/trendings.utils';
import { TrendingsFactoryRepository } from '../application/trends/trendings.factory.repository';
import { TrendingsReaderRepository } from '../application/trends/trendings.reader.repository';
import { TrendingsValidationRepository } from '../application/trends/trendings.validations.repository';
import { TrendingsPurgeRepository } from '../application/trends/trendings.purge.repository';

@Module({
  imports: [BasicModule],
  controllers: [TrendingsController],
  providers: [
    TrendingsService,
    TrendingsRepository, 
    TrendingsFactoryRepository,
    TrendingsReaderRepository,
    TrendingsValidationRepository,
    TrendingsPurgeRepository,
    PrismaService,
  ],
  exports: [TrendingsService],
})
export class TrendingsModule {}
