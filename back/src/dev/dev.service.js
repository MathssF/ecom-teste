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
exports.DevService = void 0;
const common_1 = require("@nestjs/common");
const details_1 = require("../../../global/fetchTMDB/details");
const top_rated_1 = require("../../../global/fetchTMDB/top.rated");
const trendings_1 = require("../../../global/fetchTMDB/trendings");
const basic_seeds_1 = require("../../../global/seeds/basic.seeds");
let DevService = class DevService {
    constructor(movieDetailAPI, topRatedAPI, trendingsAPI, basicSeed) {
        this.movieDetailAPI = movieDetailAPI;
        this.topRatedAPI = topRatedAPI;
        this.trendingsAPI = trendingsAPI;
        this.basicSeed = basicSeed;
    }
    async seedStart() {
        return this.basicSeed.run();
    }
    async callTopRated() {
        const tops = await this.topRatedAPI.getTopRatedMovies();
    }
    async callTrendings() {
        const trends = await this.trendingsAPI.getTrendingMovies();
    }
    async callDetails(id) {
        const movieId = Number(id);
        const details = await this.movieDetailAPI.getMovieDetails(movieId);
    }
};
exports.DevService = DevService;
exports.DevService = DevService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [details_1.MovieDetailsAPI,
        top_rated_1.TopRatedMoviesAPI,
        trendings_1.TrendingMoviesAPI,
        basic_seeds_1.BasicSeed])
], DevService);
//# sourceMappingURL=dev.service.js.map