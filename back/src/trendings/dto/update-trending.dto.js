"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTrendingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_trending_dto_1 = require("./create-trending.dto");
class UpdateTrendingDto extends (0, mapped_types_1.PartialType)(create_trending_dto_1.CreateTrendingDto) {
}
exports.UpdateTrendingDto = UpdateTrendingDto;
//# sourceMappingURL=update-trending.dto.js.map