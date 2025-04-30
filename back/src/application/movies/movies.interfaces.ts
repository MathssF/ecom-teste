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