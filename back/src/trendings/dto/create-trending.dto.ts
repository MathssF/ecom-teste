export class CreateTrendingDto {}

export class CreateEntryDto {
  datetime: Date;
  mode: number;
  languageId?: string;
  constructor(
    date: Date,
    mode: number,
    lang?: string
  ) {
    this.datetime = date;
    this.mode = mode;
    this.languageId = lang;
  }
}

export class CreateStoryDto {
  trendingId: string;
  movieId: string;
  votesCount: number;
  votesAverage: number;
  popularity: number;
  page: number;
  rank: number;
  rankPage: number;
  constructor(
    trendingId: string,
    movieId: string,
    votesCount: number,
    votesAverage: number,
    popularity: number,
    page: number,
    rank: number,
    rankPage: number,
  ) {
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
