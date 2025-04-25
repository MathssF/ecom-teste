import { Injectable } from '@nestjs/common';
import { CreateEntryDto, CreateStoryDto } from './dto/create-trending.dto';
import { TrendingsRepository } from 'src/application/trendings.repository';
import { BasicService } from 'src/basic/basic.service';

@Injectable()
export class TrendingsService {
  constructor(
    private readonly trendingRepository: TrendingsRepository,
    private readonly basic: BasicService,
  ) {}

  async createEntry(dto: CreateEntryDto) {
    const now = new Date();
    let limitDate: Date;

    if (dto.mode === 1) {
      limitDate = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 horas atrás
    } else if (dto.mode === 2) {
      limitDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 dias atrás
    } else {
      throw new Error(`Modo inválido: ${dto.mode}`);
    }

    const existing = await this.trendingRepository.findExistingTrend(dto.mode, limitDate);

    if (existing) {
      return { 
        finish: false,
        message: 'Já existe uma entrada recente para esse modo.',
        existing,
      };
    }

    const result = await this.trendingRepository.createTrend(dto);
    return {
      finish: true,
      message: 'Entrada validada!',
      result,
    }
  }

  async addStory(dto: CreateStoryDto) {
    return await this.trendingRepository.createMovieTrending(dto);
  }

  async findTrendId(id: string) {
    return await this.trendingRepository.findTrendingEntryById(id);
  }

  async findStory(movieId: string, trendId: string) {
    return await this.trendingRepository.findTrendingStory(movieId, trendId)
  }

  async findMovies(id: string) {
    return await this.trendingRepository.findMoviesInTrending(id);
  }

  async findTrendxMovies(id: string) {
    return await this.trendingRepository.findTrendsMovies(id);
  }

  async findGenresxTrend(topRated: any[]) {
    const genres = await this.basic.findAllGenres();
    const genresName = genres.map((elem) => {
      return elem.id;
    })
    const topTrendings = await this.trendingRepository.findGenresTrend(genresName, topRated);
  }
}
