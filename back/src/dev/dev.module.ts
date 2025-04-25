import { Module } from '@nestjs/common';
import { DevService } from './dev.service';
import { DevController } from './dev.controller';

@Module({
  imports: [],
  controllers: [DevController],
  providers: [DevService],
  exports: [],
})
export class DevModule {}
