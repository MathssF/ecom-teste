import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { movieData, movieDetail, genreMovie } from './movies.interfaces';

@Injectable()
export class MovieReaderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMovieId(id: string): Promise<movieData | null> {
    return await this.prisma.movie.findUnique({ where: { id } });
  }

  async findMovieDetail(movieId: string): Promise<movieDetail | null> {
    const detail = await this.prisma.movieDetail.findUnique({ where: { movieId } });

    if (!detail) return null;

    return {
      ...detail,
      releaseDate: new Date(detail.releaseDate),
      posterPath: detail.posterPath ?? 'nothing',
    };
  }

  async findMoviesGenre(genreId: string): Promise<genreMovie[] | null> {
    return await this.prisma.genreMovie.findMany({ where: { genreId } });
  }

  async findGenresMovie(movieId: string): Promise<genreMovie[] | null> {
    return await this.prisma.genreMovie.findMany({ where: { movieId } });
  }

  async findAllMovies(): Promise<movieData[] | null> {
    return await this.prisma.movie.findMany();
  }

  async findAllDetails(): Promise<movieDetail[] | null> {
    const movieList = await this.prisma.movieDetail.findMany();
    
    return movieList.map(movie => ({
      ...movie,
      releaseDate: new Date(movie.releaseDate),
      posterPath: movie.posterPath ?? 'nothing',
    }));
  }

  async findRelations(genreId: string, movieId: string) {
    return await this.prisma.genreMovie.findMany({ where: { genreId, movieId } });
  }
}