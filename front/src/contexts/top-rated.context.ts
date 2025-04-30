'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { limitsData } from '../../../global/tables/interfaces';
import {
  MovieData,
  TopRatedContextType,
  TopRatedPageContextType,
} from './interfaces/top-rated.interfaces';

const TopRatedContext = createContext<TopRatedContextType | undefined>(undefined);
const TopRatedPageContext = createContext<TopRatedPageContextType | undefined>(undefined);

export const TopRatedProvider = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTopRated = async (data?: limitsData) =>  {
    setLoading(true);
    setError(null);

    try {
      const api = new TopRatedMoviesAPI();
      const topList = await api.getTopRatedMovies(data);
      setMovies(topList)
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar os Top Rateds');
      setMovies(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TopRatedContext.Provider value={{ movies, loading, error, fetchMovie }}>
      {children}
    </TopRatedContext>
  )
}

export const useRated = () => {
  const context = useContext(TopRatedContext);
  if (context === undefined) {
    throw new Error('');
  }
  return context;
};

export const TopRatedPagesProvider = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTopRatedPage = async (page: number, data?: limitsData) =>  {
    setLoading(true);
    setError(null);

    try {
      const api = new TopRatedMoviesAPI();
      const topList = await api.getTopsByPage(page, data);
      setMovies(topList)
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar os Top Rateds');
      setMovies(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TopRatedPageContext.Provider value={{ movies, loading, error, fetchMovie }}>
      {children}
    </TopRatedPageContext>
  )
}

export const useRatedPages = () => {
  const context = useContext(TopRatedContext);
  if (context === undefined) {
    throw new Error('');
  }
  return context;
};