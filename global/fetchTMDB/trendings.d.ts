export declare class TrendingMoviesAPI {
    private time_window;
    private language;
    private apiKey;
    constructor(time_window?: string, language?: string);
    private getUrl;
    private getOptions;
    getTrendingMovies(): Promise<any[]>;
}
