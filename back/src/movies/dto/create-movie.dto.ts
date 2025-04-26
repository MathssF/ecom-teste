export class CreateMovieDto {
  id: string;
  title: string;
  originalTitle: string;
  originalLanguage: string;
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
  id: string;
  title?: string;
  originalTitle?: string;
  originalLanguage?: string;
  adult?: boolean

  constructor(data: editMovie) {
    this.id = data.id;
    this.title = data.title;
    this.originalTitle = data.originalTitle;
    this.originalLanguage = data.originalLanguage;
    this.adult = data.adult;
  }
}

export class CreateMovieDetailDto {
  movieId: string;
  voteCount: number;
  voteAverage: number;
  popularity: number;
  releaseDate: Date;
  posterPath: string | undefined | null;

  constructor(
    id: string, votes: number,
    voteAverage: number, popularity: number,
    releaseDate: Date, posterPath?: string | undefined | null,
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
  movieId: string;
  voteCount?: number;
  voteAverage?: number;
  popularity?: number;
  releaseDate?: Date;
  posterPath?: string;

  constructor(
    data: editDetail
    ) {
    this.movieId = data.movieId;
    this.voteCount = data.voteCount;
    this.voteAverage = data.voteAverage;
    this.popularity = data.popularity;
    this.releaseDate = data.releaseDate;
    this.posterPath = data.posterPath;
    }
}