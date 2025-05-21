'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { ApiTools } from '../../../global/tools/api.tools';
import { limitsData } from '../../../global/tables/interfaces';
import {
  TopRatedResult, TopRatedList, TopRatedListWithPages
} from '../../../global/tables/results/top-rated.interfaces';
import {
  // TopRatedResult, TopRatedList, TopByYearMovie,
  TopRatedContextType, TopsByYearContextType
} from './interfaces/top-rated.interfaces';
import { extractMoviesList } from '../utils/extract.movies';

const TopRatedContext = createContext<TopRatedContextType | undefined>(undefined);

export const TopsProvider = ({ children }: { children: ReactNode }) => {
  const [movieList, setMovieList] = useState<any[]>([]);
  const [movieByYear, setMovieByYear] = useState<any[]>([]);
  const [dataResult, setDataResult] = useState<any[] | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [typeResult, setTypeResult] = useState<number>(0);
  const [selectYear, setSelectYear] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [] = useState();


  const fetchTopRated = async (data?: limitsData) => {
    setLoading(true);
    setError(null);

    try {
      const topRatedApi = new TopRatedMoviesAPI();
      const apiTools = new ApiTools();

      const tops = await topRatedApi.getTopRatedMovies({
        setLimitItems: true,
        limitItems: data.limitItems ? data.limitItems : 250,
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
    
    return (
      <TopRatedContext.Provider value={{
        movies: movieList, loading, error, year: selectYear,
        fetchTopRated,
      }}>
        {children}
      </TopRatedContext.Provider>
    )
  }
}
