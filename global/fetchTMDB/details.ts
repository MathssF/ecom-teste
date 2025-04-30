import { limitsData } from '../tables/interfaces';
import * as dotenv from 'dotenv';
dotenv.config();

export class MovieDetailsAPI {
  private language: string;
  private apiKey: string;

  constructor(language: string = 'en-US') {
    this.language = language;
    this.apiKey = process.env.API_KEY!;
  }

  private getUrl(movieId: number): string {
    return `https://api.themoviedb.org/3/movie/${movieId}?language=${this.language}`;
  }

  private getOptions(): RequestInit {
    return {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: this.apiKey,
      },
    };
  }

  public async getMovieDetails(movieId: number, data?: limitsData): Promise<any> {
    if (data?.setLang && data.chooseLang) {
      this.language = data.chooseLang;
    }
    
    const response = await fetch(this.getUrl(movieId), this.getOptions());
    if (!response.ok) {
      throw new Error(`Erro ao buscar detalhes do filme ${movieId}: ${response.statusText}`);
    }

    const movie: any = await response.json();

    return {
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      original_language: movie.original_language,
      vote_count: movie.vote_count,
      vote_average: movie.vote_average,
      popularity: movie.popularity,
      adult: movie.adult,
      release_date: movie.release_date,
      genres: movie.genres?.map((g: any) => ({ id: g.id, name: g.name })),
      poster_path: movie.poster_path,
      runtime: movie.runtime,
      overview: movie.overview,
      status: movie.status,
      production_companies: movie.production_companies?.map((c: any) => ({
        id: c.id,
        name: c.name,
        logo_path: c.logo_path,
        origin_country: c.origin_country,
      })),
    };
  }
}