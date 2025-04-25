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