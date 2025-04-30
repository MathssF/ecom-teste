import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';


export interface companyData {
  id: string;
  name: string;
}

@Injectable()
export class CompaniesRepository {
  constructor(private readonly prisma: PrismaService) {}

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

  async findAllCompanies() {
    return await this.prisma.company.findMany();
  }

  async findCompanyById(companyId: string) {
    return await this.prisma.company.findUnique({
      where: { id: companyId }
    });
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
