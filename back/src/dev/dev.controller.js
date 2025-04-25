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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevController = void 0;
const common_1 = require("@nestjs/common");
const dev_service_1 = require("./dev.service");
let DevController = class DevController {
    constructor(devService) {
        this.devService = devService;
    }
    async startSeed() {
        return await this.devService.seedStart();
    }
    async findOneMovie(movieId) {
        const foundMovie = await this.devService.callDetails(movieId);
        return foundMovie;
    }
    async postOneMovie(movieId) { }
    async findTopRateds() {
        const topList = await this.devService.callTopRated();
        return topList;
    }
    async postTopRateds() { }
    async findTrends() {
    }
    async postTrends() {
    }
};
exports.DevController = DevController;
__decorate([
    (0, common_1.Post)('start-seed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DevController.prototype, "startSeed", null);
__decorate([
    (0, common_1.Get)('/movie/:movieId'),
    __param(0, (0, common_1.Param)('movieId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DevController.prototype, "findOneMovie", null);
__decorate([
    (0, common_1.Post)('/movie/:movieId'),
    __param(0, (0, common_1.Param)('movieId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DevController.prototype, "postOneMovie", null);
__decorate([
    (0, common_1.Get)('/top-rated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DevController.prototype, "findTopRateds", null);
__decorate([
    (0, common_1.Post)('/top-rated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DevController.prototype, "postTopRateds", null);
__decorate([
    (0, common_1.Get)('/trends'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DevController.prototype, "findTrends", null);
__decorate([
    (0, common_1.Post)('/trends'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DevController.prototype, "postTrends", null);
exports.DevController = DevController = __decorate([
    (0, common_1.Controller)('dev'),
    __metadata("design:paramtypes", [dev_service_1.DevService])
], DevController);
//# sourceMappingURL=dev.controller.js.map