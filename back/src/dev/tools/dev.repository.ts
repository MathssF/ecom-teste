import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DevRepository {
  constructor(protected readonly prisma: PrismaService) {}

  async dellMovies() {
    return await this.prisma.movie.deleteMany();
  }
}