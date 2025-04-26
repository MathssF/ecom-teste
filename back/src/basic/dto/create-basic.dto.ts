export class CreateBasicDto {}

export class CreateGenreDto {
  id: string;
  name: string;

  constructor(i: string, n: string) {
    this.id = i;
    this.name = n;
  }
}

export class CreateLanguageDto {
  id: string;
  english_name: string;

  constructor(i: string, en: string) {
    this.id = i;
    this.english_name = en;
  }
}

export class CreateCompanyDto {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}