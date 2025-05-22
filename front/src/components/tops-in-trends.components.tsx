'use client';
import React, { useEffect } from 'react';
import { useTopsInTrends } from '../contexts/top-in-trends.context';

const TopsInTrendsList = () => {
  const { data, loading, error, fetchTopsInTrends } = useTopsInTrends();

  useEffect(() => {
    fetchTopsInTrends(2, 250);
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!data) return <p>Nenhum dado encontrado.</p>;

  const filtered = data.TopsInTrends
    .filter(movie => movie.trends)
    .sort((a, b) => {
      if (a.topRank === null) return 1;
      if (b.topRank === null) return -1;
      return a.topRank - b.topRank;
    });

  return (
    <div>
      <h2>Filmes que estão no Top e no Trending ({data.total})</h2>
      <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Posição no Top</th>
            <th>Posição no Trend</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(movie => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.topRank ?? '-'}</td>
              <td>{movie.trendRank ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopsInTrendsList;
