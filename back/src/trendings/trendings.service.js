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
exports.TrendingsService = void 0;
const common_1 = require("@nestjs/common");
const trendings_repository_1 = require("src/application/trendings.repository");
const basic_service_1 = require("src/basic/basic.service");
let TrendingsService = class TrendingsService {
    constructor(trendingRepository, basic) {
        this.trendingRepository = trendingRepository;
        this.basic = basic;
    }
    async createEntry(dto) {
        const now = new Date();
        let limitDate;
        if (dto.mode === 1) {
            limitDate = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 horas atrás
        }
        else if (dto.mode === 2) {
            limitDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 dias atrás
        }
        else {
            throw new Error(`Modo inválido: ${dto.mode}`);
        }
        const existing = await this.trendingRepository.findExistingTrend(dto.mode, limitDate);
        if (existing) {
            return {
                finish: false,
                message: 'Já existe uma entrada recente para esse modo.',
                existing,
            };
        }
        const result = await this.trendingRepository.createTrend(dto);
        return {
            finish: true,
            message: 'Entrada validada!',
            result,
        };
    }
    async addStory(dto) {
        return await this.trendingRepository.createMovieTrending(dto);
    }
    async findTrendId(id) {
        return await this.trendingRepository.findTrendingEntryById(id);
    }
    async findStory(movieId, trendId) {
        return await this.trendingRepository.findTrendingStory(movieId, trendId);
    }
    async findMovies(id) {
        return await this.trendingRepository.findMoviesInTrending(id);
    }
    async findTrendxMovies(id) {
        return await this.trendingRepository.findTrendsMovies(id);
    }
    async findGenresxTrend(topRated) {
        const genres = await this.basic.findAllGenres();
        const genresName = genres.map((elem) => {
            return elem.id;
        });
        const topTrendings = await this.trendingRepository.findGenresTrend(genresName, topRated);
    }
};
exports.TrendingsService = TrendingsService;
exports.TrendingsService = TrendingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [trendings_repository_1.TrendingsRepository,
        basic_service_1.BasicService])
], TrendingsService);
//# sourceMappingURL=trendings.service.js.map