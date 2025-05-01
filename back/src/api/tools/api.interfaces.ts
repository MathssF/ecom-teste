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
  moviesRattingAverage: number;
  moviesWeightedAvarege: number;
}

export interface YearResult {
  year: string;
  movies: [];
}