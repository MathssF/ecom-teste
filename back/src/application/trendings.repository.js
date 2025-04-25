"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendingsRepository = void 0;
const uuid_1 = require("uuid");
const uuidv7 = (0, uuid_1.v7)();
class TrendingsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTrend(data) {
        return await this.prisma.trendingEntry.create({
            data: {
                id: uuidv7,
                ...data
            }
        });
    }
    async createMovieTrending(data) {
        return await this.prisma.trendingStory.create({ data });
    }
    async findTrendingEntryById(id) {
        return await this.prisma.trendingEntry.findUnique({
            where: { id }
        });
    }
    async findTrendingStory(trendingId, movieId) {
        return await this.prisma.trendingStory.findUnique({
            where: { trendingId_movieId: { trendingId, movieId } }
        });
    }
    async findMoviesInTrending(trendingId) {
        return await this.prisma.trendingStory.findMany({
            where: { trendingId }
        });
    }
    async findExistingTrend(mode, fromDate, languageId) {
        return await this.prisma.trendingEntry.findFirst({
            where: {
                mode,
                datetime: {
                    gte: fromDate,
                },
                ...(languageId && { languageId })
            }
        });
    }
    // Função Importante!
    async findTrendsMovies(movieId) {
        const trends = await this.prisma.trendingStory.finMany({
            where: { movieId }
        });
        if (trends.lenght === 0) {
            return {
                total: 0
            };
        }
        const compares = trends.map(async (elem) => {
            const time = await this.trendDate(elem.trendingId);
            return {
                trendingId: elem.trendingId,
                datetime: time,
                votesCount: elem.votesCount,
                votesAverage: elem.votesAverage,
                popularity: elem.popularity
            };
        });
        const filteredTrends = compares.filter((elem) => this.dateCheck(elem.datetime));
        if (filteredTrends.length === 0) {
            return {
                total: 0
            };
        }
        let total = 0;
        let min_popularity = Infinity;
        let max_popularity = -1;
        let min_average = Infinity;
        let max_average = -1;
        let old_count = Infinity;
        let now_count = -1;
        filteredTrends.forEach((elem) => {
            total++;
            if (elem.popularity < min_popularity) {
                min_popularity = elem.popularity;
            }
            if (elem.popularity > max_popularity) {
                max_popularity = elem.popularity;
            }
            if (elem.votesAverage < min_average) {
                min_average = elem.votesAverage;
            }
            if (elem.votesAverage > max_average) {
                max_average = elem.votesAverage;
            }
            if (elem.votesCount < old_count) {
                old_count = elem.votesCount;
            }
            if (elem.votesCount > now_count) {
                now_count = elem.votesCount;
            }
        });
        return {
            total,
            min_popularity,
            max_popularity,
            min_average,
            max_average,
            old_count,
            now_count
        };
    }
    // Função Importante!
    async findGenresTrend(genres, list) {
        const genresCounts = genres.map((id) => ({
            id,
            count: 0,
            list: [],
            movieIds: [],
        }));
        for (const elem of list) {
            const trendStories = await this.prisma.trendingStory.findMany({
                where: { movieId: elem.movieId },
            });
            let inLimit = false;
            for (const story of trendStories) {
                if (this.dateCheck(story.datetime)) {
                    inLimit = true;
                    break;
                }
            }
            if (!inLimit)
                continue;
            const genresFound = await this.prisma.genreMovie.findMany({
                where: { movieId: elem.movieId },
            });
            for (const found of genresFound) {
                const genre = genresCounts.find((g) => g.id === found.genreId);
                if (genre) {
                    genre.count++;
                    genre.list.push(elem.title);
                    genre.movieIds.push(elem.movieId);
                }
            }
        }
        return genresCounts;
    }
    dateCheck(dateCheck) {
        const now = new Date();
        const halfYear = new Date(now.setMonth(now.getMonth() - 6));
        if (dateCheck >= halfYear) {
            return true;
        }
        return false;
    }
    async trendDate(trendingId) {
        const time = await this.findTrendingEntryById(trendingId);
        return time.datetime;
    }
}
exports.TrendingsRepository = TrendingsRepository;
//# sourceMappingURL=trendings.repository.js.map