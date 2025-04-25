"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesRepository = void 0;
class MoviesRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addMovie(data) {
        const existing = await this.findMovieId(data.id);
        if (!existing) {
            return await this.prisma.movie.create({ data });
        }
        return this.compareMovie(data, existing);
    }
    async addMovieDetail(data) {
        const existing = await this.findMovieDetail(data.movieId);
        if (!existing) {
            return await this.prisma.movieDetail.create({ data });
        }
        return this.compareDetail(data, existing);
    }
    async updateMovie(data) {
        return await this.prisma.movie.update({
            where: { id: data.id },
            data
        });
    }
    async updateDetail(data) {
        return await this.prisma.movieDetail.update({
            where: { movieId: data.movieId },
            data
        });
    }
    async findMovieId(id) {
        return await this.prisma.movie.findUnique({ where: { id } });
    }
    async findMovieDetail(movieId) {
        return await this.prisma.movieDetail.findUnique({ where: { movieId } });
    }
    async findMoviesGenre(genreId) {
        return await this.prisma.genreMovie.findMany({ where: { genreId } });
    }
    async findGenresMovie(movieId) {
        return await this.prisma.genreMovie.findMany({ where: { movieId } });
    }
    async findRelations(genreId, movieId) {
        return await this.prisma.genreMovie.findMany({
            where: {
                genreId, movieId
            }
        });
    }
    async compareMovie(data, current) {
        if (data.id !== current.id)
            return {};
        const items = ['title', 'originalTitle', 'originalLanguage', 'adult'];
        const hasChanges = items.some((key) => data[key]?.toString() !== current[key]?.toString());
        if (hasChanges) {
            return await this.updateMovie(data);
        }
    }
    async compareDetail(detail, current) {
        if (detail.movieId !== current.movieId)
            return {};
        const items = ['voteCount', 'voteAverage', 'popularity', 'releaseDate', 'posterPath'];
        const hasChanges = items.some((key) => detail[key]?.toString() !== current[key]?.toString());
        if (hasChanges) {
            return await this.updateDetail(detail);
        }
    }
}
exports.MoviesRepository = MoviesRepository;
//# sourceMappingURL=movies.repository.js.map