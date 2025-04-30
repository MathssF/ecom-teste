'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TopRatedMoviesAPI } from '../../../global/fetchTMDB/top-rated';
import { limitsData } from '../../../global/tables/interfaces';