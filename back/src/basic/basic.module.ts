import { Module } from '@nestjs/common';
import { BasicService } from './basic.service';
import { BasicController } from './basic.controller';

@Module({
  controllers: [BasicController],
  providers: [BasicService],
  exports: [BasicService],
})
export class BasicModule {}
