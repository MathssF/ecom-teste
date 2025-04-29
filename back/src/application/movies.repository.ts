import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface movieData {
  id: string;
  title: string;
  originalTitle: string;
  originalLanguage: string;
  adult: boolean;
}

export interface movieDetail {
  movieId: string;
  voteCount: number;
  voteAverage: number;
  popularity: number;
  releaseDate: Date;
  posterPath: string;
}

export interface editMovie {
  id: string;
  title?: string;
  originalTitle?: string;
  originalLanguage?: string;
  adult?: boolean;
}

export interface editDetail {
  movieId: string;
  voteCount?: number;
  voteAverage?: number;
  popularity?: number;
  releaseDate?: Date;
  posterPath?: string;
}

export interface genreMovie {
  genreId: string;
  movieId: string;
}

@Injectable()
export class MoviesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addMovie(data: movieData): Promise<movieData> {
    if (!data) {
      throw new Error('Need info!');
    }
    const existing = await this.prisma.movie.findUnique({
      where: { id: data.id },
    })

    if (!existing) {
      const lang = await this.prisma.language.findUnique({
        where: { id: data.originalLanguage }
      })
      return await this.prisma.movie.create({ data: data });
    }
    return await this.compareMovie(data, existing);
  }

  async addMovieDetail(data: movieDetail): Promise<movieDetail> {
    if (!data) {
      throw new Error('Need info!');
    }
    const existing = await this.findMovieDetail(data.movieId);

    if (!existing) {
      return await this.prisma.movieDetail.create({ data: {
        movieId: data.movieId,
        voteCount: data.voteCount,
        voteAverage: data.voteAverage,
        popularity: data.popularity,
        releaseDate: new Date(data.releaseDate),
        posterPath: data.posterPath
      } });
    }

    return this.compareDetail(data, existing);
  }

  async updateMovie(data: editMovie) {
    return await this.prisma.movie.update({
      where: { id: data.id },
      data: data
    });
  }

  async updateDetail(data: editDetail) {
    return await this.prisma.movieDetail.update({
      where: { movieId: data.movieId },
      data: data
    });
  }

  async findMovieId(id: string): Promise<movieData | null> {
    return await this.prisma.movie.findUnique({ where: { id } });
  }

  async findMovieDetail(movieId: string): Promise<movieDetail | null> {
    const movieDetail = await this.prisma.movieDetail.findUnique({ where: { movieId } });
    if (!movieDetail) {
      return null;
    }
  
    const adjustedMovieDetail: movieDetail = {
      movieId: movieDetail.movieId,
      voteCount: movieDetail.voteCount,
      voteAverage: movieDetail.voteAverage,
      popularity: movieDetail.popularity,
      releaseDate: movieDetail.releaseDate,
      posterPath: movieDetail.posterPath ?? 'nothing', // aqui garante nunca null
    };
  
    return adjustedMovieDetail;
  }

  async addGenreMovie(data: genreMovie): Promise<genreMovie> {
    if (!data.genreId || !data.movieId) {
      throw new Error('Genre ID and Movie ID are required.');
    }
    
    return await this.prisma.genreMovie.create({
      data: {
        genreId: data.genreId,
        movieId: data.movieId
      }
    });
  }

  async findMoviesGenre(genreId: string): Promise<genreMovie[] | null> {
    return await this.prisma.genreMovie.findMany({ where: { genreId } });
  }

  async findGenresMovie(movieId: string): Promise<genreMovie[] | null> {
    return await this.prisma.genreMovie.findMany({ where: { movieId } })
  }

  async findAllMovies(): Promise<movieData[] | null> {
    return await this.prisma.movie.findMany();
  }

  async findAllDetails(): Promise<movieDetail[] | null> {
    const movieList = await this.prisma.movieDetail.findMany();
    const adjustedList: movieDetail[] = [];
    for (const movie of movieList) {
      const adjustedMovieDetail: movieDetail = {
        movieId: movie.movieId,
        voteCount: movie.voteCount,
        voteAverage: movie.voteAverage,
        popularity: movie.popularity,
        releaseDate: movie.releaseDate,
        posterPath: movie.posterPath ?? 'nothing'
      }

      adjustedList.push(adjustedMovieDetail);
    }

    return adjustedList;
  }

  async findRelations(genreId: string, movieId: string) {
    return await this.prisma.genreMovie.findMany({
      where: {
        genreId, movieId
      }
    })
  }

  async compareMovie(data: movieData, current: movieData) {
    if (current.id !== data.id) return current;
    const items = ['title', 'originalTitle', 'originalLanguage', 'adult'];
    const hasChanges = items.some(
      (key) => data[
        key as keyof movieData
      ]?.toString() !== current[
        key as keyof movieData
      ]?.toString()
    )
    if (hasChanges) {
      return await this.updateMovie(data);
    }
  }

  async compareDetail(detail: movieDetail, current: movieDetail) {
    if (current.movieId !== detail.movieId) return current;
    const items = ['voteCount', 'voteAverage', 'popularity', 'releaseDate', 'posterPath'];
    const hasChanges = items.some(
      (key) => detail[
        key as keyof movieDetail
      ]?.toString() !== current[
        key as keyof movieDetail
      ]?.toString()
    )
    if (hasChanges) {
      return await this.updateDetail(detail);
    }
  }
}
