import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TrendingsService } from './trendings.service';
import { TrendingsController } from './trendings.controller';
import { BasicModule } from '../basic/basic.module';
import { TrendingsRepository } from '../application/trendings.utils';
import { TrendingsFactoryRepository } from '../application/trends/trendings.factory.repository';
import { TrendingsReaderRepository } from '../application/trends/trendings.reader.repository';
import { TrendingsValidationRepository } from '../application/trends/trendings.validations.repository';
import { TrendingsDeveloperRepository } from '../application/trends/trendings.developer.repository';

@Module({
  imports: [BasicModule],
  controllers: [TrendingsController],
  providers: [
    TrendingsService,
    TrendingsRepository, 
    TrendingsFactoryRepository,
    TrendingsReaderRepository,
    TrendingsValidationRepository,
    TrendingsDeveloperRepository,
    PrismaService,
  ],
  exports: [TrendingsService],
})
export class TrendingsModule {}
