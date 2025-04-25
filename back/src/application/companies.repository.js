"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesRepository = void 0;
class CompaniesRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createCompany(data) {
        const existing = await this.prisma.company.findUnique({ where: { id: data.id } });
        if (!existing) {
            return await this.prisma.company.create({ data });
        }
        const hasChanges = data.name !== existing.name;
        if (hasChanges) {
            return await this.updateCompany(data);
        }
        return existing;
    }
    async updateCompany(data) {
        return await this.prisma.company.update({
            where: { id: data.id },
            data
        });
    }
    async addMovie(movieId, companyId) {
        const exists = await this.prisma.movieCompany.findUnique({
            where: { movieId_companyId: { movieId, companyId } }
        });
        if (!exists) {
            return await this.prisma.movieCompany.create({
                data: { movieId, companyId }
            });
        }
        return exists;
    }
    async findMoviesCompany(companyId) {
        return await this.prisma.movie.findMany({
            where: {
                companies: {
                    some: {
                        companyId
                    }
                }
            }
        });
    }
}
exports.CompaniesRepository = CompaniesRepository;
//# sourceMappingURL=companies.repository.js.map