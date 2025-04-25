"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditMovieDetailDto = exports.CreateMovieDetailDto = exports.EditMovieDto = exports.CreateMovieDto = void 0;
class CreateMovieDto {
    constructor(id, title, originalTitle, originalLanguage, adult) {
        this.id = id;
        this.title = title;
        this.originalTitle = originalTitle;
        this.originalLanguage = originalLanguage;
        this.adult = adult;
    }
}
exports.CreateMovieDto = CreateMovieDto;
class EditMovieDto {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.originalTitle = data.originalTitle;
        this.originalLanguage = data.originalLanguage;
        this.adult = data.adult;
    }
}
exports.EditMovieDto = EditMovieDto;
class CreateMovieDetailDto {
    constructor(id, votes, voteAverage, popularity, releaseDate, posterPath) {
        this.movieId = id;
        this.voteCount = votes;
        this.voteAverage = voteAverage;
        this.popularity = popularity;
        this.releaseDate = releaseDate;
        this.posterPath = posterPath;
    }
}
exports.CreateMovieDetailDto = CreateMovieDetailDto;
class EditMovieDetailDto {
    constructor(data) {
        this.movieId = data.movieId;
        this.voteCount = data.voteCount;
        this.voteAverage = data.voteAverage;
        this.popularity = data.popularity;
        this.releaseDate = data.releaseDate;
        this.posterPath = data.posterPath;
    }
}
exports.EditMovieDetailDto = EditMovieDetailDto;
//# sourceMappingURL=create-movie.dto.js.map