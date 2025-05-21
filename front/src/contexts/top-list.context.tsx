'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { ApiTools } from '../../../global/tools/api.tools';
import { limitsData } from '../../../global/tables/interfaces';
import {
  TopRatedResult, TopRatedList, TopByYearMovie, TopRatedContextType, TopsByYearContextType
} from './interfaces/top-rated.interfaces';
import { extractMoviesList } from '../utils/extract.movies';

const TopRatedContext = createContext<TopRatedContextType | undefined>(undefined);
// const TopsByYearContext = createContext<TopsByYearContextType | undefined>(undefined);

export const TopsProvider = ({ children }: { children: ReactNode }) => {
  const [movieList, setMovieList] = useState<any[]>([]);
  const [movieByYear, setMovieByYear] = useState<any[]>([]);
  const [dataResult, setDataResult] = useState<any[] | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [typeResult, setTypeResult] = useState<number>(0);
  const [selectYear, setSelectYear] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [] = useState();


  const fetchGenres = async (limitItems: number = 250) => {
    setLoading(true);
    setError(null);

    try {
      const topRatedApi = new TopRatedMoviesAPI();
      const apiTools = new ApiTools();

      const tops = await topRatedApi.getTopRatedMovies({
        setLimitItems: true,
        limitItems,
        frontEndPage: false,
        resultModeByPage: true,
      });
      setDataResult(tops);
      setMovieList(extractMoviesList(tops));
      if (selectYear) {
        setMovieByYear(apiTools.filterByYear(extractMoviesList(tops), selectYear.toString()));
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar filmes por gênero');
      setDataResult(null);
    } finally {
      setLoading(false);
    }
      
  }
}

// export const TopsByYearProvider = ({ children }: { children: ReactNode }) => {}