"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendingsController = void 0;
const common_1 = require("@nestjs/common");
const trendings_service_1 = require("./trendings.service");
let TrendingsController = class TrendingsController {
    constructor(trendingsService) {
        this.trendingsService = trendingsService;
    }
};
exports.TrendingsController = TrendingsController;
exports.TrendingsController = TrendingsController = __decorate([
    (0, common_1.Controller)('trendings'),
    __metadata("design:paramtypes", [trendings_service_1.TrendingsService])
], TrendingsController);
//# sourceMappingURL=trendings.controller.js.map