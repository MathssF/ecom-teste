"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevModule = void 0;
const common_1 = require("@nestjs/common");
const dev_service_1 = require("./dev.service");
const dev_controller_1 = require("./dev.controller");
const basic_service_1 = require("src/basic/basic.service");
const movies_service_1 = require("src/movies/movies.service");
const trendings_service_1 = require("src/trendings/trendings.service");
let DevModule = class DevModule {
};
exports.DevModule = DevModule;
exports.DevModule = DevModule = __decorate([
    (0, common_1.Module)({
        imports: [basic_service_1.BasicService, movies_service_1.MoviesService, trendings_service_1.TrendingsService],
        controllers: [dev_controller_1.DevController],
        providers: [dev_service_1.DevService],
        exports: [],
    })
], DevModule);
//# sourceMappingURL=dev.module.js.map