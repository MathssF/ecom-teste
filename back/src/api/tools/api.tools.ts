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

  filterByGenres(tops: any[], reference: GenresType | GenresType[] | null): GenresResult[] {
    let genres: GenresType[];

    if (!reference) {
        genres = Genres;
    } else if (Array.isArray(reference)) {
      genres = reference;
    } else {
      genres = [reference]; 
    }
  
    const genresResult: GenresResult[] = genres.map((genre) => {
      const movies = tops.filter((movie: any) => movie.genre_ids?.includes(genre.id));
  
      const totalVotes = movies.reduce((sum, movie) => sum + movie.votes_count, 0);
      const ratingSum = movies.reduce((sum, movie) => sum + movie.vote_average, 0);
      const weightedSum = movies.reduce((sum, movie) => sum + (movie.vote_average * movie.votes_count), 0);
  
      const moviesRatingAverage = movies.length > 0 ? ratingSum / movies.length : 0;
      const moviesWeightedAverage = totalVotes > 0 ? weightedSum / totalVotes : 0;
  
      return {
        id: genre.id,
        name: genre.name,
        movies,
        moviesRatingAverage,
        moviesWeightedAverage,
      };
    });
  
    return genresResult;
  }

  filterByYear(tops: any, year: string | null): YearResult[] {
    const yearList: YearResult[] = [];
    if (year === null) {
      for(const movie of tops) {
        const movieYear = new Date(movie.release_date).getFullYear();
        const existingYear = yearList.find(item => new Date(item.year).getFullYear() === movieYear);
        if (existingYear) {
          existingYear.movies.push(movie);
        } else {
          yearList.push({ year: movieYear.toString(), movies: [movie] });
        }
      }
    } else {
      const numericYear = parseInt(year);
      const moviesOfYear = tops.filter((movie: any) => {
        const movieYear = new Date(movie.release_date).getFullYear();
        return movieYear === numericYear;
      });

      yearList.push({ year: year, movies: moviesOfYear });
    }
    return yearList;
  }

  checkEach(tops: any[], trends: any[]) {
    const TopsInTrends = tops.map((movieOnTops) => {
      const movie = { ...movieOnTops };

      for (const movieOnTrends of trends) {
        if (movieOnTops.id === movieOnTrends.id) {
          movie.trends = true;
          movie.trendPage = movieOnTrends.page ?? null;
          movie.trendRank = movieOnTrends.rank ?? null;
          movie.trendPageRank = movieOnTrends.rankPage ?? null;
          break;
        }
      }
      return movie;
    })
    return TopsInTrends;
  }

  validadeGenreRef (
    data: { chooseGenreRef: string | number },
  ): GenresType | null {
    const genreId = Number(data.chooseGenreRef);
    const genreName = data.chooseGenreRef.toString().toLowerCase();
    const byId = Genres.find(g => g.id === genreId);
    if (byId) {
      return byId;
    };
    const byName = Genres.find(g => g.name.toLowerCase() === data.chooseGenreRef.toString().toLowerCase());
    if (byName) {
      return byName;
    };
    return null;
  }
}