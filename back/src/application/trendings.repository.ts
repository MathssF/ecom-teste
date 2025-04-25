import { PrismaClient } from '@prisma/client';
import { v7 } from 'uuid';
import { MoviesRepository, movieData, movieDetail } from './movies.repository';

const uuidv7 = v7();

export interface trendingEntryData {
  datetime: Date;
  mode: number;
  languageId?: string;
}

export interface trendingStoryData {
  trendingId: string;
  movieId: string;
  votesCount: number;
  votesAverage: number;
  popularity: number;
  page: number;
  rank: number;
  rankPage: number;
}

export interface trendingCompareData {
  trendingId: string;
  datetime: Date;
  votesCount: number;
  votesAverage: number;
  popularity: number;
}

export interface trendingHalfYear {
    total: number;
    min_popularity?: number;
    max_popularity?: number;
    min_average?: number;
    max_average?: number;
    old_count?: number;
    now_count?: number;
}

export class TrendingsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createTrend(data: trendingEntryData) {
    return await this.prisma.trendingEntry.create({
      data: {
        id: uuidv7,
        ...data
      }
    });
  }

  async createMovieTrending(data: trendingStoryData) {
    return await this.prisma.trendingStory.create({ data });
  }

  async findTrendingEntryById(id: string) {
    return await this.prisma.trendingEntry.findUnique({
      where: { id }
    });
  }

  async findTrendingStory(trendingId: string, movieId: string) {
    return await this.prisma.trendingStory.findUnique({
      where: { trendingId_movieId: { trendingId, movieId } }
    });
  }

  async findMoviesInTrending(trendingId: string) {
    return await this.prisma.trendingStory.findMany({
      where: { trendingId }
    });
  }

  // Função Importante!
  async findTrendsMovies(movieId: string): Promise<trendingHalfYear> {
    const trends = await this.prisma.trendingStory.finMany({
      where: { movieId }
    });
    if (trends.lenght === 0) {
      return {
        total: 0
      }
    }

    const compares:trendingCompareData[] = trends.map(async (elem: trendingStoryData) => {
      const time = await this.trendDate(elem.trendingId);
      return {
        trendingId: elem.trendingId,
        datetime: time,
        votesCount: elem.votesCount,
        votesAverage: elem.votesAverage,
        popularity: elem.popularity
      };
    })

    const filteredTrends = compares.filter((elem: trendingCompareData) => this.dateCheck(elem.datetime));
    if (filteredTrends.length === 0) {
      return {
        total: 0
      };
    }

    let total = 0;
    let min_popularity = Infinity;
    let max_popularity = -1;
    let min_average = Infinity;
    let max_average = -1;
    let old_count = Infinity;
    let now_count = -1;

    filteredTrends.forEach((elem) => {
      total++;
  
      if (elem.popularity < min_popularity) {
        min_popularity = elem.popularity;
      }
      if (elem.popularity > max_popularity) {
        max_popularity = elem.popularity;
      }
  
      if (elem.votesAverage < min_average) {
        min_average = elem.votesAverage;
      }
      if (elem.votesAverage > max_average) {
        max_average = elem.votesAverage;
      }

      if (elem.votesCount < old_count) {
        old_count = elem.votesCount;
      }
      if (elem.votesCount > now_count) {
        now_count = elem.votesCount;
      }
    });

    return {
      total,
      min_popularity,
      max_popularity,
      min_average,
      max_average,
      old_count,
      now_count
    };
  }

  // Função Importante!
  async findGenresTrend(genres: string[], list: any[]) {
    let genresCounts: object[] = [];

    genres.forEach((elem) => {
      genresCounts.push({
        id: elem,
        count: 0,
        list: [],
        movieIds: [],
      })
    })

    const listMapper = list.map(async (elem) => {
      const hasTrendingStory = await this.prisma.trendingStory.findMany({
        where: {
          movieId: elem.movieId
        }
      })
      let inLimit = false;
      const dateLimit = hasTrendingStory.map((timeWindows: any) => {
        const check = this.dateCheck(timeWindows.datetime);
        if (check) {
          inLimit = true;
          return true;
        }
        return false;
      })
      if (inLimit) {
        const genresFound = await this.prisma.genreMovie.findMany({
          where: {
            movieId: elem.movieId
          }
        })
        genresFound.forEach((found: any) => {
          const el = found.genreId;
          genresCounts.forEach((mark: any) => {
            if (el === mark.id) {
              mark.count ++;
              mark.list.push(elem.title)
              mark.movieIds.push(elem.movieId)
            }
          })
        });
      }
    })
    

    return genresCounts;
  }

  dateCheck(dateCheck: Date): Boolean {
    const now = new Date();

    const halfYear = new Date(now.setMonth(now.getMonth() - 6))

    if (dateCheck >= halfYear) {
      return true;
    }
    return false;
  }

  async trendDate(trendingId: string) {
    const time = await this.findTrendingEntryById(trendingId);
    return time.datetime;
  }
}