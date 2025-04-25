import { PrismaClient } from '@prisma/client';

export interface companyData {
  id: string;
  name: string;
}

export class CompaniesRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createCompany(data: companyData) {
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

  async updateCompany(data: companyData) {
    return await this.prisma.company.update({
      where: { id: data.id },
      data
    });
  }

  async addMovie(movieId: string, companyId: string) {
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

  async findMoviesCompany(companyId: string) {
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
