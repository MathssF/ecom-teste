import { Injectable } from '@nestjs/common';
import { CreateEntryDto, CreateStoryDto } from './dto/create-trending.dto';
import { TrendingsRepository } from '../application/trends/trendings.utils';
import { BasicService } from '../basic/basic.service';
import { TrendingsReaderRepository } from '../application/trends/trendings.reader.repository';
import { TrendingsFactoryRepository } from '../application/trends/trendings.factory.repository';
import { TrendingsPurgeRepository } from '../application/trends/trendings.purge.repository';
import { TrendingsValidationRepository } from '../application/trends/trendings.validations.repository';

@Injectable()
export class TrendingsService {
  constructor(
    private readonly trendingRepository: TrendingsRepository,
    private readonly factory: TrendingsFactoryRepository,
    private readonly reader: TrendingsReaderRepository,
    private readonly purge: TrendingsPurgeRepository,
    private readonly validator: TrendingsValidationRepository,
    private readonly basic: BasicService,
  ) {}

  async createEntry(dto: CreateEntryDto) {
    const now = new Date();
    let limitDate: Date;

    if (dto.mode === 1) {
      limitDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    } else if (dto.mode === 2) {
      limitDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    } else {
      throw new Error(`Modo inválido: ${dto.mode}`);
    }

    const existing = await this.validator.findExistingTrend(dto.mode, limitDate, dto.languageId);

    if (existing) {
      return { 
        finish: false,
        message: 'Já existe uma entrada recente para esse modo.',
        existing,
      };
    }

    this.validator.validateData(dto); // valida dados

    const result = await this.factory.createTrend(dto);
    return {
      finish: true,
      message: 'Entrada validada!',
      result,
    };
  }

  async addStory(dto: CreateStoryDto) {
    return await this.factory.createMovieTrending(dto);
  }

  async findTrendId(id: string) {
    return await this.reader.findTrendingEntryById(id);
  }

  async findStory(movieId: string, trendId: string) {
    return await this.reader.findTrendingStory(trendId, movieId);
  }

  async findMovies(trendId: string) {
    return await this.reader.findMoviesInTrending(trendId);
  }

  async findTrendxMovies(movieId: string) {
    return await this.reader.findTrendsMovies(movieId);
  }

  async findGenresxTrend(topRated: any[]) {
    const genres = await this.basic.findAllGenres();
    const genreIds = genres.map(g => g.id);
    return await this.reader.findGenresTrend(genreIds, topRated);
  }

  async deleteTrend(trendId: string) {
    return await this.purge.deleteTrend(trendId);
  }

  async deleteAllTrends() {
    return await this.purge.deleteAllTrends();
  }
}