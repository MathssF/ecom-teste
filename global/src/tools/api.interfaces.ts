export interface GenresType {
  id: number;
  name: string;
}

export interface MovieByGenre {
  id: string;
  title: string;
  voteAverage: number;
  votesCounts: number;
  popularity: number;
}

export interface GenresResult {
  id: number;
  name: string;
  movies: MovieByGenre[];
  moviesRatingAverage: number;
  moviesWeightedAverage: number;
}

export interface YearResult {
  year: string;
  movies: any[];
}