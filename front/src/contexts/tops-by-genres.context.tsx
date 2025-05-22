'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Genres as GenresList } from '../utils/tables/seed.tables';
import { ApiTools } from '../utils/tools/api.tools';
import { GenreAnalysis, GenreContextType } from './interfaces/genres.interface'
import { TopRatedMoviesAPI } from '../utils/fetchTMDB/top.rated';

export const GenreContext = createContext<GenreContextType | undefined>(undefined);

export const GenreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [genres, setGenres] = useState<GenreAnalysis[] | null>(null);
  const [genreSelected, setGenreSelected] = useState<GenreAnalysis | null>(null);
  const [infoMode, setInfoMode] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiTools = new ApiTools();

  const fetchGenres = async (limitItems?: number) => {
    setLoading(true);
    setError(null);

    try {
      console.log('Entrou no try do genres');
      const topRatedApi = new TopRatedMoviesAPI();
      
      const data = await topRatedApi.getTopRatedMovies({
        frontEndPage: false, // se for o padrão no seu projeto
      });
      console.log('Data: ', data);
      
      const movies = extractMoviesList(data);
      
      const moviesLimited = limitItems ? movies.slice(0, limitItems) : movies;
      
      const genresResult = apiTools.filterByGenres(moviesLimited, null);

      setGenres(genresResult);
      setGenreSelected(null);
    } catch (err: any) {
      console.log('Entrou no catch error do genres');
      setError(err.message || 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const selectGenre = (genreId: number) => {
    if (!genres) return;
    const selected = genres.find(g => g.id === genreId) || null;
    setGenreSelected(selected);
  };

  return (
    <GenreContext.Provider value={{
      genres,
      genreSelected,
      infoMode,
      loading,
      error,
      fetchGenres,
      setInfoMode,
      setGenreSelected,
    }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenre = () => {
  const context = useContext(GenreContext);
  if (!context) {
    throw new Error('useGenre deve ser usado dentro de GenreProvider');
  }
  return context;
};

function extractMoviesList(data: any): any[] {
  if (Array.isArray(data)) {
    return data;
  } else if (data && Array.isArray(data.movies)) {
    return data.movies;
  } else if (data && Array.isArray(data.results)) {
    return data.results;
  } else {
    throw new Error('Formato inesperado: não foi possível extrair os filmes');
  }
}
