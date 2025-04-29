import { PrismaService } from '../prisma/prisma.service';
import { v7 } from 'uuid';
import { MoviesRepository, movieData, movieDetail } from './movies.repository';
import { Injectable } from '@nestjs/common';

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

@Injectable()
export class TrendingsRepository {
  constructor(private readonly prisma: PrismaService) {}

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

  async findExistingTrend(mode: number, fromDate: Date, languageId?: string) {
    return await this.prisma.trendingEntry.findFirst({
      where: {
        mode,
        datetime: {
          gte: fromDate,
        },
        ...(languageId && { languageId })
      }
    });
  }

  // Função Importante!
  async findTrendsMovies(movieId: string): Promise<trendingHalfYear> {
    const trends = await this.prisma.trendingStory.findMany({
      where: { movieId }
    });
    if (trends.length === 0) {
      return {
        total: 0
      }
    }

    const compares: trendingCompareData[] = await Promise.all(
      trends.map(async (elem: trendingStoryData) => {
        return {
          trendingId: elem.trendingId,
          datetime: new Date(), // ou outro valor
          votesCount: elem.votesCount,
          votesAverage: elem.votesAverage,
          popularity: elem.popularity
        };
      })
    );

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
    const genresCounts = genres.map((id) => ({
      id,
      count: 0,
      list: [] as string[],
      movieIds: [] as string[],
    }));
  
    for (const elem of list) {
      const trendStories = await this.prisma.trendingStory.findMany({
        where: { movieId: elem.movieId },
      });
  
      let inLimit = false;
  
      for (const story of trendStories) {
        const setDate = await this.prisma.trendingEntry.findUnique({
          where: {
            id: story.trendingId
          }
        })
        if (this.dateCheck(setDate.datetime)) {
          inLimit = true;
          break;
        }
      }
  
      if (!inLimit) continue;
  
      const genresFound = await this.prisma.genreMovie.findMany({
        where: { movieId: elem.movieId },
      });
  
      for (const found of genresFound) {
        const genre = genresCounts.find((g) => g.id === found.genreId);
        if (genre) {
          genre.count++;
          genre.list.push(elem.title);
          genre.movieIds.push(elem.movieId);
        }
      }
    }
  
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