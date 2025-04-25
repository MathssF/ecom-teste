export class CreateBasicDto {}

export class CreateGenreDto {
  id: string;
  name: string;

  constructor(partial: Partial<CreateGenreDto>) {
    Object.assign(this, partial);
  }
}

export class CreateLanguageDto {
  id: string;
  english_name: string;

  constructor(partial: Partial<CreateLanguageDto>) {
    Object.assign(this, partial);
  }
}