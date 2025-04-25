import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevService } from './dev.service';

@Controller('dev')
export class DevController {
  constructor(private readonly devService: DevService) {}

  @Get('/movie/:movieId')
  async findOneMovie(@Param('movieId') movieId: string) {
    return 
  }
}
