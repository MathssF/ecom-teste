export declare class MovieDetailsAPI {
    private language;
    private apiKey;
    constructor(language?: string);
    private getUrl;
    private getOptions;
    getMovieDetails(movieId: number): Promise<any>;
}
