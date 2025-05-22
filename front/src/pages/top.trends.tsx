'use client';

import React from 'react';
import { TopsInTrendsProvider } from '../contexts/top-in-trends.context';
import TopsInTrendsList from '../components/tops-in-trends.components';

const TopTrendsPage: React.FC = () => {
  return (
    <TopsInTrendsProvider>
      <main style={{ padding: '1rem' }}>
        <h1>Top & Trending Movies</h1>
        <TopsInTrendsList />
      </main>
    </TopsInTrendsProvider>
  );
};

export default TopTrendsPage;
