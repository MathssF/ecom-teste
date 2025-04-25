"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicRepository = void 0;
class BasicRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addGenre(data) {
        return await this.prisma.genre.create({ data });
    }
    async findGenreId(id) {
        return await this.prisma.genre.findUnique({
            where: { id }
        });
    }
    async findAllGenres() {
        return await this.prisma.genre.findMany();
    }
    async addLang(data) {
        return await this.prisma.language.create({ data });
    }
    async findLang(id) {
        return await this.prisma.language.findUnique({ where: { id } });
    }
    async findLangs() {
        return await this.prisma.language.findMany();
    }
}
exports.BasicRepository = BasicRepository;
//# sourceMappingURL=basic.repository.js.map