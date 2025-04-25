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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const basic_service_1 = require("src/basic/basic.service");
const movies_repository_1 = require("src/application/movies.repository");
let MoviesService = class MoviesService {
    constructor(movieRepository, basic) {
        this.movieRepository = movieRepository;
        this.basic = basic;
    }
    async addMovie(dto) {
        return await this.addMovie(dto);
    }
    async addDetail(dto) {
        return await this.addDetail(dto);
    }
    async findMovie(id) {
        return await this.movieRepository.findMovieId(id);
    }
    async findMovieDetail(id) {
        return await this.movieRepository.findMovieDetail(id);
    }
    async updateMovie(id, movieDto, detailDto) {
        let movieUpdate = {};
        let detailUpdate = {};
        const movieBasic = { ...movieDto };
        delete movieBasic.id;
        const detailBasic = { ...detailDto };
        delete detailBasic.movieId;
        if (Object.keys(movieBasic).length > 0) {
            movieUpdate = await this.movieRepository.updateMovie({
                id: id,
                ...movieBasic
            });
        }
        if (Object.keys(detailBasic).length > 0) {
            detailUpdate = await this.movieRepository.updateDetail({
                movieId: id,
                ...detailBasic
            });
        }
        return { movieUpdate, detailUpdate };
    }
    async findGenresMovie(id) {
        return await this.movieRepository.findMoviesGenre(id);
    }
    async findMoviesGenre(id) {
        return await this.movieRepository.findGenresMovie(id);
    }
    async listMoviesByGenres(x) {
        const genresList = await this.basic.findAllGenres();
        let result = [];
        let newList = [];
        for (const genre of genresList) {
            let movies = [];
            movies = await this.movieRepository.findGenresMovie(genre.id);
            for (const movie of movies) {
                const movieDetail = await this.movieRepository.findMovieDetail(movie.movieId);
                const movieData = await this.movieRepository.findMovieId(movie.movieId);
                const info = {
                    id: movie.movieId,
                    title: movieData.title,
                    votes: movieDetail.voteCount,
                    average: movieDetail.voteAverage,
                    popularity: movieDetail.popularity,
                    adult: movieData.adult,
                };
                newList.push(info);
            }
            newList.sort((a, b) => {
                if (b.average !== a.average) {
                    return b.average - a.average;
                }
                if (b.popularity !== a.popularity) {
                    return b.popularity - a.popularity;
                }
                return a.title.localeCompare(b.title);
            });
            if (x) {
                newList = newList.slice(0, x);
            }
            result.push(newList);
            newList = [];
        }
        return result;
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [movies_repository_1.MoviesRepository,
        basic_service_1.BasicService])
], MoviesService);
//# sourceMappingURL=movies.service.js.map