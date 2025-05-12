'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trendings';
import { limitsData } from '../../../global/tables/interfaces';
import {
  // TrendingList,
  TrendingResult,
  TrendsContextType,
  TrendsPageContextType,
} from './interfaces/trends.interfaces';
// import { MovieData } from './interfaces/top-rated.interfaces';

const TrendsContext = createContext<TrendsContextType | undefined>(undefined);
const TrendsPageContext = createContext<TrendsPageContextType | undefined>(undefined);

export const TrendsProvider = ({children}: { children: ReactNode }) => {
  const [modeCall, setModeCall] = useState<number>(1);
  const [movies, setMovies] = useState<TrendingResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrending = async (mode: number, data?: limitsData) => {
    if (mode !== 1 && mode !== 2) {
      throw new Error ('O mode tem que ser 1 ou 2');
    }
    setLoading(true);
    setError(null);
    setModeCall(mode);

    try {
      const api = new TrendingMoviesAPI();
      const trendsList = await api.getTrendingMovies(mode, data);
      setMovies(trendsList);
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar os Trendings');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TrendsContext.Provider value={{ modeCall, movies, loading, error, fetchTrending }}>
      {children}
    </TrendsContext.Provider>
  )
}

export const useTrends = () => {
  const context = useContext(TrendsContext);
  if (context === undefined) {
    throw new Error('');
  }
  return context;
};

export const TrendsPageProvider = ({children}: { children: ReactNode }) => {
  const [modeCall, setModeCall] = useState<number>(1);
  const [movies, setMovies] = useState<TrendingResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrending = async (mode: number, data?: limitsData) => {
    if (mode !== 1 && mode !== 2) {
      throw new Error ('O mode tem que ser 1 ou 2');
    }
    setLoading(true);
    setError(null);
    setModeCall(mode);

    try {
      const api = new TrendingMoviesAPI();
      const trendsList = await api.getTrendingMovies(mode, data);
      setMovies(trendsList);
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar os Trendings');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TrendsPageContext.Provider value={{
      modeCall,
      movies,
      loading,
      error,
      fetchTrendingPage(mode, page, data) {},
    }}>
      {children}
    </TrendsPageContext.Provider>
  )
}

export const useTrendPages = () => {
  const context = useContext(TrendsPageContext);
  if (context === undefined) {
    throw new Error('');
  }
  return context;
};