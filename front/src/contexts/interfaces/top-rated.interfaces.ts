import { limitsData } from '../../../../global/src/tables/interfaces';
import {
  TopRatedResult, TopRatedList,
  TopRatedCoupled, TopRatedListWithPages,
} from '../../../../global/src/tables/results/top-rated.interfaces'

export interface MovieData {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
  adult: boolean;
  release_date: string;
  genre_ids: number[];
  poster_path: string;
  page?: number;
  rank?: number;
  rankPage?: number;
}

export interface TopRatedContextType {
  movies: TopRatedResult[];
  moviesByYear: TopRatedResult[];
  dataResult: TopRatedResult[] | TopRatedList | TopRatedListWithPages[] | null;
  loading: boolean;
  error: string | null;
  year?: number | null;
  setYear: (year: number | null) => void;
  typeResult: number;
  setTypeResult: (value: number) => void;
  fetchTopRated: (data?: limitsData) => void;
}