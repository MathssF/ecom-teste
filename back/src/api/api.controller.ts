import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('/movie/:movieId')
  async findOneMovie(@Param('movieId') movieId: string) {
    const foundMovie = await this.apiService.callDetails(movieId);
    return foundMovie;
  }

  @Get('/top-rated')
  async findTopRateds() {
    const topList = await this.apiService.callTopRated();
    return topList;
  }

  @Get('top-rated/:page')
  async findTopPage(
    @Param('page') page: number
  ) {
    return await this.apiService.callTopPage(page);
  }

  @Get('/trends')
  async findTrends() {
    const trendsList = await this.apiService.callTrendings();
    return trendsList;
  }

  @Get('/trends/:page')
  async findTrendPage(
    @Param('page') page: number
  ) {
    return await this.apiService.callTrendPage(page);
  }
}
