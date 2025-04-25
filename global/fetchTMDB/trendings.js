"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendingMoviesAPI = void 0;
class TrendingMoviesAPI {
    constructor(time_window = 'day', language = 'en-US') {
        this.time_window = time_window;
        this.language = language;
        this.apiKey = process.env.API_KEY;
    }
    getUrl() {
        return `https://api.themoviedb.org/3/trending/movie/${this.time_window}?language=${this.language}`;
    }
    getOptions() {
        return {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: this.apiKey,
            },
        };
    }
    async getTrendingMovies() {
        let allMovies = [];
        for (let page = 1; page <= 13; page++) {
            const response = await fetch(`${this.getUrl()}&page=${page}`, this.getOptions());
            const json = await response.json();
            const movies = json.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                original_title: movie.original_title,
                original_language: movie.original_language,
                vote_count: movie.vote_count,
                vote_average: movie.vote_average,
                popularity: movie.popularity,
                adult: movie.adult,
                release_date: movie.release_date,
                genre_ids: movie.genre_ids,
                poster_path: movie.poster_path,
            }));
            allMovies = [...allMovies, ...movies];
            if (allMovies.length >= 250)
                break;
        }
        return allMovies.slice(0, 250);
    }
}
exports.TrendingMoviesAPI = TrendingMoviesAPI;
//# sourceMappingURL=trendings.js.map