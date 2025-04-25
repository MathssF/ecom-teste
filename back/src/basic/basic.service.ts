import { Injectable } from '@nestjs/common';
import { CreateGenreDto, CreateLanguageDto } from './dto/create-basic.dto';
import { BasicRepository } from '../application/basic.repository';
import { GenreEntity } from './entities/basic.entity';

@Injectable()
export class BasicService {
  constructor(
    private readonly basic: BasicRepository,
  ) {}
  addGenre(dto: CreateGenreDto) {
    return this.basic.addGenre(dto);
  }

  addLang(dto: CreateLanguageDto) {
    return this.basic.addLang(dto);
  }


  async findGenreId(id: string): Promise<GenreEntity> {
    return await this.basic.findGenreId(id);
  }

  async findAllGenres(): Promise<GenreEntity[]> {
    return this.basic.findAllGenres();    
  }

  async findLangId(id: string) {
    return await this.basic.findLang(id);
  }

  async findAllLangs() {
    return await this.basic.findLangs();
  }
}
