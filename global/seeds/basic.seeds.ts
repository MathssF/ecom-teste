import { PrismaClient } from '@prisma/client';
import { Genres, Languages } from "../tables/seed.tables";

export class BasicSeed {
  constructor(private readonly prisma: PrismaClient) {}

  async run() {
    console.log("Genres:", Genres);
    console.log("Languages:", Languages);

    await this.seedGenres();
    await this.seedLanguages();
  }

  private async seedGenres() {
    const existing = await this.prisma.genre.findMany(); // ({ select: { id: true } });
    if (existing.length === 0) {
      console.log('Genres table is empty. Seeding genres...');
      
      const toInsert = Genres.map(({ id, name }) => ({
        id: String(id),
        name,
      }));
  
      await this.prisma.genre.createMany({
        data: toInsert,
        skipDuplicates: true,
      });
      console.log(`${toInsert.length} genres inserted successfully.`);
      return;
    }
    const existingIds = new Set(existing.map((g: any) => g.id));

    Genres.forEach((genre, index) => {
      if (!genre.id || !genre.name) {
        console.error(`Invalid genre at index ${index}:`, genre);
      }
    });

    const toInsert = Genres
      .filter((genre) => genre && genre.id !== undefined && !existingIds
      .has(String(genre.id)))
      .map((genre) => ({
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
    const existing = await this.prisma.language.findMany(); // ({ select: { id: true } });
    if (existing.length === 0) {
      console.log('Languages table is empty. Seeding languages...');
      
      const toInsert = Languages.map((lang) => ({
        id: lang.id,
        englishName: lang.english_name,
      }));
  
      await this.prisma.language.createMany({
        data: toInsert,
        skipDuplicates: true,
      });
      console.log(`${toInsert.length} languages inserted successfully.`);
      return;
    }
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