import {
  GenresType,
  MovieByGenre,
  GenresResult,
} from '../../../../global/src/tools/api.interfaces';

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
  movies: MovieByGenre[];
  moviesRatingAverage: number;
  moviesWeightedAverage: number;
}

export interface GenreContextType {
  genres: GenreAnalysis[] | null;
  genreSelected: GenreAnalysis | null;

  infoMode: number;
  loading: boolean;
  error: string | null;
  setInfoMode: React.Dispatch<React.SetStateAction<number>>;
  setGenreSelected: React.Dispatch<React.SetStateAction<GenreAnalysis | null>>;

  fetchGenres: (limitItems?: number) => Promise<void>;
  selectGenre: (genreId: number) => void;
}

export interface GenreChartData {
  labels: string[];
  averageRatings: number[];
  weightedRatings: number[];
}
