"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieDetailsAPI = void 0;
class MovieDetailsAPI {
    constructor(language = 'en-US') {
        this.language = language;
        this.apiKey = process.env.API_KEY;
    }
    getUrl(movieId) {
        return `https://api.themoviedb.org/3/movie/${movieId}?language=${this.language}`;
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
    async getMovieDetails(movieId) {
        const response = await fetch(this.getUrl(movieId), this.getOptions());
        if (!response.ok) {
            throw new Error(`Erro ao buscar detalhes do filme ${movieId}: ${response.statusText}`);
        }
        const movie = await response.json();
        return {
            id: movie.id,
            title: movie.title,
            original_title: movie.original_title,
            original_language: movie.original_language,
            vote_count: movie.vote_count,
            vote_average: movie.vote_average,
            popularity: movie.popularity,
            adult: movie.adult,
            release_date: movie.release_date,
            genres: movie.genres?.map((g) => ({ id: g.id, name: g.name })),
            poster_path: movie.poster_path,
            runtime: movie.runtime,
            overview: movie.overview,
            status: movie.status,
            production_companies: movie.production_companies?.map((c) => ({
                id: c.id,
                name: c.name,
                logo_path: c.logo_path,
                origin_country: c.origin_country,
            })),
        };
    }
}
exports.MovieDetailsAPI = MovieDetailsAPI;
//# sourceMappingURL=details.js.map