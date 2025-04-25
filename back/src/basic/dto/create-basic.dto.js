"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLanguageDto = exports.CreateGenreDto = exports.CreateBasicDto = void 0;
class CreateBasicDto {
}
exports.CreateBasicDto = CreateBasicDto;
class CreateGenreDto {
    constructor(i, n) {
        this.id = i;
        this.name = n;
    }
}
exports.CreateGenreDto = CreateGenreDto;
class CreateLanguageDto {
    constructor(i, en) {
        this.id = i;
        this.english_name = en;
    }
}
exports.CreateLanguageDto = CreateLanguageDto;
//# sourceMappingURL=create-basic.dto.js.map