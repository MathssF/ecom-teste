'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { TopRatedMoviesAPI } from '../../../dist/global/src/fetchTMDB/top.rated';
import { ApiTools } from '../../../dist/global/src/tools/api.tools';
import { limitsData } from '../../../dist/global/src/tables/interfaces';
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
      const topRatedApi = new TopRatedMoviesAPI();
      const apiTools = new ApiTools();

      const tops = await topRatedApi.getTopRatedMovies({
        // setLimitItems: true,
        // limitItems: data.limitItems ? data.limitItems : 250,
        frontEndPage: false,
        resultModeByPage: true,
      });
      setDataResult(tops);
      const moviesExtracted = extractMoviesList(tops);
      setMovieList(moviesExtracted);

      if (selectYear) {
        const filtered = apiTools.filterByYear(moviesExtracted, selectYear.toString());
        setMovieByYear(filtered);
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar filmes por gênero');
      setDataResult(null);
    } finally {
      setLoading(false);
    }
  }
    
  return (
    <TopRatedContext.Provider value={{
      movies: movieList, moviesByYear: movieByYear,
      dataResult,
      loading, error, year: selectYear, setYear: setSelectYear,
      typeResult, setTypeResult,
      fetchTopRated,
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