'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { TopRatedMoviesAPI } from '../utils/fetchTMDB/top.rated';
import { ApiTools } from '../utils/tools/api.tools';
import { limitsData } from '../utils/tables/interfaces';
import {
  TopRatedResult, TopRatedList, TopRatedListWithPages
} from '../../../global/src/tables/results/top-rated.interfaces';
import {
  TopRatedContextType
} from './interfaces/top-rated.interfaces';
import { extractMoviesList } from '../utils/extract.movies';

export const TopRatedContext = createContext<TopRatedContextType | undefined>(undefined);

export const TopsProvider = ({ children }: { children: ReactNode }) => {
  const [movieList, setMovieList] = useState<any[]>([]);
  const [movieByYear, setMovieByYear] = useState<any[]>([]);
  const [dataResult, setDataResult] = useState<any[] | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [typeResult, setTypeResult] = useState<number>(0);
  const [selectYear, setSelectYear] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);


  const fetchTopRated = async (data?: limitsData) => {
    setLoading(true);
    setError(null);

    try {
      console.log('Entrou no try do contexto');
      const topRatedApi = new TopRatedMoviesAPI();
      const apiTools = new ApiTools();

      const tops = await topRatedApi.getTopRatedMovies({
        frontEndPage: false,
      });
      console.log('Teve a resposta do top list: ', tops);
      setDataResult(tops);
      const moviesExtracted = extractMoviesList(tops);
      setMovieList(moviesExtracted);

      if (selectYear) {
        const filtered = apiTools.filterByYear(moviesExtracted, selectYear.toString()) || [];
        setMovieByYear(filtered);
      } else {
        setMovieByYear([]);
      }
    } catch (err: any) {
      console.log('erro no top list context');
      setError(err.message || 'Erro ao buscar filmes por gênero');
      setDataResult(null);
    } finally {
      setLoading(false);
    }
  }

  const filterAndOrderByYear = (year: number) => {
    if (!movieList.length) return;
  
    const filtered = movieList.filter((movie) => {
      const releaseDate = movie.release_date || movie.first_air_date;
      return releaseDate?.startsWith(year.toString());
    });
  
    const ordered = filtered.sort((a, b) => {
      const dateA = new Date(a.release_date || a.first_air_date).getTime();
      const dateB = new Date(b.release_date || b.first_air_date).getTime();
      return dateA - dateB; // Ordena do mais antigo para o mais recente
    });
  
    setMovieByYear(ordered);
  };
    
  return (
    <TopRatedContext.Provider value={{
      movies: movieList, moviesByYear: movieByYear,
      dataResult,
      loading, error, year: selectYear, setYear: setSelectYear,
      typeResult, setTypeResult,
      fetchTopRated, filterAndOrderByYear,
    }}>
      {children}
    </TopRatedContext.Provider>
  )
  
}

export const useTopRated = () => {
  const context = useContext(TopRatedContext);
  if (!context) {
    throw new Error('useTopRated must be used within a TopRatedProvider');
  }
  return context;
};