import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { trendingEntryData } from '../trendings.utils';

@Injectable()
export class TrendingsValidationRepository {
  constructor(private readonly prisma: PrismaService) {}

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

  validateData(data: trendingEntryData) {
    if (!data.datetime || !data.mode) {
      throw new Error("Data ou mode não estão preenchidos corretamente.");
    }
    // Outras validações podem ser feitas aqui
  }
}