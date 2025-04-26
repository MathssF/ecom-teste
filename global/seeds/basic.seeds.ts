import { PrismaClient } from '@prisma/client';
import { Genres, Languages } from "../tables/seed.tables";
// import { Injectable } from '@nestjs/common';


// @Injectable()
export class BasicSeed {
  constructor(private readonly prisma: PrismaClient) {}

  async run() {
    console.log("Genres:", Genres);
    console.log("Languages:", Languages);

    await this.seedGenres();
    await this.seedLanguages();
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
