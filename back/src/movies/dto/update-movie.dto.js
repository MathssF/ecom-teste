"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovieDetailDto = exports.UpdateMovieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_movie_dto_1 = require("./create-movie.dto");
class UpdateMovieDto extends (0, mapped_types_1.PartialType)(create_movie_dto_1.CreateMovieDto) {
}
exports.UpdateMovieDto = UpdateMovieDto;
class UpdateMovieDetailDto extends (0, mapped_types_1.PartialType)(create_movie_dto_1.CreateMovieDetailDto) {
}
exports.UpdateMovieDetailDto = UpdateMovieDetailDto;
//# sourceMappingURL=update-movie.dto.js.map