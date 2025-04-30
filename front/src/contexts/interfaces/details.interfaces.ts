import { limitsData } from '../../../../global/tables/interfaces';

export interface MovieDetails {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
  adult: boolean;
  release_date: string;
  genres: { id: number; name: string }[];
  poster_path: string;
  runtime: number;
  overview: string;
  status: string;
  production_companies: {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
  }[];
}

export interface DetailsContextType {
  movie: MovieDetails | null;
  loading: boolean;
  error: string | null;
  fetchMovie: (id: number, data?: limitsData) => void;
}