"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBasicDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_basic_dto_1 = require("./create-basic.dto");
class UpdateBasicDto extends (0, mapped_types_1.PartialType)(create_basic_dto_1.CreateBasicDto) {
}
exports.UpdateBasicDto = UpdateBasicDto;
//# sourceMappingURL=update-basic.dto.js.map