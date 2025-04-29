/*

OBS: APENAS PARA PERIODO DE DESENVOLVIMENTO!!!

*/

import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TrendingsDeveloperRepository {
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