import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TrendingsPurgeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async deleteTrend(trendingId: string) {
    return await this.prisma.trendingEntry.delete({
      where: { id: trendingId }
    });
  }

  async deleteAllTrends() {
    return await this.prisma.trendingEntry.deleteMany();
  }
}