import { Controller, Get, Post, Body, Patch, Param, Query, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { ApiService } from './api.service';
import { limitsData } from '../../../global/src/tables/interfaces';

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
  async findAllTopGenres(
    @Query() query: limitsData,
  ) {
    query.returnPageList = true;

    const topGenres = await this.apiService.callTopGenres(query);
    return topGenres;
  }

  @Get('top-genres/:id')
  async findTopGenreById(
    @Query() query: limitsData,
    @Param('id') id: string,
  ) {
    query.returnPageList = true;
    query.chooseGenreRef = id;
    query.setGenre = true;

    const topGenre = await this.apiService.callTopGenres(query);
    return topGenre;
  }

  @Get('/average-rating-by-genre')
  async getAverageRatingByGenre(@Query() query: limitsData) {
    return this.apiService.callAverageByGenre(query);
  }


  @Get('top-by-year/:year')
  async findTopByYear(
    @Query() query: limitsData,
    @Param('year') year: string,
  ) {
    query.returnPageList = true;
    query.chooseYear = year;
    query.setYear = true;
    const yearList = await this.apiService.callTopsByYear(query);
    return yearList;
  }
  
  @Get('/trends-day')
  async findTrendsDay(@Query() query: limitsData) {
    return this.apiService.callTrendings(1, query);
  }

  @Get('/trends-week')
  async findTrendsWeek(@Query() query: limitsData) {
    return this.apiService.callTrendings(2, query);
  }

  @Get('/trends-day/:page')
  async findTrendPageDay(
    @Param('page') page: number,
    @Query() query: limitsData,
  ) {
    return this.apiService.callTrendPage(1, page, query);
  }

  @Get('/trends-week/:page')
  async findTrendPageWeek(
    @Param('page') page: number,
    @Query() query: limitsData,
  ) {
    return this.apiService.callTrendPage(2, page, query);
  }

  @Get('/tops-in-trends')
  async findTopsInTrends(
    @Param('mode') mode: number,
    @Query() query: limitsData,
  ) {
    const topRated = await this.apiService.callTopRated(query);
    const trends = await this.apiService.callTrendings(2, query);
    return this.apiService.callTopsInTrends(topRated, trends);
  }

}
