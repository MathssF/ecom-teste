import { Injectable } from '@nestjs/common';
import { CreateMovieDto, CreateMovieDetailDto } from './dto/create-movie.dto';
import { UpdateMovieDto, UpdateMovieDetailDto } from './dto/update-movie.dto';
import { BasicService } from '../basic/basic.service';
import { movieData, movieDetail, genreMovie } from '../application/movies/movies.interfaces';
import { MovieFactoryRepository } from '../application/movies/movie.factory.repository';
import { MovieReaderRepository } from '../application/movies/movie.reader.repository';

@Injectable()
export class MoviesService {
  constructor(
    private readonly movieFactory: MovieFactoryRepository,
    private readonly movieReader: MovieReaderRepository,
    private readonly basic: BasicService,
  ) {}

  async addMovie(dto: Required<CreateMovieDto>): Promise<movieData> {
    const data: movieData = {
      id: dto.id,
      title: dto.title,
      originalTitle: dto.originalTitle,
      originalLanguage: dto.originalLanguage,
      adult: dto.adult,
    };
    return await this.movieFactory.addMovie(data);
  }

  async addDetail(dto: Required<CreateMovieDetailDto>): Promise<movieDetail> {
    const data: movieDetail = {
      movieId: dto.movieId.toString(),
      voteCount: dto.voteCount,
      voteAverage: dto.voteAverage,
      popularity: dto.popularity,
      releaseDate: new Date(dto.releaseDate),
      posterPath: dto.posterPath,
    };
    return await this.movieFactory.addMovieDetail(data);
  }

  async findMovie(id: string): Promise<movieData | null> {
    return await this.movieReader.findMovieId(id);
  }

  async findMovieDetail(id: string): Promise<movieDetail | null> {
    return await this.movieReader.findMovieDetail(id);
  }

  async findAllMovies(): Promise<movieData[] | null> {
    return await this.movieReader.findAllMovies();
  }

  async findAllDetails(): Promise<movieDetail[] | null> {
    return await this.movieReader.findAllDetails();
  }

  async updateMovie(id: string, movieDto: UpdateMovieDto, detailDto: UpdateMovieDetailDto) {
    let movieUpdate = {};
    let detailUpdate = {};

    const movieBasic = { ...movieDto };
    delete movieBasic.id;

    const detailBasic = { ...detailDto };
    delete detailBasic.movieId;

    if (Object.keys(movieBasic).length > 0) {
      movieUpdate = await this.movieFactory.updateMovie({
        id,
        ...movieBasic,
      });
    }

    const detailToUpdate = {
      movieId: id,
      ...detailBasic,
    };

    if (detailToUpdate.posterPath === null) {
      delete detailToUpdate.posterPath;
    }

    if (Object.keys(detailBasic).length > 0) {
      detailUpdate = await this.movieFactory.updateDetail(detailToUpdate);
    }

    return { movieUpdate, detailUpdate };
  }

  async addGenreToMovie(movieId: string, genreId: string): Promise<genreMovie> {
    const movie = await this.movieReader.findMovieId(movieId);
    if (!movie) throw new Error(`Filme com ID ${movieId} não encontrado.`);

    const genre = await this.basic.findGenreId(genreId);
    if (!genre) throw new Error(`Gênero com ID ${genreId} não encontrado.`);

    const existingRelation = await this.movieReader.findRelations(genreId, movieId);
    if (existingRelation.length > 0) {
      throw new Error(`Relação entre filme ${movieId} e gênero ${genreId} já existe.`);
    }

    return await this.movieFactory.addGenreMovie({ genreId, movieId });
  }

  async findMoviesGenre(id: string): Promise<genreMovie[] | null> {
    const movies = await this.movieReader.findMoviesGenre(id);
    if (!movies) throw new Error('No movies found');
    return movies;
  }

  async findGenresMovie(id: string): Promise<genreMovie[] | null> {
    return await this.movieReader.findGenresMovie(id) ?? [];
  }

  async listMoviesByGenres(x?: number): Promise<any[]> {
    const genresList = await this.basic.findAllGenres();
    let result: any[] = [];

    for (const genre of genresList) {
      const movies = await this.movieReader.findGenresMovie(genre.id) ?? [];

      const newList = [];

      for (const movie of movies) {
        const movieDetail = await this.movieReader.findMovieDetail(movie.movieId);
        const movieData = await this.movieReader.findMovieId(movie.movieId);

        if (!movieData || !movieDetail) continue;

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
        if (b.average !== a.average) return b.average - a.average;
        if (b.popularity !== a.popularity) return b.popularity - a.popularity;
        return a.title.localeCompare(b.title);
      });

      result.push(x ? newList.slice(0, x) : newList);
    }

    return result;
  }
}