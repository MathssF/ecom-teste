import { Injectable } from '@nestjs/common';
import { CreateMovieDto, CreateMovieDetailDto } from './dto/create-movie.dto';
import { UpdateMovieDto, UpdateMovieDetailDto } from './dto/update-movie.dto';
import { BasicService } from '../basic/basic.service';
import { MoviesRepository, movieData, movieDetail, genreMovie } from '../application/movies.repository';
import { CompaniesRepository } from '../application/companies.repository';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class MoviesService {
  constructor(
    private readonly movieRepository: MoviesRepository,
    private readonly basic: BasicService,
  ) {}

  async addMovie(dto: Required<CreateMovieDto>): Promise<movieData> {
    try {
      const data: movieData = {
        id: dto.id,
        title: dto.title,
        originalTitle: dto.originalTitle,
        originalLanguage: dto.originalLanguage,
        adult: dto.adult,
      };
      return await this.movieRepository.addMovie(data);
    } catch (err) {
      throw new Error(err);
    }
  }
  
  async addDetail(dto: Required<CreateMovieDetailDto>): Promise<movieDetail> {
    try {
      const data: movieDetail = {
        movieId: dto.movieId.toString(),
        voteCount: dto.voteCount,
        voteAverage: dto.voteAverage,
        popularity: dto.popularity,
        releaseDate: new Date(dto.releaseDate),
        posterPath: dto.posterPath,
      };
      return await this.movieRepository.addMovieDetail(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  async findMovie(id: string): Promise<movieData | null> {
    return await this.movieRepository.findMovieId(id);
  }

  async findMovieDetail(id: string): Promise<movieDetail | null> {
    return await this.movieRepository.findMovieDetail(id);
  }

  async findAllMovies(): Promise<movieData[] | null> {
    return await this.movieRepository.findAllMovies();
  }
  
  async findAllDetails(): Promise<movieDetail[] | null> {
    return await this.movieRepository.findAllDetails();
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

    const detailToUpdate = {
      movieId: id,
      ...detailBasic,
    };

    if (detailToUpdate.posterPath === null) {
      delete detailToUpdate.posterPath;
    }

    if (Object.keys(detailBasic).length > 0) {
      detailUpdate = await this.movieRepository.updateDetail({
        movieId: id,
        ...detailBasic
      })
    }

    return { movieUpdate, detailUpdate };
  }

  async addGenreToMovie(movieId: string, genreId: string): Promise<genreMovie> {
    const movie = await this.movieRepository.findMovieId(movieId);
    if (!movie) {
      throw new Error(`Filme com ID ${movieId} não encontrado.`);
    }
  
    const genre = await this.basic.findGenreId(genreId);
    if (!genre) {
      throw new Error(`Gênero com ID ${genreId} não encontrado.`);
    }
  
    const existingRelation = await this.movieRepository.findRelations(genreId, movieId);
    if (existingRelation.length > 0) {
      throw new Error(`Relação entre filme ${movieId} e gênero ${genreId} já existe.`);
    }
  
    return await this.movieRepository.addGenreMovie({
      genreId,
      movieId,
    });
  }

  async findMoviesGenre(id: string): Promise<genreMovie[] | null> {
    const movies = await this.movieRepository.findMoviesGenre(id);
    if (!movies) {
      throw new Error('No movies found');
    }
    return movies;
  }

  async findGenresMovie(id: string): Promise<genreMovie[] | null> {
    return await this.movieRepository.findGenresMovie(id) ?? [];
  }

  async listMoviesByGenres(x?: number): Promise<any[]> {
    const genresList = await this.basic.findAllGenres();
  
    let result: any[] = [];
  
    for (const genre of genresList) {
      const movies = await this.movieRepository.findGenresMovie(genre.id) ?? [];


      const newList = [];
  
      for (const movie of movies) {
        const movieDetail = await this.movieRepository.findMovieDetail(movie.movieId);
        const movieData = await this.movieRepository.findMovieId(movie.movieId);

        if (!movieData || !movieDetail) {
          continue;
        }
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
  
      result.push(x ? newList.slice(0, x) : newList);
    }
  
    return result;
  }
}
