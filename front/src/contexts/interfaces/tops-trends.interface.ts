export interface TopsInTrendsMovie {
  id: number;
  title: string;
  voteAverage: number;
  trends?: boolean;
  topPage?: number | null;
  topRank?: number | null;
  topPageRank?: number | null;
  trendPage?: number | null;
  trendRank?: number | null;
  trendPageRank?: number | null;
  [key: string]: any;
}

export interface TopsInTrendsData {
  total: number;
  time: string;
  TopsInTrends: TopsInTrendsMovie[];
}

export interface TopsInTrendsContextType {
  data: TopsInTrendsData | null;
  loading: boolean;
  error: string | null;
  fetchTopsInTrends: (mode?: number, limitItems?: number) => Promise<void>;
}
