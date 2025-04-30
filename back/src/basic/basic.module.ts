import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BasicService } from './basic.service';
import { BasicController } from './basic.controller';
import { BasicRepository } from '../application/basic/basic.repository';
import { CompaniesRepository } from '../application/basic/companies.repository';
import { BasicSeed } from '../../../global/seeds/basic.seeds';

@Module({
  controllers: [BasicController],
  providers: [
    BasicService,
    BasicRepository,
    CompaniesRepository,
    PrismaService,
    BasicSeed
  ],
  exports: [BasicService],
})
export class BasicModule {}
