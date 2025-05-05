import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { ApiService } from './api.service';
import { limitsData } from '../../../global/tables/interfaces';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('/movie/:movieId')
  async findOneMovie(
    @Param('movieId') movieId: string,
    @Body() body: limitsData
  ) {
    const foundMovie = await this.apiService.callDetails(movieId, body);
    return foundMovie;
  }

  @Get('/top-rated')
  async findTopRateds(@Body() body: limitsData) {
    console.log('Body recebida: ', body)
    const topList = await this.apiService.callTopRated(body);
    return topList;
  }

  @Get('top-rated/:page')
  async findTopPage(
    @Param('page') page: number,
    @Body() body: limitsData
  ) {
    return await this.apiService.callTopPage(page, body);
  }

  @Get('top-genres')
  @Get('top-genres/:id')
  async findTopGenres(
    @Body() body: limitsData,
    @Param('id') id?: string,
  ) {
    
  }

  @Get('genres-popularity')
  @Get('genres-popularity/:id')
  async genresPop(
    @Body() body: limitsData,
    @Param('id') id?: string,
  ) {}

  @Get('top-by-year/:year')
  async findTopByYear(
    @Param('year') year: string,
  ) {}

  @Get('/trends-day')
  @Get('/trends-week')
  async findTrendsUnified(
    @Body() body: limitsData,
    @Req() req: Request,
  ) {
    const isWeek = req.path.includes('week');
    const trendsList = await this.apiService.callTrendings(isWeek ? 2 : 1, Body);
    return trendsList;
  }

  @Get('/trends-day/:page')
  @Get('/trends-week/:page')
  async findTrendPage(
    @Param('page') page: number,
    @Body() body: limitsData,
    @Req() req: Request,
  ) {
    const isWeek = req.path.includes('week');
    return await this.apiService.callTrendPage(isWeek ? 2 : 1, page, Body);
  }
}
