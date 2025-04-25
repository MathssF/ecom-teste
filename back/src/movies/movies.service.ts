import { Injectable } from '@nestjs/common';
import { CreateMovieDto, CreateMovieDetailDto } from './dto/create-movie.dto';
import { UpdateMovieDto, UpdateMovieDetailDto } from './dto/update-movie.dto';
import { BasicService } from 'src/basic/basic.service';
import { MoviesRepository } from 'src/application/movies.repository';
import { CompaniesRepository } from 'src/application/companies.repository';

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

  async listMoviesByGenres(x?: number): Promise<any[]> {
    const genresList = await this.basic.findAllGenres();
  
    let result: any[] = [];
    let newList: any[] = [];
  
    for (const genre of genresList) {
      let movies = [];
      movies = await this.movieRepository.findGenresMovie(genre.id);
  
      for (const movie of movies) {
        const movieDetail = await this.movieRepository.findMovieDetail(movie.movieId);
        const movieData = await this.movieRepository.findMovieId(movie.movieId);
  
        const info = {
          id: movie.movieId,
          title: movieData.title,
          votes: movieDetail.voteCount,
          average: movieDetail.voteAverage,
          popularity: movieDetail.popularity,
          adult: movieData.adult,
        };
  
        newList.push(info);
      }
  
      newList.sort((a, b) => {
        if (b.average !== a.average) {
          return b.average - a.average;
        }
        if (b.popularity !== a.popularity) {
          return b.popularity - a.popularity;
        }
        return a.title.localeCompare(b.title);
      });
  
      if (x) {
        newList = newList.slice(0, x);
      }
  
      result.push(newList);
      newList = [];
    }
  
    return result;
  }
}
