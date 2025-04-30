export function dateCheck(dateCheck: Date): Boolean {
  const now = new Date();
  const halfYear = new Date(now.setMonth(now.getMonth() - 6));
  return dateCheck >= halfYear;
}

export interface trendingEntryData {
  datetime: Date;
  mode: number;
  languageId?: string;
}

export interface trendingStoryData {
  trendingId: string;
  movieId: string;
  votesCount: number;
  votesAverage: number;
  popularity: number;
  page: number;
  rank: number;
  rankPage: number;
}

export interface trendingCompareData {
  trendingId: string;
  datetime: Date;
  votesCount: number;
  votesAverage: number;
  popularity: number;
}

export interface trendingHalfYear {
    total: number;
    min_popularity?: number;
    max_popularity?: number;
    min_average?: number;
    max_average?: number;
    old_count?: number;
    now_count?: number;
}