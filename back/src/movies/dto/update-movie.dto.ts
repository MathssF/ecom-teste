import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto, CreateMovieDetailDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
export class UpdateMovieDetailDto extends PartialType(CreateMovieDetailDto) {}
