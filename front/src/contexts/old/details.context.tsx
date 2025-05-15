'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MovieDetailsAPI } from '../../../../global/fetchTMDB/details';
import { limitsData } from '../../../../global/tables/interfaces';
import { MovieDetails, DetailsContextType } from '../interfaces/details.interfaces';

const DetailsContext = createContext<DetailsContextType | undefined>(undefined);

export const DetailsProvider = ({ children }: { children: ReactNode }) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovie = async (id: number, data?: limitsData) => {
    setLoading(true);
    setError(null);

    try {
      const api = new MovieDetailsAPI();
      const movieData = await api.getMovieDetails(id, data);
      setMovie(movieData);
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar detalhes do filme');
      setMovie(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DetailsContext.Provider value={{ movie, loading, error, fetchMovie }}>
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetails = () => {
  const context = useContext(DetailsContext);
  if (context === undefined) {
    throw new Error('useDetails deve ser usado dentro de um DetailsProvider');
  }
  return context;
};