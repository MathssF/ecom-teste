import { Controller, Get, Post, Body, Patch, Param, Query, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
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
    console.log('Query recebida: ', query)
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

  @Get('top-genres')
  @Get('top-genres/:id')
  async findTopGenres(
    @Query() query: limitsData,
    @Param('id') id?: string,
  ) {
    if (id) {
      query.chooseGenreRef = id;
      query.setGenre = true;
    }
    const topGenres = await this.apiService.callTopGenres(query);
    return topGenres;
  }

  @Get('top-by-year/:year')
  async findTopByYear(
    @Param('year') year: string,
  ) {
    query.chooseYear = year;
    query.setYear = true;
    const yearList = await this.apiService.callTopsByYear(query);
    return yearList;
  }

  @Get('/trends-day')
  @Get('/trends-week')
  async findTrendsUnified(
    @Query() query: limitsData,
    @Req() req: Request,
  ) {
    const isWeek = req.path.includes('week');
    const trendsList = await this.apiService.callTrendings(isWeek ? 2 : 1, query);
    return trendsList;
  }

  @Get('/trends-day/:page')
  @Get('/trends-week/:page')
  async findTrendPage(
    @Param('page') page: number,
    @Query() query: limitsData,
    @Req() req: Request,
  ) {
    const isWeek = req.path.includes('week');
    return await this.apiService.callTrendPage(isWeek ? 2 : 1, page, query);
  }
}
