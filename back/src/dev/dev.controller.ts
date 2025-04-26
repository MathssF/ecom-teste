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
import { MoviesRepository } from '../application/movies.repository';

@Controller('dev')
export class DevController {
  constructor(
    private readonly devService: DevService,
    private readonly basicService: BasicService,
    private readonly movieService: MoviesService,
    private readonly trendingService: TrendingsService,
    private readonly movieRepository: MoviesRepository
  ) {}

  @Post('start-seed')
  async startSeed() {
    return await this.devService.seedStart()
  }

  @Get('/movie/:movieId')
  async findOneMovie(@Param('movieId') movieId: string) {
    const foundMovie = await this.devService.callDetails(movieId);
    return foundMovie;
  }

  @Post('/movie/:movieId')
  async postOneMovie(
    @Param('movieId') movieId: string
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

    // const createdMovie = await this.movieService.addMovie(movieDto);
    const createdMovie = await this.movieRepository.addMovie(movieT);

    const movieDetailDto = {
      movieId: movieDetails.id,
      voteCount: movieDetails.vote_count,
      voteAverage: movieDetails.vote_average,
      popularity: movieDetails.popularity,
      releaseDate: movieDetails.release_date,
      posterPath: movieDetails.poster_path,
    };

    const movieDetailT: CreateMovieDetailDTO = {
      movieId: movieDetailDto.movieId,
      voteCount: movieDetailDto.voteCount,
      voteAverage: movieDetailDto.voteAverage,
      popularity: movieDetailDto.popularity,
      releaseDate: movieDetailDto.releaseDate,
      posterPath: movieDetailDto.posterPath,
    };

    // const setDetails = await this.movieService.addDetail(movieDetailDto);
    const setDetails = await this.movieRepository.addMovieDetail(movieDetailT);

    return {
      createdMovie, setDetails
    }
  }
  
  @Get('/top-rated')
  async findTopRateds() {
    const topList = await this.devService.callTopRated();
    return topList;
  }

  @Post('/top-rated')
  async postTopRateds() {
    const topList = await this.devService.callTopRated();
    for (const movieDetails of topList) {
      try {
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
  
        // return await this.movieService.addMovie(movieDto);
        return await this.movieRepository.addMovie(movieT);
      } catch (error) {
        console.error(`Erro ao adicionar o filme ${movieDetails.title}: `, error);
      }
    }
  }  

  @Get('/trends')
  async findTrends() {
    const trendsList = await this.devService.callTrendings();
    return trendsList;
  }

  @Post('/trends/:mode')
  async postTrends(
    @Param('mode') mode: number
  ) {
    const now = new Date();
    const limitDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const createEntryDto = new CreateEntryDto(now, mode);
    const entryResult = await this.trendingService.createEntry(createEntryDto);

    if (!entryResult.finish) {
      return entryResult;
    }

    const trendsList = await this.devService.callTrendings();

    for (const trend of trendsList) {
      const { id, title, original_title, original_language, adult, genres, vote_count, vote_average, popularity, release_date, poster_path } = trend;
  
      let movie = await this.movieService.findMovie(id);

      // const movieT: CreateMovieDto = {
      //   id: movie.id,
      //   title: movie.title,
      //   originalTitle: movie.originalTitle,
      //   originalLanguage: movie.originalLanguage,
      //   adult: movie.adult,
      // };
  
      if (!movie) {
        const movieDto = new CreateMovieDto(id, title, original_title, original_language, adult);
        // movie = await this.movieService.addMovie(movieDto);
        movie = await this.movieRepository.addMovie(movieT);
      } // else {
      //   const movieT: CreateMovieDto = {
      //     id: movie.id,
      //     title: movie.title,
      //     originalTitle: movie.originalTitle,
      //     originalLanguage: movie.originalLanguage,
      //     adult: movie.adult,
      //   };
      // }
  
      let movieDetail = await this.movieService.findMovieDetail(id);
  
      if (!movieDetail) {
        const movieDetailDto = new CreateMovieDetailDto(
          id, vote_count, vote_average, popularity, new Date(release_date), poster_path
        );
        // movieDetail = await this.movieService.addDetail(movieDetailDto);
        movieDetail = await this.movieRepository.addMovieDetail(movieDetailDto)
      }

      const storyDto = new CreateStoryDto(entryResult.result.id, movie.id, vote_count, vote_average, popularity, 1, 1, 1);
      await this.trendingService.addStory(storyDto);
    }

    return { message: 'Tendências processadas com sucesso!' };

  }

  @Post('/error')
  async postError(msg: string, path: string, method: string) {
    return await this.devService.devError(msg, path, method);
  }
}
