'use client';
import { useEffect } from 'react';
import { useGenres } from '../../contexts/X-genres.contexts';

export default function GenresPage() {
  const { genres, loading, error, fetchGenres } = useGenres();

  useEffect(() => {
    fetchGenres(); // Padrão: 250 filmes
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      {genres?.map(genre => (
        <div key={genre.id}>
          <h3>{genre.name}</h3>
          <p>Média: {genre.moviesRattingAverage.toFixed(2)}</p>
          <p>Ponderada: {genre.moviesWeightedAvarege.toFixed(2)}</p>
          <p>Filmes: {genre.movies.length}</p>
        </div>
      ))}
    </div>
  );
}