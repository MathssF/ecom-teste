import { IsString, IsBoolean, IsNumber, IsDate, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  originalTitle: string;

  @IsString()
  @IsNotEmpty()
  originalLanguage: string;

  @IsBoolean()
  @IsNotEmpty()
  adult: boolean;

  constructor(
    id: string,
    title: string,
    originalTitle: string,
    originalLanguage: string,
    adult: boolean
  ) {
    this.id = id;
    this.title = title;
    this.originalTitle = originalTitle;
    this.originalLanguage = originalLanguage;
    this.adult = adult;
  }
}

interface editMovie {
  id: string;
  title?: string;
  originalTitle?: string;
  originalLanguage?: string;
  adult?: boolean;
}

export class EditMovieDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  originalTitle?: string;

  @IsOptional()
  @IsString()
  originalLanguage?: string;

  @IsOptional()
  @IsBoolean()
  adult?: boolean;

  constructor(data: editMovie) {
    this.id = data.id;
    this.title = data.title;
    this.originalTitle = data.originalTitle;
    this.originalLanguage = data.originalLanguage;
    this.adult = data.adult;
  }
}

export class CreateMovieDetailDto {
  @IsString()
  movieId: string;

  @IsNumber()
  voteCount: number;

  @IsNumber()
  voteAverage: number;

  @IsNumber()
  popularity: number;

  @IsDate()
  releaseDate: Date;

  @IsString()
  posterPath: string;

  constructor(
    id: string,
    votes: number,
    voteAverage: number,
    popularity: number,
    releaseDate: Date,
    posterPath: string
  ) {
    this.movieId = id;
    this.voteCount = votes;
    this.voteAverage = voteAverage;
    this.popularity = popularity;
    this.releaseDate = releaseDate;
    this.posterPath = posterPath;
  }
}

interface editDetail {
  movieId: string;
  voteCount?: number;
  voteAverage?: number;
  popularity?: number;
  releaseDate?: Date;
  posterPath?: string;
}

export class EditMovieDetailDto {
  @IsString()
  movieId: string;

  @IsOptional()
  @IsNumber()
  voteCount?: number;

  @IsOptional()
  @IsNumber()
  voteAverage?: number;

  @IsOptional()
  @IsNumber()
  popularity?: number;

  @IsOptional()
  @IsDate()
  releaseDate?: Date;

  @IsOptional()
  @IsString()
  posterPath?: string;

  constructor(data: editDetail) {
    this.movieId = data.movieId;
    this.voteCount = data.voteCount;
    this.voteAverage = data.voteAverage;
    this.popularity = data.popularity;
    this.releaseDate = data.releaseDate;
    this.posterPath = data.posterPath;
  }
}