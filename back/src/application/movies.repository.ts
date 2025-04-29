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

  async addMovie(data: movieData): Promise<movieData> {
    if (!data) {
      throw new Error('Need info!');
    }
    console.log('Movie no Repository!');
    console.log('Como Chega:', data);
    console.log('Language que será passado no find abaixo:', data.originalLanguage);
    const existing = await this.findMovieIdWithLang(data.id, data.originalLanguage);

    console.log('Existing: ', existing);

    if (!existing) {
      console.log('Entrou no If para ser lançado')
      return await this.prisma.movie.create({ data });
    }

    console.log('Saiu do IF');
    return await this.compareMovie(data, existing);
  }

  async addMovieDetail(data: movieDetail): Promise<movieDetail> {
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

  async findMovieIdWithLang(id: string, languageId: string): Promise<movieData | null> {
    console.log('Entrou no Existing com o id: ', id);
    console.log('languageId:', languageId);
    const language = await this.prisma.language.findUnique({ where: { id: languageId }})
    console.log('Language', language);
    if (!language) {
      console.log('Entrou no erro do Lang')
      throw new Error(`Idioma '${languageId}' não encontrado para o filme com id '${id}'.`);
    }
    // console.log('Tentou ir para o fingUnique');
    // return await this.prisma.movie.findUnique({ where: { id } });

    try {
      // Consulta para encontrar o idioma
      const language = await this.prisma.language.findUnique({ where: { id: languageId } });
      console.log('Resultado da consulta ao idioma:', language);
  
      if (!language) {
        console.log(`Idioma '${languageId}' não encontrado no banco de dados.`);
        throw new Error(`Idioma '${languageId}' não encontrado para o filme com id '${id}'.`);
      }
  
      // Se o idioma foi encontrado, continue com a consulta do filme
      const movie = await this.prisma.movie.findUnique({ where: { id } });
      console.log('Resultado da consulta ao filme:', movie);
  
      return movie;
    } catch (error) {
      console.log('Erro ao procurar o idioma ou filme:', error);
      throw new Error(`Erro ao procurar o filme com id '${id}' ou o idioma '${languageId}'.`);
    }
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
