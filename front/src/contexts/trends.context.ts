'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TrendingMoviesAPI } from '../../../global/fetchTMDB/trends';
import { limitsData } from '../../../global/tables/interfaces';