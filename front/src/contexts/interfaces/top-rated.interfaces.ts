import { limitsData } from '../../../../global/tables/interfaces';
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

export interface TopRatedList {
  page: number;
  results: TopRatedResult[];
  total_pages: number;
  total_results: number;
}

export interface TopRatedContextType {
  movies: MovieData[];
  loading: boolean;
  error: string | null;
  fetchTopRated: (data?: limitsData) => void;
}

export interface TopRatedPageContextType {
  pageData: TopRatedList | null;
  loading: boolean;
  error: string | null;
  fetchTopRatedPage: (page: number, data?: limitsData) => void;
}