'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { TopRatedMoviesAPI } from '../../../global/src/fetchTMDB/top.rated';
import { TrendingMoviesAPI } from '../../../global/src/fetchTMDB/trendings';
import { ApiTools } from '../../../global/src/tools/api.tools';
import { limitsData } from '../../../global/src/tables/interfaces';
import {
  TopRatedResult,
} from '../../../global/src/tables/results/top-rated.interfaces';
import {
  TrendingResult,
} from '../../../global/src/tables/results/trends.interfaces';
import {
  TopsInTrendsMovie,
  TopsInTrendsData,
  TopsInTrendsContextType,
} from './interfaces/tops-trends.interface';

const TopsInTrendsContext = createContext<TopsInTrendsContextType | undefined>(undefined);

export const TopsInTrendsProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<TopsInTrendsData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTopsInTrends = async (mode: number = 2, limitItems: number = 250) => {
    setLoading(true);
    setError(null);

    try {
      const topApi = new TopRatedMoviesAPI('en-US');
      const trendingApi = new TrendingMoviesAPI(mode === 1 ? 'day' : 'week', 'en-US');

      const topLimits: limitsData = {
        setLimitItems: true,
        limitItems: limitItems,
        dev: true,
      };

      const trendingLimits: limitsData = {
        setLimitPages: true,
        limitPages: 20,
        dev: true,
      };

      const topRated = await topApi.getTopRatedMovies(topLimits) as TopRatedResult[];
      const trending = await trendingApi.getTrendingMovies(mode, trendingLimits) as TrendingResult[];

      const trendingIds = new Set(trending.map(m => m.id));

      const result: TopsInTrendsMovie[] = topRated.map((movie) => {
        const isTrending = trendingIds.has(movie.id);

        const trendingData = isTrending
          ? trending.find(t => t.id === movie.id)
          : undefined;

        return {
          id: movie.id,
          title: movie.title,
          voteAverage: movie.vote_average,
          trends: isTrending,
          topPage: movie.page ?? null,
          topRank: movie.rank ?? null,
          topPageRank: movie.rankPage ?? null,
          trendPage: trendingData?.page ?? null,
          trendRank: trendingData?.rank ?? null,
          trendPageRank: trendingData?.rankPage ?? null,
        };
      });

      const totalTrending = result.filter(m => m.trends).length;

      setData({
        total: totalTrending,
        time: mode === 1 ? 'day' : 'week',
        TopsInTrends: result,
      });
    } catch (err: any) {
      console.error('Erro ao buscar dados TopsInTrends:', err);
      setError(err.message || 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <TopsInTrendsContext.Provider value={{ data, loading, error, fetchTopsInTrends }}>
      {children}
    </TopsInTrendsContext.Provider>
  );
};

export const useTopsInTrends = (): TopsInTrendsContextType => {
  const context = useContext(TopsInTrendsContext);
  if (!context) {
    throw new Error('useTopsInTrends precisa estar dentro de TopsInTrendsProvider');
  }
  return context;
};
