import { PrismaClient, Movie, MovieDetail, GenreMovie } from '@prisma/client';

export class MoviesRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async addMovie(data: Movie) {
    const existing = await this.findMovieId(data.id);

    if (!existing) {
      return await this.prisma.movie.create({ data });
    }

    // Atualiza se houver mudanças relevantes
    const hasChanges = ['title', 'originalTitle', 'originalLanguage', 'adult'].some(
      (key) => data[key as keyof Movie] !== existing[key as keyof Movie]
    );

    if (hasChanges) {
      return await this.updateMovie(data);
    }

    return existing;
  }

  async addMovieDetail(data: MovieDetail) {
    const existing = await this.findMovieDetail(data.movieId);

    if (!existing) {
      return await this.prisma.movieDetail.create({ data });
    }

    const hasChanges = ['voteCount', 'voteAverage', 'popularity', 'releaseDate', 'posterPath'].some(
      (key) => data[key as keyof MovieDetail]?.toString() !== existing[key as keyof MovieDetail]?.toString()
    );

    if (hasChanges) {
      return await this.updateDetail(data);
    }

    return existing;
  }

  async updateMovie(data: Movie) {
    return await this.prisma.movie.update({
      where: { id: data.id },
      data
    });
  }

  async updateDetail(data: MovieDetail) {
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

  async findMoviesGenre(genreId: string): Promise<GenreMovie[]> {
    return await this.prisma.genreMovie.findMany({ where: { genreId } });
  }
}
