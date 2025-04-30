import {
  Controller, Get, Post, Body, Patch, Param, Delete,
  RequestMapping
} from '@nestjs/common';
import { DevService } from './dev.service';
import { BasicService } from '../basic/basic.service';
import { MoviesService } from '../movies/movies.service';
import { TrendingsService } from '../trendings/trendings.service';
import { CreateMovieDto, CreateMovieDetailDto } from '../movies/dto/create-movie.dto';
import { CreateEntryDto, CreateStoryDto } from '../trendings/dto/create-trending.dto';
import { limitsData } from '../../../global/tables/interfaces';

@Controller('dev')
export class DevController {
  constructor(
    private readonly devService: DevService,
    private readonly basicService: BasicService,
    private readonly movieService: MoviesService,
    private readonly trendingService: TrendingsService,
  ) {}

  @Post('start-seed')
  async startSeed() {
    return await this.devService.seedStart()
  }

  @Get('/movie/:movieId')
  async findOneMovie(
    @Param('movieId') movieId: string,
    @Query() query: limitsData
    ) {
    const foundMovie = await this.devService.callDetails(movieId);
    return foundMovie;
  }

  @Post('/movie/:movieId')
  async postOneMovie(
    @Param('movieId') movieId: string,
  ) {
    const movieDetails = await this.devService.callDetails(movieId);
    
    const movieDto = {
      id: movieDetails.id,
      title: movieDetails.title,
      originalTitle: movieDetails.original_title,
      originalLanguage: movieDetails.original_language,
      adult: movieDetails.adult,
      genres: movieDetails.genres.map((genre: any) => ({ id: genre.id })),
      posterPath: movieDetails.poster_path,
      releaseDate: movieDetails.release_date,
    };

    const movieT: CreateMovieDto = {
      id: movieDto.id,
      title: movieDto.title,
      originalTitle: movieDto.originalTitle,
      originalLanguage: movieDto.originalLanguage,
      adult: movieDto.adult,
    };

    const createdMovie = await this.movieService.addMovie(movieT);

    const movieDetailDto = {
      movieId: movieDetails.id,
      voteCount: movieDetails.vote_count,
      voteAverage: movieDetails.vote_average,
      popularity: movieDetails.popularity,
      releaseDate: movieDetails.release_date,
      posterPath: movieDetails.poster_path,
    };

    const movieDetailT: CreateMovieDetailDto = {
      movieId: movieDetailDto.movieId,
      voteCount: movieDetailDto.voteCount,
      voteAverage: movieDetailDto.voteAverage,
      popularity: movieDetailDto.popularity,
      releaseDate: movieDetailDto.releaseDate,
      posterPath: movieDetailDto.posterPath,
    };

    const setDetails = await this.movieService.addDetail(movieDetailT);

    const genreRelations = await Promise.all(
      movieDto.genres.map(async (genre) => {
        try {
          return await this.movieService.addGenreToMovie(movieDto.id, genre.id);
        } catch (error) {
          console.error(`Erro ao adicionar gênero ${genre.id} para o filme ${movieDto.id}`, error);
          return null;
        }
      })
    );

    return {
      createdMovie,
      setDetails,
      genreRelations: genreRelations.filter(rel => rel !== null)
    }
  }
  
  @Get('/top-rated')
  async findTopRateds(@Query() query: limitsData) {
    const topList = await this.devService.callTopRated();
    return topList;
  }

  @Get('top-rated/:page')
  async findTopPage(
    @Param('page') page: number,
    @Query() query: limitsData
  ) {
    return await this.devService.callTopPage(page);
  }

