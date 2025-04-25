"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieDetail = exports.Movie = void 0;
class Movie {
    constructor(id, title, releaseDate, genreId, languageId) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.genreId = genreId;
        this.languageId = languageId;
    }
}
exports.Movie = Movie;
class MovieDetail {
    constructor(id, description, duration, director, producer, movieId) {
        this.id = id;
        this.description = description;
        this.duration = duration;
        this.director = director;
        this.producer = producer;
        this.movieId = movieId;
    }
}
exports.MovieDetail = MovieDetail;
//# sourceMappingURL=movie.entity.js.map