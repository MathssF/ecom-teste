export declare class TopRatedMoviesAPI {
    private language;
    private apiKey;
    constructor(language?: string);
    private getUrl;
    private getOptions;
    getTopRatedMovies(): Promise<any[]>;
}
