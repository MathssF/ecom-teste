"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStoryDto = exports.CreateEntryDto = exports.CreateTrendingDto = void 0;
class CreateTrendingDto {
}
exports.CreateTrendingDto = CreateTrendingDto;
class CreateEntryDto {
    constructor(date, mode, lang) {
        this.datetime = date;
        this.mode = mode;
        this.languageId = lang;
    }
}
exports.CreateEntryDto = CreateEntryDto;
class CreateStoryDto {
    constructor(trendingId, movieId, votesCount, votesAverage, popularity, page, rank, rankPage) {
        this.trendingId = trendingId;
        this.movieId = movieId;
        this.votesCount = votesCount;
        this.votesAverage = votesAverage;
        this.popularity = popularity;
        this.page = page;
        this.rank = rank;
        this.rankPage = rankPage;
    }
}
exports.CreateStoryDto = CreateStoryDto;
//# sourceMappingURL=create-trending.dto.js.map