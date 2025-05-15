'use client';
import { useEffect } from 'react';
import { useRatedPages } from '../../contexts/old/top-rated.context';
import { limitsData } from '../../../../global/tables/interfaces';

export default function TopRatedByPage() {
  const { pageData, currentPage, loading, error, fetchTopRatedPage } = useRatedPages();

  useEffect(() => {
    const filtros: limitsData = {
      setLang: true,
      chooseLang: 'pt-BR',
      dev: true
    };

    fetchTopRatedPage(1, filtros);
  }, []);

  if (loading) return <p>Carregando página de filmes...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!pageData) return <p>Nenhum dado disponível</p>;

  return (
    <div>
      <h2>Página {pageData.page} de {pageData.total_pages}</h2>
      <ul>
        {pageData.results.map((movie) => (
          <li key={movie.id}>
            🎥 {movie.title} — Nota: {movie.vote_average}
          </li>
        ))}
      </ul>
    </div>
  );
}
