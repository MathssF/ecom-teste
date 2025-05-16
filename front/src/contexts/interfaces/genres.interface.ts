import { GenresType, GenresResult } from '../../../../global/tools/api.interfaces';

export interface GenreMovie {
  id: number;
  title: string;
  voteAverage: number;
  votesCounts: number;
  genre_id: number[];
  release_date: string;
}

export interface GenreAnalysis {
  id: number;
  name: string;
  movies: GenreMovie[];
  moviesRattingAverage: number;
  moviesWeightedAvarege: number;
}

export interface GenreContextType {
  genres: GenreAnalysis[] | null;
  loading: boolean;
  error: string | null;
  fetchGenres: (limitItems?: number) => Promise<void>;
}
