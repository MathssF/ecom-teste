import { Injectable } from '@nestjs/common';
import { CreateGenreDto, CreateLanguageDto } from './dto/create-basic.dto';
// import { UpdateBasicDto } from './dto/update-basic.dto';
import { BasicRepository } from '../application/basic.repository';

@Injectable()
export class BasicService {
  constructor(
    private readonly basic: BasicRepository,
  ) {}
  addGenre(dto: CreateGenreDto) {
    // return 'This action adds a new basic';
    return this.basic.addGenre(dto);
  }

  addLang(dto: CreateLanguageDto) {}


  findGenreId(id: number) {
    return `This action returns a #${id} basic`;
  }

  findAllGenres() {
    return `This action returns all basic`;
  }
}
