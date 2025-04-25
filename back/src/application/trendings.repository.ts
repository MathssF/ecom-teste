import { PrismaClient } from '@prisma/client';
import { v7 } from 'uuid';

const uuidv7 = v7();

export interface trendingEntryData {
  // id: string;
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

export class TrendingsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  // Cria uma nova entrada de trending (TrendingEntry)
  async createTrend(data: trendingEntryData) {
    // const existing = await this.findTrendingEntryById(data.id);

    // if (!existing) {
      return await this.prisma.trendingEntry.create({ data });
    // }

    // Se já existir, apenas retorna
    // return existing;
  }

  // Cria uma nova relação de trending movie (TrendingStory)
  async createMovieTrending(data: trendingStoryData) {
    // const existing = await this.findTrendingStory(data.trendingId, data.movieId);

    // if (!existing) {
      return await this.prisma.trendingStory.create({ data });
    // }

    // Se já existir, apenas retorna
    // return existing;
  }

  // Busca uma TrendingEntry por ID
  async findTrendingEntryById(id: string) {
    return await this.prisma.trendingEntry.findUnique({
      where: { id }
    });
  }

  // Busca uma TrendingStory por trendingId e movieId
  async findTrendingStory(trendingId: string, movieId: string) {
    return await this.prisma.trendingStory.findUnique({
      where: { trendingId_movieId: { trendingId, movieId } }
    });
  }

  // Busca todas as TrendingStories de um TrendingEntry específico
  async findMoviesInTrending(trendingId: string) {
    return await this.prisma.trendingStory.findMany({
      where: { trendingId }
    });
  }

  // Atualiza a TrendingEntry
  async updateTrend(id: string, data: trendingEntryData) {
    return await this.prisma.trendingEntry.update({
      where: { id },
      data
    });
  }

  // Atualiza a TrendingStory
  async updateMovieTrending(trendingId: string, movieId: string, data: trendingStoryData) {
    return await this.prisma.trendingStory.update({
      where: { trendingId_movieId: { trendingId, movieId } },
      data
    });
  }
}