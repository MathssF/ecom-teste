import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiService } from './api.service';
import { limitsData } from '../../../global/tables/interfaces';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('/movie/:movieId')
  async findOneMovie(
    @Param('movieId') movieId: string,
    @Query() query: limitsData
  ) {
    const foundMovie = await this.apiService.callDetails(movieId, query);
    return foundMovie;
  }

  @Get('/top-rated')
  async findTopRateds(@Query() query: limitsData) {
    const topList = await this.apiService.callTopRated(query);
    return topList;
  }

  @Get('top-rated/:page')
  async findTopPage(
    @Param('page') page: number,
    @Query() query: limitsData
  ) {
    return await this.apiService.callTopPage(page, query);
  }

  @Get('/trends')
  async findTrends(@Query() query: limitsData) {
    const trendsList = await this.apiService.callTrendings(query);
    return trendsList;
  }

  @Get('/trends/:page')
  async findTrendPage(
    @Param('page') page: number,
    @Query() query: limitsData
  ) {
    return await this.apiService.callTrendPage(page, query);
  }
}
