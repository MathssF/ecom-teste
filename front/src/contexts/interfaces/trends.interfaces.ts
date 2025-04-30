import { limitsData } from '../../../../global/tables/interfaces';

export interface TrendingResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  page?: number;
  rank?: number;
  pageRank?: number;
  rankPage?: number;
}

export interface TrendingList {
  page: number;
  results: TrendingResult[];
  total_pages: number;
  total_results: number;
}

export interface TrendsContextType {
  movies: TrendingResult[];
  loading: boolean;
  error: string | null;
  fetchTrending: (data?: limitsData) => void;
}

export interface TrendsPageContextType {
  pageData: TrendingList | null;
  loading: boolean;
  error: string | null;
  fetchTrendingPage: (page: number, data?: limitsData) => void;
}