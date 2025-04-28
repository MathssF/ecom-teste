import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import {
  CreateMovieDto,
  CreateMovieDetailDto,
} from './dto/create-movie.dto';
import {
  UpdateMovieDto,
  UpdateMovieDetailDto,
} from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly moviesService: MoviesService,
  ) {}

  @Post()
  async createMovie(@Body() createMovieDto: CreateMovieDto) {
    return await this.moviesService.addMovie(createMovieDto);
  }

  @Post('detail')
  async createMovieDetail(@Body() createDetailDto: CreateMovieDetailDto) {
    return await this.createMovieDetail(createDetailDto);
  }

  @Get('set-movie/:id')
  async findOne(@Param('id') id: string) {
    return await this.moviesService.findMovie(id);
  }

  @Get('set-detail/:id')
  async findDetail(@Param('id') id: string) {
    return await this.moviesService.findMovieDetail(id);
  }

  @Get('list/movies')
async findAllMovies() {
  return await this.moviesService.findAllMovies();
}

@Get('list/details')
async findAllDetails() {
  return await this.moviesService.findAllDetails();
}

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body('movie') movieDto: UpdateMovieDto,
    @Body('detail') detailDto: UpdateMovieDetailDto,
  ) {
    return await this.moviesService.updateMovie(id, movieDto, detailDto);
  }

  @Get('set-genres/:id')
  async findGenres(@Param('id') id: string) {
    return await this.moviesService.findGenresMovie(id);
  }

  @Get('genres/:id')
  async findMoviesByGenre(@Param('id') id: string) {
    return await this.moviesService.findMoviesGenre(id);
  }

  @Get('list/by-genres')
  async listByGenres(@Query('limit') limit?: string) {
    const x = limit ? parseInt(limit, 10) : undefined;
    return await this.moviesService.listMoviesByGenres(x);
  }
}
