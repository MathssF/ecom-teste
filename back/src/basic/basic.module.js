"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicModule = void 0;
const common_1 = require("@nestjs/common");
const basic_service_1 = require("./basic.service");
const basic_controller_1 = require("./basic.controller");
let BasicModule = class BasicModule {
};
exports.BasicModule = BasicModule;
exports.BasicModule = BasicModule = __decorate([
    (0, common_1.Module)({
        controllers: [basic_controller_1.BasicController],
        providers: [basic_service_1.BasicService],
        exports: [basic_service_1.BasicService],
    })
], BasicModule);
//# sourceMappingURL=basic.module.js.map