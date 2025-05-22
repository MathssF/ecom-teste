'use client';

import React from 'react';
import { GenreProvider } from '../contexts/tops-by-genres.context';
import GenreDashboard from '../components/tops-genres.componente';

const TopsGenrePage: React.FC = () => {
  return (
    <GenreProvider>
      <main style={{ padding: '1rem' }}>
        <h1>Top Genres Dashboard</h1>
        <GenreDashboard />
      </main>
    </GenreProvider>
  );
};

export default TopsGenrePage;
