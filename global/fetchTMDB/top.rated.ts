import * as dotenv from 'dotenv';
dotenv.config();

interface Movie {
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
}

interface TopRatedMoviesResponse {
  results: Movie[];
  total_pages: number;
}

export class TopRatedMoviesAPI {
  private language: string;
  private apiKey: string;

  constructor(language: string = 'en-US') {
    this.language = language;
    this.apiKey = process.env.API_KEY!;
  }

  private getUrl(): string {
    return `https://api.themoviedb.org/3/movie/top_rated?language=${this.language}`;
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

  public async getTopRatedMovies(): Promise<{
    allMovies: any[], pageSelects: { page: number, results: number }[]
  }> {
    let allMovies: any[] = [];
    let pageSelects: { page: number, results: number }[] = [];
    let page = 1;
    let totalPages = 1;
  
    while (allMovies.length < 250 && page <= totalPages) {
      console.log(`Fazendo requisição para a página ${page}`);
      
      const response = await fetch(`${this.getUrl()}&page=${page}`, this.getOptions());
      console.log(`Resposta recebida para a página ${page}:`, response.status);
  
      const json = await response.json();
      console.log(`Dados da página ${page}:`, json);
  
      const { results, total_pages } = json as TopRatedMoviesResponse;
      totalPages = total_pages;

      // console.log('Final das requisições');

  
      const movies = results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        original_title: movie.original_title,
        original_language: movie.original_language,
        vote_count: movie.vote_count,
        vote_average: movie.vote_average,
        popularity: movie.popularity,
        adult: movie.adult,
        release_date: movie.release_date,
        genre_ids: movie.genre_ids,
        poster_path: movie.poster_path,
      }));
  
      pageSelects.push({ page, results: results.length });
  
      allMovies = [...allMovies, ...movies];
  
      page++;
    }

    console.log('Final das Páginas, Última: ', page);
    console.log('Page Selects: ', pageSelects);
    console.log('Movie 1: ', allMovies[1]);
    console.log('Moovie 200: ', allMovies[200]);
  
    return {
      allMovies: allMovies.slice(0, 250),
      pageSelects
    };
  }
}