import { PrismaClient } from '@prisma/client';
import { Genres, Languages } from "../tables/seed.tables";

export class BasicSeed {
  constructor(private readonly prisma: PrismaClient) {}

  async run() {
    await this.seedGenres();
    await this.seedLanguages();
  }

  private async seedGenres() {
    const existing = await this.prisma.genre.findMany({ select: { id: true } });
    const existingIds = new Set(existing.map((g: any) => g.id));

    const toInsert = Genres.filter((genre) => !existingIds.has(genre.id)).map((genre) => ({
      id: String(genre.id),
      name: genre.name,
    }));
    
    if (toInsert.length === 0) {
      console.log('Genres already seeded.');
      return;
    }

    await this.prisma.genre.createMany({
      data: toInsert,
      skipDuplicates: true,
    });

    console.log(`Inserted ${toInsert.length} genres.`);
  }

  private async seedLanguages() {
    const existing = await this.prisma.language.findMany({ select: { id: true } });
    const existingIds = new Set(existing.map((l: any) => l.id));

    const toInsert = Languages.filter((lang) => !existingIds.has(lang.id)).map((lang) => ({
      id: lang.id,
      englishName: lang.english_name,
    }));

    if (toInsert.length === 0) {
      console.log('Languages already seeded.');
      return;
    }

    await this.prisma.language.createMany({
      data: toInsert,
      skipDuplicates: true,
    });

    console.log(`Inserted ${toInsert.length} languages.`);
  }
}