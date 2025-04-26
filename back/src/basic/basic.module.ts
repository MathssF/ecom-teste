import { Module } from '@nestjs/common';
import { BasicService } from './basic.service';
import { BasicController } from './basic.controller';
import { BasicRepository } from '../application/basic.repository';
import { CompaniesRepository } from '../application/companies.repository';

@Module({
  controllers: [BasicController],
  providers: [BasicService, BasicRepository, CompaniesRepository],
  exports: [BasicService],
})
export class BasicModule {}
