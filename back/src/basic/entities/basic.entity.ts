export class Basic {}

export class GenreEntity {
  id: string;
  name: string;

  constructor(partial: Partial<GenreEntity>) {
    Object.assign(this, partial);
  }
}

export class LanguageEntity {
  id: string;
  english_name: string;

  constructor(partial: Partial<LanguageEntity>) {
    Object.assign(this, partial);
  }
}