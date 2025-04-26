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

export class MoviesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addMovie(data: movieData) {
    if (!data) {
      throw new Error('Need info!');
    }
    const existing = await this.findMovieId(data.id);

    if (!existing) {
      return await this.prisma.movie.create({ data });
    }

    return this.compareMovie(data, existing);
  }

  async addMovieDetail(data: movieDetail) {
    if (!data) {
      throw new Error('Need info!');
    }
    const existing = await this.findMovieDetail(data.movieId);

    if (!existing) {
      return await this.prisma.movieDetail.create({ data });
    }

    return this.compareDetail(data, existing);
  }

  async updateMovie(data: editMovie) {
    return await this.prisma.movie.update({
      where: { id: data.id },
      data
    });
  }

  async updateDetail(data: editDetail) {
    return await this.prisma.movieDetail.update({
      where: { movieId: data.movieId },
      data
    });
  }

  async findMovieId(id: string): Promise<movieData | null> {
    return await this.prisma.movie.findUnique({ where: { id } });
  }

  async findMovieDetail(movieId: string): Promise<movieDetail | null> {
    return await this.prisma.movieDetail.findUnique({ where: { movieId } });
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
    return await this.prisma.movieDetail.findMany();
  }

  async findRelations(genreId: string, movieId: string) {
    return await this.prisma.genreMovie.findMany({
      where: {
        genreId, movieId
      }
    })
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
