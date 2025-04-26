import { Module } from '@nestjs/common';
import { BasicService } from './basic.service';
import { BasicController } from './basic.controller';
import { BasicRepository } from '../application/basic.repository';

@Module({
  controllers: [BasicController],
  providers: [BasicService, BasicRepository],
  exports: [BasicService],
})
export class BasicModule {}
