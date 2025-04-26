import {
  Controller, Get, Post, Body, Patch, Param, Delete,
  RequestMapping
} from '@nestjs/common';
import { DevService } from './dev.service';
import { BasicService } from '../basic/basic.service';
import { MoviesService } from '../movies/movies.service';
import { TrendingsService } from '../trendings/trendings.service';

@Controller('dev')
export class DevController {
  constructor(
    private readonly devService: DevService,
  ) {}

  @Post('start-seed')
  async startSeed() {
    return await this.devService.seedStart()
  }

  @Get('/movie/:movieId')
  async findOneMovie(@Param('movieId') movieId: string) {
    const foundMovie = await this.devService.callDetails(movieId);
    return foundMovie;
  }

  @Post('/movie/:movieId')
  async postOneMovie(
    @Param('movieId') movieId: string
  ) {}
  
  @Get('/top-rated')
  async findTopRateds() {
    const topList = await this.devService.callTopRated();
    return topList
  }

  @Post('/top-rated')
  async postTopRateds() {}  

  @Get('/trends')
  async findTrends() {

  }

  @Post('/trends')
  async postTrends() {

  }

  
}