  @Post('/top-rated')
  async postTopRateds() {
    const topList = await this.devService.callTopRated();
    const results = [];
  
    for (const movie of topList) {
      try {
        const movieT: CreateMovieDto = {
          id: movie.id.toString(),
          title: movie.title,
          originalTitle: movie.original_title,
          originalLanguage: movie.original_language,
          adult: movie.adult,
        };
        console.log('movieT:', movieT);
        const createdMovie = await this.movieService.addMovie(movieT);
  
        const movieDetailT: CreateMovieDetailDto = {
          movieId: movie.id.toString(),
          voteCount: movie.vote_count,
          voteAverage: movie.vote_average,
          popularity: movie.popularity,
          releaseDate: movie.release_date,
          posterPath: movie.poster_path,
        };
  
        const createdDetail = await this.movieService.addDetail(movieDetailT);
  
        const genres = movie.genre_ids.map((genreId: number) => ({ id: genreId.toString() }));
        const genreRelations = await Promise.all(
          genres.map(async (genre) => {
            try {
              return await this.movieService.addGenreToMovie(
                movie.id.toString(),
                genre.id.toString(),
              );
            } catch (error) {
              console.error(`Erro ao adicionar gênero ${genre.id} para o filme ${movie.id}`, error);
              return null;
            }
          })
        );
  
        results.push({
          createdMovie,
          createdDetail,
          genres: genreRelations.filter(rel => rel !== null),
        });
  
      } catch (error) {
        console.error(`Erro ao adicionar o filme ${movie.title}: `, error);
      }
    }
  
    return { message: 'Top rated movies processed.', total: results.length, movies: results };
  }

  @Get('/trends')
    @Query() query: limitsData
    async findTrends() {
    const trendsList = await this.devService.callTrendings();
    return trendsList;
  }

  @Get('/trends/:page')
  async findTrendPage(
    @Param('page') page: number,
    @Query() query: limitsData

  ) {
    return await this.devService.callTrendPage(page);
  }

  @Post('/trends/:mode')
  async postTrends(@Param('mode') modeParam: string) {
    const mode = parseInt(modeParam, 10);
    const now = new Date();
    const limitDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const createEntryDto = new CreateEntryDto(now, mode);
    const entryResult = await this.trendingService.createEntry(createEntryDto);

    if (!entryResult.finish) {
      return entryResult;
    }

    const trendsList = await this.devService.callTrendings();
    console.log('Trendings: ', trendsList);
    const results = [];

    const skippedStoryIds: string[] = [];

    for (const trend of trendsList) {
      const {
        id, title, original_title, original_language, adult,
        genres_id, vote_count, vote_average, popularity, release_date, poster_path,
        page, rank, rankPage
      } = trend;

    let movie: CreateMovieDto = await this.movieService.findMovie(id.toString());

    if (!movie) {
      const movieDto = new CreateMovieDto(
        id.toString(), title, original_title, original_language, adult
      );
      movie = await this.movieService.addMovie(movieDto);
    }

    let movieDetail: CreateMovieDetailDto = await this.movieService.findMovieDetail(
      id.toString()
    );

    if (!movieDetail) {
      const movieDetailDto = new CreateMovieDetailDto(
        id.toString(), vote_count, vote_average,
        popularity, release_date ? new Date(release_date) : null,
        poster_path);
      movieDetail = await this.movieService.addDetail(movieDetailDto);
    }

    const genres = Array.isArray(genres_id)
      ? genres_id.map((genreId: number) => ({ id: genreId.toString() }))
      : [];
    const genreRelations = await Promise.all(
      genres.map(async (genre) => {
        try {
          return await this.movieService.addGenreToMovie(
            movie.id.toString(), genre.id.toString()
          );
          } catch (error) {
            console.error(`Erro ao adicionar gênero ${genre.id} para o filme ${movie.id}`, error);
            return null;
          }
        })
      );

      if (!entryResult.result?.id) {
        console.error('entryResult.result.id está indefinido', entryResult);
        continue;
      }

      const storyDto = new CreateStoryDto(
        entryResult.result.id, movie.id, vote_count,
        vote_average, popularity, page, rank, rankPage
      );
      await this.trendingService.addStory(storyDto);

      results.push({
        movie,
        movieDetail,
        genres: genreRelations.filter(rel => rel !== null),
      });
    }

    return {
      message: 'Tendências processadas com sucesso!',
      total: results.length, movies: results
    };
  }

  @Delete('delete-movies')
  async deleteAllMovies() {
    return await this.devService.deleteAllMovies();
  }

  @Post('/error')
  async postError(msg: string, path: string, method: string) {
    return await this.devService.devError(msg, path, method);
  }
}
