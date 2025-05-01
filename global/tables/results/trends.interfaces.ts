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
  rankPage?: number;
  addInfos?: any,
}

export interface TrendingList {
  page: number;
  results: TrendingResult[];
  total_pages: number;
  total_results: number;
  addInfos?: any,
}