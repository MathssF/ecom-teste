import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrendingsService } from './trendings.service';
import { CreateEntryDto, CreateStoryDto } from './dto/create-trending.dto';
import { UpdateTrendingDto } from './dto/update-trending.dto';

@Controller('trendings')
export class TrendingsController {
  constructor(private readonly trendingsService: TrendingsService) {}

  @Post('entry')
  async createEntry(@Body() createEntryDto: CreateEntryDto) {
    return await this.trendingsService.createEntry(createEntryDto);
  }

  @Post('story')
  async addStory(@Body() createStoryDto: CreateStoryDto) {
    return await this.trendingsService.addStory(createStoryDto);
  }

  @Get('entry/:id')
  async findTrendId(@Param('id') id: string) {
    return await this.trendingsService.findTrendId(id);
  }

  @Get('story/:movieId/:trendId')
  async findStory(@Param('movieId') movieId: string, @Param('trendId') trendId: string) {
    return await this.trendingsService.findStory(movieId, trendId);
  }

  @Get('movies/:id')
  async findMovies(@Param('id') id: string) {
    return await this.trendingsService.findMovies(id);
  }

  @Get('trend-movies/:id')
  async findTrendxMovies(@Param('id') id: string) {
    return await this.trendingsService.findTrendxMovies(id);
  }

  @Post('genres')
  async findGenresxTrend(@Body() topRated: any[]) {
    return await this.trendingsService.findGenresxTrend(topRated);
  }
}
