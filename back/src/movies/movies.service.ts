import { Injectable } from '@nestjs/common';
import { CreateMovieDto, CreateMovieDetailDto } from './dto/create-movie.dto';
import { UpdateMovieDto, UpdateMovieDetailDto } from './dto/update-movie.dto';
import { BasicService } from 'src/basic/basic.service';
import { MoviesRepository } from 'src/application/movies.repository';

@Injectable()
export class MoviesService {
  constructor(
    private readonly movieRepository: MoviesRepository,
    private readonly basic: BasicService,
  ) {}
  async addMovie(dto: CreateMovieDto): Promise<CreateMovieDto> {
    return await this.addMovie(dto);
  }

  async addDetail(dto: CreateMovieDetailDto): Promise<CreateMovieDetailDto> {
    return await this.addDetail(dto);
  }

  async findMovie(id: string) {
    return await this.movieRepository.findMovieId(id);
  }

  async findMovieDetail(id: string) {
    return await this.movieRepository.findMovieDetail(id);
  }

  async updateMovie(id: string, movieDto: UpdateMovieDto, detailDto: UpdateMovieDetailDto) {
    let movieUpdate = {};
    let detailUpdate = {};

    const movieBasic = { ...movieDto };
    delete movieBasic.id;
    const detailBasic = { ...detailDto };
    delete detailBasic.movieId;

    if (Object.keys(movieBasic).length > 0) {
      movieUpdate = await this.movieRepository.updateMovie({
        id: id,
        ...movieBasic
      })
    }

    if (Object.keys(detailBasic).length > 0) {
      detailUpdate = await this.movieRepository.updateDetail({
        movieId: id,
        ...detailBasic
      })
    }

    return { movieUpdate, detailUpdate };
  }

  async findGenresMovie(id: string) {
    return await this.movieRepository.findMoviesGenre(id);
  }

  async findMoviesGenre(id: string) {
    return await this.movieRepository.findGenresMovie(id);
  }

  async listMobiesByGenre(x?: number): Promise<any[]> {
    const genresList = await this.basic.findAllGenres();

    let result: any[] = [];
    let info = {}
    let movies = [];
    let newList: any[] = []

    genresList.forEach(async (elem) => {
      movies = await this.movieRepository.findGenresMovie(elem.id);
        movies.forEach(async (elem) => {
          const d = await this.movieRepository.findMovieDetail(elem.movieId);
          const m = await this.movieRepository.findMovieId(elem.movieId);
          info = {
            id: elem.movieId,
            title: m.title,
            votes: d.voteCount,
            average: d.voteAverage,
            popularity: d.popularity,
            adult: m.adult,
          }
          newList.push(info);
          info = {};
        })
      newList.sort((a, b) => {
        if (b.average !== a.average) {
          return b.average - a.average;
        }
        if (b.popularity !== a.popularity) {
          return b.popularity - a.popularity;
        }
        return a.title.localeCompare(b.title);
      })
      if (x) {
        newList = newList.slice(0, x);
      }    
      result.push(newList);
      movies = []
      newList = []
    });

    return result;
  }
}
