import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface genreData {
  id: string;
  name: string;
}

export interface langData {
  id: string;
  english_name: string;
}

@Injectable()
export class BasicRepository {
  constructor(protected readonly prisma: PrismaService) {}

  // async addGenre(data: genreData) {
  //   return await this.prisma.genre.create({ data });
  // }

  async findGenreId(id: string) {
    return await this.prisma.genre.findUnique({
      where: { id }
    });
  }

  async findAllGenres() {
    return await this.prisma.genre.findMany();
  }

  // async addLang(data: langData) {
  //   return await this.prisma.language.create({ data: {
  //     id: data.id,
  //     englishName: data.english_name,
  //   } });
  // }

  async findLang(id: string) {
    return await this.prisma.language.findUnique({ where: { id } })
  }

  async findLangs() {
    return await this.prisma.language.findMany();
  }
}