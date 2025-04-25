import { Injectable } from '@nestjs/common';
import { CreateEntryDto, CreateStoryDto } from './dto/create-trending.dto';
import { UpdateTrendingDto } from './dto/update-trending.dto';
import { TrendingsRepository } from 'src/application/trendings.repository';
import { BasicService } from 'src/basic/basic.service';

@Injectable()
export class TrendingsService {
  constructor(
    private readonly trendingRepository: TrendingsRepository,
    private readonly basic: BasicService,
  ) {}

  async createEntry(dto: CreateEntryDto) {
    return await this.trendingRepository.createTrend(dto);
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
