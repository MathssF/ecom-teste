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
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.addMovie(createMovieDto);
  }

  @Post('detail')
  async createMovieDetail(@Body() createDetailDto: CreateMovieDetailDto) {
    return this.moviesService.addDetail(createDetailDto);
  }

  @Get('set-movie/:id')
  async findOne(@Param('id') id: string) {
    return this.moviesService.findMovie(id);
  }

  @Get('set-detail/:id')
  async findDetail(@Param('id') id: string) {
    return this.moviesService.findMovieDetail(id);
  }

  @Get('list/movies')
async findAllMovies() {
  return this.moviesService.findAllMovies();
}

@Get('list/details')
async findAllDetails() {
  return this.moviesService.findAllDetails();
}

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body('movie') movieDto: UpdateMovieDto,
    @Body('detail') detailDto: UpdateMovieDetailDto,
  ) {
    return this.moviesService.updateMovie(id, movieDto, detailDto);
  }

  @Get('set-genres/:id')
  async findGenres(@Param('id') id: string) {
    return this.moviesService.findGenresMovie(id);
  }

  @Get('genres/:id')
  async findMoviesByGenre(@Param('id') id: string) {
    return this.moviesService.findMoviesGenre(id);
  }

  @Get('list/by-genres')
  async listByGenres(@Query('limit') limit?: string) {
    const x = limit ? parseInt(limit, 10) : undefined;
    return this.moviesService.listMoviesByGenres(x);
  }
}
