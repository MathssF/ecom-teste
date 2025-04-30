import { PrismaService } from '../../prisma/prisma.service';
import { v7 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { trendingEntryData, trendingStoryData } from './trendings.utils';

const uuidv7 = v7();

@Injectable()
export class TrendingsFactoryRepository {
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
}
