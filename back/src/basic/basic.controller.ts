import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasicService } from './basic.service';
import { CreateCompanyDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';

@Controller('basic')
export class BasicController {
  constructor(private readonly basicService: BasicService) {}

  // @Post('start-seed')
  // async startSeed() {
  //   return await this.basicService.seedStart()
  // }

  @Get('genres')
  async findAllGenres() {
    return this.basicService.findAllGenres();
  }

  @Get('langs')
  async findAllLangs() {
    return this.basicService.findAllLangs();
  }

  @Get('companies')
  async findAllCompanies() {
    return this.basicService.findAllCompanies();
  }

  @Get('genre/:id')
  async findGenreId(@Param('id') id: string) {
    return this.basicService.findGenreId(id);
  }

  @Get('lang/:id')
  async findLangId(@Param('id') id: string) {
    return this.basicService.findLangId(id);
  }

  @Get('company/:id')
  async findCompanyId(@Param('id') id: string) {
    return this.basicService.findCompanyId(id);
  }
}
