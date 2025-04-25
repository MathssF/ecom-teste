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


    // const hasChanges = ['title', 'originalTitle', 'originalLanguage', 'adult'].some(
    //   (key) => data[key as keyof movieData] !== existing[key as keyof movieData]
    // );
    // if (hasChanges) {
    //   return await this.updateMovie(data);
    // }
    // return existing;
  }

  async addMovieDetail(data: movieDetail) {
    const existing = await this.findMovieDetail(data.movieId);

    if (!existing) {
      return await this.prisma.movieDetail.create({ data });
    }

    // const hasChanges = ['voteCount', 'voteAverage', 'popularity', 'releaseDate', 'posterPath'].some(
    //   (key) => data[key as keyof movieDetail]?.toString() !== existing[key as keyof movieDetail]?.toString()
    // );

    // if (hasChanges) {
    //   return await this.updateDetail(data);
    // }

    // return existing;
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

  async compareMovie(data: movieData, current: movieData) {}

  async compareDetail(detail: movieDetail, current: movieDetail) {}
}
