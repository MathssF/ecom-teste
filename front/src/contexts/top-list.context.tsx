'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top.rated';
import { ApiTools } from '../../../global/tools/api.tools';
import { limitsData } from '../../../global/tables/interfaces';
import {
  TopRatedResult, TopRatedList, TopByYearMovie, TopRatedContextType, TopsByYearContextType
} from './interfaces/top-rated.interfaces';

const TopRatedContext = createContext<TopRatedContextType | undefined>(undefined);
const TopsByYearContext = createContext<TopsByYearContextType | undefined>(undefined);

export const TopsProvider = () => {}

export const TopsByYearProvider = () => {}