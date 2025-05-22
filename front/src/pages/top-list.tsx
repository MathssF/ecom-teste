'use client';
import React from 'react';
import { TopsProvider } from '../contexts/top-list.context';
import { TopsRated } from '../components/tops-rated.component';

const TopRatedPage = () => {
  return (
    <TopsProvider>
      <main>
        <h1>Top Rated Movies</h1>
        <TopsRated />
      </main>
    </TopsProvider>
  );
};

export default TopRatedPage;
