import { GenresType, GenresResult, YearResult } from "./api.interfaces";
import { MovieDetails } from '../../../../global/tables/results/details.interfaces';
import {
  TopRatedResult,
  TopRatedList
} from '../../../../global/tables/results/top-rated.interfaces';
import {
  TrendingResult,
  TrendingList
} from '../../../../global/tables/results/trends.interfaces';
import { Genres } from "../../../../global/tables/seed.tables";

export class ApiTools {
  constructor() {}

  filterByGenres(tops: any, reference: GenresType | null): GenresResult[] | null {
    let genres: GenresType[] = [];
    let genresResult: GenresResult[] = [];
    if (reference === null) {
      genres = Genres;
    } else {
      genres.push(reference);
    }
    genresResult = genres.map((elem) => {
      const movies = tops.filter((movie: any) => movie.genre_id?.includes(genre.id));
      const totalVotes = movies.reduce((sum, movie) => sum + movie.votesCounts, 0);
      const ratingSum = movies.reduce((sum, movie) => sum + movie.voteAverage, 0);
      const weightedSum = movies.reduce(
        (sum, movie) => sum + (movie.voteAverage * movie.votesCounts), 0
      );
      const moviesRattingAverage = movies.length > 0 ? ratingSum / movies.length : 0;
      const moviesWeightedAvarege = totalVotes > 0 ? weightedSum / totalVotes : 0;
      return {
        id: genres.id,
        name: genre.name,
        movies: movies,
        moviesRattingAverage,
        moviesWeightedAvarege
      }
    });
    return genresResult;
  }

  noteByGenres(list: any, reference: GenresType | null) {
    const genres: GenresResult[] | null = this.filterByGenres(list, reference);
    const result = genres.map((elem) => {
      return {
        id,
        name,
        moviesRattingAverage,
        moviesWeightedAvarege
      }
    })
  }

  filterByYear(tops: any, year: string | null) {
    let yearList: YearResult[] = [];
    if (year === null) {
      for(const movie of tops) {
        const movieYear = new Date(movie.release_date).getFullYear();
        const existingYear = yearList.find(item => item.year === movieYear);
        if (existingYear) {
          existingYear.movies.push(movie);
        } else {
          yearList.push({ year: movieYear, movies: [movie] });
        }
      }
    } else {
      yearList.push({ year: year, movies: [] })
      const topsYear = tops.map((movie) => {
        const movieYear = new Date(movie.release_date).getFullYear();
        if (movieYear.toString() === year) {
          yearList[0].movies.push(movie);
        }
      })
    }
    return yearList;
  }

  async checkEach() {
    //
  }

  async validadeGenreRef(
    data: { chooseGenreRef: string | number },
    genres: { id: number, name: string }[],
  ) {
    const genreId = Number(data.chooseGenreRef);
    const generoPorId = genres.find(g => g.id === genreId);
    if (generoPorId) {
      return generoPorId;
    }
    const genreName = data.chooseGenreRef.toString();
    const generoPorNome = genres.find(g => g.name.toLowerCase() === data.chooseGenreRef.toString().toLowerCase());
    if (generoPorNome) {
      return generoPorNome;
    }
    return null;
  }
}