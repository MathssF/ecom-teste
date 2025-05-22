import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../back/src/prisma/prisma.service';
import { Genres, Languages } from "../tables/seed.tables";

@Injectable()
export class BasicSeed {
  constructor(private readonly prisma: PrismaService) {}

  async run() {
    await this.seedGenres();
    await this.seedLanguages();
    console.log("Seeds Completas!");
  }

  private async seedGenres() {
    const toInsert = Genres.map(({ id, name }) => ({
      id: String(id),
      name,
    }));

    await this.prisma.genre.createMany({
      data: toInsert,
      skipDuplicates: true,
    });

    console.log(`${toInsert.length} genres inserted (duplicates skipped).`);
  }

  private async seedLanguages() {
    const toInsert = Languages.map((lang) => ({
      id: lang.id,
      englishName: lang.english_name,
    }));

    await this.prisma.language.createMany({
      data: toInsert,
      skipDuplicates: true,
    });

    console.log(`${toInsert.length} languages inserted (duplicates skipped).`);
  }
}
