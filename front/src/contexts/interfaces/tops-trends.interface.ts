export interface TopsInTrendsMovie {
  id: number;
  title: string;
  voteAverage: number;
  trends?: boolean;
  trendPage?: number | null;
  trendRank?: number | null;
  trendPageRank?: number | null;
  [key: string]: any;
}

export interface TopsInTrendsData {
  total: number;
  TopsInTrends: TopsInTrendsMovie[];
}

export interface TopsInTrendsContextType {
  data: TopsInTrendsData | null;
  loading: boolean;
  error: string | null;
  fetchTopsInTrends: (mode?: number, limitItems?: number) => Promise<void>;
}
