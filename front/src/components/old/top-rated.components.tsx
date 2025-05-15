'use client';
import { useEffect } from 'react';
import { useRated } from '../../contexts/old/top-rated.context';
import { limitsData } from '../../../../global/tables/interfaces';

export default function TopRatedList() {
  const { movies, loading, error, fetchTopRated } = useRated();

  useEffect(() => {
    const filtros: limitsData = {
      setLang: true,
      chooseLang: 'pt-BR',
      setLimitItems: true,
      limitItems: 40,
      dev: true
    };

    fetchTopRated(filtros);
  }, []);

  if (loading) return <p>Carregando filmes...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h2>Filmes mais bem avaliados</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            🎬 {movie.title} — Nota: {movie.vote_average}
          </li>
        ))}
      </ul>
    </div>
  );
}
