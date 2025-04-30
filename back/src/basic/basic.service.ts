import { Injectable } from '@nestjs/common';
import { CreateGenreDto, CreateLanguageDto } from './dto/create-basic.dto';
import { BasicRepository } from '../application/basic/basic.repository';
import { GenreEntity } from './entities/basic.entity';
import { CompaniesRepository } from '../application/basic/companies.repository';


@Injectable()
export class BasicService {
  constructor(
    private readonly basic: BasicRepository,
    private readonly companies: CompaniesRepository,
  ) {}
  addGenre(dto: CreateGenreDto) {
    return this.basic.addGenre(dto);
  }

  addLang(dto: CreateLanguageDto) {
    return this.basic.addLang(dto);
  }


  async findGenreId(id: string): Promise<GenreEntity | null> {
    return await this.basic.findGenreId(id);
  }

  async findAllGenres(): Promise<GenreEntity[]> {
    return this.basic.findAllGenres();    
  }

  async findLangId(id: string) {
    return await this.basic.findLang(id);
  }

  async findAllLangs() {
    return await this.basic.findLangs();
  }

  async addCompany(data: { id: string; name: string }) {
    return await this.companies.createCompany(data);
  }

  async findCompanyId(companyId: string) {
    return await this.companies.findCompanyById(companyId);
  }

  async findAllCompanies() {
    return await this.companies.findAllCompanies();
  }
}
