import { PrismaClient } from '@prisma/client';

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
  posterPath?: string;
}

export interface genreMovie {
  genreId: string;
  movieId: string;
}

export class MoviesRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async addMovie(data: movieData) {
    const existing = await this.findMovieId(data.id);

    if (!existing) {
      return await this.prisma.movie.create({ data });
    }

    this.compareMovie(data, existing);
  }

  async addMovieDetail(data: movieDetail) {
    const existing = await this.findMovieDetail(data.movieId);

    if (!existing) {
      return await this.prisma.movieDetail.create({ data });
    }

    this.compareDetail(data, existing);
  }

  async updateMovie(data: movieData) {
    return await this.prisma.movie.update({
      where: { id: data.id },
      data
    });
  }

  async updateDetail(data: movieDetail) {
    return await this.prisma.movieDetail.update({
      where: { movieId: data.movieId },
      data
    });
  }

  async findMovieId(id: string) {
    return await this.prisma.movie.findUnique({ where: { id } });
  }

  async findMovieDetail(movieId: string) {
    return await this.prisma.movieDetail.findUnique({ where: { movieId } });
  }

  async findMoviesGenre(genreId: string): Promise<genreMovie[]> {
    return await this.prisma.genreMovie.findMany({ where: { genreId } });
  }

  async compareMovie(data: movieData, current: movieData) {
    if (data.id !== current.id) return {};
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
    if (detail.movieId !== current.movieId) return {};
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
