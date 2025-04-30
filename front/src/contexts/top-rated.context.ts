'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top-rated';
import { limitsData } from '../../../global/tables/interfaces';
import {
  MovieData,
  TopRatedList,
  TopRatedResult,
  TopRatedContextType,
  TopRatedPageContextType,
} from './interfaces/top-rated.interfaces';

const TopRatedContext = createContext<TopRatedContextType | undefined>(undefined);
const TopRatedPageContext = createContext<TopRatedPageContextType | undefined>(undefined);

export const TopRatedProvider = () => {
  // const [movieItem, setMovieItem] useState<MovieData | null>(null);
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTopRated = async (data?: limitsData) =>  {}
}