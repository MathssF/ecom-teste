"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicSeed = void 0;
const seed_tables_1 = require("../tables/seed.tables");
class BasicSeed {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async run() {
        await this.seedGenres();
        await this.seedLanguages();
    }
    async seedGenres() {
        const existing = await this.prisma.genre.findMany({ select: { id: true } });
        const existingIds = new Set(existing.map((g) => g.id));
        const toInsert = seed_tables_1.Genres.filter((genre) => !existingIds.has(genre.id)).map((genre) => ({
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
    async seedLanguages() {
        const existing = await this.prisma.language.findMany({ select: { id: true } });
        const existingIds = new Set(existing.map((l) => l.id));
        const toInsert = seed_tables_1.Languages.filter((lang) => !existingIds.has(lang.id)).map((lang) => ({
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
exports.BasicSeed = BasicSeed;
//# sourceMappingURL=basic.seeds.js.map