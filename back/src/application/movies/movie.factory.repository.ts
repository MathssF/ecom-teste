import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { movieData, movieDetail, editMovie, editDetail, genreMovie } from '../movie.repository';

@Injectable()
export class MovieFactoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addMovie(data: movieData): Promise<movieData> {
    if (!data) throw new Error('Need info!');
    
    const existing = await this.prisma.movie.findUnique({ where: { id: data.id } });

    if (!existing) {
      await this.prisma.language.findUnique({ where: { id: data.originalLanguage } });
      return await this.prisma.movie.create({ data });
    }

    return await this.compareMovie(data, existing);
  }

  async addMovieDetail(data: movieDetail): Promise<movieDetail> {
    if (!data) throw new Error('Need info!');
    
    const existing = await this.prisma.movieDetail.findUnique({ where: { movieId: data.movieId } });

    if (!existing) {
      return await this.prisma.movieDetail.create({ data: {
        ...data,
        releaseDate: new Date(data.releaseDate),
      }});
    }

    return this.compareDetail(data, existing);
  }

  async updateMovie(data: editMovie) {
    return await this.prisma.movie.update({
      where: { id: data.id },
      data,
    });
  }

  async updateDetail(data: editDetail) {
    return await this.prisma.movieDetail.update({
      where: { movieId: data.movieId },
      data,
    });
  }

  async addGenreMovie(data: genreMovie): Promise<genreMovie> {
    if (!data.genreId || !data.movieId) {
      throw new Error('Genre ID and Movie ID are required.');
    }

    return await this.prisma.genreMovie.create({ data });
  }

  private async compareMovie(data: movieData, current: movieData) {
    if (current.id !== data.id) return current;

    const items = ['title', 'originalTitle', 'originalLanguage', 'adult'];
    const hasChanges = items.some(
      (key) => data[key as keyof movieData]?.toString() !== current[key as keyof movieData]?.toString()
    );

    if (hasChanges) {
      return await this.updateMovie(data);
    }

    return current;
  }

  private async compareDetail(detail: movieDetail, current: movieDetail) {
    if (current.movieId !== detail.movieId) return current;

    const items = ['voteCount', 'voteAverage', 'popularity', 'releaseDate', 'posterPath'];
    const hasChanges = items.some(
      (key) => detail[key as keyof movieDetail]?.toString() !== current[key as keyof movieDetail]?.toString()
    );

    if (hasChanges) {
      return await this.updateDetail(detail);
    }

    return current;
  }
}