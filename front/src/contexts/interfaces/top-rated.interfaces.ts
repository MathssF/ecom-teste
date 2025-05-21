import { limitsData } from '../../../../global/tables/interfaces';
import { TopRatedCoupled, TopRatedListWithPages } from '../../../../global/tables/results/top-rated.interfaces'
import { MovieDetails } from './details.interfaces';

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


  // posterPath?: string;
  // backdropPath?: string;
  // overview?: string;


  page?: number;
  rank?: number;
  rankPage?: number;
}

export interface TopRatedResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  page?: number;
  rank?: number;
  rankPage?: number;
}

// export interface TopRatedCoupled {
//   adult: boolean;
//   backdrop_path?: string;
//   genre_ids: number[];
//   id: number;
//   original_language: string;
//   original_title: string;
//   overview?: string;
//   popularity: number;
//   poster_path?: string;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
//   page?: number;
//   rank?: number;
//   rankPage?: number;
// }

export interface TopRatedList {
  page: number;
  results: TopRatedResult[];
  total_pages: number;
  total_results: number;
}

export interface TopRatedContextType {
  movies: TopRatedResult[];
  moviesByYear: TopRatedResult[];
  loading: boolean;
  error: string | null;
  year?: number | null;
  setYear: (year: number | null) => void;
  typeResult: number;
  setTypeResult: (value: number) => void;
  fetchTopRated: (data?: limitsData) => void;
}

export interface TopRatedPageContextType {
  currentPage: number | null;
  movies: TopRatedResult[] | null;
  pageData: TopRatedList | null;
  loading: boolean;
  error: string | null;
  fetchTopRatedPage: (page: number, data?: limitsData) => void;
}

export interface TopByYearMovie {
  id: number;
  title: string;
  voteAverage: number;
  release_date: string;
  [key: string]: any;
}

export interface TopsByYearContextType {
  movies: TopByYearMovie[] | null;
  loading: boolean;
  error: string | null;
  fetchTopsByYear: (year: string, limitItems?: number) => Promise<void>;
}
