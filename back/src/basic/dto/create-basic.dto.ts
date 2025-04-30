export class CreateBasicDto {}

export class CreateCompanyDto {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}